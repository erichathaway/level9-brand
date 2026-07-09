---
id: LVL9-BRAND-BRAND-CONSISTENCY-CHECKLIST
title: "Brand Consistency Checklist — pre-launch QA for any Level9 family site"
version: "0.1"
effective: 2026-04-18
last_verified: 2026-05-19
owner: Eric Hathaway
status: live
review_cadence: quarterly
audience: private
authority: brand
tags:
  - section:brand
  - audience:private
  - layer:L10-brand
  - type:md
  - authority:brand
  - origin:ai-drafted
  - topic:brand-identity
  - topic:agent-config
---
# Brand Consistency Checklist — pre-launch QA for any Level9 family site

Run this checklist before any new site goes live. Run it again any time
a major page redesign ships. Codified from the rebuild of level9os and
erichathaway sites in April 2026.

---

## ✅ Visual

### Colors
- [ ] No hardcoded hex codes for brand colors. Use semantic Tailwind classes
      (`bg-decide`, `text-execute`) or CSS vars (`var(--violet)`)
- [ ] Pressure-point colors used correctly (don't use violet for an
      Execute-pressure-point card)
- [ ] Soft variants used for tints/glows (not full-opacity colors)
- [ ] Background hierarchy: `bg-root` (page) → `bg-surface` (cards) →
      `bg-elevated` (modals)

### Typography
- [ ] No `leading-[X]` value below 1.05 on any heading (descender clipping)
- [ ] Display headlines use clamp-based fluid sizing
      (`text-display-hero`, `text-display-section`)
- [ ] Section labels use the canonical pattern: `text-label-md` or
      `tracking-wide-mono`
- [ ] Editorial italic uses `font-editorial` class (Playfair Display)

### Logos
- [ ] All product logos sourced from `@level9/brand/assets/logos/<brand>/`
- [ ] No deprecated logo files in `public/` (delete as part of migration)
- [ ] Logo sizes follow the canonical set: chip / square / wordmark / mini
- [ ] StratOS uses circular treatment (always round, no chip)

### Motion
- [ ] All scroll-triggered reveals use `RevealMask` from
      `@level9/brand/components/motion`
- [ ] All counters use `Counter` (not custom number tween logic)
- [ ] All hover-tilt cards use `MagneticCard`
- [ ] Cursor gradient + live ticker present where appropriate

---

## ✅ Voice + copy

### Hard rules (lint at write time via `voiceRules.ts`)
- [ ] Zero em dashes (`—`) in any user-facing text
- [ ] Zero en dashes (`–`)
- [ ] Zero double-hyphens (`--`)
- [ ] No banned phrases ("great post", "leverage synergies", "circle back",
      "let's unpack", "in today's fast-paced world", etc.)

### Soft rules
- [ ] Numerals not spelled out in product copy ("20 years" not "twenty")
- [ ] Contractions used for warmth where natural ("we're" not "we are")
- [ ] Sentence pivots use periods or colons, not em dashes
- [ ] Active voice ("we built" not "was built")
- [ ] Specific over general (named companies, real numbers, real artifacts)

### Brand thesis alignment
- [ ] Copy connects to the operational layer thesis somewhere visible
- [ ] No "AI replaces people" framing — always "augments"
- [ ] No "AI to make money" framing — we build the half it all runs on
- [ ] Pressure points referenced by canonical names (Decide / Coordinate /
      Execute / Measure)

---

## ✅ Content + data

- [ ] Product references pull from `@level9/brand/content/products` (not
      hardcoded strings)
- [ ] Pressure-point references pull from `@level9/brand/content/pressurePoints`
- [ ] Stack-layer references pull from `@level9/brand/content/stack`
- [ ] Playbook-domain references pull from `@level9/brand/content/playbookDomains`
- [ ] Cross-product links use the canonical domain (commandos.level9os.com,
      not commandos.erichathaway.com)
- [ ] No broken external links (check with link checker)

---

## ✅ Layout + structure

- [ ] FloatingNav present + correctly configured for this site
- [ ] Section padding uses canonical pattern (`py-24 sm:py-32` for
      standard sections)
- [ ] Container widths use canonical pattern (`max-w-6xl mx-auto px-6 sm:px-12`)
- [ ] Footer present + uses `FooterPattern` from
      `@level9/brand/components/layout` (when migrated)
- [ ] All sections use `SectionHeader` for consistent eyebrow + h2 + sub
      structure (when migrated)

---

## ✅ Mobile responsiveness

- [ ] Test on phone (real device or browser dev tools, 375px width)
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px (WCAG minimum)
- [ ] Hamburger nav works
- [ ] Hero text readable at smallest breakpoint
- [ ] Cards stack cleanly on narrow viewport

---

## ✅ Performance + build

- [ ] `npm run build` succeeds locally without warnings (or only
      acceptable warnings like img-element)
- [ ] All routes prerender as static (`○ (Static)` in build output)
- [ ] First-load JS under 150 kB per route (check build output)
- [ ] No console errors in browser dev tools
- [ ] Lighthouse Performance score > 85 (mobile)
- [ ] Lighthouse Accessibility score > 90

---

## ✅ Deploy verification

After deploy:

- [ ] Production URL returns HTTP 200
- [ ] Vercel deployed commit SHA matches `git rev-parse HEAD`
- [ ] All major routes load in production
- [ ] Site favicon + Apple touch icon load correctly
- [ ] OG image loads (test with https://www.opengraph.xyz/)
- [ ] No errors in Vercel runtime logs after first 5 minutes

---

## ✅ Documentation

- [ ] CLAUDE.md updated with current state (live URL, routes, recent decisions)
- [ ] If new site: added to `ARCHITECTURE-MAP.md` in `@level9/brand`
- [ ] If new package version consumed: package version noted in CLAUDE.md
- [ ] If new cross-app contract: documented in both apps' CLAUDE.mds + map

---

## ✅ Cleanup before ship

- [ ] No `console.log` debug statements in production code
- [ ] No commented-out code blocks
- [ ] No `TODO` comments without an owner + ticket
- [ ] No unused imports
- [ ] No dead components (anything not imported anywhere)
- [ ] No `.bak` files in the repo
- [ ] No test/scratch files in `public/` or `src/`

---

## What this checklist is for

Use it the first time a site goes live. Use it after any major redesign.
Use it as a teaching tool when onboarding a new agent or contributor to
the family.

A site that fails this checklist isn't ready to ship — even if everything
"works." Inconsistency erodes brand identity faster than slow features.

When this checklist evolves (new patterns, new rules), update it here in
`@level9/brand/procedure/`. It's the canonical version.
