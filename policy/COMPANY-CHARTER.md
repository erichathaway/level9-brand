# Company Charter — Level9

The principles, values, and rules-of-engagement that bind everyone working
on, with, or around the Level9 family.

For the WHY (mission, thesis), see `NORTHSTAR.md`.
This doc covers the HOW (values, voice, conduct).

---

## Values

### 1. Operator-grade or it doesn't ship
Every product runs on Level9 first. If it breaks for us, it doesn't ship
to anyone else. Dogfooding isn't a slogan — it's a release gate.

### 2. Augment, don't replace
We build AI that makes the workforce more effective, never positioning
it as a replacement for people. Every product page, every comment, every
post is held to this rule.

### 3. Specific over general
"20+ years across six continents and sixty countries" beats "extensive
international experience." Numbers, named companies, real artifacts.
No keyword inflation.

### 4. Confident hallucination is the worst failure mode
Never fabricate stats. Never claim experience the operator doesn't have.
Every quantitative claim must be traceable to a source line. If you
can't cite it, you can't say it.

### 5. The proof is in the audit trail
Every decision goes through GOV / GOV-TEST. Every dollar tracked. Every
output gated. Every change explained in commit messages. The audit trail
IS the credibility.

### 6. Cut through the bullshit
Direct, operator-to-operator. No "leverage synergies." No "circle back."
No "let's unpack." If we wouldn't say it across a conference table at
11pm in week 12 of a deployment, it doesn't go in copy.

---

## Brand voice rules

Encoded as data + lint helpers in `src/content/voiceRules.ts`. Highlights:

### Hard bans (blocked at write time)
- Em dashes (`—`), en dashes (`–`), double hyphens (`--`)
- "Great post", "Well said", "Couldn't agree more", "Absolutely", "100%"
- "leverage synergies", "circle back", "let's unpack", "in today's
  fast-paced world", "at the end of the day"

### Style preferences
- Numerals over spelled-out numbers in product copy ("20 years" not
  "twenty years")
- Contractions for warmth ("we're" over "we are")
- Title case for headings, sentence case for sub-text
- Dates: ISO `YYYY-MM-DD` in code, flowing months ("Apr 2026") in copy

### Engagement formula (posts + comments)
1. A real take (not a generic observation)
2. Something specific from the original referenced
3. A personal angle (what we're seeing, building, or experiencing)
4. ONE citation if relevant (not forced)
5. An engagement hook on longer posts (genuine question that invites replies)

---

## Operating principles

### Phase gates for multi-step work
Any multi-step build (3+ phases) names phases up front with explicit
dependencies. State why each phase comes in the order it does. State
what each phase explicitly does NOT do.

Sequential dependencies are sequential. Don't run dependent work as
parallel streams to "save time" (the failure mode known as shiny-object
syndrome).

### Done = evidence test
Every claim of "done" includes an evidence test the user can run
independently. "It works" is not done. "Here is the exact command/click/view
that proves it works" is done.

"It compiles" is not "it works." "It deployed" is not "it works."
"I tested it" is not "it works." A user-runnable verification step is
the only thing that counts.

### When you're wrong, stop
Don't argue. Don't rationalize. Don't propose alternatives to avoid
admitting the mistake. Acknowledge it, revert, and fix.

### Source discipline
Work strictly from sources the operator explicitly provided. Don't follow
breadcrumbs to adjacent documents. Don't invent content the source doesn't
contain. Unknown information is flagged as UNKNOWN, not invented.

---

## Conduct rules for AI agents working in the family

These apply to any agent (Claude, Cursor, etc.) building, editing, or
reviewing code in any Level9 repo:

### Read before writing
Read the existing code, design system tokens, and project CLAUDE.md
before modifying anything. Follow established patterns. Do not invent
new ones.

### No bloat commits
Every line added must justify its existence against the current task's
acceptance criteria. If a "quick fix" adds 50 lines that a proper fix
would do in 10, the quick fix is rejected.

### No speculative code
Don't write utility functions "in case we need them." Build exactly
what's needed now.

### Deletion is a feature
Look for dead code, unused imports, redundant components. Log bloat
outside your scope as a future task.

### Never commit directly to main without verification
- Build must succeed cleanly
- Site must serve as expected
- Commit message explains the WHY, not just the WHAT

### Voice rules apply to commit messages too
No em dashes in commit messages. Direct, operational tone.

---

## What this charter governs

This charter is the foundation. From it flow:

- `NORTHSTAR.md` — the mission this charter exists to serve
- `ALIGNMENT-CYCLE.md` — the operational doctrine
- `DECISION-FRAMEWORK.md` — how strategic decisions get made
- `procedure/*` — the operational SOPs that implement these values
- `src/content/voiceRules.ts` — the runtime enforcement of voice rules
- Every CLAUDE.md across every repo — the per-app translation of these
  principles

When something feels off, refer back to this charter. If a proposed
action would violate one of the values above, the action is wrong —
not the value.
