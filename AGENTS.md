# Agent instructions

Start every task by reading `docs/ARCHITECTURE.md`, `PROJECT_STATE.md`, and `README.md`.

## Product rules

- Keep the homepage calm, minimal, and useful on one desktop viewport.
- Avoid card grids, pill-heavy interfaces, gradients, purple/dark AI aesthetics, emoji, fake terminals, and ornamental animation.
- Preserve keyboard access and reduced-motion support for project selection.
- Use only the project statuses `idea`, `wip`, `live`, and `archived`.

## Publication boundary

- `data/projects.ts` is a deliberately hand-reviewed public allowlist.
- Never fetch from a private repository at build time or runtime.
- Never publish private repository URLs, local filesystem paths, internal notes, logs, commit history, credentials, or secret values.
- Private projects receive no source link. mlfomo's public CTA is `https://mlfomo.dev`.

## Working agreement

- Update `PROJECT_STATE.md` after material work.
- Update `docs/ARCHITECTURE.md` when the system boundary, data flow, hosting, or domain setup changes.
- Run `npm run check` and `npm run build` before committing.
- Keep dependencies minimal and do not add infrastructure without a concrete need.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
