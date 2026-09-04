/**
 * Fort Myers Field Guide: the privacy page uses plain English, short sections,
 * and names the actual providers involved in email delivery and measurement.
 */
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <PageMeta
        title="Privacy Policy | My Huckleberry Life"
        description="How My Huckleberry Life collects, uses, protects, and deletes email and website-use information."
        path="/privacy-policy"
      />
      <main id="main-content" className="reading-page">
        <div className="reading-shell">
          <p className="eyebrow">Plain-language policy</p>
          <h1>Privacy policy</h1>
          <p className="page-deck">
            We collect only what we need to send the checklist, answer you, and understand
            whether the site works.
          </p>
          <p className="policy-date">Effective September 4, 2026 · Last updated September 4, 2026</p>

          <section>
            <h2>Who we are</h2>
            <p>
              My Huckleberry Life LLC is a family-run home-safety information and affiliate
              publishing business based in Fort Myers, Florida. This policy covers
              myhuckleberrylife.com and the checklist signup on that site.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>
              If you request the checklist or join the email list, we collect the email address
              you enter, the date and time of the request, confirmation status, and engagement
              information such as opens or link clicks when available. If you email us, we keep
              the information in your message so we can respond.
            </p>
            <p>
              The site also records basic, aggregated use information through Vercel Analytics,
              such as page views, referring site, general country or region, browser, device
              type, and events such as a successful signup or checklist download. We do not use
              this site to collect Social Security numbers, health records, payment-card details,
              or precise location.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <p>
              We use the information to deliver the checklist, send the email you requested,
              answer questions, prevent abuse, measure whether the page works, and improve our
              home-safety content. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2>Service providers</h2>
            <p>
              MailerLite processes checklist signups, subscription confirmations, list status,
              and email delivery. Vercel hosts the production website and provides site analytics.
              These providers process information under their own security and privacy terms.
              We share only what is reasonably needed for the service they provide.
            </p>
          </section>

          <section>
            <h2>Email choice and retention</h2>
            <p>
              Every marketing email includes an unsubscribe link. You can leave the list at any
              time. We keep active subscriber information while you remain subscribed and retain
              a limited suppression record after unsubscribe so we do not accidentally add you
              back. Contact messages are kept only as long as reasonably needed for the request,
              recordkeeping, or legal obligations.
            </p>
          </section>

          <section>
            <h2>Your request</h2>
            <p>
              You can ask what information we hold about you, request a correction or deletion,
              or ask a privacy question by emailing <a href="mailto:jeffarchuber@gmail.com?subject=My%20Huckleberry%20Life%20privacy%20request">jeffarchuber@gmail.com</a>.
              We may need to confirm that the address belongs to you before changing a record.
            </p>
          </section>

          <section>
            <h2>Children and changes</h2>
            <p>
              This site is for adults and is not directed to children under 13. We may revise
              this policy when the site or its providers change. The current effective date will
              always appear near the top of this page.
            </p>
          </section>

          <p className="policy-note">
            This working policy is written for the site’s current setup. Have counsel review it
            before relying on it for a broader advertising, health-data, or ecommerce program.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
