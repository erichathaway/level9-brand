---
id: LVL9-BRAND-README
title: "Sales Brochure Template . Brand Asset"
version: "0.1"
effective: 2026-05-02
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
  - topic:documentation
  - topic:agent-config
---
# Sales Brochure Template . Brand Asset

**Owner:** Eric Hathaway . Founder, Level9
**Last updated:** 2026-05-02
**Status:** Canonical template. Reference implementation lives at https://erichathaway.com/brochure
**Source files:** `brief.template.html` + `build.template.html` + `product-spec.template.html` (this directory)

---

## What this is

The Level9 brochure system, finalized and shipped to production. Three canonical templates, two purposes: the **firm-level kit** (brief + build) tells the Level9OS story, and the **per-product spec** is reused for each commercial AI product (LinkUpOS, LucidORG, StratOS, COO Playbook, CommandOS, NextGen Interns).

| File | Pages | Audience | Purpose |
|---|---|---|---|
| `brief.template.html` | 2 | CEO . COO . Founder | The 90-second pitch. Problem statement, three engagement options, governance posture, diagnostic CTA. Survives hand-off to a skeptical CFO. **Firm-level. One per family.** |
| `build.template.html` | 7 | COO . Head of Ops . Technical buyer | Deep dive supplement. Intro matrix, four pressure-point pages with motion graphics (Decide / Coordinate / Execute / Measure), Governance + Playbook chapters, and the 6-stat + 3-card Proof Sheet. **Firm-level. One per family.** |
| `product-spec.template.html` | 3 | CTO . Head of Eng . Technical evaluator | Per-product technical specification. Build scope + I/O + impact, full architecture diagram with Supabase / n8n / Vercel tier breakdown, two-path implementation grid (off-the-shelf + embed) with governance band. **Per product. One per product.** |

---

## Page architecture (10 pages total)

### `brief.template.html` (2 pages)

1. **Page 1 . Hero + chamber.** Hero pitch, chamber portal with cube animation, hero stats. Founder byline.
2. **Page 2 . Three options + governance + closer.** Engagement tiers, "we don't sell platforms" block, governance band, quiet diagnostic CTA.

### `build.template.html` (7 pages, numbered 3-10 in the unified document)

3. **Page 3 . Intro matrix.** Four pressure points x three motions matrix.
4. **Page 4 . Decide.** Decision-rooms tile motion + bullets.
5. **Page 5 . Coordinate.** Pod-coordination tile motion + bullets.
6. **Page 6 . Execute.** Execution-fleet tile motion + bullets.
7. **Page 7 . Measure.** Telemetry tile motion + bullets.
8. **Page 8 . Governance.** Vault chamber + governance posture.
9. **Page 9 . Playbook.** COO Playbook chapters + lever taxonomy.
10. **Page 10 . Proof Sheet.** 6-stat hero band + 3 fact cards (Capabilities / Stack / Pedigree) + authority strip + founder attribution.

### `product-spec.template.html` (3 pages)

1. **Page 1 . Product Brief.** Kicker + headline + sub. 4-cell meta band (Product / Operator / Status / Audience). 2x2 scope grid: Intro / Build Scope / Inputs+Outputs (split into two bullet columns) / Impact (paragraph + 6-stat 3x2 grid).
2. **Page 2 . Architecture.** Kicker + headline + sub. Six-tier dark stack band (Data / Surface / Workflows / Agents / Models / Observe). SVG signal-to-action flow diagram (sources -> n8n orchestrator -> agents+models -> action+audit). Three-column tier breakdown (Data / Function / Surface) with 6 rows each (Tables / Posture / Schemas / Audit / Secrets / Backup ; Host / Engines / Triggers / Pattern / Recovery / Cost ; App / Surfaces / State / Auth / Realtime / Edge).
3. **Page 3 . Implementation + Governance.** Kicker + headline + sub. Two-path grid (Off-the-shelf turn-key vs. Embed in your stack), each with anchored price + 8 bullets + best-for footer. 4-cell governance band (Spine / Audit / Vault / Compliance roadmap). Quiet diagnostic CTA.

