# Architecture Map — the Level9 Family

**Purpose**: One canonical view of every product, every site, every
shared dependency. Read this first when you need to know "what owns what",
"who writes to which table", or "where does X live".

**Last updated**: 2026-04-18

---

## The Family at a glance

```
                       ┌──────────────────────────────────┐
                       │        @level9/brand             │  ← shared canon
                       │  (tokens, logos, components,     │
                       │   content, voice rules, docs)    │
                       └─────────────┬────────────────────┘
                                     │
        ┌────────────────┬───────────┼───────────────────┬────────────┐
        ▼                ▼           ▼                   ▼            ▼
┌──────────────┐  ┌──────────────┐ ┌──────────────┐ ┌────────────┐ ┌────────────┐
│  level9os    │  │ erichathaway │ │ nextgenintern│ │  linkupos  │ │   future   │
│   (canonical │  │  (personal   │ │   (education │ │   (signal  │ │   adopters │
│   marketing) │  │    brand)    │ │    front)    │ │   product) │ │            │
└──────────────┘  └──────────────┘ └──────────────┘ └────────────┘ └────────────┘
                                  ↑                  ↑
                        not yet adopted    not yet adopted (Phase 6/7)


PRODUCT APPS (intentionally separated, NOT consuming brand pkg directly):
  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  ┌──────────────┐
  │ commandos-v2│  │ stratos-app  │  │stratos-mkt │  │ coo-playbook │
  │  (orchestr.)│  │  (decisions) │  │  (front)   │  │   (engine)   │
  └─────────────┘  └──────────────┘  └────────────┘  └──────────────┘
```

---

## Repo / Vercel / Domain matrix

| GitHub repo | Vercel project | Live domain | Framework | Consumes `@level9/brand`? |
|---|---|---|---|---|
| `level9-brand` | (no Vercel) | n/a | TS package | self |
| `level9os-site` | level9os-site | level9os.com | Next.js 14 | ✅ tokens + motion + content |
| `erichathaway-site` | erichathaway-site | erichathaway.com | Next.js 14 | ✅ motion only (lite consumer) |
| `commandos-v2` | commandos-v2 | commandos.level9os.com | Next.js 16 | ❌ (product app, not brand surface) |
| `linkupos-site` | linkupos-site | linkupos.com + www | Next.js 14 | ❌ not yet (Phase 7) |
| `nextgenintern-site` | nextgenintern-site | thenextgenintern.com + www | Next.js | ❌ not yet (Phase 6 — easy onboard) |
| `coo-playbook-app` | coo-playbook | thenewcoo.com + www + playbook.erichathaway.com | Next.js 15 | ❌ (product app) |
| `stratos-marketing` | stratos-marketing | stratos.lucidorg.com | (front) | ❌ not yet (Phase 8) |
| `stratos-app` | stratos-app | app.stratos.lucidorg.com | Vite | ❌ (product app) |
| `stratos-v2` | stratos-results | results.stratos.lucidorg.com | (results page) | ❌ (product display) |

---

## Supabase data ownership

**Project**: `xwmjrphmdjhlhveyyfey` (single shared instance across the family)

### Per-product table prefixes

| Prefix | Owner | Examples |
|---|---|---|
| `cmd_*` / `cmd-*` | CommandOS (commandos-v2) | cmd_tasks, cmd_agents, cmd_projects, cmd_routing_log |
| `lu_*` / linkupos tables | LinkupOS (linkupos-site) | marketing_users, prospects, posting_queue, voice_profile |
| `playbook_*` / engine tables | COO Playbook (coo-playbook-app) | organizations, team_members, interviews, divergence_maps |
| `np_*` / nextgenintern tables | NextGenIntern (nextgenintern-site) | tbd |
| `stratos_*` | StratOS (stratos-app) | stratos_decisions, deliberation rooms etc |
| `cmd_secrets` | shared vault | All API keys + tokens, RLS-locked |

### Cross-app contracts (writes that cross product boundaries)

These are the TIGHT couplings — touch them carefully:

| Source app | Writes to | Trigger / Mechanism | Notes |
|---|---|---|---|
| `linkupos-site` | `cmd_tasks` | Postgres trigger on `user_feedback` insert | Bridge for CS agent feedback into CommandOS |
| `commandos-v2` | `cmd_activity_log` (with `event_type='token_usage'`) | Direct insert | Token tracking — see `use-token-usage.ts` |
| any app | `cmd_secrets` (read-only) | `get_secret()` RPC | Centralized secrets vault |

---

## n8n workflows (NAS: https://n8n.lucidorg.com)

Each product app has its own workflow set on the same NAS instance. **There
is no shared workflow library yet** — workflows are purpose-built per product.

