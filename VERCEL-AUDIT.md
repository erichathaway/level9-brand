# Vercel Project Audit — 2026-04-18

Inventory of all 16 Vercel projects under team `decisioning-v1` (team_UGKVZSfkGnRYZEo0Y2A2XhQk).
Each project categorized as KEEP, DELETE, or NEEDS DECISION based on whether it backs a live
production domain.

## ✅ KEEP — backing live production domains (9)

| Project | Production domain(s) | Notes |
|---|---|---|
| `level9os-site` | level9os.com | Marketing front, recently rebuilt around 4 pressure points |
| `erichathaway-site` | erichathaway.com | Personal brand site (home + about + architect + sessions + contact) |
| `commandos-v2` | commandos.level9os.com | CommandOS dashboard. **User confirmed keep.** |
| `linkupos-site` | linkupos.com + www.linkupos.com | LinkupOS LinkedIn signal product (live) |
| `nextgenintern-site` | thenextgenintern.com + www.thenextgenintern.com | NextGenIntern education front |
| `coo-playbook` | thenewcoo.com + www.thenewcoo.com + playbook.erichathaway.com | COO Playbook front + AI Accountability Engine |
| `stratos-marketing` | stratos.lucidorg.com | StratOS marketing front |
| `stratos-app` | app.stratos.lucidorg.com | StratOS dashboard app |
| `stratos-results` | results.stratos.lucidorg.com | StratOS public results page |

## ❌ SAFE TO DELETE — no production domain, scratch projects (5)

| Project | Created | Domains | Reason to delete |
|---|---|---|---|
| `project-z3yxy` | 2026-03-12 | None | NO deployments, NO domains, auto-generated name. Pure scratch. |
| `client-deliverables` | 2026-04-12 | only `*.vercel.app` | Throwaway project, no production domain |
| `deliverable` | 2026-04-12 | only `*.vercel.app` | Same — throwaway |
| `sasha-run1` | 2026-04-12 | only `*.vercel.app` | Per memory: Sasha consulting work, scratch |
| `sasha-run2` | 2026-04-12 | only `*.vercel.app` | Same — scratch |

## ⚠️ NEEDS YOUR DECISION (2)

| Project | Production domain(s) | Why it's ambiguous |
|---|---|---|
| `commandos` (older project) | **commandos.erichathaway.com** | This is the OLDER commandos project at a different subdomain (erichathaway.com vs level9os.com). User confirmed only commandos.level9os.com is in use. **Is commandos.erichathaway.com still needed?** If no, delete this project. |
| `lucidorg-site` | only `*.vercel.app` (no `lucidorg.com`!) | This project has NO production domain. Where does `lucidorg.com` actually point? If somewhere else (or nowhere), this is safe to delete. If you intend lucidorg.com to point HERE eventually, keep. |

## Recommended action

1. **Delete the 5 safe-to-delete projects now**: `project-z3yxy`, `client-deliverables`, `deliverable`, `sasha-run1`, `sasha-run2`
2. **Decide on the 2 ambiguous**:
   - Confirm if `commandos.erichathaway.com` is needed — if not, delete `commandos` project
   - Confirm where `lucidorg.com` points — if not at `lucidorg-site`, delete that project
3. **Final state**: 9 keep + 0 to maybe 2 conditional = clean slate of ~9-11 active Vercel projects

## How to delete

In Vercel UI: Settings → General → Delete Project (at the bottom).
Or via CLI: `vercel projects remove <project-name>`.

Domains attached to deleted projects need to be released first if you want to reuse them.
