# Brand audit, 2026-04-24

Scope: erichathaway-site (personal portfolio, `eric-personal` entity) and
level9os-site (Level9OS LLC umbrella site). Read-only audit against the
canonical `@level9/brand` package (v0.10.0).

## Summary

15 findings across 6 categories. 4 are HIGH priority (user-facing or spine
violation). 11 are LOW priority (code-local, non-visible, or known deferrals).

Breakdown:
- erichathaway-site: 3 HIGH, 4 LOW
- level9os-site: 1 HIGH, 7 LOW

No logo drift found on either site. Both consume `/public/brand/logos/` via
the canonical `sync-brand-logos` postinstall step. No en-dash violations in
level9os-site; only one known-deferred en dash in erichathaway-site.

## erichathaway-site

### High priority

- **Spine + LLC-separation violation: "Founder, LucidORG . CEO, Level9"** at
  `erichathaway-site/src/app/opengraph-image.tsx:10` (OG alt text) and
  `erichathaway-site/src/app/opengraph-image.tsx:102` (visible OG image copy).
  Two problems: (a) "CEO, Level9" is on the canonical spine-violation list
  (every social share from erichathaway.com currently broadcasts it); (b)
  per `@level9/brand/legal/attribution.ts`, erichathaway-site is attributed
  to `eric-personal` (individual, not an LLC), so welding a corporate title
  into the OG card conflates Eric-the-person with the LucidORG LLC and
  Level9OS LLC operating entities. Recommendation: replace with a
  non-LLC-branded tagline (e.g. "Operator. Builder. Founder.") or
  position-neutral copy Eric approves. Do NOT autofix. Requires Eric
  decision on new wording.
