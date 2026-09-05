# Production Release Log

## September 4, 2026 — Full-Site Release

The existing Vercel project `my-huckleberry-life` was released directly after the configured GitHub client reported that its connector token requires reauthentication. The successful production deployment is `dpl_HFDMFAhAqWKvgN984GApBXQZZ4FM` and is aliased to `myhuckleberrylife.com` and `www.myhuckleberrylife.com`.

The first direct release exposed an asset-routing defect because project-relative `/manus-storage/` paths are not available in a Vercel-hosted deployment. The site was redeployed using public CDN URLs for the hero image variants, detail photography, house-and-huckleberry mark, checklist cover, social card, and accessible checklist PDF. A final category-route release added explicit `/reviews` and `/guides` rewrites.

Final external acceptance checks returned HTTP 200 for the homepage, all review and guide categories, all six individual product briefs, all four guides, all supporting pages, and the accessible checklist. Public CDN assets returned HTTP 200 with correct image/PDF content types. `www.myhuckleberrylife.com` resolves to the apex domain.

## Source-Control Status

The authorized repository `jeffarchuber-coder/Huckleberry-` remains an empty repository. Its browser session has administrator access, but the local GitHub connector currently has no usable token. The current Vercel project remains directly deployed rather than automatically linked to a populated GitHub source branch. The live website is healthy; automatic GitHub-driven deployments require a separate authenticated GitHub client session and a source push into the repository.

## September 5, 2026 — Official Logo Update

The user-supplied official My Huckleberry Life fisherman-and-water wordmark replaced the prior generated house-and-huckleberry icon in the shared header, footer, and decorative field-guide treatment. Desktop homepage/review and mobile homepage/review captures confirmed that the full logo remains legible, retains its intended aspect ratio, and does not create horizontal overflow or interfere with navigation.
