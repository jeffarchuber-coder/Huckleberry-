/**
 * Fort Myers Field Guide: shared navigation is quiet and practical, with
 * obvious escape routes and real trust-page destinations on every page.
 */
import type { ReactNode } from "react";
import { Link } from "wouter";
import { BrandMark } from "./BrandMark";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand">
            <BrandMark className="brand-mark" />
            <span className="brand-copy">
              <span className="brand-name">My Huckleberry Life</span>
              <span className="brand-tagline">Your old friend to the end.</span>
            </span>
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            <Link href="/#what-is-inside">What’s inside</Link>
            <Link href="/checklist">Read online</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <BrandMark className="footer-mark" />
            <div>
              <strong>My Huckleberry Life LLC</strong>
              <span>Fort Myers, Florida · The 239</span>
            </div>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            <Link href="/checklist">HTML checklist</Link>
          </nav>
          <p className="footer-fine">
            © {new Date().getFullYear()} My Huckleberry Life LLC. Information here is general
            home-safety guidance, not medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
