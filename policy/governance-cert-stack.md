---
id: LVL9-BRAND-GOVERNANCE-CERT-STACK
title: "Governance &amp; Certification Stack . Brand Policy"
version: "0.1"
effective: 2026-04-30
last_verified: 2026-05-19
owner: Eric Hathaway
status: live
review_cadence: quarterly
audience: private
authority: brand
tags:
  - section:governance
  - audience:private
  - layer:L10-brand
  - type:md
  - authority:brand
  - origin:ai-drafted
  - topic:governance
  - topic:brand-identity
  - topic:policy
---
# Governance &amp; Certification Stack . Brand Policy

**Owner:** Eric Hathaway . Founder, Level9
**Last updated:** 2026-04-30
**Status:** Reality of today. Roadmap forward. **What we say in marketing.**

---

## Reality of today (2026-04-30)

Level9 holds **zero formal certifications** today. We are not paying for any audits, evidence-collection platforms (Drata, Vanta), or compliance services. We have made no third-party investment in compliance posture as of this date.

What we DO have, defensibly, at the architecture level:

- **AEGIS-aligned audit trail** . every action by every agent and every system is logged. Append-only.
- **RLS-locked secrets vault** . Supabase row-level security on the secrets table. Per-service access scoped.
- **Policy-as-code** . governance rules expressed in code, enforced at the chassis level rather than manually.
- **OpenTelemetry-instrumented** . runtime telemetry across the stack.
- **Encrypted secrets** . no inline secrets in code. Vault retrieval via RPC.

These are **architecture facts**, not certifications. Defensible because the code shows it. Not defensible as "we have SOC 2."

---

## What we say in marketing today (the honest version)

**Compliance-ready architecture.** AEGIS-aligned audit trail. Encrypted secrets. Policy-as-code. Every action logged.

**GDPR-aware. EU AI Act ready.** Privacy policy and risk-classification documentation in place. (Note: requires legal review at $5-15k before this claim is fully defensible. See roadmap below.)

**SOC 2 . ISO 27001 . ISO 42001 . on roadmap.** Engaged when revenue justifies the audit fees.

---

## What we DO NOT claim today

- "SOC 2 certified" or "SOC 2 Type II"
- "ISO 27001 certified"
- "ISO 42001 certified"
- "SOC 2 audit in progress" (we have not engaged an auditor)
- "GDPR-compliant" without the legal-review caveat
- Anything that implies third-party validation we don't have

If a buyer's CISO calls and asks for our SOC 2 report, the honest answer is **"we don't have one yet. Here's our architecture documentation. We're targeting Year 1 audit when engagement volume supports it."**

---

## Roadmap to defensible cert claims

| Phase | Action | Hard cost | Timeline | What we can claim after |
|---|---|---|---|---|
| **Phase 0** (today) | Architecture-level claims only | $0 | Now | "Compliance-ready architecture. Audit trail, encrypted secrets, policy-as-code." |
| **Phase 1** | Privacy policy + DPA template + lawyer review | $2-5k | 4 weeks | "**GDPR-aware**" defensibly |
| **Phase 2** | EU AI Act risk classification + legal opinion | $10-15k | 6-8 weeks | "**EU AI Act ready**" defensibly |
| **Phase 3** | Engage SOC 2 auditor (Strike Graph, Sprinto, or Schellman) | $25-40k | 9-12 months from kickoff | "**SOC 2 Type II**" |
| **Phase 4** | ISO 27001 layered onto SOC 2 auditor relationship | +$15-20k | +3 months | "**ISO 27001 certified**" |
| **Phase 5** | ISO 42001 (AI management) once AI deployments are mature | $20-40k | 6-12 months | "**ISO 42001 certified**" |

Total budget to reach all 5 claims: **~$75-100k spread over 18-24 months.** Not a single big check.

---

## DIY notes (what costs are NOT hard)

The audit fees in Phases 3-5 are hard costs (you cannot self-certify). Everything else is DIY-able:

- **Policy writing** . free if you write yourself, or $2-5k for template-based services
- **Implementation work** . free (your own time)
- **Evidence collection** . free with spreadsheets, $12-30k/year with Drata or Vanta
- **Auditor selection** . shop multiple. Strike Graph and Sprinto bundle platform + auditor for ~$30-45k SOC 2 Type I, ~$50-65k Type II all-in. Schellman, A-LIGN, Coalfire are name-brand traditional auditors. Smaller boutique auditors exist for ~$15-25k engagements.

For a 1-2 person firm, you can probably skip Drata/Vanta and do evidence collection manually. Some auditors are fine with that. Saves $12-30k/year.

---

## Brochure language reference (today)

Use this in the brochure governance section:

> **Built compliance-ready.**
> AEGIS-aligned audit trail . Encrypted secrets . Policy-as-code . Every action logged.
>
> **GDPR-aware . EU AI Act ready** (after Phase 1-2 legal sprint)
> **SOC 2 . ISO 27001 . ISO 42001 on roadmap** (Year 1-2)

When SOC 2 lands, swap "on roadmap" for "Type II certified" with the audit date and auditor name.

---

## When to revisit this document

- After signing engagement letters with a SOC 2 auditor (update Phase 3 status)
- After the legal sprint completes (Phases 1-2 become defensible claims)
- When any individual cert lands (move from "on roadmap" to certified)
- Annually as cert refreshes are required

This document is the source of truth for what Level9 says about compliance. Marketing copy across level9os.com, brochures, decks, and outbound messaging must match what is here.
