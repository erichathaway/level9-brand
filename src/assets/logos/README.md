# @level9/brand/assets/logos

Logo files + treatment conventions for the Level9 family.

## Per-entity logo treatments

### Eric Hathaway (personal portfolio)
- **Mark**: 3D extruded "E" in circle
- **Treatments**:
  - Amber Glow on dark backgrounds (default for erichathaway.com dark theme)
  - Silver on light backgrounds (light-mode pages, light OG images)
- **Sizes**:
  - 44px nav
  - 32px favicon
  - 56-60px trademark / inline-prose mention
  - 120px social avatar (LinkedIn, X, etc.)

### Level9OS umbrella
- **Mark**: Level9Mark compass treatment (gradient stops `#14082E` and `#041521`)
- **Treatments**:
  - Default dark surface
  - Inverted on light surface
- **Sizes**: same canonical breakpoints as personal

### Per-product variants
Each product carries its accent on its own logo treatment but the visual
mark inherits from the umbrella Level9 family.

| Product | Accent | Token |
|---------|--------|-------|
| StratOS | violet | `accent.violet` `#8b5cf6` |
| CommandOS | emerald | `accent.emerald` `#10b981` |
| OutboundOS | amber | `accent.amber` `#f59e0b` |
| LucidORG | cyan | `accent.cyan` `#06b6d4` |
| COO Playbook | slate | `accent.slate` `#64748b` |
| MAX | fuchsia | `accent.fuchsia` `#ec4899` |
| Vault (governance chassis) | red | `accent.red` `#ef4444` |

## File naming convention

`{entity}-{treatment}-{size}.{format}`

Examples:
- `erichathaway-amber-glow-44.svg`
- `erichathaway-silver-32.png`
- `level9os-mark-120.svg`
- `stratos-violet-56.svg`

## Sync to consumer sites

Consumer sites import via the npm package or the `sync-brand-logos`
postinstall step. Never duplicate logo files into a consumer site's
`/public/` root. Re-sync if the consumer site is on an older brand-package
version.

5 sites currently on v0.11.0; bump to v0.19.0+ pending per
HANDOFF-PROMPT-2026-05-04.md "Real work" list.
