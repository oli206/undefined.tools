# undefined.tools architecture

## Purpose

`undefined.tools` is the public index for Oliver's software ideas, work in progress, and live tools. It is intentionally a small presentation layer, not the source of truth for private implementation work.

## System boundary

```text
private project workbench
        |
        | manual, reviewed publication of safe fields only
        v
public metadata in this repository
        |
        | static Next.js build from GitHub main
        v
Vercel project
        |
        +-- https://undefined.tools        canonical
        +-- https://www.undefined.tools    redirect to canonical
        `-- Vercel Web Analytics           page-view collection
```

Private project source is outside this repository. This site has no runtime or build-time access to that source, its repository, or authenticated APIs. A project appears publicly only after its name, status, description, and optional external URL are intentionally written into `data/projects.ts`.

## Application

- Next.js App Router with TypeScript.
- One primary page designed to fit a normal desktop viewport.
- A client-side, keyboard-accessible project selector reveals the chosen metadata without navigation.
- Project content is local structured data, so pages remain statically renderable and require no database, API, environment variables, or server state.
- A project may include one deliberately selected, optimized screenshot when a real interface exists. Projects without UI do not receive fabricated mockups or placeholders.
- Open Graph and Twitter images are generated from the same restrained, code-defined 1200×630 composition so link previews remain consistent with the site.
- The allowed status values are `idea`, `wip`, `live`, and `archived`.
- The root layout mounts `@vercel/analytics`; collection is handled by Vercel and does not introduce an application database.

## Deployment and domain

- GitHub repository: `oli206/undefined.tools` (public).
- `main` is the Vercel production branch; other branches and pull requests receive previews through the normal Git integration.
- `undefined.tools` is canonical. `www.undefined.tools` redirects to the bare domain.
- DNS is managed at Namecheap. Only the exact records shown by Vercel may be used. Existing unrelated email, TXT, and verification records must be preserved.

## Adding or changing a project

1. Decide that the project should be listed publicly.
2. Add or edit only reviewed fields in `data/projects.ts`.
3. If the project has a real interface, add one optimized screenshot under `public/projects`; otherwise omit the image.
4. Do not copy private READMEs or derive content automatically from private source.
5. Run `npm run check` and `npm run build`.
6. Update `PROJECT_STATE.md` when the site's current work changes.
7. Commit and push to `main`; Vercel deploys the new production version.

A project can move from private incubation to its own repository or live deployment without changing this architecture. Only its curated metadata and optional public URL need to change.
