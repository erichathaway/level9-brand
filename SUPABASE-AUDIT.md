# Supabase Audit — `cmd_*` tables (CommandOS namespace)

**Created**: 2026-04-18
**Last updated**: 2026-04-18 (cleanup pass 1 executed)
**Trigger**: Old `commandos` Vercel project at `commandos.erichathaway.com` was
retired in favor of `commandos-v2` at `commandos.level9os.com`. This audit
identifies which Supabase tables in the CommandOS namespace are referenced
only by the old codebase.

## Cleanup status

### ✅ HARD-DROPPED (4 tables — were 0 rows, 0 inserts ever)

| Table | Notes |
|---|---|
| `cmd_cross_project_deps` | Empty schema cruft. Successor in v2: `cmd_project_dependencies`. |
| `cmd_master_plan`         | Empty schema cruft. No v2 successor. Dropped CASCADE (had FK from cmd_project_plans). |
| `cmd_plan_items`          | Empty schema cruft. No v2 successor. |
| `cmd_suggestions`         | Empty schema cruft. No v2 successor. |

### 🟡 SOFT-ARCHIVED via rename (4 tables — observe 7 days, then DROP)

| Original name | Renamed to | Why soft-delete | Hard-drop after |
|---|---|---|---|
| `cmd_north_star` | `_archive_cmd_north_star` | ~1 row remained, low value | 2026-04-25 |
| `cmd_project_plans` | `_archive_cmd_project_plans` | ~2 rows remained, low value | 2026-04-25 |
| `cmd_outputs` | `_archive_cmd_outputs` | 61 rows of historical agent task outputs from old commandos era. Replaced in v2 by `cmd_summaries`. Last write early Apr 2026. | 2026-04-25 |
| `cmd_token_usage` | `_archive_cmd_token_usage` | 295 rows of historical token cost data from old commandos era. Replaced in v2 by `cmd_routing_log` + `cmd_budgets`. | 2026-04-25 |

### Phase 4 — final hard-drop SQL (run on or after 2026-04-25 if no errors)

```sql
DROP TABLE IF EXISTS _archive_cmd_north_star;
DROP TABLE IF EXISTS _archive_cmd_project_plans;
DROP TABLE IF EXISTS _archive_cmd_outputs;
DROP TABLE IF EXISTS _archive_cmd_token_usage;
```

### Rollback (if anything in commandos-v2, n8n, or linkupos complains during the 7-day window)

```sql
ALTER TABLE _archive_cmd_north_star    RENAME TO cmd_north_star;
ALTER TABLE _archive_cmd_project_plans RENAME TO cmd_project_plans;
ALTER TABLE _archive_cmd_outputs       RENAME TO cmd_outputs;
ALTER TABLE _archive_cmd_token_usage   RENAME TO cmd_token_usage;
```

## Tables RETAINED — actively used by both old + new (8 tables — DO NOT TOUCH)

| Table | Notes |
|---|---|
| `cmd-attachments` | File attachments on tasks/projects |
| `cmd_activity_log` | Activity audit trail. Also receives `event_type='token_usage'` events from commandos-v2. |
| `cmd_agents` | Agent registry |
| `cmd_decisions` | Decision records |
| `cmd_governance_rules` | Governance policy rules |
| `cmd_milestones` | Project milestones |
| `cmd_projects` | Project records |
| `cmd_tasks` | Tasks (also written to by linkupos via Postgres trigger) |

## New-only tables in commandos-v2 (8 tables — FYI not for deletion)

`cmd_budgets` · `cmd_decision_learning` · `cmd_governance_agents` ·
`cmd_officer_reviews` · `cmd_project_dependencies` · `cmd_routing_log` ·
`cmd_summaries` · `cmd_trust_scores`

`cmd_routing_log` is the canonical token-tracking ledger now (`input_tokens`,
`output_tokens`, `cost_estimate_usd`, etc.) — used by the
`use-token-usage` React hook in commandos-v2.

## Methodology + scope limits

- Source code grep across both repos: `commandos/` (old, Vite, March 2025)
  and `commandos-v2/` (new, Next.js 16, current canonical).
- Pattern matched: `.from('cmd_...')` and `.from('cmd-...')` in `src/`,
  PLUS exhaustive grep across migrations, scripts, schemas, configs, docs.
- Cross-checked `linkupos-site/src/` and `linkupos-site/n8n-export/` for
  any external writes to the candidate tables — none found.
- **Limitations**:
  - No live n8n NAS access — workflow JSON on the NAS could in principle
    contain references not in the local n8n-export folder. The 7-day
    observation window is the safety net for this.
  - The rename pattern (`_archive_*`) breaks any hidden writer immediately
    and visibly. If a hidden writer exists, an error appears in the
    consuming app's logs within minutes. Rollback is one ALTER away.

## Decision log

- **2026-04-18 cleanup pass 1**: Dropped 4 empty tables, archived 4 tables
  with historical data. Per Eric's "no customers, no history" stance for the
  old commandos project, this is acceptable risk. The renaming approach
  preserves data for 7 days as a safety net.
