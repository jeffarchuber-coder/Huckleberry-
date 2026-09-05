/**
 * Fort Myers Field Guide: an asymmetric, evidence-led landing page with warm
 * editorial photography, senior-friendly type, and no hype or fake urgency.
 */
import { ArrowRight, Check, ExternalLink, ShieldCheck } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { SignupForm } from "@/components/SignupForm";

const HERO_640 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/epozuWjcAYSjgkWq.webp";
const HERO_960 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/UDjBGNiKiQuKJPwO.webp";
const HERO_1440 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/XjEyXmzpuIBJhEcy.webp";
const DETAIL_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/NTtzGvxxwEPrBqmb.jpg";

const rooms = [
  ["Entryway", "Threshold height, loose mats, porch lighting, and where the spare key really is."],
  ["Bathroom", "Grab bars anchored into studs, tub transfer, toilet height, and the towel bar being used as a handrail."],
  ["Stairs & hallways", "Handrails on both sides, step edges, walker clearance, and night lighting to the bathroom."],
  ["Bedroom", "Bed height, a reachable lamp, a clear door path, and a phone within arm’s reach."],
  ["Kitchen", "Everyday dishes moved lower, unsafe step stools removed, visible stove knobs, and dated alarm batteries."],
];

export default function Home() {
  return (
    <SiteShell>
      <PageMeta title="My Huckleberry Life | Home Safety, Plainly" description="Practical home-safety checklists, medical-alert research briefs, and clear buyer’s guides for older adults and their families." path="/" />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Free download · No cost</p>
              <h1 id="hero-title">Your parent says they’re fine. The floor says otherwise.</h1>
              <p className="lede">
                Get <strong>The Room-by-Room Home Safety Checklist</strong> — 27 things to
                check in your parent’s house this weekend. Written plain, room by room, so
                you know what to fix first and what can wait.
              </p>
              <SignupForm placement="top" />
              <a className="text-link" href="/checklist">
                Prefer not to give an email? Read it online <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <figure className="hero-figure">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${HERO_640} 640w, ${HERO_960} 960w, ${HERO_1440} 1440w`}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <img
                  src={HERO_960}
                  width="960"
                  height="540"
                  alt="An older woman and her adult son calmly checking the clear walking path in a warm Florida living room."
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <figcaption>
                <ShieldCheck aria-hidden="true" /> Practical checks. Clear sources. No scare
                tactics.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="stats-section" aria-labelledby="why-now">
          <div className="shell">
            <div className="section-kicker">
              <span>01</span>
              <h2 id="why-now">Why this weekend matters</h2>
            </div>
            <ul className="stats-grid">
              <li>
                <strong>1 in 4</strong>
                <span>adults 65+ fall every year — more than 14 million people.</span>
                <a href="https://www.cdc.gov/falls/data-research/index.html" target="_blank" rel="noopener noreferrer">
                  CDC source <ExternalLink aria-hidden="true" />
                </a>
              </li>
              <li>
                <strong>Fewer than half</strong>
                <span>of older adults who fall tell their doctor.</span>
                <a href="https://www.cdc.gov/falls/data-research/facts-stats/index.html" target="_blank" rel="noopener noreferrer">
                  CDC source <ExternalLink aria-hidden="true" />
                </a>
              </li>
              <li>
                <strong>75%</strong>
                <span>of adults over 50 want to stay in their own home as they age.</span>
                <a href="https://filecache.mediaroom.com/mr5mr_aarp/181189/AARP_AgingInPlaceResourcesGuide.pdf" target="_blank" rel="noopener noreferrer">
                  AARP source <ExternalLink aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="checklist-section" id="what-is-inside" aria-labelledby="checklist-title">
          <div className="shell checklist-grid">
            <div className="checklist-copy">
              <div className="section-kicker light">
                <span>02</span>
                <h2 id="checklist-title">What’s in the checklist</h2>
              </div>
              <p className="lede compact">
                Five rooms. 27 checks. Most take a screwdriver, twenty dollars, or nothing at all.
              </p>
              <ol className="room-list">
                {rooms.map(([title, text]) => (
                  <li key={title}>
                    <Check aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a className="button button-light" href="/checklist">
                Read all 27 checks <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <figure className="detail-figure">
              <img
                src={DETAIL_URL}
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                alt="A correctly installed bathroom grab bar being tested in a warm, well-lit home."
              />
              <figcaption>The fixes are usually small. Finding them is the hard part.</figcaption>
            </figure>
          </div>
        </section>

        <section className="founder-section" aria-labelledby="who-we-are">
          <div className="shell founder-grid">
            <div className="section-kicker">
              <span>03</span>
              <h2 id="who-we-are">Who we are</h2>
            </div>
            <div className="founder-copy">
              <p>
                My Huckleberry Life is a small family-run team based in Fort Myers, Florida —
                The 239. We came out of restaurants and more than 20 years of outside sales,
                sitting at kitchen tables in other people’s houses. A lot of our neighbors are
                in their seventies and eighties and want to stay right where they are. So do our
                own parents.
              </p>
              <p>
                We started this because we got tired of watching families buy the wrong thing
                out of worry. We test what we can, read the fine print, and show you where the
                numbers come from.
              </p>
              <blockquote>
                Nobody pays us to tell you what to buy. When we think something isn’t worth your
                money, we say so.
              </blockquote>
              <p className="signature">— Jeff and the team at My Huckleberry Life</p>
            </div>
          </div>
        </section>

        <aside className="promise-strip" aria-label="Our promises">
          <div className="shell promise-inner">
            <p><strong>No spam.</strong> One useful email a week. Unsubscribe anytime.</p>
            <p>Some links earn a commission at no extra cost to you. It never changes what we recommend.</p>
          </div>
        </aside>

        <section className="closing-section" aria-labelledby="walk-house">
          <div className="shell closing-grid">
            <div>
              <p className="eyebrow">A useful hour this weekend</p>
              <h2 id="walk-house">Walk the house before worry makes the decisions.</h2>
              <p className="lede compact">
                Print the checklist, put it in your pocket, and go room to room. Start with what
                can cause a fall tonight.
              </p>
            </div>
            <SignupForm placement="bottom" />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
