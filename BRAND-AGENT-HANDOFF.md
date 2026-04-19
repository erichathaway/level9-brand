# Brand-Agent Handoff — Logo Design Briefs

When brand-agent has bandwidth, the following marks need design work. Everything
else (Level9, Eric Hathaway, LucidORG, LinkupOS, CommandOS, COO Playbook, Big E
Sessions) has v0.1 canonical marks already in `src/assets/logos/<brand>/`.

## Family chip format (reference)

All chip-style marks share this structure:
- **Dimensions**: 320 × 320, viewBox 0 0 320 320
- **Frame**: 240 × 240 rounded square (rx=56), inset 40px from each edge
- **Fill**: `obsidian` linear gradient (dark, brand-tinted: 0% to 100%)
- **Edge stroke**: brand-color linear gradient, 1.5px hairline
- **Glass overlay**: white-to-transparent vertical gradient, 10% peak opacity
- **Mark**: brand-specific symbol centered in the frame area

Working examples to mirror: `level9/chip.svg`, `erichathaway/chip.svg`,
`lucidorg/chip.svg`, `bigesessions/chip.svg`.

Each brand also gets:
- **Square variant** (`square.svg`): 320 × 320 sharp corners, edge-to-edge fill
  with the same obsidian + gradient edge + glass treatment. Mark scaled larger
  (no inset frame).
- **Wordmark** (`wordmark.svg`): 480 × 80, mini chip on the left + brand name
  text on the right. No outer border.

## 1. OutboundOS — currently placeholder ("O" letter)

**Files to replace**:
- `src/assets/logos/outboundos/chip.svg`
- `src/assets/logos/outboundos/square.svg`
- `src/assets/logos/outboundos/wordmark.svg`

**Brand context**: OutboundOS is the umbrella product for the Execute pressure
point. It owns three pods: LinkupOS (LinkedIn signal), ABM Engine (multi-channel
outbound), AutoCS (customer care + retention). Replaces a marketing + outbound
+ customer success department.

**Color palette**: amber primary (`#F59E0B`), with edge gradient
`#FBBF24 → #F59E0B`. Obsidian fill `#1A1208 → #08040A` (warm dark).

**Concept direction** (pick one or hybrid):
- **Umbrella over 3 pods** — literal umbrella shape with 3 dots/shapes underneath
- **3 connected nodes** — anchor (LinkupOS) + arrow (ABM) + heart/cycle (AutoCS) connected by lines
- **Ringed "O"** — capital O with 3 inner orbits or satellites suggesting the pods
- **Triple-arc** — 3 outbound arcs radiating from a center

**Constraints**:
- Must NOT just be a letter "O" — needs to suggest the umbrella concept
- Must work at 16px (favicon) without losing readability
- Must feel coordinated with the existing amber-family marks (LinkupOS, Big E Sessions, Eric Hathaway)

## 2. NextGenIntern — currently placeholder ("N" letter)

**Files to replace**:
- `src/assets/logos/nextgenintern/chip.svg`
- `src/assets/logos/nextgenintern/square.svg`
- `src/assets/logos/nextgenintern/wordmark.svg`

**Brand context**: Education + internship-to-career bridge for next-generation
talent. The non-profit education arm of the Level9 family. Live at
nextgenintern.com.

**Color palette**: BLUES (per Eric, 2026-04-18). Edge gradient
`#0EA5E9 cyan → #3B82F6 blue → #1E3A8A deep blue`. Obsidian fill
`#0A1226 → #02060F` (cool dark).

**Concept direction** (pick one or hybrid):
- **Rising arc** — upward-curving arrow or arc, suggesting advancement
- **Bridge** — two pillars with a span connecting them (intern → career)
- **Step pattern** — ascending steps or terraces (level-up metaphor)
- **Compass + path** — compass with a forward-pointing path
- **Connection nodes** — student node + employer node + connecting bridge

**Constraints**:
- Must NOT just be a letter "N" — needs to suggest education / advancement / next-gen
- Must work at 16px (favicon)
- Must read as the EDUCATION brand in the family (lighter, more aspirational
  than the operational brands)
- Brand color is blues — DO NOT use amber, violet, or any other family color

## 3. StratOS — currently using sci-fi compass (off-family aesthetic)

