/** Fort Myers Field Guide: the review hub keeps research labels and trade-offs visible. */
import { Link } from "wouter";
import { ArrowRight, SearchCheck, ShieldCheck } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { reviews } from "@/lib/reviewData";

export default function Reviews() {
  return (
    <SiteShell>
      <PageMeta title="Medical Alert & Home Safety Reviews" description="Research-based medical alert and home safety guides for older adults and the families who help them." path="/reviews" />
      <main id="main-content" className="review-hub">
        <section className="section-hero review-hero">
          <div className="shell">
            <p className="eyebrow">The review desk</p>
            <h1>Useful facts. Plain limits. No borrowed hype.</h1>
            <p className="lede">We start with current manufacturer materials, setup instructions, terms, and privacy notes. These are <strong>research-based guides</strong>, not personal test scores.</p>
            <div className="status-line"><SearchCheck aria-hidden="true" /><span>6 medical-alert research briefs · updated September 2026</span></div>
          </div>
        </section>

        <section className="review-index shell" aria-labelledby="medical-alert-briefs">
          <div className="section-kicker"><span>01</span><h2 id="medical-alert-briefs">Medical-alert briefs</h2></div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <article key={review.slug} className="review-card">
                <span className="review-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="card-label">{review.format}</p>
                <h3>{review.product}</h3>
                <p className="review-brand">{review.brand}</p>
                <p>{review.summary}</p>
                <Link href={`/reviews/medical-alerts/${review.slug}`} className="text-link">Read the research brief <ArrowRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-promise">
          <div className="shell promise-grid">
            <ShieldCheck aria-hidden="true" />
            <div><p className="eyebrow">Before a product earns a page</p><h2>We name what is known—and what still needs a real-world answer.</h2></div>
            <Link href="/how-we-review" className="button button-light">How we review</Link>
          </div>
        </section>

        <section className="category-callouts shell" aria-label="More review categories">
          <Link href="/reviews/medical-alerts"><span>Medical alerts</span><strong>Compare the questions before comparing the devices.</strong><ArrowRight aria-hidden="true" /></Link>
          <Link href="/reviews/fall-prevention"><span>Fall prevention</span><strong>Start with the room, the movement, and the installation.</strong><ArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
    </SiteShell>
  );
}
