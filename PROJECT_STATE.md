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
- Added a real, optimized interface preview for `mlfomo`; projects without UI remain image-free.
- Mounted Vercel Web Analytics in the root layout.
- Added matching Open Graph and Twitter sharing images.
- Fixed the desktop shell to the visual viewport, removing the underlying scroll
  range and Safari scrollbar gutters, and tightened the header and footer framing.

## In progress

- None.

## Next

1. Explore one subtle visual effect only after the base design feels right.
2. Add real screenshots for other projects only when their interfaces exist.
3. Update the reviewed public metadata when project state materially changes.

## Decisions

- The homepage should fit one normal desktop viewport and avoid generic AI-site visual tropes.
- Public metadata is maintained here and never loaded from private project source.
- The bare domain is canonical.
- Screenshots must show real project UI; do not create placeholder product mockups.

## Blockers

- None in application code.

## Last verified

- 2026-09-12 — `npm run check` and `npm run build` passed after fixing desktop viewport overflow; representative desktop and mobile viewport sizes were checked for unintended horizontal overflow.
