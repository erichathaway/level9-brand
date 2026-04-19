# Project Lifecycle — intake → ship → retire

Every site, app, or product in the Level9 family follows this lifecycle.
Codified from the experience building level9os, erichathaway, commandos-v2,
and the brand package itself.

---

## Phase 1 — Intake (before any code is written)

### Decide if it actually needs to exist

Three questions:

1. **Does this map to a pressure point?** (Decide / Coordinate / Execute / Measure)
   See `policy/ALIGNMENT-CYCLE.md`. If it doesn't fit the cycle, the
   default answer is "no, don't build it." Resist scope expansion.

2. **Is there a real customer for this?** Not "could there be customers."
   Real customers, named, today.

3. **Can it be done as a pod inside an existing product?** OutboundOS
   exists because LinkupOS + ABM + AutoCS were three pods, not three
   separate products. Default to consolidating, not multiplying.

If yes / yes / not really → proceed to Phase 2.

### Frame the project

Write a 1-page intake doc covering:
- **What it is** (1 sentence)
- **Which pressure point** it serves
- **Who it's for** (named customer or named persona)
- **What it explicitly is NOT** (scope guardrails)
- **Reversal cost** (Type 1 / 2 / 3 per `DECISION-FRAMEWORK.md`)
- **Phase plan** (3 phases minimum, with explicit entry + exit criteria)

For new sites in the family specifically, the intake also names:
- Production domain
- Brand color (from the existing palette — no new colors)
- Whether it consumes `@level9/brand` or not (default: yes for marketing
  fronts, no for product apps)

---

## Phase 2 — Setup (the canonical scaffold)

### For a new marketing site that consumes `@level9/brand`

```bash
# 1. Create local + GitHub repo
mkdir new-site && cd new-site
gh repo create erichathaway/new-site --private --source=. --remote=origin

# 2. Init Next.js (or whatever)
npx create-next-app@latest . --typescript --tailwind --app

# 3. Add @level9/brand
npm install github:erichathaway/level9-brand#main

# 4. Configure next.config.mjs
cat > next.config.mjs <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@level9/brand"],
  // Add headers etc per your security model
};
export default nextConfig;
EOF

# 5. Configure tsconfig.json — add target ES2022
# (See @level9/brand/CLAUDE-TEMPLATE.md for the full template)

# 6. Configure tailwind.config.ts to use the preset
cat > tailwind.config.ts <<'EOF'
import preset from "@level9/brand/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}"],
  // site-specific extends here if needed
} satisfies Config;
EOF

# 7. Import canonical CSS in src/app/layout.tsx
# import "@level9/brand/styles/globals.css";

# 8. Copy CLAUDE-TEMPLATE.md → CLAUDE.md and fill in
curl -s https://raw.githubusercontent.com/erichathaway/level9-brand/main/CLAUDE-TEMPLATE.md \
  > CLAUDE.md

# 9. Create the Vercel project (manual via UI or `vercel init` if installed)
#    Wire it to auto-deploy from main

# 10. Add the new project to ARCHITECTURE-MAP.md in @level9/brand
```

### For a new product app (not consuming `@level9/brand`)

Skip step 3, 4 (transpilePackages line), 6, 7. Otherwise same. Product
apps have their own visual + business logic — they should NOT be forced
into the brand package's shape.

Document why this app doesn't use the brand package in the new repo's
CLAUDE.md ("Architecture" section).

---

## Phase 3 — Build (the work)

### Core principles

- **Done = evidence test** (per `policy/COMPANY-CHARTER.md`)
- **Phase gates** for any 3+ phase build
- **No bloat commits** — every line justifies its existence
- **No speculative code** — build exactly what's needed now
- **Read before writing** — existing patterns first, new ones never

### Voice rules apply to commit messages too

No em dashes. No "great refactor", no "fixed a bunch of stuff." Every
commit message should answer "what changed and why" in 1-3 sentences.

### CLAUDE.md updates

Append to the "Recent decisions log" in your CLAUDE.md whenever:
- A non-trivial dependency is added or removed
- A migration runs in production
- A cross-app contract changes
- An architectural decision is made (Type 2 or Type 3 per `DECISION-FRAMEWORK.md`)

### Build verification before every push

```bash
rm -rf .next
npm run build
# Must succeed cleanly. No "I'll fix it on Vercel."
```

---

## Phase 4 — Ship (deploy + verify)

See `procedure/DEPLOY-PROCEDURE.md` for the standard deploy flow.

**Pre-launch checklist** for new sites — see
`procedure/BRAND-CONSISTENCY-CHECKLIST.md`.

**Post-deploy verification**:
- Site loads at production domain
- All routes return 200 (or redirect cleanly)
- No console errors in browser
- Vercel "Production" deployment matches `git rev-parse HEAD`

---

## Phase 5 — Operate (the steady state)

### Update cadence

- `@level9/brand` package updates: pull when needed, no scheduled cadence
- Site content: ad-hoc as needed
- Decision log: append to CLAUDE.md every time a non-trivial decision
  happens

### Weekly hygiene (optional, recommended)

- Glance at Vercel project list — anything new + unintentional?
- Glance at GitHub repo list — same
- Update audit docs (`VERCEL-AUDIT.md`, `SUPABASE-AUDIT.md`) when project
  inventory changes

### Quarterly hygiene

- Run a full sync verification (git HEAD vs Vercel deployed commit per site)
- Re-read `NORTHSTAR.md` and ensure all live work still maps to it
- Review `ARCHITECTURE-MAP.md` for staleness

---

## Phase 6 — Retire (the cleanup)

When a project, site, or app is being sunset:

See `procedure/DATA-CLEANUP-PROCEDURE.md` for the canonical retirement
flow (inventory → soft-delete → observe 7 days → hard-delete).

**Worked example**: the old `commandos` retirement (April 2026) is
documented in `VERCEL-AUDIT.md` + `SUPABASE-AUDIT.md`.

---

## What NOT to do

### Don't skip Phase 1

The biggest waste of time at Level9 is building a thing that didn't need
to exist. Always frame the project before scaffolding it.

### Don't deviate from the canonical scaffold without a documented reason

If a site needs a different setup than the standard, write down why in
CLAUDE.md "Architecture" section. Future agents need to know if a
deviation is intentional or a bug.

### Don't let CLAUDE.md drift

A stale CLAUDE.md is worse than no CLAUDE.md — it actively misleads
future agents. Update at the same time you make the change, not
"eventually."

### Don't ship without the evidence test

"It deployed" is not "it works." A real human-runnable verification
step is the only thing that counts as done.