---

## Brand discipline (NON-NEGOTIABLE)

These are the rules that produce the look. Break them and the brochure stops looking like Level9.

### Typography
- **Inter** (weights 300, 400, 500, 600, 700, 800, 900) for ALL body and headline type.
- **JetBrains Mono** (weights 400, 500, 600, 700) for ALL caps + tracked labels and meta.
- ZERO other fonts. No Playfair, no serifs, no script faces.
- Single Google Fonts import in `<head>`:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```

### Color
- **Ink** `#0c0e1a` for primary type and dark surfaces.
- **Violet** `#6d28d9` (and `--violet-bright` for dark backgrounds) for accent.
- **Paper** + **paper-warm** for backgrounds.
- Per-product accents (cyan, emerald, amber, etc.) ONLY appear inside the four bucket-tile motion graphics on pages 4-7. Never on body type, never on headlines, never on cards outside the tiles.

### Punctuation (voice rules)
- **Zero em dashes** (`—`). Use periods, colons, or rephrase.
- **Zero en dashes** (`–`). Use hyphens or periods.
- **Zero italic body text.** The `<em>` tag IS used inside `<h1>` and `<h2>` headlines but ONLY as a semantic wrapper for the violet-accent word. CSS forces `font-style: normal; color: var(--violet)` on every `<em>`. Do not introduce `<em>` anywhere it is not already used.

### Layout
- **8.5 x 11 inches per page.** Fixed: `width: 8.5in; height: 11in;`. Pages must NOT overflow. Always design to the page, not to the browser.
- **`@media print`** rules already wired. `@page { size: letter; margin: 0; }`. Each page becomes one printed sheet.
- **Page header (`.pheader`)** + **footer** are present on every page. Sequence numbers in the footer.

---

## How to derive a product-specific brochure

Each of the six commercial AI products will get its own two-piece brochure: a `<product>-brief.html` and a `<product>-build.html`, derived from these templates.

### Step 1 . Copy the template files
```bash
cp brief.template.html /path/to/consumer/<product>-brief.html
cp build.template.html /path/to/consumer/<product>-build.html
```

### Step 2 . Replace placeholders (`{{...}}`)
Search-and-replace these tokens in both files:
- `{{BROCHURE_LABEL}}` . e.g. "LinkUpOS" or "StratOS"
- `{{HEADLINE}}` . the page-title headline (brief only)
- `{{BACK_LINK_HREF}}` . where "Back" navigates to in the consumer site (e.g. `/brochure`)
- `{{BACK_LINK_LABEL}}` . the back-link text (e.g. "Back to brochure")

### Step 3 . Swap firm-level content for product-level content
The current template content is firm-level (Level9OS). For a product brochure, the swap points are:

**brief.template.html (2 pages)**
- Page 1 hero `<h1>` . swap to the product's value proposition
- Page 1 hero stats . swap to the product's KPIs
- Page 2 three-option grid . swap to the product's pricing tiers OR replace with three product-feature panels (depending on whether the product is sold standalone or as part of an engagement)
- Page 2 "we don't sell platforms" block . swap to a product-specific differentiator block
- Page 2 closer CTA . product-specific call-to-action (free trial, demo booking, etc.)

**build.template.html (7 pages)**
- Page 3 intro matrix . product-specific pressure points (still 4x3 grid)
- Pages 4-7 bucket pages . product-specific four pressure points with motion graphics. The motion graphics must be ported from the relevant tile in `@level9/brand/components/tiles/` if one exists for the product; otherwise build a new motion graphic that matches the visual conventions (24fps SVG/canvas, 1200x630 source, scaled with CSS transform).
- Page 8 governance . swap firm-level governance for product-specific architecture diagrams (data flow, RLS posture, audit trail)
- Page 9 playbook . swap COO Playbook chapters for the product's domain methodology (e.g. for LinkUpOS, the signal engine + outbound + content domains)
- Page 10 proof sheet . swap firm-level stats for product-level stats. Card 01 = product capabilities. Card 02 = product stack (still "Models / Stack / Agents / RAG / Observe / Govern" but specific to the product). Card 03 = product roadmap OR product proof-points (deployment count, customer logos, throughput numbers)

