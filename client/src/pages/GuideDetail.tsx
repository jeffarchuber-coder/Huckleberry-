/** Fort Myers Field Guide: guides use a printed check-sheet rhythm and cite the safety context. */
import { Link, useRoute } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { FALL_PREVENTION_SOURCE, guides, MEDICAL_ALERT_CONTEXT_SOURCE } from "@/lib/reviewData";

export default function GuideDetail() {
  const [, params] = useRoute("/guides/:slug");
  const guide = guides.find((entry) => entry.slug === params?.slug);
  if (!guide) return <SiteShell><main id="main-content" className="reading-page"><div className="reading-shell"><p className="eyebrow">Buyer’s guide</p><h1>That guide is not here.</h1><Link href="/guides" className="button">Back to guides</Link></div></main></SiteShell>;
  const source = guide.slug.includes("bathroom") || guide.slug.includes("transfer") ? FALL_PREVENTION_SOURCE : MEDICAL_ALERT_CONTEXT_SOURCE;
  const sourceLabel = guide.slug.includes("bathroom") || guide.slug.includes("transfer") ? "CDC STEADI fall-prevention resources" : "NCOA medical-alert resources";
  return <SiteShell><PageMeta title={guide.title} description={guide.deck} path={`/guides/${guide.slug}`} /><main id="main-content" className="reading-page guide-detail"><div className="reading-shell"><Link href="/guides" className="back-link">← Buyer’s guides</Link><p className="eyebrow">{guide.label}</p><h1>{guide.title}</h1><p className="page-deck">{guide.deck}</p>{guide.sections.map(([heading, body], index) => <section key={heading} className="guide-section"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{heading}</h2><p>{body}</p></div></section>)}<section><h2>Source context</h2><p>Use this guide as a starting point, not a personal assessment. For more evidence-led safety education, see <a href={source} target="_blank" rel="noreferrer">{sourceLabel}</a>.</p></section></div></main></SiteShell>;
}
