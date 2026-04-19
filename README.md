# `@level9/brand` — Central canon for the Level9 family

This repo is **the single source of truth** for the Level9 family. Code
package + organizational docs in one place, intentionally.

> **Read first:** [policy/NORTHSTAR.md](./policy/NORTHSTAR.md) — the mission
> every product, every page, every decision orients toward.

## What's here

### Code package (`@level9/brand` — npm/git)

| Subpath | Status | Contents |
|---|---|---|
| `@level9/brand/tokens` | ✅ v0.1 | Colors, typography, motion, spacing, radius, shadows |
| `@level9/brand/styles/globals.css` | ✅ v0.1 | Canonical `:root` design tokens + utility classes |
| `@level9/brand/assets/logos` | ✅ v0.2 | 30 canonical SVGs across 10 brands (chip / square / wordmark + mini for Big E), typed `logo()` helper, `BRAND_NAMES`, `PLACEHOLDER_BRANDS` |
| `@level9/brand/components/motion` | ✅ v0.3 | FadeIn, Counter, AnimatedBar, RevealMask, MagneticCard, MagneticButton, CursorGradient, LiveTicker |
| `@level9/brand/content` | ✅ v0.4 | pressurePoints (4-cycle), stack (8 layers), products (canonical roster), playbookDomains (8 COO Playbook), voiceRules (em-dash ban + banned phrases + voice characteristics) |
| `@level9/brand/components/layout` | ✅ v0.5 | SectionHeader, AmbientBackground, HeroEyebrow, CycleRibbon, PressurePointCard, PlaybookDomainCard, FooterPattern |
| `@level9/brand/tailwind-preset` | ✅ v0.6 | Brand colors as Tailwind utility classes (`bg-decide`, `text-execute-soft`, etc) |

### Policy + procedure docs (the organizational alignment layer)

| Path | What it is |
|---|---|
| [`policy/NORTHSTAR.md`](./policy/NORTHSTAR.md) | The mission. Read first. |
| [`policy/COMPANY-CHARTER.md`](./policy/COMPANY-CHARTER.md) | Values, voice, principles, conduct |
| [`policy/ALIGNMENT-CYCLE.md`](./policy/ALIGNMENT-CYCLE.md) | The 4-pressure-point operational doctrine |
| [`policy/DECISION-FRAMEWORK.md`](./policy/DECISION-FRAMEWORK.md) | How big decisions get made (Type 1 / 2 / 3) |
| [`procedure/PROJECT-LIFECYCLE.md`](./procedure/PROJECT-LIFECYCLE.md) | Intake → ship → retire |
| [`procedure/DEPLOY-PROCEDURE.md`](./procedure/DEPLOY-PROCEDURE.md) | How sites deploy + update |
| [`procedure/DATA-CLEANUP-PROCEDURE.md`](./procedure/DATA-CLEANUP-PROCEDURE.md) | Inventory → soft-delete → observe → hard-delete |
| [`procedure/BRAND-CONSISTENCY-CHECKLIST.md`](./procedure/BRAND-CONSISTENCY-CHECKLIST.md) | Pre-launch QA |

### System reference docs

| Path | What it is |
|---|---|
| [`ARCHITECTURE-MAP.md`](./ARCHITECTURE-MAP.md) | Every product, site, repo, Vercel project, domain in one map |
| [`CLAUDE-TEMPLATE.md`](./CLAUDE-TEMPLATE.md) | Canonical agent context structure for any new repo |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Why this package exists in the shape it does |
| [`BRAND-AGENT-HANDOFF.md`](./BRAND-AGENT-HANDOFF.md) | Outstanding logo design tasks |
| [`VERCEL-AUDIT.md`](./VERCEL-AUDIT.md) | Vercel project inventory + cleanup state |
| [`SUPABASE-AUDIT.md`](./SUPABASE-AUDIT.md) | `cmd_*` table cleanup state (old commandos retirement) |
| [`audit/preview.html`](./audit/preview.html) | Live visual logo audit (open in browser) |

## Why this exists (in this shape)

The Level9 family has 4–6 marketing front-end sites that all need to look + feel
the same: level9os.com, erichathaway.com, nextgenintern.com, linkupos.com, the
front pages of thenewcoo.com and stratos.lucidorg.com. Without a shared canon,
every change has to be hand-replicated and they drift.

This repo is the alignment layer — both for **code** (the npm package) and
for **organization** (policy + procedure docs). Sites consume the code via
git ref. Agents read the policy docs before working in the family.

Bumping the package ref + redeploying propagates a brand change across the
family. Updating a procedure doc here updates the canon every agent reads.

## Consuming the package

In a consuming site's `package.json`:

```json
{
  "dependencies": {
    "@level9/brand": "github:erichathaway/level9-brand#main"
  }
}
```

In `next.config.mjs`:

```js
const nextConfig = {
  transpilePackages: ["@level9/brand"],
  // ...
};
```

In `tailwind.config.ts`:

```ts
import preset from "@level9/brand/tailwind-preset";
export default { presets: [preset], content: [...] };
```

In `src/app/layout.tsx`:

```ts
import "@level9/brand/styles/globals.css";
```

In any component:

```tsx
import { FadeIn, RevealMask, MagneticCard } from "@level9/brand/components/motion";
import { SectionHeader, PressurePointCard } from "@level9/brand/components/layout";
import { pressurePoints, products } from "@level9/brand/content";
```

To pull updates: `npm install @level9/brand --force` (force flag because
git ref caching).

## Family sites adoption status

| Site | Repo | Consumes brand pkg | Notes |
|---|---|---|---|
| level9os.com | `level9os-site` | ✅ tokens + motion + content | Canonical site for the family |
| erichathaway.com | `erichathaway-site` | ✅ motion only (lite) | Pure personal brand |
| nextgenintern.com | `nextgenintern-site` | ⏸ next adoption | Easy onboard (brand new) |
| linkupos.com | `linkupos-site` | ⏸ later | Live product, complex |
| thenewcoo.com (front) | `coo-playbook-app` | ⏸ later | Front page only; product app stays separate |
| stratos.lucidorg.com (front) | `stratos-marketing` | ⏸ later | Front page only |

## Brand voice rules (top-level summary)

Full source: [`src/content/voiceRules.ts`](./src/content/voiceRules.ts) +
[`policy/COMPANY-CHARTER.md`](./policy/COMPANY-CHARTER.md).

- No em-dashes (`—`), en-dashes (`–`), or double-hyphens in user-facing copy
- Direct, operator-to-operator. No keyword inflation.
- Specific over general (named companies, real numbers, real artifacts)
- Augments the workforce — never replaces
- Numerals not spelled out: "20 years" not "twenty years"
- ISO dates in code (`YYYY-MM-DD`); flowing months in copy ("Apr 2026")
- See [voiceRules.ts](./src/content/voiceRules.ts) for the full list of
  banned phrases + lint helpers (`findHardBans`, `passesVoiceCheck`)

## How to add a new site

See [`procedure/PROJECT-LIFECYCLE.md`](./procedure/PROJECT-LIFECYCLE.md)
for the full intake. Quick scaffold steps in
[`ARCHITECTURE-MAP.md`](./ARCHITECTURE-MAP.md).

## License

UNLICENSED. Internal Level9 use only.
