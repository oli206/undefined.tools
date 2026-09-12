# undefined.tools

A single-page list of Oliver Carabia's software projects.

## Local development

```bash
npm install
npm run dev
```

Before committing:

```bash
npm run check
npm run build
```

## Project metadata

Public project entries live in `data/projects.ts`. The supported statuses are only:

- `idea` — the question is defined; implementation may not have started
- `wip` — active implementation, not ready for general use
- `live` — available to use
- `archived` — retained for reference but no longer active

Adding a project is intentionally small: add one reviewed metadata record, verify the site, commit, and push. Vercel deploys `main` automatically after the GitHub integration is connected.

The metadata file is a publication allowlist. Do not add private repository URLs, local paths, private README text, operational notes, credentials, or authenticated data sources. Read `docs/ARCHITECTURE.md` before changing the boundary.

## Project tracking

`PROJECT_STATE.md` records what is done, what is in progress, what comes next, decisions, blockers, and checks actually run. Keep it current so a new human or agent can resume without reconstructing context from Git history.
