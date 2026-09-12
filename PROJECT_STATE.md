# undefined.tools project state

## Snapshot

Public, single-page portfolio for ideas, active builds, and live tools. The interface is deliberately restrained and metadata-driven.

## Done

- Defined the public/private publication boundary.
- Added the four initial projects with the status vocabulary `idea`, `wip`, `live`, `archived`.
- Built a keyboard-accessible project index with dynamic detail display.
- Added responsive, reduced-motion-aware styling and public SEO metadata.
- Documented architecture, agent rules, and the update workflow.
- Created and pushed the public `oli206/undefined.tools` GitHub repository.
- Connected `main` to the Vercel project `undefined-tools`.
- Configured `undefined.tools` as the canonical production domain.
- Configured `www.undefined.tools` as a `307` redirect to the bare domain.
- Replaced Namecheap's parking records with Vercel's exact DNS records while preserving the unrelated email-forwarding SPF record.

## In progress

- None.

## Next

1. Explore one subtle visual effect only after the base design feels right.
2. Update the reviewed public metadata when project state materially changes.

## Decisions

- The homepage should fit one normal desktop viewport and avoid generic AI-site visual tropes.
- Public metadata is maintained here and never loaded from private project source.
- The bare domain is canonical.

## Blockers

- None in application code.

## Last verified

- 2026-09-11 — `npm run check` and `npm run build` passed; the local desktop layout and keyboard switching were visually verified; Vercel served the production build with HTTP 200 on both its deployment URL and the canonical domain; `www` returned a path-and-query-preserving `307` redirect to `https://undefined.tools`.
