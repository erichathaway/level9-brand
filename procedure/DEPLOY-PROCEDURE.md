# Deploy Procedure — Level9 family sites

How sites in the Level9 family deploy. Applies to every Next.js site
consuming `@level9/brand` (level9os-site, erichathaway-site, and future
adopters).

---

## Standard auto-deploy (the happy path)

Every Vercel project in the family is wired to **auto-deploy from `main`**.

### To ship a change:

```bash
# 1. Make changes locally
git add <files>
git commit -m "What changed and why (no em dashes in commit messages)"

# 2. Verify build passes locally before pushing
rm -rf .next
npm run build
# Expect: green build, all routes prerender, no TS errors

# 3. Push to main
git push origin main

# 4. Vercel auto-builds + auto-deploys (~2 minutes)
# 5. Verify production
curl -I https://<domain>/
# Expect: HTTP 200
```

That's it. No manual deploy step. No `vercel deploy` CLI.

## Updating the shared package (`@level9/brand`)

When `@level9/brand` changes (new tokens, components, content):

```bash
# 1. Edit + commit + push level9-brand repo
cd ~/claude\ code\ 1/level9-brand
git add <files>
git commit -m "v0.X.Y: <what changed>"
git push origin main

# 2. In each consuming site, force-update the package
cd ~/claude\ code\ 1/<site>
npm install @level9/brand --force
# (--force needed because npm caches git refs)

# 3. Verify the site still builds
rm -rf .next && npm run build

# 4. Commit the package-lock.json bump
git add package-lock.json
git commit -m "Bump @level9/brand to v0.X.Y"
git push origin main

# 5. Vercel auto-deploys
```

⚠️ The `--force` is critical. Without it, npm will use the cached version
even though the git ref changed.

## Sync verification (anytime you need to confirm)

```bash
# Check git HEAD matches deployed commit
cd ~/claude\ code\ 1/<site>
GIT_SHA=$(git rev-parse HEAD)
echo "Local main: $GIT_SHA"

# Compare against Vercel's latest deploy commit
# (via Vercel MCP list_deployments OR the Vercel UI deployment list)
```

In sync = local HEAD SHA matches the deployed commit SHA from Vercel.

## When auto-deploy doesn't work

### Build failed in Vercel

1. Check Vercel dashboard → project → Deployments → click failed build
   → "View build logs"
2. Most common causes:
   - **`Cannot find module '@level9/brand/...'`** → site missing
     `transpilePackages: ["@level9/brand"]` in next.config.mjs
   - **`Type error: ... can only be iterated through when using
     '--downlevelIteration'`** → tsconfig.json missing `"target": "ES2022"`
   - **ESLint error from WIP file** → set `eslint.ignoreDuringBuilds: true`
     in next.config.mjs (but only if WIP file is intentional)
3. Fix locally, commit, push. New deploy starts automatically.

### Vercel deploy succeeded but site doesn't reflect changes

1. Hard refresh in browser (Cmd+Shift+R)
2. Check the deployed commit SHA matches your latest push (Vercel UI →
   project → top of page shows current production deployment)
3. Vercel CDN cache TTL is short — should propagate within 60 seconds.
   If still stale after 5 minutes, something's off. Check deployment
   target is "Production" not "Preview".

### `npm install --force` doesn't pull the latest brand package

```bash
# Nuclear option
rm -rf node_modules package-lock.json
npm install
```

Then commit + push the new lockfile.

## What NOT to do

- ❌ Don't `vercel deploy` manually — it bypasses the GitHub→Vercel
  integration and creates orphan deploys
- ❌ Don't push directly to main without local build verification
  (bloated rollbacks)
- ❌ Don't use `--no-verify` on git commits to skip hooks (hooks exist
  for reasons)
- ❌ Don't commit secrets/env vars (use Vercel env settings instead)
- ❌ Don't skip the `--force` flag when updating the shared package
  (silent staleness)

## Rollback

If a bad deploy goes live:

### Option A: Vercel UI rollback (fastest, 30 seconds)
1. Vercel dashboard → project → Deployments
2. Find the last known-good deployment
3. Click "..." → "Promote to Production"
4. Production now serves that deployment instantly
5. THEN fix the code locally + redeploy when ready

### Option B: git revert (cleaner audit trail)
```bash
git revert HEAD
git push origin main
# Vercel auto-deploys the revert
```

Option A is faster (no rebuild). Option B is more auditable. Use A
during incidents, B otherwise.

## Source

- Vercel project IDs + domains: `VERCEL-AUDIT.md`
- Per-site config: each site's `next.config.mjs` + `package.json`
