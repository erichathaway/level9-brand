# Sales Brochure Template . Brand Asset

**Owner:** Eric Hathaway . Founder, Level9
**Last updated:** 2026-05-02
**Status:** Canonical template. Reference implementation lives at https://erichathaway.com/brochure
**Source files:** `brief.template.html` + `build.template.html` (this directory)

---

## What this is

The two-piece sales brochure system, finalized and shipped to production for Level9OS LLC. This is the canonical template for **all future Level9 sales brochures**, including the per-product brochures planned for the six commercial AI products (LinkUpOS, LucidORG, StratOS, COO Playbook, CommandOS, NextGen Interns).

Two pieces, one story. They print standalone. They print together.

| File | Pages | Audience | Purpose |
|---|---|---|---|
| `brief.template.html` | 2 | CEO . COO . Founder | The 90-second pitch. Problem statement, three engagement options, governance posture, diagnostic CTA. Survives hand-off to a skeptical CFO. |
| `build.template.html` | 7 | COO . Head of Ops . Technical buyer | Deep dive. Intro matrix, four pressure-point pages with motion graphics (Decide / Coordinate / Execute / Measure), Governance + Playbook chapters, and the 6-stat + 3-card Proof Sheet on Page 10. |

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
