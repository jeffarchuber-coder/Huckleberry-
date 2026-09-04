/**
 * Fort Myers Field Guide: contact is personal and direct—one real person,
 * one real inbox, and no invented office hours or support promises.
 */
import { Mail, MapPin } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

export default function Contact() {
  return (
    <SiteShell>
      <PageMeta
        title="Contact | My Huckleberry Life"
        description="Contact Jeff and the My Huckleberry Life team in Fort Myers, Florida."
        path="/contact"
      />
      <main id="main-content" className="contact-page">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">A real person reads this</p>
            <h1>Tell us what you’re trying to figure out.</h1>
            <p className="page-deck">
              A home-safety question. A checklist problem. A product you want us to look at.
              Send it plain. Jeff reads the inbox.
            </p>
          </div>
          <section className="contact-card" aria-labelledby="contact-email">
            <Mail aria-hidden="true" />
            <div>
              <p className="card-label" id="contact-email">Email</p>
              <a href="mailto:jeffarchuber@gmail.com?subject=My%20Huckleberry%20Life%20question">jeffarchuber@gmail.com</a>
              <p>We read messages Monday through Friday and reply as soon as we can.</p>
            </div>
            <MapPin aria-hidden="true" />
            <div>
              <p className="card-label">Based in</p>
              <strong>Fort Myers, Florida · The 239</strong>
              <p>My Huckleberry Life LLC serves readers across the United States.</p>
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
