# Vercel Project Audit — last updated 2026-04-18

Inventory of all Vercel projects under team `decisioning-v1` (team_UGKVZSfkGnRYZEo0Y2A2XhQk).

## Cleanup history

**2026-04-18 — initial audit (16 projects)** identified 5 scratch projects safe to delete + 1 legacy alias.

**2026-04-18 — cleanup pass:**
- ✅ DELETED `project-z3yxy` (no deployments, no domains, auto-named scratch)
- ✅ DELETED `client-deliverables` (only `*.vercel.app`)
- ✅ DELETED `deliverable` (only `*.vercel.app`)
- ✅ DELETED `sasha-run1` (scratch)
- ✅ DELETED `sasha-run2` (scratch)
- 🔨 PENDING DELETE: `commandos` (older Vercel project at commandos.erichathaway.com).
  User confirmed no customers / no history. Domain being retired. Old project
  framework was Vite, last deploy March 2025. Canonical is `commandos-v2`
  (Next.js, serves commandos.level9os.com).

## Current keep list (10 projects after pending delete)

All projects below back live production domains. **Do not delete without explicit user sign-off.**

| Project | Production domain(s) | Notes |
|---|---|---|
| `level9os-site` | level9os.com | Marketing front, 4-pressure-point taxonomy. Consumes `@level9/brand` |
| `erichathaway-site` | erichathaway.com | Personal brand site (5 routes + cube-lab WIP). Consumes `@level9/brand` |
| `commandos-v2` | commandos.level9os.com | CommandOS dashboard (Next.js 16). Canonical |
| `linkupos-site` | linkupos.com + www.linkupos.com | LinkupOS LinkedIn signal product |
| `nextgenintern-site` | thenextgenintern.com + www.thenextgenintern.com | NextGenIntern education front |
| `coo-playbook` | thenewcoo.com + www.thenewcoo.com + playbook.erichathaway.com | COO Playbook front + AI Accountability Engine |
| `stratos-marketing` | stratos.lucidorg.com | StratOS marketing front |
| `stratos-app` | app.stratos.lucidorg.com | StratOS dashboard app |
| `stratos-results` | results.stratos.lucidorg.com | StratOS public results page |

## Still ambiguous (one)

| Project | Production domain(s) | Why it's ambiguous |
|---|---|---|
| `lucidorg-site` | only `*.vercel.app` (no `lucidorg.com`!) | This project has NO production domain. `lucidorg.com` does not point here. Likely safe to delete but unclear if user intends to use it later. **No urgency**. |

## How to delete (manual, since Vercel MCP has no delete tool)

In Vercel UI: open the project → Settings → bottom → "Delete Project" → type project name to confirm.
Or via CLI: `vercel projects remove <project-name>` (requires `vercel login`).

Domains attached to deleted projects need to be released first if you want to reuse them.

## Cross-reference

For Supabase cleanup tied to the old commandos project, see [SUPABASE-AUDIT.md](./SUPABASE-AUDIT.md).
