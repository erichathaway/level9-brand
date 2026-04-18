# @level9/brand — Architecture

## The problem this solves

The Level9 marketing front-ends (level9os, erichathaway, nextgenintern, linkupos,
thenewcoo front, stratos front) all need to share:

1. **Design tokens** — colors, typography, spacing, motion timing
2. **Motion primitives** — FadeIn, RevealMask, MagneticCard, Counter, etc
3. **Layout components** — FloatingNav, ProductCard, PressurePointCard, FooterPattern
4. **Canonical content** — the four pressure points, products list, COO Playbook
   domains, brand voice rules
5. **Assets** — every logo, brand image, favicon set

Without one canonical source, every site re-implements every primitive and they drift.

## The solution

A single npm package — `@level9/brand` — consumed by every site via git ref.
No npm registry needed (private, internal-only).

```
github.com/erichathaway/level9-brand            ← this repo
        │
        │ consumed via "@level9/brand": "github:erichathaway/level9-brand#main"
        │
        ├─ level9os-site                        ← site, owns its own pages + content
        ├─ erichathaway-site                    ← site, owns its own pages + content
        ├─ nextgenintern-site                   ← site
        ├─ linkupos-site                        ← site
        ├─ coo-playbook-app (front page only)   ← site (front)
        └─ stratos-v2       (front page only)   ← site (front)
```

## Why this shape (Option C-1, not C-2 or C-3)

We considered three options before scaffolding:

| Option | Mechanism | Pros | Cons | Decision |
|---|---|---|---|---|
| **C-1** | Separate git repo, sites consume via npm git ref | Sites stay independent. Vercel CI unchanged. Low risk. | Updates require re-deploying each site. | ✅ This. v1. |
| **C-2** | pnpm workspace monorepo with all sites + the package | Atomic changes. Cleanest dev experience. | Real migration work. Restructures CI/CD. Risk. | Future, after v1 proves. |
| **C-3** | Copy-paste discipline + canonical docs folder | Simplest, no infra. | Drift risk. No enforcement. | Rejected. |

C-1 lets us prove the package out across all sites without touching their build/deploy
pipelines. Once we know the right abstraction boundaries, migrating to C-2 (monorepo)
becomes mechanical.

## Package layout

```
src/
├── index.ts                    ← top-level aggregate export
├── tokens/                     ← design tokens (TS constants)
│   ├── index.ts
│   ├── colors.ts
│   ├── typography.ts
│   ├── motion.ts
│   └── spacing.ts
├── styles/
│   └── globals.css             ← canonical :root variables + utility classes
├── components/                 ← (next phase) React components
│   ├── motion/                 ← motion primitives
│   ├── layout/                 ← layout patterns
│   └── index.ts
├── content/                    ← (next phase) canonical site content
│   ├── pressurePoints.ts
│   ├── products.ts
│   ├── playbookDomains.ts
│   └── voiceRules.ts
└── assets/                     ← (next phase) shared SVG + image assets
    ├── logos/
    └── icons/
```

## Subpath exports

Sites should prefer subpath imports for smaller bundles:

```ts
// Good — pulls only what's needed
import { accent, leading } from "@level9/brand/tokens";
import { FadeIn } from "@level9/brand/components/motion";

// Allowed but heavier
import { accent, FadeIn } from "@level9/brand";
```

## Asset strategy (planned)

Assets are tricky in a shared package because Next.js wants either:
- Imported assets (compile-time, work with `next/image`), or
- `public/` static URLs (runtime).

Plan:
- **SVG logos**: Export as React components (svgr-style transform). Sites import:
  `<Logo9 className="w-8 h-8" />`. Single source of truth, works with className.
- **Brand imagery + photos**: Stay in each site's `public/`. The package documents
  the canonical filename + variant set. Sites copy assets from a future
  `assets/source/` directory in this repo.
- **Favicons**: Each site keeps its own favicon (Next.js icon convention requires
  files in `app/`). The package provides a recipe + helper for generating them.

## Token sync rule

If a value in `src/tokens/colors.ts` changes, the matching `:root` variable in
`src/styles/globals.css` must change too. Both are sources of truth depending on
context (CSS class vs JS calculation), so they must mirror each other exactly.

(Future) A small build-time validation script could check this.

## Voice rules go in content, not styles

Brand voice (no em-dash, operator-to-operator tone, etc) lives in
`src/content/voiceRules.ts` as a documented constant. Sites can read it for
linting; AI agents writing copy reference it at prompt-time.

## Migration path to monorepo (Phase 9, optional)

When this package stabilizes (probably after 4 sites adopt it cleanly), we can
optionally migrate to a pnpm workspace monorepo:

```
level9-platform/
├── packages/
│   └── @level9/brand/
├── sites/
│   ├── level9os/
│   ├── erichathaway/
│   ├── nextgenintern/
│   └── linkupos/
└── pnpm-workspace.yaml
```

Pros: atomic changes, faster local dev, cleanest tooling.
Trade-off: restructures CI/CD, harder to onboard a new collaborator.

We'll evaluate after v1 across 4 sites. No commitment now.

## Versioning

v0.x while the package is forming. Breaking changes acceptable, expected.

When the API stabilizes, switch consumers from `#main` to `#vX.Y.Z` tags so
updates are explicit per consumer.

## Adopting in a new site

1. Add the dep to `package.json`:
   ```json
   "@level9/brand": "github:erichathaway/level9-brand#main"
   ```
2. Run `npm install`
3. In the site's root layout, add:
   ```ts
   import "@level9/brand/styles/globals.css";
   ```
4. Replace local color/typography constants with imports from `@level9/brand/tokens`.
5. (Once components ship) Replace local motion primitives with imports from
   `@level9/brand/components/motion`.
6. Build, verify pixel-clean, deploy.

See `docs/ADOPTION-CHECKLIST.md` (planned) for the full per-site migration recipe.
