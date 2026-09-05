from pathlib import Path
import json
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:3000"
ROOT = Path(__file__).resolve().parents[1]
RESULTS = ROOT / "regression-results.json"

review_routes = [
    "/reviews/medical-alerts/medical-guardian-mg-mini-lite",
    "/reviews/medical-alerts/bay-alarm-medical-sos-home",
    "/reviews/medical-alerts/mobilehelp-micro",
    "/reviews/medical-alerts/aloe-care-health-essentials",
    "/reviews/medical-alerts/lively-mobile2",
    "/reviews/medical-alerts/kanega-watch",
]
guide_routes = [
    "/guides/medical-alerts-home-or-away",
    "/guides/bathroom-fall-prevention-basics",
    "/guides/transfer-aid-shopping-checklist",
    "/guides/home-safety-tech-without-the-hype",
]
routes = [
    "/", "/reviews", "/reviews/medical-alerts", "/reviews/fall-prevention", *review_routes,
    "/guides", *guide_routes, "/how-we-review", "/about", "/checklist", "/privacy-policy",
    "/contact", "/affiliate-disclosure", "/404",
]
viewports = {
    "desktop": {"width": 1280, "height": 800},
    "mobile": {"width": 390, "height": 844},
}

checks = []

def record(name, passed, detail=""):
    checks.append({"name": name, "passed": bool(passed), "detail": str(detail)})

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        executable_path="/usr/bin/chromium",
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    for label, viewport in viewports.items():
        context = browser.new_context(viewport=viewport)
        page = context.new_page()
        console_errors = []
        page_errors = []
        request_failures = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: page_errors.append(str(exc)))
        page.on("requestfailed", lambda req: request_failures.append(req.url))

        for route in routes:
            response = page.goto(BASE + route, wait_until="domcontentloaded", timeout=30000)
            page.wait_for_timeout(600)
            record(f"{label} {route} document response", response is not None and response.status == 200, response.status if response else "no response")
            record(f"{label} {route} has one main", page.locator("main").count() == 1, page.locator("main").count())
            record(f"{label} {route} has h1", page.locator("h1").count() == 1, page.locator("h1").all_text_contents())
            overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            record(f"{label} {route} no horizontal overflow", overflow <= 1, overflow)
            broken = page.locator("img").evaluate_all("imgs => imgs.filter(img => img.complete && img.naturalWidth === 0).map(img => img.src)")
            record(f"{label} {route} no broken images", len(broken) == 0, broken)
            body_text = page.locator("body").inner_text()
            record(f"{label} {route} no generation failure placeholder", "Image generation failed" not in body_text, "placeholder visible" if "Image generation failed" in body_text else "")
            schema = page.locator('script#page-schema[type="application/ld+json"]')
            record(f"{label} {route} route schema present", schema.count() == 1, schema.count())

            if route in review_routes:
                stamp = page.locator(".research-stamp")
                stamp_text = stamp.inner_text() if stamp.count() == 1 else ""
                record(f"{label} {route} identified as research-based", stamp.count() == 1 and "not independently lab-tested" in stamp_text.lower(), stamp_text)
                official = page.locator('a[href^="https://"]').first
                record(f"{label} {route} has outbound official source", official.count() == 1 and official.get_attribute("target") == "_blank", official.get_attribute("href") if official.count() else "missing")

            if route in guide_routes:
                record(f"{label} {route} has numbered guide steps", page.locator(".guide-section").count() >= 4, page.locator(".guide-section").count())

        record(f"{label} no page errors", len(page_errors) == 0, page_errors)
        application_request_failures = [url for url in request_failures if "va.vercel-scripts.com" not in url]
        record(f"{label} no request failures", len(application_request_failures) == 0, application_request_failures)
        analytics_noise = [e for e in console_errors if "vercel" not in e.lower() and "analytics" not in e.lower()]
        record(f"{label} no application console errors", len(analytics_noise) == 0, analytics_noise)
        context.close()

    context = browser.new_context(viewport=viewports["desktop"])
    page = context.new_page()
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.wait_for_timeout(350)
    page.keyboard.press("Tab")
    active_text = page.evaluate("document.activeElement ? document.activeElement.textContent.trim() : ''")
    record("skip link is first keyboard target", active_text == "Skip to main content", active_text)
    page.keyboard.press("Enter")
    record("skip link reaches main content", page.evaluate("location.hash") == "#main-content", page.evaluate("location.hash"))

    footer_hrefs = page.locator("footer a").evaluate_all("links => links.map(link => link.getAttribute('href'))")
    record("footer contains no placeholder links", all(href and href != "#" for href in footer_hrefs), footer_hrefs)
    record("footer includes review and editorial paths", {"/reviews", "/guides", "/how-we-review", "/about"}.issubset(set(footer_hrefs)), footer_hrefs)

    mobile = browser.new_context(viewport=viewports["mobile"])
    mobile_page = mobile.new_page()
    mobile_page.goto(BASE + "/reviews", wait_until="domcontentloaded")
    mobile_page.wait_for_timeout(500)
    mobile_nav = mobile_page.locator("details.mobile-nav")
    record("mobile browse navigation is visible", mobile_nav.is_visible(), mobile_nav.count())
    mobile_nav.locator("summary").click()
    record("mobile browse navigation exposes review and guide links", mobile_nav.locator('a[href="/reviews"]').count() == 1 and mobile_nav.locator('a[href="/guides"]').count() == 1, mobile_nav.inner_text())
    mobile.close()

    email = page.locator('input[type="email"]').first
    email.fill("invalid-email")
    page.locator('form button[type="submit"]').first.click()
    page.wait_for_timeout(150)
    record("invalid email exposes accessible error", email.get_attribute("aria-invalid") == "true", email.get_attribute("aria-invalid"))
    describedby = email.get_attribute("aria-describedby") or ""
    record("email error is associated to field", "error" in describedby and page.locator(".form-error").first.is_visible(), describedby)

    page.goto(BASE + "/checklist", wait_until="domcontentloaded")
    first_check = page.locator('.room-section input[type="checkbox"]').first
    first_check.check()
    page.reload(wait_until="domcontentloaded")
    record("checklist progress persists", page.locator('.room-section input[type="checkbox"]').first.is_checked(), "first checkbox after reload")
    page.evaluate("localStorage.removeItem('mhl-checklist')")

    page.goto(BASE + "/", wait_until="domcontentloaded")
    canonical = page.locator('link[rel="canonical"]').get_attribute("href")
    record("canonical metadata present", canonical == "https://myhuckleberrylife.com/", canonical)
    record("Open Graph image present", bool(page.locator('meta[property="og:image"]').get_attribute("content")), page.locator('meta[property="og:image"]').get_attribute("content"))
    schema_text = page.locator('script#page-schema[type="application/ld+json"]').inner_text()
    try:
        json.loads(schema_text)
        schema_valid = True
    except Exception as exc:
        schema_valid = False
        schema_text = str(exc)
    record("structured data is valid JSON", schema_valid, schema_text[:120])

    for path, expected in [("/robots.txt", "Sitemap:"), ("/sitemap.xml", "<urlset"), ("/site.webmanifest", '"name"')]:
        response = context.request.get(BASE + path)
        text = response.text()
        record(f"{path} available", response.status == 200 and expected in text, f"status={response.status}")

    sitemap = context.request.get(BASE + "/sitemap.xml").text()
    expected_sitemap_urls = ["/reviews", "/reviews/medical-alerts", "/reviews/fall-prevention", "/guides", "/how-we-review", "/about", *review_routes, *guide_routes]
    record("sitemap contains every expanded public page", all(url in sitemap for url in expected_sitemap_urls), [url for url in expected_sitemap_urls if url not in sitemap])

    pdf = context.request.get("https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/CAiMgFCNGxjcyygO.pdf")
    record("tagged checklist PDF available", pdf.status == 200 and pdf.body().startswith(b"%PDF"), f"status={pdf.status}, type={pdf.headers.get('content-type')}")
    context.close()

    nojs = browser.new_context(viewport=viewports["desktop"], java_script_enabled=False)
    page = nojs.new_page()
    page.goto(BASE + "/", wait_until="domcontentloaded")
    fallback = page.locator("noscript form")
    record("no-JavaScript signup fallback visible", fallback.is_visible(), fallback.count())
    record("no-JavaScript field uses MailerLite name", fallback.locator('input[type="email"]').get_attribute("name") == "fields[email]", fallback.locator('input[type="email"]').get_attribute("name"))
    record("no-JavaScript direct PDF link visible", page.locator('noscript a[href*="files.manuscdn.com"]').is_visible(), "direct PDF link")
    nojs.close()
    browser.close()