### Step 4 . Audit before shipping
Run this exact audit (zero violations expected):
```bash
# Em dashes (must be 0)
grep -P "\xe2\x80\x94" <product>-brief.html <product>-build.html | wc -l

# En dashes (must be 0)
grep -P "\xe2\x80\x93" <product>-brief.html <product>-build.html | wc -l

# Italic markers outside of styled <em> tags (must be 0 unstyled occurrences)
grep -nE "<em|<i\s|<i>|font-style:\s*italic" <product>-brief.html <product>-build.html

# Non-canonical fonts (must return only the Inter+JetBrains Mono import)
grep -nE "fonts.googleapis|@import|font-family:" <product>-brief.html <product>-build.html | grep -vE "Inter|JetBrains"
```

### Step 5 . Page-fit check
Every page must fit 8.5 x 11 with no clipping. The Page 10 Proof Sheet is the hardest page to keep balanced (three cards must fill the grid evenly without overflowing the authority strip + founder attribution at the bottom). Use the live reference at `erichathaway.com/brochure/build.html` Page 10 as the gold standard.

---

## How to derive a per-product technical spec (`product-spec.template.html`)

Each commercial AI product gets its own 3-page technical specification, derived from `product-spec.template.html`. The reference implementation is `linkupos-spec.html` at `erichathaway.com/brochure/linkupos-spec.html`.

### Step 1 . Copy the template
```bash
cp product-spec.template.html /path/to/consumer/<product>-spec.html
```

### Step 2 . Replace high-value placeholders (`{{...}}`)
Search-and-replace these tokens:
- `{{PRODUCT_NAME}}` . full product name, e.g. "LinkUpOS" or "StratOS"
- `{{PRODUCT_CHIP_LETTER}}` . single letter for the dark header chip, e.g. "L"
- `{{PRODUCT_NAME_PREFIX}}` . the first part of the name styled in ink, e.g. "Link" for LinkUpOS
- `{{PRODUCT_NAME_HIGHLIGHT}}` . the violet middle chunk, e.g. "Up" for LinkUpOS
- `{{PRODUCT_NAME_SUFFIX}}` . the closing chunk in ink, e.g. "OS" for LinkUpOS
- `{{OPERATING_LLC}}` . the LLC that operates the product (resolve via `legal/attribution.ts`). LucidORG LLC for LinkUpOS / LucidORG / StratOS / COO Playbook. NextGen Interns LLC for the NextGen platform.
- `{{PRODUCT_DOMAIN}}` . the product's web domain
- `{{CONTACT_EMAIL}}` . the contact email for that product
- `{{BACK_LINK_HREF}}` + `{{BACK_LINK_LABEL}}` . consumer-site back navigation
- `{{PATH_01_PRICE}}` + `{{PATH_01_PRICE_UNIT}}` . off-the-shelf pricing (e.g. "$25 to $150" + "/pp /mo . tiered")
- `{{PATH_02_PRICE}}` + `{{PATH_02_PRICE_UNIT}}` . embed pricing (e.g. "$99" + "/pp /mo . flat rate")

### Step 3 . Swap product-specific content
The technical spec is fully product-specific. Every section needs a real product-by-product rewrite. The template structure stays identical; only the content swaps.

**Page 1**
- Headline + sub copy (kicker, h1, pagehead-sub).
- Card 01 (Intro): paragraph + 4-bullet quick characterization of the product.
- Card 02 (Build Scope): "What ships" name + 6-bullet engine list specific to the product.
- Card 03 (Inputs / Outputs): two 7-bullet columns of concrete inputs and outputs for the product.
- Card 04 (Impact): paragraph + 6-stat 3x2 grid of product KPIs.

