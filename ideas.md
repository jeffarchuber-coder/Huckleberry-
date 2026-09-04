# My Huckleberry Life — Repair Design Specification

The current public site at `https://myhuckleberrylife.com/` is the ground-truth design reference. This is a repair and hardening project, not a wholesale rebrand. The rebuilt experience must preserve the recognizable warm cream palette, deep charcoal type, restrained terracotta accent, large senior-friendly typography, plainspoken trust-first copy, asymmetrical image-and-copy hero, and room-by-room checklist structure.

## Chosen Design Philosophy: Fort Myers Field Guide

**Design Movement:** Warm editorial modernism shaped like a practical printed field guide rather than a technology landing page.

**Core Principles:** Every important claim is easy to verify. Every action is obvious and comfortably sized. Pages feel calm, candid, and human. Decorative detail never competes with readability or trust.

**Color Philosophy:** Warm cream creates familiarity and reduces glare. Deep charcoal provides strong reading contrast. Terracotta is reserved for decisions, checks, and emphasis, echoing Southwest Florida light without feeling promotional. A muted safety green is used only for confirmed success states.

**Layout Paradigm:** An asymmetric editorial flow. The homepage alternates between copy-led and image-led compositions with generous margins, while legal and utility pages use a narrow reading column with a persistent, simple escape route back to the checklist.

**Signature Elements:** A house-and-huckleberry symbol, terracotta check marks, and thin rule lines inspired by a well-used printed home-inspection sheet.

**Interaction Philosophy:** Interactions respond quickly and plainly. Buttons compress slightly when pressed, links underline clearly, errors appear next to the field they describe, and success states expose the download immediately. No manipulative countdowns, pop-ups, or fake urgency.

**Animation:** Limit motion to 120–220 ms transform and opacity transitions. Use a subtle upward reveal only for major content sections and disable it for reduced-motion users. Keyboard-initiated actions remain instant.

**Typography System:** Use the serif Georgia stack for display headings and a system sans-serif stack for body copy to remove external font blocking while preserving the current editorial character. Headings are bold and tightly spaced; body text remains at least 18 px with a 1.6 line height.

**Brand Essence:** My Huckleberry Life is the practical old friend families trust to inspect home-safety choices before worry turns into a rushed purchase. Personality: candid, neighborly, steady.

**Brand Voice:** Headlines name the real concern without scare tactics. Calls to action say exactly what happens next. Microcopy is short and specific. Example headline: “Your parent says they’re fine. The floor says otherwise.” Example CTA: “Send me the checklist.”

**Wordmark & Logo:** Pair the existing distinctive serif wordmark treatment with a bold standalone house outline containing a single huckleberry and leaf. The mark must work at favicon size, remain recognizable without text, and use transparent negative space.

**Signature Brand Color:** Terracotta `#A84121` — warm, grounded, and reserved for actions and evidence marks.

## Implementation Commitments

The repaired site will preserve the existing homepage hierarchy and copy while adding real Privacy, Contact, Affiliate Disclosure, Checklist, and 404 pages. It will use optimized custom imagery, a resilient MailerLite form with a no-JavaScript path, built-in privacy-conscious analytics events, canonical and social metadata, crawl files, accessible error associations, security headers, host normalization, and a direct accessible HTML checklist alongside the PDF.

The production source is linked to the Vercel project `my-huckleberry-life`. Repository access is not currently authenticated in the sandbox, so the repaired build will be verified in the managed preview and can be deployed to the existing Vercel project through the authorized Vercel account after validation.

## Style Decisions

- Dark environmental surfaces use deep charcoal rather than green-black. Muted green is limited to confirmed success and safety-confirmation states.
- The printed inspection-sheet motif—thin rules, numbered sections, terracotta check marks, and paper annotations—defines major pages before shadows or card treatments.
- The house-and-huckleberry mark recurs as a quiet editorial stamp in key sections. Terracotta remains reserved for primary actions, checks, sources, and the mark.
- Generated imagery that does not complete reliably is replaced with verified project photography or a deterministic checklist cover; no failure placeholder ships.
