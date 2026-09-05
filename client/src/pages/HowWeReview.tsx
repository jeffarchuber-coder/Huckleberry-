/** Fort Myers Field Guide: editorial standards make the limits of research visible before the click. */
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

const standards = [
  ["01", "We label the work honestly.", "A guide based on product pages, manuals, terms, and policies is labeled research-based. We do not call it hands-on testing unless we have documented our own testing notes."],
  ["02", "We use primary sources for product claims.", "The maker’s current product information, owner materials, warranty or return policy, service terms, and privacy documents come first. We link the source trail on every research brief."],
  ["03", "We show the trade-offs.", "Battery routines, connection needs, installation, return rules, monthly service, privacy, and a product’s stated limits belong near the top. A useful guide explains where a product may not fit."],
  ["04", "We do not publish invented ratings.", "We do not create star scores, manufacture testimonials, summarize anonymous reviews as fact, or repeat a maker’s marketing claim as an independently proven result."],
  ["05", "We correct the record.", "Product details change. When a reader or maker flags a material update, we check the source, revise the guide, and date the change."
  ]
];

export default function HowWeReview() {
  return <SiteShell><PageMeta title="How We Review Home Safety Products" description="The source, disclosure, and correction standards behind My Huckleberry Life’s research-based home-safety guides." path="/how-we-review" /><main id="main-content" className="reading-page standards-page"><div className="reading-shell"><p className="eyebrow">Editorial standard</p><h1>We do not borrow trust. We show our work.</h1><p className="page-deck">A product page can sound certain. A useful guide tells you what the maker says, what needs checking, and where a product may not fit.</p><p className="field-note"><span>Field note 01</span>Current sources, honest limits, and a correction path beat a polished claim.</p><p className="policy-date">Effective September 4, 2026</p><div className="standard-list">{standards.map(([number, heading, body]) => <section key={number}><span>{number}</span><div><h2>{heading}</h2><p>{body}</p></div></section>)}</div><section><h2>Affiliate and sponsored work</h2><p>Some future links may earn My Huckleberry Life a commission. We will say so near the link and in the <a href="/affiliate-disclosure">affiliate disclosure</a>. A commission does not change the research standard, and a lack of an affiliate link does not mean a product is unavailable elsewhere.</p></section><section><h2>Questions or corrections</h2><p>Send a source, correction, or concern through our <a href="/contact">contact page</a>. We prefer a useful correction to a tidy-looking page with a stale fact.</p></section></div></main></SiteShell>;
}