vercel = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
headers = {h["key"]: h["value"] for rule in vercel.get("headers", []) if rule.get("source") == "/(.*)" for h in rule.get("headers", [])}
for name in ["Content-Security-Policy", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy", "X-Frame-Options"]:
    record(f"Vercel config includes {name}", name in headers, headers.get(name, "missing"))
redirects = vercel.get("redirects", [])
record("www host redirects to apex", any(item.get("destination", "").startswith("https://myhuckleberrylife.com") and item.get("permanent") for item in redirects), redirects)
rewrites = {item.get("source") for item in vercel.get("rewrites", [])}
record("all public SPA routes have deep-link rewrites", {"/checklist", "/privacy-policy", "/affiliate-disclosure", "/contact", "/about", "/how-we-review", "/reviews", "/reviews/(.*)", "/guides", "/guides/(.*)"}.issubset(rewrites), sorted(rewrites))
record("static branded 404 exists", (ROOT / "client" / "public" / "404.html").exists(), "client/public/404.html")

summary = {
    "passed": sum(1 for check in checks if check["passed"]),
    "failed": sum(1 for check in checks if not check["passed"]),
    "checks": checks,
}
RESULTS.write_text(json.dumps(summary, indent=2), encoding="utf-8")
print(json.dumps(summary, indent=2))
raise SystemExit(1 if summary["failed"] else 0)