**Files to replace**:
- `src/assets/logos/stratos/chip.svg` (currently the 512×512 sci-fi version)
- `src/assets/logos/stratos/wordmark.svg` (currently uses simplified compass)

**Note**: Per Eric's spec, StratOS is "always round" — NO square variant needed.
This is unique to StratOS in the family. The chip should be circular, not the
standard rounded-square format.

**Brand context**: StratOS is the AI executive decision room. Ten simulated
C-suite executives debate every strategic question across three structured
rounds. It's the Decide pressure point.

**Color palette**: violet primary (`#8B5CF6`), with cyan accents for
deliberation/decision elements. Could use `#8B5CF6 → #06B6D4` gradient.
Obsidian fill `#0A0612 → #030107` (deep dark).

**Concept direction**:
- **10-exec decision chamber** — circular layout with 10 nodes around a central
  decision point (the "boardroom from above" metaphor)
- **Strategic compass** — compass with decision vectors radiating outward
- **Deliberation rounds** — three concentric arcs suggesting the 3-round
  structured debate
- **Convergence point** — multiple lines/perspectives converging on a single decision

**Constraints**:
- ALWAYS ROUND — not a rounded square, an actual circle
- Must read as a DECISION mark, not a generic tech compass
- Must work at 16px (favicon)
- Should pair visually with the violet pressure point

## 4. The Alignment Advantage (book) — no mark exists

**Files to create**:
- `src/assets/logos/alignment-advantage/chip.svg`
- `src/assets/logos/alignment-advantage/square.svg`
- `src/assets/logos/alignment-advantage/wordmark.svg`

Also: add `"alignment-advantage"` to `BrandId` type, `LOGO_PATHS`,
`BRAND_NAMES`, and `PLACEHOLDER_BRANDS` in `src/assets/logos/index.ts`.

**Brand context**: Eric's 2026 book. Title: "The Alignment Advantage".
Thesis: alignment is the fourth pillar (the missing one) alongside
People / Process / Leadership. Builds the case that misalignment costs
the US $1.5T/year and is an infrastructure problem, not a culture problem.

Used on erichathaway.com FloatingNav (small social row icon, currently
a generic inline book SVG at `src/components/FloatingNav.tsx`).

**Color palette**: fuchsia primary (`#EC4899`) — the book's pressure-point
color in the brand token system. Consider pairing with violet for
"aligned-with-the-Level9-thesis" cue.

**Concept direction** (pick one or hybrid):
- **Stacked alignment bars** — 3 misaligned bars snapping to a shared axis
- **Book with aligned pages** — stylized book spine where the pages converge
- **Fourth pillar** — 3 incomplete pillars + 1 complete (the A for Alignment)
- **A-mark** — strong editorial capital A with alignment cue (axis, stacked bars)

**Constraints**:
- Must work at 16px (favicon/nav) without losing readability
- Must feel editorial/book-y, not software-y (it's a book, not a product)
- Must connect visually to the Level9 family but not compete with the
  product brand marks

## 5. LucidORG mini client-row mark — wrong color

**File to replace**:
- `level9os-site/public/logos/lucidorg.svg` (used in the "client trust" rows)

**Current state**: 40×40 amber circle outline + crosshairs. Wrong — LucidORG is
cyan, not amber.

**Brief**: Recreate at 40×40 with the same minimalist treatment but in cyan
(`#06B6D4`). Just an outline mark, not the full six-shape chip — small enough
for "trust" row use.

---

## What "done" looks like

For each brand above:
1. Replace the placeholder SVGs in `src/assets/logos/<brand>/` with final designs
2. Verify each renders cleanly at 16px / 32px / 80px / 160px (test in `audit/preview.html`)
3. Update `audit/preview.html` to reflect the new versions
4. Remove any "placeholder" badges + references from `audit/README.md` and
   `BRAND-AGENT-HANDOFF.md` (this file)
5. Update `src/assets/logos/index.ts` — remove the brand from `PLACEHOLDER_BRANDS`
6. Bump `package.json` version (v0.2.0 → v0.3.0 etc)
7. Commit + push, sites consuming the package re-deploy

Anything else (refinements to existing logos, additional size variants like
`nav-32.svg` or `favicon-16.svg`) is bonus territory — not blocking.
