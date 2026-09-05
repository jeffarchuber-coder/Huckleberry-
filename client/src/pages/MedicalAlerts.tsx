/** Fort Myers Field Guide: medical-alert category guidance leads with the buyer question, not a rank. */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { MEDICAL_ALERT_CONTEXT_SOURCE, reviews } from "@/lib/reviewData";

export default function MedicalAlerts() {
  return (
    <SiteShell>
      <PageMeta title="Medical Alert System Research Guides" description="Compare the questions to ask about in-home, mobile, connected hub, and watch-style medical alert systems." path="/reviews/medical-alerts" />
      <main id="main-content" className="reading-page category-page">
        <div className="reading-shell">
          <p className="eyebrow">Medical-alert systems</p>
          <h1>Start with where help is needed—not a list of “best” devices.</h1>
          <p className="page-deck">A base station, mobile pendant, connected hub, and alert watch solve different problems. The useful comparison starts with the wearer’s normal week.</p>
          <section><h2>Four questions before you compare</h2><ol className="question-list"><li><strong>Home only or out and about?</strong><span>Map the places the person actually spends time, including bathrooms, porch, car, and errands.</span></li><li><strong>Can they keep it charged or worn?</strong><span>A device that stays in a drawer cannot help. Choose the maintenance routine before the feature list.</span></li><li><strong>Who responds?</strong><span>Read the manufacturer’s explanation of monitoring, emergency contacts, local dispatch, and cancellation steps.</span></li><li><strong>What happens during an outage?</strong><span>Ask about backup battery, cellular or Wi-Fi dependencies, and the separate household emergency plan.</span></li></ol></section>
          <section><h2>Six research briefs</h2><p>Each brief lists manufacturer-confirmed details, plain cautions, and links to terms and privacy documents. None is a personal product test or a rank.</p><div className="text-link-list">{reviews.map((review) => <Link key={review.slug} href={`/reviews/medical-alerts/${review.slug}`}><span>{review.product} <em>· {review.brand}</em></span><ArrowRight aria-hidden="true" /></Link>)}</div></section>
          <section><h2>Safety context</h2><p>Medical-alert systems are one part of a broader plan. For fall-prevention materials for older adults, caregivers, and health care providers, see the <a href={MEDICAL_ALERT_CONTEXT_SOURCE} target="_blank" rel="noreferrer">National Council on Aging’s medical-alert resources</a>.</p></section>
        </div>
      </main>
    </SiteShell>
  );
}
