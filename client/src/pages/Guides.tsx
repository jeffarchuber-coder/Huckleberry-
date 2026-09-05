/** Fort Myers Field Guide: buyer’s guides answer one practical decision at a time. */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";
import { guides } from "@/lib/reviewData";

export default function Guides() {
  return <SiteShell><PageMeta title="Home Safety Buyer’s Guides" description="Practical buyer’s guides for medical alerts, bathroom safety, transfer aids, and simple home-safety technology." path="/guides" /><main id="main-content" className="review-hub"><section className="section-hero review-hero"><div className="shell"><p className="eyebrow">Buyer’s guides</p><h1>Make the decision before the purchase.</h1><p className="lede">Plain guides for sorting out what a home needs, what a person can use, and what has to be checked before a box shows up.</p></div></section><section className="review-index shell"><div className="section-kicker"><span>02</span><h2>Four practical starting points</h2></div><div className="guide-grid">{guides.map((guide, index) => <article key={guide.slug} className="guide-card"><span>{String(index + 1).padStart(2, "0")}</span><p className="card-label">{guide.label}</p><h3>{guide.title}</h3><p>{guide.deck}</p><Link href={`/guides/${guide.slug}`} className="text-link">Read the guide <ArrowRight aria-hidden="true" /></Link></article>)}</div></section></main></SiteShell>;
}
