from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path="/usr/bin/chromium", args=["--no-sandbox"])
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    page.goto("http://127.0.0.1:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(300)
    print("initial", page.evaluate("document.activeElement.tagName + '|' + (document.activeElement.textContent || '').trim().slice(0,80)"))
    for index in range(1, 7):
        page.keyboard.press("Tab")
        value = page.evaluate("document.activeElement.tagName + '|' + (document.activeElement.getAttribute('class') || '') + '|' + (document.activeElement.textContent || '').trim().slice(0,80) + '|' + (document.activeElement.getAttribute('href') || '')")
        print(index, value)
    browser.close()
