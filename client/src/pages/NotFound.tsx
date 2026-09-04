/**
 * Fort Myers Field Guide: a wrong turn gets a calm, branded recovery path,
 * not a generic platform error or a dead end.
 */
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <PageMeta
        title="Page Not Found | My Huckleberry Life"
        description="That page is not here. Return to the My Huckleberry Life home-safety checklist."
        path="/404"
        noIndex
      />
      <main id="main-content" className="not-found-page">
        <div className="shell not-found-grid">
          <div className="not-found-code" aria-hidden="true">404</div>
          <div>
            <p className="eyebrow">Wrong room</p>
            <h1>That page is not in the house.</h1>
            <p className="page-deck">
              The link may be old, or the address may have a typo. The checklist and every
              current page are one step away.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="button"><ArrowLeft aria-hidden="true" /> Back to home</Link>
              <Link href="/checklist" className="text-link"><ClipboardCheck aria-hidden="true" /> Open the checklist</Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
