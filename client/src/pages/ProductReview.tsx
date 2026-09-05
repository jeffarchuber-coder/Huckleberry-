/** Fort Myers Field Guide: product briefs are source-led, caveat-forward, and never masquerade as testing. */
import { ExternalLink, FileText, ShieldAlert } from "lucide-react";
import { Link, useRoute } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { MEDICAL_ALERT_CONTEXT_SOURCE, reviews } from "@/lib/reviewData";

export default function ProductReview() {
  const [, params] = useRoute("/reviews/medical-alerts/:slug");
  const review = reviews.find((entry) => entry.slug === params?.slug);
  if (!review) return <SiteShell><main id="main-content" className="reading-page"><div className="reading-shell"><p className="eyebrow">Research brief</p><h1>That brief is not on the desk.</h1><p className="page-deck">Return to the review hub to see the current research-based guides.</p><Link href="/reviews" className="button">See review hub</Link></div></main></SiteShell>;

  return (
    <SiteShell>
      <PageMeta title={`${review.product} Research Brief`} description={`A source-led, research-based guide to ${review.product} by ${review.brand}, including limits and questions to ask.`} path={`/reviews/medical-alerts/${review.slug}`} />
      <main id="main-content" className="review-page">
        <header className="review-header"><div className="reading-shell"><Link href="/reviews/medical-alerts" className="back-link">← Medical-alert research</Link><p className="eyebrow">Research-based brief · {review.format}</p><h1>{review.product}</h1><p className="review-brand-heading">{review.brand}</p><p className="page-deck">{review.summary}</p><p className="research-stamp"><FileText aria-hidden="true" />We reviewed current manufacturer materials on {review.reviewedOn}. We have not independently lab-tested this product.</p></div></header>
        <article className="reading-shell review-article">
          <section><h2>The buyer question</h2><p className="buyer-question">{review.buyerQuestion}</p></section>
          <section><h2>What the maker currently lists</h2><ul className="evidence-list">{review.verified.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="caution-section"><ShieldAlert aria-hidden="true" /><div><h2>Where this may not fit</h2><ul>{review.cautions.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
          <section><h2>Before anyone orders</h2><p>Read the official product, support, terms, and privacy materials. Confirm current service terms, coverage, installation or activation needs, and the return process directly with the manufacturer. My Huckleberry Life has not placed an affiliate purchase link on this research page.</p><div className="source-actions"><a className="button" href={review.officialUrl} target="_blank" rel="noreferrer">Official product details <ExternalLink aria-hidden="true" /></a><a className="text-link" href={review.supportUrl} target="_blank" rel="noreferrer">Support or manual <ExternalLink aria-hidden="true" /></a></div></section>
          <section><h2>Sources and terms</h2><ul className="source-list"><li><a href={review.officialUrl} target="_blank" rel="noreferrer">{review.brand} product details</a></li><li><a href={review.supportUrl} target="_blank" rel="noreferrer">{review.brand} support materials</a></li><li><a href={review.termsUrl} target="_blank" rel="noreferrer">Terms, service, or cancellation details</a></li><li><a href={review.privacyUrl} target="_blank" rel="noreferrer">Privacy policy</a></li><li><a href={MEDICAL_ALERT_CONTEXT_SOURCE} target="_blank" rel="noreferrer">National Council on Aging: medical-alert resources</a></li></ul></section>
          <p className="update-note">Last source check: {review.reviewedOn}. Send corrections or product updates through our <Link href="/contact">contact page</Link>.</p>
        </article>
      </main>
    </SiteShell>
  );
}