### Workflow set per product

| Product | Workflow count | Examples | Webhook proxy |
|---|---|---|---|
| LinkupOS | ~87 | Daily Briefing, LinkedIn Poster, Premium Quality Gate, Apollo Prospector | `/api/n8n/*` proxy in linkupos-site |
| COO Playbook | 3 | Interview Processor, Daily Briefing Engine, Weekly Check-in | `/api/n8n/*` proxy in coo-playbook-app |
| CommandOS | varies | Conductor (5min), Health & Governance (30min), PM agent | direct |
| StratOS | 170+ nodes across | Conductor (orchestrator), D (deliberation), EI, RX, F1/F2, GOV | hosted on `erichath.app.n8n.cloud` (different instance!) |

⚠️ **NOTE**: StratOS uses a SEPARATE n8n instance (cloud, not NAS). All
others use the NAS.

---

## What lives in `@level9/brand` (the canonical alignment layer)

```
level9-brand/                                ← single source of truth
├── README.md                                  Start here
├── ARCHITECTURE-MAP.md                        ← THIS FILE
├── CLAUDE-TEMPLATE.md                         Agent context template
├── ARCHITECTURE.md                            Package architecture rationale
├── BRAND-AGENT-HANDOFF.md                     Logo design briefs (placeholder marks)
├── VERCEL-AUDIT.md                            Vercel project inventory
├── SUPABASE-AUDIT.md                          cmd_* table cleanup state
│
├── policy/                                    ← Company-level alignment
│   ├── NORTHSTAR.md                           The mission, the why
│   ├── COMPANY-CHARTER.md                     Values, voice, principles
│   ├── ALIGNMENT-CYCLE.md                     The 4-pressure-point doctrine
│   └── DECISION-FRAMEWORK.md                  How big decisions get made
│
├── procedure/                                 ← Operational SOPs
│   ├── DEPLOY-PROCEDURE.md                    How sites deploy
│   ├── DATA-CLEANUP-PROCEDURE.md              The Supabase + Vercel pattern
│   ├── PROJECT-LIFECYCLE.md                   Intake → ship → retire
│   └── BRAND-CONSISTENCY-CHECKLIST.md         Pre-launch QA
│
├── audit/                                     ← Visual logo audit (live preview)
│
├── package.json                               @level9/brand v0.6
├── tailwind-preset.ts                         Brand colors as Tailwind utilities
└── src/                                       Code: tokens, components, content
    ├── tokens/   (colors, typography, motion, spacing)
    ├── styles/   (globals.css)
    ├── assets/   (logos + typed registry)
    ├── components/
    │   ├── motion/   (FadeIn, RevealMask, MagneticCard, Counter, etc — 8)
    │   └── layout/   (SectionHeader, AmbientBackground, PressurePointCard, etc — 7)
    └── content/  (pressurePoints, stack, products, playbookDomains, voiceRules)
```

---

## What's NOT centralized (and shouldn't be)

| Layer | Why per-app |
|---|---|
| Product business logic | Each product has its own purpose. Never centralize. |
| Per-product Supabase schemas | Products own their data. Centralizing schemas creates coupling hell. |
| Per-product n8n workflows | Each workflow is purpose-built. Pattern extraction is premature. |
| Per-product auth + tier checks | Different products have different access models. |
| App-specific UI (FloatingNav structure) | Each site's nav is structurally different. |

If you find yourself wanting to centralize one of these, ask: **do I have
3+ apps doing the EXACT same thing?** If no → resist. If yes → extract
once you have those 3 use cases concretely.

---

## How to add a new site to the family

See `procedure/PROJECT-LIFECYCLE.md` for the full intake. Quick version:

1. Create GitHub repo
2. Add `@level9/brand` as dep in `package.json`
3. Add `transpilePackages: ["@level9/brand"]` to `next.config.mjs`
4. Add `target: "ES2022"` to `tsconfig.json`
5. Create `tailwind.config.ts` extending the preset:
   ```ts
   import preset from "@level9/brand/tailwind-preset";
   export default { presets: [preset], content: [...] };
   ```
6. Import canonical CSS in root layout:
   ```tsx
   import "@level9/brand/styles/globals.css";
   ```
7. Use motion + layout components from the package
8. Copy `CLAUDE-TEMPLATE.md` → `CLAUDE.md` and fill in
9. Add new entry to this map (`ARCHITECTURE-MAP.md`)

---

## Maintenance

When something changes structurally — a new site joins, a Supabase table
moves between apps, a domain redirects — update this doc. It's the lookup
that everything else assumes.

The `recent decisions log` section of each repo's `CLAUDE.md` should
reference back to this map for system-level changes.
