# Logo Audit — Level9 Brand Family

Single-folder side-by-side view of every unique logo SVG found across all
six site repos and `marketing-assets/`. Open in Finder, look at each
brand's options, tell me which to mark canonical.

## How this folder is organized

One folder per brand. Files prefixed `A-`, `B-`, `C-` are the unique versions
(deduplicated by md5 hash). Filename suffixes describe the variant:

- `*-rounded-chip.svg` — 320×320 with rounded corners (rx=56). Family format,
  used in nav + content cards.
- `*-edge-to-edge-square.svg` — 320×320 sharp corners. App icons, social.
- `*-favicon-app-icon.svg` — small 32×32 or 40×40 simplified favicon mark.
- `*-horizontal-wordmark.svg` — banner format with text.
- `*-WRONG-COLOR` — flagged for redesign (see notes below).
- `*-CANONICAL` — already definitively the right one.

---

## Per-brand findings

### LEVEL9 / LEVEL9OS — ✅ Has full system

| File | Description | Status |
|---|---|---|
| `level9/A-rounded-chip.svg` | 320×320, obsidian gradient + cool gradient stroke (violet→cyan→teal), tilted "9" wordmark in white at -14°. Polished. | ⭐ My pick: **canonical chip** |
| `level9/B-edge-to-edge-square.svg` | 320×320, edge-to-edge sharp square, same obsidian + tilted 9 (font 200), 4px gradient inset edge. | ⭐ My pick: **square variant** for app icons |
| `level9/C-favicon-app-icon.svg` | Smaller favicon mark | Currently used in `app/icon.svg` |

**Recommendation**: Keep both A + B; A is nav/card chip, B is app icon. C is
ok for favicon but I'd regenerate from B at 32×32 for consistency.

---

### ERIC HATHAWAY — ✅ Has full system

| File | Description | Status |
|---|---|---|
| `erichathaway/A-edge-to-edge-square.svg` | 320×320 sharp-corner. Compass rose (radius 120), dominant white North needle, amber East/West/South needles, obsidian + amber/silver edge gradient. **Same as the desktop file you uploaded.** | ⭐ My pick: **square variant** |
| `erichathaway/B-rounded-chip.svg` | 320×320 rounded chip (rx=56). Same compass design, smaller (radius 84), matches Level9 chip family format. | ⭐ My pick: **canonical chip** |
| `erichathaway/C-favicon-app-icon.svg` | Smaller mark for site favicon | OK |

**Recommendation**: B is the family-format chip canonical; A is the square variant.
The compass rose with dominant white N is the brand mark.

---

### LUCIDORG — ✅ Has chip + ⚠️ has wrong-color mini

| File | Description | Status |
|---|---|---|
| `lucidorg/A-edge-to-edge-square.svg` | 320×320 sharp-corner. Six-shape interlocking mark (cyan/sky/violet, 180° rotational symmetry), cool gradient edge. **Same as desktop file.** | ⭐ My pick: **square variant** |
| `lucidorg/B-rounded-chip.svg` | 320×320 rounded chip. Same six shapes, scaled smaller, matches family. | ⭐ My pick: **canonical chip** |
| `lucidorg/C-mini-client-row-WRONG-COLOR.svg` | 40×40 amber circle + crosshairs. **Used in "client trust" rows but the amber is wrong — LucidORG is cyan.** | ❌ Needs replacement (see Gaps) |

**Recommendation**: B is canonical chip; A is square variant. C must be
replaced with a cyan-correct 40×40 mini-mark.

---

### LINKUPOS — ⚠️ NO polished chip, only favicon + wordmark

| File | Description | Status |
|---|---|---|
| `linkupos/A-favicon-anchor.svg` | 32×32 dark rounded square + amber upside-down anchor (Lucide icon, stroked). Favicon-grade. | OK for favicon only |
| `linkupos/B-horizontal-wordmark.svg` | 240×40 horizontal banner: anchor mark + "LinkUpOS" wordmark (amber "Link", gray "Up", amber "OS"). Used on linkupos.com. | ⭐ Wordmark canonical |
| `linkupos/C-300px-version.svg` | 300px variant | (need to inspect) |

**🚨 GAP**: There is no 320×320 family-format chip for LinkupOS. Every other
brand has one. **Brand-agent should design a polished chip variant matching
the Level9/Eric/LucidORG family format**: 320×320, obsidian gradient + amber
edge, glass overlay, anchor mark scaled up with proper detail (not the simple
Lucide stroke icon).

---

### COMMANDOS — ⚠️ NO polished chip, only favicon

| File | Description | Status |
|---|---|---|
| `commandos/A-favicon-chevron.svg` | 32×32 dark circle + cyan chevron `>` + small rect. Terminal-style icon. Favicon-grade. | OK for favicon only |

**🚨 GAP**: No 320×320 family chip. **Brand-agent should design** a chip with
emerald edge (CommandOS color) + a more elaborated chevron/orchestration mark.
Concept ideas: nested chevrons, conductor's baton, command bridge, agent fleet
visualization.

---

### COO PLAYBOOK — ⚠️ NO polished chip, only favicon

| File | Description | Status |
|---|---|---|
| `coo-playbook/A-favicon-alignment-bars.svg` | 32×32 dark rounded square + 4 horizontal alignment bars (violet→cyan gradient, descending widths) + pink dot indicator. Alignment-cycle metaphor. | OK for favicon only |

