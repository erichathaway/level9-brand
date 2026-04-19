# The Alignment Cycle — operational doctrine

The framework that organizes everything Level9 builds. This is how we
diagnose, how we sequence, how we sell.

---

## The cycle

Every operation runs the same loop. When unaddressed, it locks in:

```
  Misalignment ─── Drag ─── Cost ─── Reactive leadership ─── repeat
```

- **Misalignment** = leadership and the org see different realities
- **Drag** = projects die in handoffs, decisions slow to weeks
- **Cost** = burning budget on work that could run itself
- **Reactive leadership** = managing exceptions instead of building systems
- ... which creates more **misalignment**, and the loop tightens

## The four pressure points

Each pressure point is one intervention site that breaks one stage of
the cycle:

| # | Verb | Breaks | Product | Color |
|---|---|---|---|---|
| 01 | **Decide** | Misalignment | StratOS | Violet |
| 02 | **Coordinate** | Drag | CommandOS | Emerald |
| 03 | **Execute** | Cost | OutboundOS umbrella (LinkupOS + ABM Engine + AutoCS) | Amber |
| 04 | **Measure** | Reactive leadership | LucidORG | Cyan |

Underneath all four: the **Governance Chassis** (The Vault) — audit
trail, budget enforcement, quality gates, secrets vault. AEGIS-aligned.
Not a feature of one product. The foundation every product sits on.

Above all four: the **Install Manual** (COO Playbook) — the 30/90/180
phased install protocol that turns the four pressure points into a
phased rollout.

## How the cycle maps both ways

For builders + technical buyers, each pressure point maps DOWN to the
8-layer operating system stack (`src/content/stack.ts`):

| Pressure point | Stack layers |
|---|---|
| Decide | Strategy (01) |
| Coordinate | Management (02) |
| Execute | Execution (03) + Build & QA (04) |
| Measure | Measurement (05) + Interface (06) |

For operators + COOs, each pressure point maps UP to the 8 COO Playbook
operating domains (`src/content/playbookDomains.ts`):

| Pressure point | Playbook domains |
|---|---|
| Decide | Architect Alignment + Financial Leverage |
| Coordinate | Systematize Execution + Adaptive Governance |
| Execute | Human + AI Architecture + Continuous Operating Loop |
| Measure | Execution Assessment + Systemic Execution Culture |

## Which to lead with depends on the audience

| Audience | Lead with | Why |
|---|---|---|
| New buyer (any role) | The 4 pressure points | Simplest, most memorable surface |
| Technical buyer / builder | Map down to 8 layers | Shows real architecture |
| Operator / COO | Map up to 8 playbook domains | Connects to vocabulary they know |

The architecture page (`level9os.com/architecture`) shows all three
views in one place.

## Diagnosis flow

When a customer or partner describes their pain, route it:

| They say... | Pressure point | Likely entry product |
|---|---|---|
| "Our offsites don't stick" / "ELT keeps changing direction" | Decide | StratOS |
| "Projects die in handoffs" / "PMO is slow" / "Cross-functional chaos" | Coordinate | CommandOS |
| "Marketing/sales/CS team is too expensive" / "Burning hours on rote work" | Execute | OutboundOS |
| "We measure outputs but don't know where execution breaks" | Measure | LucidORG |

If they describe MULTIPLE pressure points (most do), start with the one
that's bleeding most + has the lowest install friction. Usually that's
either Execute (OutboundOS — quickest revenue impact) or Decide (StratOS —
quickest leverage on the strategic side).

## Why this framework, not another?

Pre-existing frameworks Level9 considered + rejected:

- **EOS / Traction**: people-process-data is the right level for SMB
  but doesn't address the AI-native operating layer
- **OKRs**: measurement framework, not an operational doctrine
- **Agile / Scrum**: team-level cadence, not a company-level operating model
- **Lean / Six Sigma**: process improvement at the unit level, not the
  cross-functional scaling level
- **Generic "AI transformation"**: too vague to operationalize

The 4-pressure-point cycle is purpose-built for the AI-native operating
layer that nobody else is addressing. It IS the Level9 thesis.

## Source documents

- Code: `src/content/pressurePoints.ts`, `src/content/stack.ts`,
  `src/content/playbookDomains.ts`
- Live page: https://level9os.com/architecture
- Methodology: COO Playbook (full 4-part methodology, 30/90/180 install)
- Diagnostic: ECI (Execution Capability Index — LucidORG)

## When this changes

This doctrine is intended to be stable for years. If you're proposing
a 5th pressure point, a renamed verb, or a re-mapped product, the
proposal needs to:

1. Survive review against `NORTHSTAR.md`
2. Map cleanly to existing stack layers + playbook domains
3. Have a real product behind it (not vapor)
4. Not break the alignment-cycle metaphor

Most "should we add X?" questions answer to "no, that's a sub-pod inside
an existing pressure point." Resist expansion. The simplicity IS the value.
