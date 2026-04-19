# Data Cleanup Procedure — retiring old projects safely

The pattern Level9 uses when retiring an old project, sunsetting a
product, or cleaning up cruft. Codified from the April 2026 retirement
of the old `commandos` project (commandos.erichathaway.com → commandos-v2
at commandos.level9os.com).

The principle: **inventory → soft-delete → observe → hard-delete**.
Never skip the soft-delete step on anything irreversible.

---

## Phase 0 — Inventory (read-only, always safe)

Map what depends on what BEFORE touching anything.

### Code references

```bash
# Grep every repo for references to the thing being retired
cd ~/claude\ code\ 1
for repo in level9os-site erichathaway-site commandos-v2 linkupos-site \
            coo-playbook-app nextgenintern-site stratos-marketing \
            stratos-app stratos-v2; do
  echo "=== $repo ==="
  grep -rln "<thing-to-retire>" "$repo" \
    --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git \
    --exclude-dir=backups --exclude-dir=cleaner-log 2>/dev/null
done
```

### Vercel inventory

```
Use Vercel MCP list_projects + get_project per project.
Look for: domains, latestDeployment, framework.
Ambiguous projects → flag for explicit decision.
```

### Supabase inventory (if database tables involved)

In Supabase SQL Editor, run:

```sql
-- Get row count + activity stats per table candidate
SELECT
  c.relname AS table_name,
  c.reltuples::bigint AS approx_rows,
  pg_size_pretty(pg_total_relation_size(c.oid)) AS total_size,
  s.n_tup_ins AS inserts_ever,
  s.n_tup_upd AS updates_ever,
  s.n_tup_del AS deletes_ever,
  s.last_autovacuum,
  s.last_autoanalyze
FROM pg_class c
LEFT JOIN pg_stat_user_tables s ON s.relname = c.relname
WHERE c.relname IN ('table1', 'table2', ...)
ORDER BY c.relname;
```

### n8n workflow check (if applicable)

Grep `linkupos-site/n8n-export/` (or wherever exported workflow JSON lives)
for table/URL references. Note: live workflows on the NAS may differ from
local exports — observation window catches discrepancies.

---

## Phase 1 — Categorize what's safe vs ambiguous

After inventory, sort each item into:

| Category | Action |
|---|---|
| **Empty / never used** (0 rows + 0 inserts ever, OR no domain + no recent activity) | Hard-delete safe |
| **Has data but only old code references it** | Soft-delete (rename) |
| **Has data + recent activity** | DO NOT DELETE — find the writer first |
| **Production-coupled** (live domain, customer-facing) | DO NOT DELETE without explicit user sign-off |

Document the categorization in an audit doc (e.g., `SUPABASE-AUDIT.md`,
`VERCEL-AUDIT.md`).

---

## Phase 2 — Soft-delete the ambiguous ones

Renaming makes any hidden writer error VISIBLY in logs but is reversible
in 5 seconds.

### Vercel

For projects with no production domain → just delete (they're already
isolated).

For projects with a domain you're sure no one uses externally:
- **Option A (safe)**: Move the domain to the canonical project first,
  then delete the old project. Domain keeps working.
- **Option B (clean)**: Delete the old project. The domain stops resolving.
  Use only if you're certain no external links / bookmarks / customer
  comms reference it.

### Supabase tables

```sql
-- Soft-delete pattern: rename instead of dropping
ALTER TABLE old_table RENAME TO _archive_old_table;
```

### Code

Don't delete files immediately. Keep them in git history (so deletion
is reversible via `git revert`). Delete the on-disk files in the same
commit as renaming the table → if rolling back, both restore together.

---

## Phase 3 — Observe (7 days minimum)

Watch for errors:
- Vercel runtime logs (per project)
- Supabase Database → Logs (filter for ERROR)
- n8n execution logs on NAS (per workflow)
- Application error tracking (if wired up)

If anything errors with `relation "..." does not exist` or `404 Not Found`
or similar → **rollback immediately**:

```sql
-- Supabase rollback (example)
ALTER TABLE _archive_old_table RENAME TO old_table;
```

```
Vercel rollback: re-create project from the still-existing GitHub repo,
re-attach the domain.
```

The rollback should take <5 minutes. The cost of waiting 7 days vs.
deleting immediately is essentially nothing.

---

## Phase 4 — Hard delete (after observation window)

If 7 days pass with zero errors, the soft-deleted items are confirmed
orphan. Hard-delete:

```sql
DROP TABLE IF EXISTS _archive_old_table;
```

Update the audit doc to reflect "Phase 4 complete on YYYY-MM-DD".

---

## What NOT to do

### Don't skip Phase 0 (inventory)

Most cleanup mistakes come from "obvious" deletions that turn out to
have a hidden dependency. Never skip the inventory step.

### Don't skip Phase 2 (soft-delete) on irreversible operations

Hard-dropping a Supabase table = data gone forever (PostgreSQL doesn't
recover dropped tables, only point-in-time recovery for paid plans).
Renaming costs nothing. Always rename first.

### Don't compress the observation window for things touching production

7 days minimum on anything that could affect a live system. The temptation
to "just drop it" is almost always misplaced — observation reveals
hidden dependencies that source-code grep doesn't find (n8n workflows,
cron jobs, manual scripts, Postgres triggers).

### Don't trust agent claims of "zero references" without verification

Agents (Claude included) can grep the wrong patterns or miss the wrong
directories. Always run a broader grep yourself or have the agent grep
twice with different patterns. The 7-day observation window is the
ultimate safety net.

### Don't bypass the audit trail

Document each phase in the relevant audit doc:
- `VERCEL-AUDIT.md` for Vercel project lifecycle
- `SUPABASE-AUDIT.md` for table lifecycle
- A new doc per major project retirement (e.g., the old commandos
  retirement is documented across both)

---

## Worked example: old commandos retirement (April 2026)

**Phase 0**: Inventoried both `commandos` (old) and `commandos-v2` repos.
Identified 8 cmd_* tables that old commandos referenced. Categorized:
4 empty, 4 with historical data only.

**Phase 1**: Categorized:
- 5 Vercel projects safe to hard-delete (no domains)
- 1 Vercel project to delete after user confirmation (commandos.erichathaway.com)
- 4 Supabase tables hard-delete safe (0 rows, 0 inserts ever)
- 4 Supabase tables soft-delete (small data, replaced by v2 successors)

**Phase 2**: Executed:
- 5 Vercel projects deleted
- Old commandos Vercel project deleted (after user said "no customers, no history")
- 4 Supabase tables hard-dropped (`cmd_cross_project_deps`, `cmd_master_plan`,
  `cmd_plan_items`, `cmd_suggestions`)
- 4 Supabase tables renamed to `_archive_*` (`cmd_north_star`,
  `cmd_project_plans`, `cmd_outputs`, `cmd_token_usage`)

**Phase 3**: 7-day observation window starts 2026-04-18.

**Phase 4**: Scheduled for on/after 2026-04-25.

Audit docs: `VERCEL-AUDIT.md`, `SUPABASE-AUDIT.md`.