**🚨 GAP**: No 320×320 family chip. **Brand-agent should design** a chip with
slate edge (Playbook color) + the alignment-bars metaphor scaled up. Could
also pull in the 4-pressure-point cycle visual since Playbook is the install
manual for the cycle.

---

### STRATOS — ⚠️ Only ONE version found (you mentioned 3)

| File | Description | Status |
|---|---|---|
| `stratos/A-512px-compass-scifi.svg` | 512×512, very polished but DIFFERENT AESTHETIC from family. Sci-fi compass: cyan #00e5ff radial gradients, multi-blur glow filters, North-pointing arrow, N/S/E/W cardinal letters, dark space background. | Polished but off-family |

**🚨 USER FLAG**: You said 3 versions exist — I only found this one
(`stratos-v2/public/stratos-icon.svg`). The other 2 are not anywhere in
this workspace. Possibilities:
- They're on your Desktop (not surfaced)
- They were deleted
- They're remembered wrong

**Either way**: this version is polished but doesn't match the family chip
format (obsidian + colored edge + glass + rounded chip). **Brand-agent
should design** a 320×320 family-format chip with violet edge (StratOS
color) + an executive-room / decision-engine mark.

---

### BIG E SESSIONS — ✅ Already canonical

| File | Description | Status |
|---|---|---|
| `bigesessions/A-rounded-chip-CANONICAL.svg` | 320×320 rounded chip. "big" white wordmark + "E" amber wordmark (40% larger) + 13-bar mountain equalizer. Matches family format. | ⭐ Canonical |

No work needed.

---

### NEXTGENINTERN — ⚠️ NO chip, only WRONG-COLOR mini

| File | Description | Status |
|---|---|---|
| `nextgenintern/A-mini-mark-WRONG-COLOR.svg` | 40×40 amber circle outline + crosshairs + center dot. **Amber is wrong — NextGenIntern brand color should be different.** | ❌ Needs replacement |

**🚨 GAP**: No 320×320 family chip exists. The `nextgenintern-site` repo has
NO SVG logos at all (only PNG `favicon.png` and `logos.png`). **Brand-agent
should design** a full chip + favicon + mini-mark for NextGenIntern in the
family format. Need to confirm brand color first.

---

### OUTBOUNDOS — 🚨 DOES NOT EXIST

No logo file exists anywhere in the workspace. OutboundOS is the umbrella
product over LinkupOS + ABM Engine + AutoCS pods. Currently the OutboundOS
references in level9os.com use a generic letter "O" badge.

**🚨 GAP**: Needs a brand-new design. Options:
- Letter "O" mark in amber (umbrella shares LinkupOS color)
- A 3-pod visualization (anchor + outbound arrow + care heart? or 3 connected nodes?)
- An umbrella metaphor literally

**Brand-agent should design** a 320×320 family-format chip + favicon.

---

## Summary: where the brand-agent needs to ship

| Brand | Status | Brand-agent task |
|---|---|---|
| Level9 / Level9OS | ✅ Complete | None |
| Eric Hathaway | ✅ Complete | None |
| LucidORG | ⚠️ Mini-mark wrong color | Replace `C-mini-client-row` with cyan version |
| Big E Sessions | ✅ Complete | None |
| **LinkupOS** | 🚨 No chip | Design 320×320 family chip + matching favicon |
| **CommandOS** | 🚨 No chip | Design 320×320 family chip + matching favicon |
| **COO Playbook** | 🚨 No chip | Design 320×320 family chip + matching favicon |
| **NextGenIntern** | 🚨 No chip + wrong-color mini | Design full set + confirm brand color |
| **StratOS** | 🚨 Off-family aesthetic | Design 320×320 family chip with violet edge |
| **OutboundOS** | 🚨 Does not exist | Design from scratch (320×320 family chip) |

## Per-brand size variant target (once chips are right)

For each brand, the canonical set we want in the package:

```
src/assets/logos/<brand>/
├── chip.svg              ← 320×320 rounded chip (family format) — the canonical mark
├── square.svg            ← 320×320 edge-to-edge sharp square — app icons / social
├── nav-32.svg            ← 32×32 simplified for nav rendering
├── favicon-16.svg        ← 16×16 stripped to bare minimum
└── wordmark.svg          ← horizontal banner with text (where applicable)
```

Plus optional:
```
├── og-1200x630.png       ← OG image (rasterized for social meta)
└── linkedin-banner.svg   ← LinkedIn page banner (already exists for several)
```

## What I need from you

1. **Confirm canonical picks** for the 4 brands that already have polished chips:
   - Level9: A (rounded) + B (square)?
   - Eric Hathaway: B (rounded) + A (square)?
   - LucidORG: B (rounded) + A (square)?
   - Big E Sessions: A (canonical)?

2. **The Stratos question**: do you remember where the other 2 versions are? Or
   should brand-agent just design a family-format Stratos chip from scratch?

3. **NextGenIntern brand color**: not amber. What's it supposed to be?

4. **Approve brand-agent handoff list**: brand-agent gets the 6 design tasks
   listed in the summary table above.

Once you confirm, I can populate `src/assets/logos/` in the @level9/brand
package with the chosen canonicals + placeholder paths for the gaps. Brand-agent
fills the gaps over time without breaking the structure.
