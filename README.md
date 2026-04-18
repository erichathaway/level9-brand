# @level9/brand

Shared brand system for the Level9 family of marketing front-end sites.

## What's in here

| Subpath | Status | Contents |
|---|---|---|
| `@level9/brand/tokens` | ✅ v0.1 | Colors, typography, motion, spacing, radius, shadows |
| `@level9/brand/styles/globals.css` | ✅ v0.1 | Canonical `:root` design tokens + utility classes |
| `@level9/brand/assets/logos` | ✅ v0.2 | 30 canonical SVGs across 10 brands (chip / square / wordmark + mini for Big E), typed `logo()` helper, `BRAND_NAMES`, `PLACEHOLDER_BRANDS` |
| `@level9/brand/components/motion` | ✅ v0.3 | FadeIn, Counter, AnimatedBar, RevealMask, MagneticCard, MagneticButton, CursorGradient, LiveTicker |
| `@level9/brand/components/layout` | 🔨 next | FloatingNav (parameterized), HeroPattern, ProductCard, PressurePointCard, FooterPattern |
| `@level9/brand/content` | 🔨 next | pressurePoints, products, playbookDomains, voice rules |

## Why this exists

The Level9 family has 4–6 marketing front-end sites that all need to look + feel
the same: level9os.com, erichathaway.com, nextgenintern.com, linkupos.com, the
front pages of thenewcoo.com and stratos.lucidorg.com. Without a shared package,
every change has to be hand-replicated across each repo and they drift.

This package is the single source of truth. Sites consume it via npm git ref
(no need to publish to a registry). Bumping the ref + redeploying each site
propagates a brand change across the family.

## Consuming the package

In a consuming site's `package.json`:

```json
{
  "dependencies": {
    "@level9/brand": "github:erichathaway/level9-brand#main"
  }
}
```

Then in your code:

```ts
// Subpath imports (preferred — smaller bundles)
import { accent, text, leading, ease } from "@level9/brand/tokens";

// Aggregate import (works but pulls everything)
import { accent } from "@level9/brand";
```

In the site's root layout, import the canonical stylesheet once:

```ts
import "@level9/brand/styles/globals.css";
```

## Updating the package

This is v0.1 — early days. Workflow:

1. Make changes here, commit + push to `main`.
2. In each consuming site, run `npm update @level9/brand` to pull the latest
   git HEAD, then commit the lockfile change and redeploy.
3. (Future) When the package stabilizes, switch from `#main` ref to a `#vX.Y.Z` tag
   so updates are explicit per consumer.

## Family sites adoption status

| Site | Repo | Adopted |
|---|---|---|
| level9os.com | `level9os-site` | 🔨 next |
| erichathaway.com | `erichathaway-site` | 🔨 next |
| nextgenintern.com | `nextgenintern-site` | ⏸ phase 6 |
| linkupos.com | `linkupos-site` | ⏸ phase 7 |
| thenewcoo.com (front) | `coo-playbook-app` | ⏸ phase 8 |
| stratos.lucidorg.com (front) | `stratos-v2` | ⏸ phase 8 |

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the design rationale, the package
structure, and the path to a future monorepo migration if/when this v1 proves out.

## Brand voice rules

- No em-dashes (`—`) in user-facing copy. Use periods, colons, or rephrase.
- Voice: direct, operator-to-operator. No keyword inflation.
- Numerals not spelled out: "20 years" not "twenty years" (in product copy;
  long-form content can flex).
- Dates as `YYYY-MM-DD` in code/notation; flowing months ("Apr 2026") in copy.

## License

UNLICENSED. Internal Level9 use only.
