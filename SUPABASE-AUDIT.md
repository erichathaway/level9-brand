# Supabase Audit — `cmd_*` tables (CommandOS namespace)

**Created**: 2026-04-18
**Trigger**: Old `commandos` Vercel project at `commandos.erichathaway.com` is being
retired in favor of `commandos-v2` at `commandos.level9os.com`. This audit
identifies which Supabase tables in the CommandOS namespace are referenced
only by the old codebase and may be safe to retire.

## Scope + method

- Source code grep across both repos: `commandos/` (old, Vite, March 2025)
  and `commandos-v2/` (new, Next.js 16, current canonical).
- Pattern matched: `.from('cmd_...')` and `.from('cmd-...')` in `src/`.
- **Limitations** (read this before acting):
  - Source code only. No visibility into n8n workflow JSON on the NAS.
  - No visibility into other Level9 apps that may cross-read CommandOS tables
    (e.g. `linkupos-site` has documented Postgres triggers writing to `cmd_tasks`).
  - No visibility into manual scripts or one-off jobs.
  - This audit tells you what the OLD commandos source uniquely referenced. It
    does NOT prove nothing else writes to those tables.

## Findings

### Used by BOTH codebases — DO NOT TOUCH (8 tables)

| Table | Notes |
|---|---|
| `cmd-attachments` | File attachments on tasks/projects |
| `cmd_activity_log` | Activity audit trail |
| `cmd_agents` | Agent registry |
| `cmd_decisions` | Decision records |
| `cmd_governance_rules` | Governance policy rules |
| `cmd_milestones` | Project milestones |
| `cmd_projects` | Project records |
| `cmd_tasks` | Tasks (also written to by linkupos via Postgres trigger) |

### Old-only candidates — investigate before removing (8 tables)

| Table | Likely v2 successor | Confidence |
|---|---|---|
| `cmd_cross_project_deps` | `cmd_project_dependencies` (in v2) | High — naming pattern matches |
| `cmd_master_plan` | (no clear successor) | Medium — may have moved to a JSON column or doc |
| `cmd_north_star` | (no clear successor) | Medium — concept may have been folded into projects |
| `cmd_outputs` | `cmd_summaries` or `cmd_routing_log` (in v2) | Low |
| `cmd_plan_items` | (no clear successor) | Medium — planning model may have changed |
| `cmd_project_plans` | (no clear successor) | Medium — same |
| `cmd_suggestions` | (no clear successor) | Low |
| `cmd_token_usage` | `cmd_routing_log` + `cmd_budgets` (in v2) | High — same purpose, new schema |

### New-only in commandos-v2 — FYI, NOT for deletion (8 tables)

`cmd_budgets` · `cmd_decision_learning` · `cmd_governance_agents` ·
`cmd_officer_reviews` · `cmd_project_dependencies` · `cmd_routing_log` ·
`cmd_summaries` · `cmd_trust_scores`

## Recommended cleanup procedure (zero data loss risk)

The 8 candidates are **suspect but not proven orphan**. Don't `DROP TABLE`
without observation. Use this 4-phase soft-delete approach:

### Phase A — Inspect each candidate in Supabase Studio

Open https://supabase.com/dashboard → table editor. For each of the 8 tables:

1. **Row count** — if 0 rows, very low risk
2. **Most recent insert/update** — sort by `created_at DESC` or `updated_at DESC`
   if those columns exist, otherwise by primary key DESC
3. **Recent activity heuristic**:
   - No writes in 90+ days → low risk
   - Writes within last 30 days → SOMETHING is writing to this table; find it
     before deleting
   - Stale data only → safe candidate for archival

Record findings in this doc under each table row.

### Phase B — Soft-delete via rename

For each table confirmed truly orphan in Phase A, run in Supabase SQL Editor:

```sql
ALTER TABLE cmd_north_star RENAME TO _archive_cmd_north_star;
```

(Repeat per table. Adjust name as appropriate.)

This:
- Breaks any hidden writer immediately and visibly (the writer errors with
  "relation does not exist")
- Shows up in Supabase logs / app error logs within minutes if anything is
  still using the table
- Is reversible in ~5 seconds: `ALTER TABLE _archive_cmd_north_star RENAME TO cmd_north_star;`

### Phase C — Observe for 7 days

Watch:
- Supabase logs (Database → Logs)
- Each consuming app's error logs (Vercel runtime logs for commandos-v2,
  linkupos-site, anything else under `decisioning-v1`)
- n8n execution logs on NAS (if you have access)

If nothing complains in 7 days, the table is truly orphan.

### Phase D — Hard delete

```sql
DROP TABLE _archive_cmd_north_star;
```

Now it's gone. Backups in Supabase point-in-time recovery (PITR) cover you
for 7-30 days depending on plan if you ever need to undo.

## What I CAN'T do from this side

- Query Supabase directly (no service role key in this environment)
- Read n8n workflow JSON on your NAS (no NAS MCP)
- See cross-app Postgres triggers (would need direct DB access)
- Delete tables (you do that in Supabase Studio)

## What I CAN do as you progress

- Update this doc with findings as you record them per table
- Generate `RENAME TO _archive_*` SQL statements for any subset you want to
  soft-delete in batch
- Generate the matching `RENAME` rollback statements as a safety net

Reply with Phase A findings (or just "drop them all") and I'll generate the SQL.
