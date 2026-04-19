# Decision Framework — how big decisions get made at Level9

Decisions get made differently depending on their reversibility and blast
radius. This doc names the categories + the protocol per category.

---

## Decision categories

### Type 1 — Two-way doors (most decisions)

Reversible in <1 day. Low blast radius.

**Examples**:
- Site copy edits
- Component refactor
- Internal tool build
- Choosing one of two equivalent libraries

**Protocol**:
- Decide quickly, decide alone
- Document the decision in the relevant CLAUDE.md "Recent decisions log"
- Move on
- If it turns out wrong, reverse it the next day

### Type 2 — One-way doors, low risk (some decisions)

Hard to reverse but small blast radius. Usually architectural choices
within an app.

**Examples**:
- Choosing TypeScript vs JavaScript for a new app
- Tailwind vs CSS modules
- Database schema choice within an app's namespace
- Tooling stack for a new internal tool

**Protocol**:
- Write a short decision doc (1-2 pages) explaining options + choice
- Get one async second opinion (Eric, brand-agent, etc)
- Decide
- Document in `policy/` if it sets a precedent for future apps

### Type 3 — One-way doors, high risk (rare, important)

Hard to reverse + large blast radius. Architecture, brand identity,
product taxonomy, customer commitments.

**Examples**:
- Adding a 5th pressure point to the alignment cycle
- Renaming a brand (e.g., LinkupOS → OutboundOS sub-pod)
- Centralizing into a monorepo
- Sunsetting a product
- Major brand visual change
- Moving to a new hosting platform

**Protocol** — use **StratOS** (when the room exists) or this manual fallback:

1. **Frame the decision**:
   - State the choice in one sentence
   - State the kill criteria up front (what would make this wrong?)
   - State the reversal cost (how hard to undo)

2. **Surface dissent BEFORE deciding**:
   - List 2-3 perspectives that would oppose this decision
   - Steelman each (write it as if you held that view)
   - If all 3 perspectives agree, you haven't surfaced real dissent yet —
     keep looking

3. **Phase gate the rollout**:
   - Phase 1: smallest possible change that proves the thesis
   - Phase 2: expand IF Phase 1 evidence supports
   - Phase 3: full rollout
   - Each phase has explicit entry + exit criteria

4. **Document the audit trail**:
   - Write the decision doc into `policy/` or a dated decision log
   - Capture: framing, dissent, kill criteria, phases, who decided, when
   - This is the GOV trail for the decision itself

## Reversibility test

Before classifying a decision, ask:

| Question | If YES → |
|---|---|
| Can I undo this in <1 day with no customer impact? | Type 1 |
| Can I undo this in <1 week with internal-only impact? | Type 2 |
| Would undoing this require customer comms / re-deploy / data migration / re-brand? | Type 3 |

Most decisions are Type 1. Treat them as such — speed > deliberation.

Type 3 decisions are rare. When they happen, slow down. The cost of a
reversed Type 3 decision is high. The cost of one extra day of dissent
review is low.

## Common Type 3 decision patterns + their precedents

| Pattern | Precedent |
|---|---|
| Centralize vs federate (code) | We chose Option C-1: separate package (`@level9/brand`) consumed via npm git ref. Documented in `ARCHITECTURE.md`. |
| Centralize vs federate (data) | We chose: brand layer centralized, product data federated per-app. Documented in `ARCHITECTURE-MAP.md`. |
| New site joins family | Procedure documented in `procedure/PROJECT-LIFECYCLE.md`. |
| Old site / project retires | Procedure documented in `procedure/DATA-CLEANUP-PROCEDURE.md`. The old commandos retirement (April 2026) is the worked example. |

## What to NOT do

### Don't bypass dissent surfacing on Type 3 decisions

Even when the answer feels obvious. Especially when it feels obvious.
The point of structured dissent isn't to change your mind — it's to make
sure you've considered the angles that will look obvious in retrospect.

### Don't classify Type 3 as Type 1 to move faster

If a decision is hard to reverse, treat it as hard to reverse. "Just
ship it" is the right move 95% of the time and the wrong move on the
5% that matter most.

### Don't trust agent confidence on Type 3 decisions

When an AI agent (Claude included) says a Type 3 decision is "obvious"
or "low risk," push back. Confident hallucination is the worst failure
mode. Get the agent to enumerate dissent and reversal costs before
acting.

## Source

- StratOS implements Type 3 protocol as a 10-person simulated executive
  decision room. When live, route real Type 3 decisions through it.
- This framework is a manual fallback when StratOS isn't the right
  vehicle (e.g., agent-internal decisions, non-strategic technical
  choices).
- Connects to the COO Playbook's broader operational decision framework.
