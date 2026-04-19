# CLAUDE.md template — canonical agent context for any repo in the Level9 family

Copy this file to the root of any new repo as `CLAUDE.md`. Fill in the
sections marked `<...>`. Delete sections that don't apply.

The point: any Claude / AI agent that walks into a fresh repo can read
this one file and know what they're working in, what's safe to touch,
what's not, and what the recent decisions were.

---

```markdown
# <Project Name> — Agent Context

## Project Overview

<2-3 sentences. What is this? What lives at this URL or in this repo?
What's its role in the Level9 family?>

## Live state (as of <YYYY-MM-DD>)

- Production URL: <https://...>
- Vercel project: `<project-name>` (team `decisioning-v1`)
- GitHub: `erichathaway/<repo-name>` (public/private)
- Deploy: auto-deploys from `main` branch (or describe deviation)
- Routes / surface area: <list>

## Architecture

- Framework: <Next.js 14, Vite + React, etc>
- Language + key libraries: <TypeScript, Tailwind, Framer Motion, etc>
- TS target: <ES2022 if explicit, otherwise default>
- ESLint: <runs in builds / ignoreDuringBuilds / etc>
- Build verification: `npm run build` (or whatever)

## Shared brand system

<If consuming `@level9/brand`:>
Consumes **`@level9/brand`** via git ref. Single source of truth for
the family's visual + content layer.

Currently uses (from the package):
- `@level9/brand/components/motion` — <list components>
- `@level9/brand/components/layout` — <list components>
- `@level9/brand/content/*` — <list>
- `@level9/brand/tokens` — design tokens
- `@level9/brand/tailwind-preset` — brand colors as utility classes

To update package version: `npm install @level9/brand --force`
(force because git ref caching).

<If NOT consuming the package: explain why.>

## Site-specific files (NOT shared, stay local)

<List the files that intentionally stay local because they're unique
to this app — e.g. FloatingNav structure, app-specific data, audio
player components, etc.>

## Voice rules (from `@level9/brand/content/voiceRules`)

- **No em dashes** (`—`) in user-facing copy.
- Direct, operator-to-operator. No keyword inflation.
- Augments the workforce — never positions AI as replacing people.
- (See `voiceRules.ts` for the full list + lint helpers.)

## Brand color palette (from `@level9/brand/tokens/colors`)

<If your app uses pressure-point colors, list which ones apply:>
- Decide → violet `#8b5cf6` (StratOS)
- Coordinate → emerald `#10b981` (CommandOS)
- Execute → amber `#f59e0b` (OutboundOS umbrella + LinkupOS pod)
- Measure → cyan `#06b6d4` (LucidORG)
- Chassis → red `#ef4444` (The Vault)
- Methodology → slate `#64748b` (COO Playbook)
- MAX → fuchsia `#ec4899`

## Database (Supabase)

<If this app touches Supabase:>
- Project: `xwmjrphmdjhlhveyyfey` (shared instance)
- Tables this app reads/writes: <list with prefix, e.g. cmd_*, lu_*, np_*>
- Cross-app contracts: <e.g. "writes to cmd_tasks via Postgres trigger
  when user_feedback row inserted">

## n8n workflows (NAS)

<If this app has n8n workflows:>
- NAS instance: https://n8n.lucidorg.com
- Workflows: <list with names + IDs + trigger>
- Webhook URLs: <hidden via /api/n8n/* proxy or direct>

## Cross-project impacts

- <List anything in this repo that affects other repos: shared assets,
  cross-app data writes, Postgres triggers, webhook contracts, etc.>

## What NOT to touch

- <List the no-go zones: production URLs, prod database operations,
  shared assets without coordination, third-party integrations, etc.>
- `@level9/brand` package consumption — to change shared tokens/components,
  edit the PACKAGE repo, then bump the git ref here.

## Recent decisions log

<Append-only log of important decisions in reverse-chronological order.
Format:>

- **YYYY-MM-DD** — <decision summary in 1-3 sentences>

## Prior intelligence

<Links to relevant docs in other repos, especially:>
- `~/claude code 1/level9-brand/` — central brand system + canon docs
- `~/claude code 1/level9-brand/policy/NORTHSTAR.md` — company mission
- `~/claude code 1/level9-brand/ARCHITECTURE-MAP.md` — full system map
- `~/claude code 1/level9-brand/procedure/<relevant-procedure>.md`
```

---

## How to use this template

1. **New repo**: copy + fill in. Should take ~10 minutes for a fresh project.
2. **Existing repo without a CLAUDE.md**: copy + fill in from current state.
3. **Existing repo with stale CLAUDE.md**: replace with this template + carry over the still-true content.

## What changed in this template (vs. ad-hoc CLAUDE.md files)

- **Live state block at top** — anyone scanning sees current production state immediately
- **Architecture section** — captures TS target, ESLint, build commands (saved us from build failures earlier)
- **Shared brand system section** — explicit about what's consumed from `@level9/brand`
- **Voice rules pointer** — agents writing copy reference this at prompt time
- **Database + n8n sections** — captures cross-app contracts that aren't visible in code
- **Recent decisions log** — append-only, last decision at top, no dating drift
- **Prior intelligence** — every CLAUDE.md points back to the central canon

## Where this lives

This template lives in `@level9/brand` because it IS the canon for "how
agent context should be structured across the family." When the template
needs updating, edit it here, then update each repo's CLAUDE.md against
it during their next maintenance pass.