**Page 2**
- Headline + sub copy.
- Stack band: 6 tiers with the product's actual implementations (Data / Surface / Workflows / Agents / Models / Observe). Keep the structure; swap the implementations.
- SVG flow diagram: this is the most product-specific element. Either edit the boxes inline (Sources row, agent lanes, action+audit row) to match the product's flow, OR replace the SVG entirely if the architecture is meaningfully different. Maintain the four-row pattern: Sources -> Orchestrator -> Agents+Models -> Action+Audit.
- Three tier columns (Data / Function / Surface): keep the 6-row pattern per column. Swap Tables / Posture / Schemas / Audit / Secrets / Backup (Data column) and equivalents (Function: Host / Engines / Triggers / Pattern / Recovery / Cost ; Surface: App / Surfaces / State / Auth / Realtime / Edge) to match the product's reality.

**Page 3**
- Headline + sub copy. If the product has only one path (rare), drop to a single-column impl-grid; if it has three paths (Custom Build available, e.g. OutboundOS), restore the third column from the LinkUpOS pre-pass-2 commit history and adjust `.impl-grid` back to `1fr 1fr 1fr`.
- Two paths: Off-the-shelf and Embed. Each gets a name, price, 8 bullets, and a "Best for" footer.
- Governance band: 4 cells. The Spine cell stays the same (it's the brand-level governance promise). Audit / Vault / Compliance cells stay structurally identical (AEGIS / RLS / GDPR + EU AI Act + SOC 2 roadmap) unless the product has product-specific compliance posture.
- CTA: keep the diagnostic offer; update the email subject in the `mailto:` href to match the product (e.g. `?subject=LinkUpOS%20Diagnostic`).

### Step 4 . Audit before shipping
Same pre-ship audit as the brief / build templates:
```bash
grep -cP "\xe2\x80\x94" <product>-spec.html  # em dashes -> 0
grep -cP "\xe2\x80\x93" <product>-spec.html  # en dashes -> 0
grep -nE "<em|<i\s|<i>|font-style:\s*italic" <product>-spec.html  # only styled <em> in headlines
grep -nE "font-family:" <product>-spec.html | grep -vE "Inter|JetBrains"  # empty
```

### Step 5 . Page-fit check
Three pages, each must fit 8.5 x 11 with no clipping. Page 1's bottom whitespace is the canary: if Card 03 (I/O) or Card 04 (Impact) leaves dead space, expand the bullet count or stat grid. Page 2's tier columns are the second canary: if any of the three columns leaves bottom whitespace, add a row or bump the `tier-val` font size. Page 3's two-path grid + governance band + CTA must all fit; the CTA going off-page is the failure signal.

---

## What NOT to change

- **Do NOT change the brand discipline section.** The typography, color, punctuation, and layout rules are universal across the brochure system.
- **Do NOT introduce italic body text.** The only italic-tag usage is the violet-accent wrapper inside `<h1>`/`<h2>`/`<.cta-h>`, and it is forced to `font-style: normal` by CSS.
- **Do NOT introduce a third color.** Per-product accents stay inside tile motion graphics on pages 4-7. Outside those tiles, only ink + violet.
- **Do NOT add new web fonts.** Inter + JetBrains Mono only.
- **Do NOT replace `.` separators with em dashes or middle dots.** The period-with-spaces pattern is the brand's voice mark.

---

## Why this template exists

Six product brochures are coming. Without a canonical template, each one drifts from the others, brand consistency erodes, and the next agent re-invents the layout. With this template, the next brochure is a copy + swap, not a rebuild.

The reference implementation at `erichathaway.com/brochure` is the gold standard. It has been QA'd live, fits 8.5 x 11 cleanly across all 10 pages, passes the brand audit (zero em dashes, zero en dashes, fonts compliant), and works as both a screen artifact and a print artifact.

Use it. Don't deviate from it.