- **Banned phrase in user-visible copy: "circle back"** at
  `erichathaway-site/src/app/about/page.tsx:181` ("Eventually you circle
  back to where you started."). Literal match against
  `voiceRules.BANNED_PHRASES`. Arguably idiomatic use (return journey, not
  corporate-speak), but it is the exact banned token. Recommendation:
  flag for Eric to decide intentional-literary vs banned-phrase. Do NOT
  autofix.
- **Em dash in user-facing copy on /architect/cube-lab** at
  `erichathaway-site/src/app/architect/cube-lab/page.tsx:21` ("The 3D
  isometric building you liked - now loaded with the whole stack..."). The
  em dash renders to DOM in the V2 card desc. Note: erichathaway-site's
  CLAUDE.md marks `/architect/cube-lab/*` as another agent's WIP and
  off-limits. Flagging for coordination, not auto-fix.

### Low priority

- **Non-canonical hex `#060610`** used as a page background in
  `src/app/tiles/page.tsx:27` (route now resolved via brand package for
  components but the host page still inlines the "near-root" dark shade).
  Should map to `bg.root` (`#030306`) or an explicit `bg.surfaceDark`
  token once one exists. Code-local, not user-visible drift (the canonical
  `#030306` is within two LSB of the current value).
- **Non-canonical hex `#a78bfa`** at `src/app/tiles/page.tsx:39`. Close
  to the canonical `accent.violet` `#8b5cf6` but a softer tint. Use
  `accent.violet` directly or a derived soft variant.
- **Known deferred: en dash** at
  `src/app/architect/cube-lab/taxonomy.ts:103` ("0-1000 score" uses en
  dash). Already tracked in erichathaway-site CLAUDE.md "Deferred
  findings" section. Not newly introduced by this audit.
- **bigesessions platform colors** (`#1DB954`, `#FF0000`, `#FF5500`,
  `#FA243C`) at `src/components/bigesessions/SpotifyLink.tsx:29-32`.
  These are third-party brand colors (Spotify/YouTube/Soundcloud/Apple),
  not Level9 brand drift. Out of scope. No action.

## level9os-site

### High priority

- **Local product roster duplicates canonical content** at
  `level9os-site/src/components/FloatingNav.tsx:30-37`. The FloatingNav
  defines a local `products` array with name / color / href / image per
  product, instead of importing from
  `@level9/brand/content/products`. The site already uses the canonical
  array elsewhere (`src/app/page.tsx:13`, `src/app/products/page.tsx:12`),
  so this one is drift. Risk: if product names, colors, or slugs change
  in the canonical roster, the nav silently diverges. Recommendation:
  re-derive nav entries from `products` + add site-specific
  icon/desc/image overrides as a small local map keyed by product id.

### Low priority

- **Hardcoded LLC attribution in custom SiteFooter** at
  `level9os-site/src/components/SiteFooter.tsx:38, 81` ("Level9OS LLC").
  The text is correct per `@level9/brand/legal/attribution.ts`
  (`level9os-site` -> `level9os` entity), but the footer doesn't resolve
  it dynamically via `getEntityKeyForSite()` or use the canonical
  `@level9/brand/legal` `LegalFooter` the way erichathaway-site does.
  Structural drift, not substantive. CLAUDE.md flagged this as deferred
  ("brand-package task first"); that deferral is now stale since
  `@level9/brand/legal` is live. Recommendation: future cleanup pass to
  migrate SiteFooter to the canonical LegalFooter.
- **Non-canonical hex `#060610`** appears 9+ times as an inline section
  `background` across `app/page.tsx`, `app/partnerships/page.tsx`,
  `app/about/page.tsx`, `app/architecture/page.tsx`, `app/products/page.tsx`.
  Same drift as erichathaway-site (LOW #1). Should be `var(--bg-root)` or
  the `bg.root` token. 9-instance repetition warrants a single-file
  cleanup pass.
- **Non-canonical hex `#0a0a14`** (darker surface) used as card
  backgrounds across 15+ locations in `app/page.tsx`, `app/architecture/page.tsx`,
  `app/partnerships/page.tsx`, `app/products/page.tsx`. Close to canonical
  `bg.surface` `#0d0d18` but not identical. Visual drift is subtle; token
  adoption would tighten consistency.
- **Non-canonical orange `#fb923c`** at `src/app/how-we-work/page.tsx:62,
  131`. No orange token in `@level9/brand/tokens/colors`. Pending Eric
  decision per level9os-site CLAUDE.md "decisions pending Eric input"
  section. Not newly introduced.
- **Non-canonical orange `#f97316`** at `src/app/how-we-work/page.tsx:100`.
  Same as above (different shade of orange). Add a canonical token or
  drop both. Pending Eric.
- **Non-canonical `#1a1a2e` navy** at `src/components/FloatingNav.tsx:112,
  128`. Nav button background. One inline location; migrate to
  `bg.elevated` (`#14142a`) or keep intentional as a nav-only shade.
- **Non-canonical `#14082E` / `#041521`** gradient stops at
  `src/app/opengraph-image.tsx:25, 39` and the Level9Mark component at
  `src/components/motion/Level9Mark.tsx:28, 29`. These are the canonical
  Level9Mark compass treatment colors (mirror in
  `src/app/icon.svg` and `src/app/apple-icon.svg`). Intentional brand
  mark palette. No action.

## Recommended next actions

1. Replace OG-image "CEO, Level9" string in erichathaway-site with
   Eric-approved non-LLC-branded copy. Unblocks every future social
   share of erichathaway.com. (HIGH #1)
2. Migrate `level9os-site/src/components/FloatingNav.tsx` products array
   to import the canonical roster from `@level9/brand/content/products`,
   overriding only icon / description / image per id. Eliminates the
   nav-vs-canonical drift risk. (HIGH level9os #1)
3. Get Eric's decision on the two "soft" voice-rule hits in
   erichathaway-site: `about/page.tsx:181` "circle back" (literary vs
   banned phrase) and `cube-lab/page.tsx:21` em dash (WIP agent
   coordination). Both HIGH but require human judgment, not autofix.

Deferred cleanups (LOW) are good candidates for a consolidated
"canonical-token adoption" pass once the above three HIGH items land.
