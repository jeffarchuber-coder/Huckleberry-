/**
 * Fort Myers Field Guide: the disclosure states the business model directly,
 * before any recommendation, without softening the commission relationship.
 */
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

export default function AffiliateDisclosure() {
  return (
    <SiteShell>
      <PageMeta
        title="Affiliate Disclosure | My Huckleberry Life"
        description="How affiliate links, sponsored reviews, and editorial independence work at My Huckleberry Life."
        path="/affiliate-disclosure"
      />
      <main id="main-content" className="reading-page">
        <div className="reading-shell">
          <p className="eyebrow">How the business gets paid</p>
          <h1>Affiliate disclosure</h1>
          <p className="page-deck">
            Some links may earn us a commission. You do not pay more because of it.
          </p>
          <p className="policy-date">Effective September 4, 2026 · Last updated September 4, 2026</p>

          <section>
            <h2>The short version</h2>
            <p>
              My Huckleberry Life may earn money when you buy something through a link on this
              site. The seller pays the commission. It does not add a fee to your order.
            </p>
          </section>

          <section>
            <h2>What does not change</h2>
            <p>
              A commission does not buy a favorable opinion, placement, or score. We look at the
              product, contract terms, cancellation rules, total cost, service, and practical fit.
              If we think a product is not worth the money, we say so. We may link to a lower-cost
              or no-cost option even when it pays us nothing.
            </p>
          </section>

          <section>
            <h2>Sponsored work</h2>
            <p>
              If a company pays for a review, supplies a product, covers travel, or sponsors a
              placement, that relationship will be stated clearly near the content. Sponsored
              material will not be presented as an independent reader review.
            </p>
          </section>

          <section>
            <h2>Prices and decisions</h2>
            <p>
              Prices, promotions, availability, and contract terms can change. Check the seller’s
              current terms before buying. Our content is general home-safety information, not
              medical advice, and it does not replace a qualified professional who has inspected
              the home or evaluated the person using the product.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              Ask about a specific relationship at <a href="mailto:jeffarchuber@gmail.com?subject=Affiliate%20disclosure%20question">jeffarchuber@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
