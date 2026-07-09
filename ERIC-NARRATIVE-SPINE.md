---
id: LVL9-BRAND-ERIC-NARRATIVE-SPINE
title: "ERIC-NARRATIVE-SPINE.md"
version: "0.1"
effective: 2026-04-23
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
# ERIC-NARRATIVE-SPINE.md

Canonical source-of-truth for Eric Hathaway's personal narrative across four surfaces:

1. **Resume** (ATS-first, recruiter filter, bridge to LinkedIn)
2. **LinkedIn** (human magnetic, lead-gen, bridge to erichathaway.com)
3. **erichathaway.com** (continues experience, bridge to level9os.com)
4. **level9os.com** (conversion: "yes please")

Each surface pulls from this spine, compresses or amplifies per its job. Content below is voice-checked against `@level9/brand/content/voiceRules` (no em dashes, no banned phrases, operator-to-operator tone).

**Status:** v1 draft for Eric review. Gate the spine before touching any surface.

---

## 1. Positioning line (one sentence, buyer-legible)

> **AI Operating Architect. 20+ years in executive operating roles. 5+ years building commercial AI operating systems in production. Chief AI Officer through Level9 OS. Open to executive AI roles and fractional engagements.**

Why this works:
- Leads with identity (`AI Operating Architect`), not title salad.
- "20+ years" anchors credibility without aging the operator.
- "5+ years building" differentiates from strategy consultants who just now pivoted to AI.
- Never abbreviates to "CAO" (acronym not universally known).
- Closes with open-to-both framing so the same positioning works for W2 AI leadership roles AND fractional engagements.
- No em dashes. No "leverage," "synergies," "thrilled."

**Alternates to test:**

- Short: `AI Operating Architect. 20+ years in the rooms I now build for. Chief AI Officer @ Level9 OS.`
- Long: `I'm the AI Operating Architect companies call when AI needs to actually run inside operations, not just live on a strategy deck. I built Level9 OS to make that a repeatable install, not a custom engagement. Open to executive AI roles and fractional engagements.`

---

## 2. Title treatment per surface

Each surface leads with the title that best pulls the reader to the next surface.

**Rule:** Never abbreviate to "CAO." Always spell out "Chief AI Officer." Engagement model ("fractional") lives inside the role description, never in the top-line headline. Headline stays open to both W2 AI leadership roles and fractional engagements.

| Surface | Headline / hero reads | Why |
|---|---|---|
| **Resume top-line identity** | `Chief AI Officer · AI Operating Architect` | Identity. Open to both roles and engagements. "Founder" shows up in Experience section. |
| **Resume role title (Experience)** | `Founder, Chief AI Officer · Level9 OS` | Signals ownership + current operating title. "Fractional" lives in the description. |
| **LinkedIn headline** | `Chief AI Officer · AI Operating Architect @ Level9 OS. Building the systems that make AI actually run inside the business.` | Buyers and recruiters find via title. Descriptor makes them click. Stays open to both W2 and fractional. |
| **LinkedIn current role** | `Founder, Chief AI Officer · Level9 OS · 2020 to Present` | Single current identity. Media-rich under it. Fractional/full-time openness in the description. |
| **erichathaway.com hero** | `AI Operating Architect` with Level9 OS as platform below | Personal hub can lead with the differentiated identity. |
| **level9os.com hero** | Company voice, not personal. Eric shows up in `/about`. | Level9 is the platform. Eric is the operator behind it. |

---

## 3. Bio variants

### 3a. Headline (120 char). LinkedIn headline, Twitter, email signature.

```
Chief AI Officer · AI Operating Architect @ Level9 OS. Building the systems that make AI actually run inside the business.
```

(121 chars)

### 3b. Summary (300 char). LinkedIn About opener, resume summary, site hero sub-line.

```
AI Operating Architect. 20+ years in executive operating roles across Microsoft, Credit Suisse, S&P Global, T-Mobile, Zoot. Today I build and deploy operating systems (StratOS, CommandOS, LucidORG, OutboundOS) as Chief AI Officer through Level9 OS. Open to executive AI roles and fractional engagements.
```

(306 chars)

### 3c. About (1500 char). LinkedIn About body, level9os.com founder block, erichathaway.com /about intro.

```
I'm the AI Operating Architect companies call when AI needs to actually run inside operations, not just live on a strategy deck.

I spent 20+ years in executive operating roles at Fortune 100 scale. Microsoft, T-Mobile, Credit Suisse, S&P Global, Zoot Enterprises. Nine global markets. Ninety-four offices. Three post-acquisition integrations. 30% margin gains. 2x operational throughput. The scars to go with it.

What I learned across those operating years: misalignment compounds exponentially. A five-percent drift at headquarters becomes a fifty-percent gap by the time it reaches the field. Nobody sees it until it's too expensive to fix.

So in 2020 I stopped fixing other people's systems and started building the ones I wished existed. That became Level9 OS: the operating layer the modern business actually runs on.

6+ products in production today. StratOS pressure-tests strategic decisions against a ten-person simulated executive room. CommandOS orchestrates forty-eight domain officers across three governance gates. LucidORG measures organizational friction across thirty-seven levers. OutboundOS runs LinkedIn signal, multi-channel outbound, and customer care as one voice-calibrated umbrella. COO Playbook is the install methodology underneath. MAX is the conversational layer across all of it.

I'm open to executive AI roles and fractional Chief AI Officer engagements. Not strategy work. Installation.

Operator-to-operator. Evidence over claims. Built to be measured.
```

(1,486 chars)

### 3d. Story (longform). erichathaway.com /about page, keynote intros, longform bio.

Already strong on the live site. Preserve the existing structure ("Montana kid. Six continents. Still building.") but align the four-lesson arc to the canonical spine. See Section 9 for the four through-lines. Existing story copy on erichathaway-site/src/app/about/page.tsx is approved as-is except:

- Timeline dates must match Section 7 of this spine (not architect page's 1985 opener).
- Product count: 6 live (not 4).
- "Level9 OS" is the platform; "LucidORG" is one product inside it. Correct any copy that conflates.

---

## 4. Level9 OS role block (dominant current role)

This is the role that must dominate the resume top and LinkedIn Experience stack.

### For resume

```
FOUNDER, CHIEF AI OFFICER                                       2020 to Present
Level9 OS · Remote / Montana

AI Operating Architect across engagements. Design, build, and deploy the operating
systems that let companies run AI as a capability, not a project. 6+ commercial AI
products in production. Open to executive AI roles and fractional Chief AI Officer
engagements across enterprise, SaaS, fintech, and non-profit.

Build surface:
· StratOS. AI decision engine (10-person simulated executive room).
· CommandOS. Agent orchestration (48 domain officers, 3 governance gates).
· LucidORG. Organizational friction detection (ECI scoring across 37 levers).
· OutboundOS. Execution umbrella (LinkupOS + ABM Engine + AutoCS).
· COO Playbook. Install methodology (30/90/180 protocol).
· MAX. Conversational interface across the stack.

Select engagements 2020 to present:
LucidORG (COO, 2022-2025) · NextGen Interns (Exec Director, 2024-present) ·
Entrelliance Foundation (COO contract, 2023-2024) · Winning by Design
(Change Mgmt, 2021-2022)
```

### For LinkedIn (same role block, richer formatting)

- **Media carousel:** product tiles for StratOS, CommandOS, LucidORG, OutboundOS, Playbook, MAX.
- **Featured section above:** pinned three: the canonical Level9 OS intro video/visual, the COO Playbook (thenewcoo.com), most recent Substack article.
- **Role description:** use the 1,487-char About body above, trimmed to ~1,200 if LinkedIn character budget tightens when combined with media.

---

## 5. Compressed legacy block (1991-2020)

Everything before Level9, compressed into a single employer stack + metric bullets. This is the recruiter-credibility block on the resume and the "selected prior roles" block on LinkedIn.

### Resume version

```
GLOBAL OPERATIONS LEADERSHIP                                    1991 to 2020
Microsoft · T-Mobile · Credit Suisse · S&P Global · Zoot Enterprises ·
H&H Management · Winning by Design · CMO Consulting · Mono-Lite Industries

Executive operating roles across six continents, sixty countries, four languages.
Built and scaled the infrastructure now being automated.

· Expanded businesses into 9 global markets through strategic M&A
  (S&P Global · Credit Suisse · H&H Management)
· Led communications platform rollout across 94 offices for Microsoft
  Worldwide Public Sector
· Drove 30%+ margin improvement across global revenue ops and client delivery
  (Credit Suisse · Zoot · Winning by Design)
· 2x operational throughput via cross-functional integration
  (T-Mobile · Microsoft · Zoot)
· Managed 3 post-acquisition integrations across people, operations, and
  technology (H&H · Credit Suisse · T-Mobile)
· Taught Organizational Behavior, MSU Jake Jabs School of Business
```

### LinkedIn version

Collapse into two LinkedIn Experience blocks rather than ten:

1. **Global Operations Leadership.** `Microsoft · T-Mobile · Credit Suisse · S&P Global · Zoot · H&H` 1991-2020. One rich description + the same six bullets.
2. **Teaching & Advisory (ongoing).** MSU adjunct, board advisory, mentorship. Standalone short block.

Reason for collapse: ten separate entries makes Eric look like a consultant shopping for the next gig. One compressed block makes him look like an operator who's already built the thing.

---

## 6. Canonical Facts Block. 100% consistency enforced across all 4 surfaces.

**This is the single normative source.** Every number, date, metric, location, and scope claim below must appear identically across resume, LinkedIn, erichathaway.com, and level9os.com. If a surface says something different, the surface is wrong. Do not alter any figure here without updating all 4 surfaces in the same change.

### 6a. Years / tenure (RESOLVED 2026-04-23)

**Decision:** Two-figure targeted mix. Never use "30+" (ages the operator). Never use "three decades."

- **20+ years in executive operating roles.** Anchors executive credibility. Covers 1993-2020 Standard & Poor's through Zoot era (27 years of exec work).
- **5+ years building commercial AI operating systems.** Anchors current identity. Covers 2020-present Level9 OS era.

**Rule:** Every surface uses these two figures where relevant. Any other year framing (e.g., "thirty years," "three decades," "30+ years," "Twenty-plus") is out and must be replaced wherever it appears.

**Stat bar on erichathaway.com /about page:** update `30+ Years` to `20+ Years in Executive Operating Roles` (or equivalent shorter form). Keep the six-continent and sixty-country stats as they are.

**Narrative-copy variants that are allowed** (same spirit, slight rewording):
- `20+ years running global operations` (used on resume/LinkedIn)
- `20+ years in the rooms I now build for` (narrative-voice alternate)
- `Five years building the operating layer` (lead-in to the current-identity section)

### 6b. Geography (use these exact numbers everywhere)

- **6 continents**
- **60+ countries**
- **4 languages**
- **9 global markets** (M&A expansion, across S&P + Credit Suisse + H&H)
- **94 offices** (Microsoft WWPS comms rollout. Cite as "94" not "90+".)
- Cities lived in: Hong Kong, Zurich, Prague, Bali, Panama, Bozeman MT (Montana home)

### 6c. Scale / scope (exact figures, source = resume)

- **3 post-acquisition integrations** managed (H&H, Credit Suisse, T-Mobile)
- **Hundreds of leaders** mentored through AI-readiness and operational leadership programs
- **20+ keynotes** across EU, Asia, US

### 6d. Outcomes / results (cite with the source engagement, always)

- **30%+ margin improvement** (Credit Suisse, Zoot, Winning by Design)
- **20%+ market share growth** via strategic M&A (S&P Global, Credit Suisse)
- **35% execution efficiency increase** (Winning by Design, LucidORG, H&H)
- **25% rework reduction** via unified operating frameworks (Credit Suisse, Zoot, H&H, Winning by Design, Entrelliance)
- **20%+ cross-functional engagement and performance uplift** via AI-integrated OKR/KPI frameworks (LucidORG, Zoot, H&H)
- **2x operational throughput** via cross-functional integration (T-Mobile, Microsoft, Zoot, LucidORG)
- **2x execution success** via organizational diagnostics (LucidORG, Winning by Design, H&H)

Never state a metric without its source engagement in parentheses. Never use a metric in one sentence that can't be traced to a resume bullet.

### 6e. Products in production (exactly 6, source = @level9/brand/content/products.ts)

1. **StratOS.** AI decision engine.
2. **CommandOS.** Agent orchestration.
3. **OutboundOS** (umbrella). Contains LinkupOS + ABM Engine + AutoCS pods.
4. **LucidORG.** Organizational friction detection.
5. **COO Playbook.** Install methodology.
6. **MAX.** Conversational interface.

**Every reference to product count uses "6+."** Never "4," never "5," never "six" alone, never "several." The "+" signals forward momentum (more in build). Any surface currently saying "four commercial AI products" or "six AI systems" is stale and must be updated to "6+."

**Product-internal canonical figures (use these exact numbers if referenced):**

- StratOS: **10-person** simulated executive room, **3 rounds** of structured debate
- CommandOS: **48 domain officers** across **8 categories**, **3 governance gates**
- LucidORG: **4 pillars, 11 metrics, 37 intervention levers**. ECI scored **0 to 1000**.
- COO Playbook: **30/90/180** install protocol. **18 chapters**, **12 frameworks**, **5 paradigm shifts**, **8 Operating Domains**
- OutboundOS: **3 pods** (LinkupOS, ABM Engine, AutoCS)

### 6f. Career timeline (dates of record, source = resume)

| Years | Role | Org | Location |
|---|---|---|---|
| 1991-1993 | CTO (contract) | Mono-Lite Industries | Montana |
| 1993-1996 | Managing Director, SE Asia | Standard & Poor's | Singapore |
| 1996-2000 | CEO, Czech Republic | Credit Suisse | Prague |
| 2000-2008 | Global Managing Partner | H&H Management | Hong Kong |
| 2008-2012 | Director, WWPS Marketing (contract) | Microsoft | Redmond, WA |
| 2012-2014 | Director, Marketing Analytics (contract) | T-Mobile | Bellevue, WA |
| 2014-2015 | Partner (contract) | CMO Consulting | Remote |
| 2015-2019 | Global VP, Marketing | Zoot Enterprises | Bozeman, MT |
| 2020-present | Founder, Chief AI Officer | **Level9 OS** | Montana |
| 2021-2022 | Change Mgmt Lead (contract) | Winning by Design | (under Level9) |
| 2022-2025 | COO | LucidORG | (under Level9) |
| 2023-2024 | COO (contract) | Entrelliance Foundation | (under Level9) |
| 2024-present | Executive Director | NextGen Interns | (under Level9) |

**Rule:** Every surface orders these in reverse chronological order (most recent first). Level9 OS sits at the top of every stack. Legacy roles either compress (resume, LinkedIn) or appear in the /about timeline (site).

### 6g. Education (exact wording, appears on every surface that lists education)

- **MBA, Business Management and Strategy**
- **BA, International Relations and Computer Science**

Never "Master of Business Administration." Never "Bachelor of Arts." Abbreviate consistently.

### 6h. Corrections needed downstream (Phase 4 punch list)

- `erichathaway-site/src/data/timeline.ts` line 75-82: current entry "2020-Present · Founder & COO · LucidORG · Level9 · StratOS · CommandOS" must read "Founder, Chief AI Officer · Level9 OS" (products go in story, not role).
- `erichathaway-site/src/app/architect/page.tsx` eras array needs full reconciliation:
  - **1985-1989 era.** Keep, reframe as college-era. Eric confirmed this was during his BA (International Relations + Computer Science minor in hardware and software). Rewrite to: "College. BA minor in hardware and software. Shipped code on a VAX in Ada, the DoD's safety-critical AI language." Do not list as professional Experience.
  - **1990-2000 era.** Remove dotcom incubator / M&A advisory claims. Eric confirmed those were 2000-2008 activities, not 1990s. Rewrite 1990-2000 to reflect actual roles only: Mono-Lite 1991-1993, Standard & Poor's SE Asia 1993-1996, Credit Suisse Czech Republic 1996-2000.
  - **Missing 2000-2008 era.** Add it. H&H Management Global Managing Partner + dotcom incubator work + M&A / system / people integration advisory.
  - **Year-label bug.** Current era shows year "2008" on span "2005-2014." Fix span to 2008-2014 (Microsoft 2008-2012, T-Mobile 2012-2014).
  - **Remove "Twenty-plus".** Lines 511 and 595 of architect page use "Twenty-plus years of training" / "Twenty-plus years of operations." Replace with "20+ years" per Section 6a.
- `erichathaway-site/src/app/about/page.tsx` line 44-47: stat bar `30+ Years` must update to `20+ Years` per Section 6a.
- `erichathaway-site/src/app/about/page.tsx` line 33: "thirty years inside organizations" must update to "twenty-plus years inside organizations" or equivalent.
- `erichathaway-site/src/app/about/page.tsx` line 67: `30 years. 6 continents. One throughline.` must update to `20+ years. 6 continents. One throughline.`
- `erichathaway-site/CLAUDE.md` positioning line "four commercial AI products in production" must update to "6+" to match products.ts.
- Any mention of "90+ offices" must update to **"94 offices"** (from resume).
- Product-count references anywhere: always "6+." Never "four," "six," or "several."

---

## 7. Product one-liners

Canonical source: `@level9/brand/content/products.ts`. One-liners for resume bullets, LinkedIn featured tiles, and site hero strips:

- **StratOS.** AI decision engine. Ten-person simulated executive room pressure-tests every strategic decision before it costs real money. Three rounds, kill criteria, full governance trail. [stratos.lucidorg.com](https://stratos.lucidorg.com)
- **CommandOS.** Agent orchestration. Forty-eight domain officers across eight categories, three governance gates, multi-LLM routing. AI middle management.
- **LucidORG.** Organizational friction detection. ECI scoring across four pillars, eleven metrics, thirty-seven intervention levers. The nervous system under the operating stack. [lucidorg.com](https://lucidorg.com)
- **OutboundOS.** Execution umbrella. LinkupOS handles LinkedIn signal. ABM Engine runs multi-channel outbound. AutoCS runs customer care. One voice profile, one governance trail.
- **COO Playbook.** Install protocol. Thirty-day / ninety-day / one-hundred-eighty-day methodology. The operating manual underneath every Level9 product. [thenewcoo.com](https://thenewcoo.com)
- **MAX.** Conversational interface. Talk to the operation in plain English. Every metric, every pod, every decision.

**Never reimplement these product descriptions inline.** Pull from products.ts.

---

## 8. Education & contributions (compressed, for resume + LinkedIn Education section)

```
EDUCATION
MBA · Business Management and Strategy
BA · International Relations and Computer Science

CONTRIBUTIONS
Author · Lucid Insights, MINDSHIFT Monday, FUTURE Friday
Podcast Host · LucidUNPLUGGED (organizational efficiency),
               Finance Frontier (financial inclusion)
Adjunct · MSU Jake Jabs School of Business (Organizational Behavior)
Speaker · 20+ keynotes across EU, Asia, US on automation in the enterprise
Product Builder · six AI systems in production under Level9 OS
```

---

## 9. Tone rules (inherited + personal)

### Inherited from `@level9/brand/content/voiceRules`

- **HARD BAN:** em dashes, en dashes, double hyphens. Use periods, colons, or rephrase.
- **HARD BAN phrases:** "Great post," "Well said," "Absolutely," "100%," "Couldn't agree more," "in today's fast-paced world," "leverage synergies," "circle back," "let's unpack."
- **SOFT preference:** contractions, numerals, sentence case for sub-heads.
- **VOICE:** direct, operator-to-operator, earned authority, cuts through bullshit, augments workforce (never replaces), evidence over claims.

### Personal additions for Eric copy specifically

- **No resume clichés.** Never write "results-driven leader with a track record of" or "passionate about" or "seasoned executive."
- **No keyword inflation.** One real noun beats three vague ones.
- **Name the system, the outcome, the environment.** Not generic verbs like "drove," "led," "managed" without an object.
- **Active voice. Always.**
- **"AI Operating Architect"** is the identity. **"Chief AI Officer"** is the role. Always spell out "Chief AI Officer." Never abbreviate to "CAO" (acronym not universally known). "Fractional" is the engagement variant, not the headline.
- **Stay open to both W2 and fractional.** Eric is interested in executive AI roles AND fractional engagements. Top-line headline must not foreclose either. The engagement-model openness lives inside the role description, not the title.
- **Level9 OS is the anchor.** Every legacy company is a proof point under it. Never position a legacy employer as competing identity to Level9.
- **No name-dropping individuals.** Company logos for recognizability are fine. Never "I worked closely with [famous person]."
- **Signature line to echo across surfaces:** *"Not here to tell, sell, or compel. Just spark impactful questioning of all things."* (Already on erichathaway.com /about. Preserve.)
- **Four through-lines (from live /about page, canonical):**
  1. The system is the language.
  2. Self-correcting beats supervised.
  3. Misalignment compounds exponentially.
  4. If you need a transformation, you already lost.

---

## 10. Surface-specific extension guide

Each surface gets the spine PLUS these surface-only add-ons:

### Resume (bridge: get through ATS → reader opens LinkedIn)

- One page if possible. Two max.
- ATS-parseable fonts (Inter / Arial / Calibri). No icons ATS can't read.
- Contact line: email · LinkedIn URL · erichathaway.com. Nothing else.
- Section order: Headline + positioning line → Level9 OS role block → Compressed legacy block → Education → Contributions.
- **ATS keywords to seed naturally:** AI Strategy, AI Architecture, AI Governance, Agent Orchestration, Chief AI Officer, Head of AI, VP AI, Fractional Chief AI Officer, Operations Leadership, Digital Transformation, Revenue Operations, Organizational Design, Cross-functional Leadership, Global Expansion, Post-Acquisition Integration.
- **CTA:** `Full story at erichathaway.com.` as a bottom-line note.
- **Evidence test:** paste into Jobscan or a free ATS parser. Verify all company names, dates, and degrees extract cleanly. Verify `Chief AI Officer`, `AI Strategy`, and `Fractional Chief AI Officer` keywords score high.

### LinkedIn (bridge: human "holy shit balls" → site click)

- **Banner:** Level9 OS visual + "AI Operating Architect" tagline.
- **Headline:** Section 3a.
- **About:** Section 3c.
- **Featured (3 pinned):** Level9 OS intro (or single-product demo video) · COO Playbook (thenewcoo.com) · latest Substack article.
- **Experience stack:**
  1. Level9 OS · Founder, Chief AI Officer · 2020-present · media-rich
  2. Global Operations Leadership · 1991-2020 · compressed
  3. Teaching & Advisory · 2000-present · compressed
- **Skills (top 3 pinned):** AI Strategy · AI Operating Architecture · AI Governance. Keep "Fractional Executive Leadership" and "Operational Transformation" present at spots 4-5 (still valid skills, but don't let them pin at the top and narrow recruiter reads to fractional-only).
- **Recommendations:** prioritize from Level9 engagement clients over legacy employers. Current relevance beats nostalgia.
- **CTA:** "Full story and products at erichathaway.com → level9os.com."
- **Evidence test:** paste into SSI score checker. Verify search-discoverability for `Chief AI Officer`, `AI Operating Architect`, `Fractional Chief AI Officer`, and legacy employer keywords.

### erichathaway.com (bridge: "this dude is a trip" → level9os.com click)

- **Keep:** Existing visual system, headshot treatment, the four-through-lines section, the "Human Version" block, Big E Sessions.
- **Fix:** Timeline dates per Section 6f of this spine. Reconcile architect page eras per Section 6h. Update "Founder & COO" role line to "Founder, Chief AI Officer."
- **Tune:** Story opener. Add positioning line (Section 1) as eyebrow over the current "Montana kid" hero.
- **Product count:** 6 live, not 4.
- **Every product link points out to level9os.com or product domain.** Never reimplement product pages here. (Already the architecture.)
- **Evidence test:** walk a cold visitor through /home → /about → /architect → and verify "now I want to visit level9os.com."

### level9os.com (bridge: "yes please" conversion)

- **New cool-as-shit intro (5sec, not 20sec):** brief visual moment that loads instant. Think ForgeCube-style but faster. Reuses existing brand motion primitives (RevealMask, MagneticCard, CursorGradient from `@level9/brand/components/motion`) and the existing ForgeCube architecture component.
- **Trim:** length reduction on `/products` and `/how-we-work` per your "long and repetitive" note.
- **Eric shows up in `/about`** as the operator behind the platform, not the platform hero. Use Section 3c as founder block.
- **Evidence test:** page-weight test on intro (should be under 2s LCP), then cold-visitor test for "yes please" reaction.

---

## 11. Open questions. ALL RESOLVED 2026-04-23.

All 8 originally-open items have been resolved by Eric. Decisions recorded below for future reference.

1. **Architect page 1985-1989 era.** RESOLVED. This is college-era, during Eric's BA (International Relations with Computer Science minor in hardware and software). Ada/VAX code is accurate. Do NOT add to resume Experience. On architect page, reframe as "College. BA minor in hardware and software. Shipped code on a VAX in Ada, the DoD's safety-critical AI language."
2. **Architect page 1990-2000 dotcom incubator / M&A advisory claims.** RESOLVED. Those activities were 2000-2008, not 1990-2000. Remove from 1990-2000 era, add to 2000-2008 H&H era. Architect page rewrite punch list in Section 6h.
3. **Twenty-plus years vs 20+.** RESOLVED. Standardize on "20+ years" (numerals) across all surfaces. Never "Twenty-plus." Never "30+" (ages the operator). Two-figure targeted mix: 20+ years executive operating + 5+ years building AI. See Section 6a.
4. **"Four commercial AI products in production"** vs six in products.ts. RESOLVED. Always "6+" everywhere. Never "four," never "six" alone. See Section 6e.
5. **"Six AI systems"** on /about stat bar. RESOLVED. Update to "6+."
6. **Title treatment.** RESOLVED. Always spell out "Chief AI Officer" (never abbreviate to "CAO," acronym not universally known). Top-line headline omits "(Fractional)" qualifier to stay open to both W2 executive AI roles AND fractional engagements. Role description inside Experience section states the open-to-both framing explicitly. See Section 2 title treatment table.
7. **Legacy employer display order on resume.** RESOLVED. Grouped/compressed with dates. See Section 5.
8. **LinkedIn URL.** RESOLVED. `linkedin.com/in/erichathaway1` is canonical for all contact lines.

---

## 12. Next phases (gated on this spine being approved)

Once Eric approves this spine:

- **Phase 2:** draft resume from spine. Deliverable: one Google Doc or .docx formatted for ATS + visually human. Evidence: Jobscan parse + Eric read.
- **Phase 3:** draft LinkedIn rewrites (headline, about, featured, experience blocks). Deliverable: copy-paste-ready markdown document. Evidence: Eric pastes into LinkedIn, renders clean, feels "holy shit balls."
- **Phase 4:** erichathaway.com content pass + date-order fixes on /about and /architect. Deliverable: PR against erichathaway/erichathaway-site. Evidence: live on erichathaway.com, reads as "this dude is a trip."
- **Phase 5:** level9os.com length trim + new 5-second intro. Deliverable: PR against erichathaway/level9os-site. Evidence: live on level9os.com, intro under 2s LCP, reads as "yes please."

No parallel drafting. Each phase gates on the previous phase's evidence test.

---

**End of spine v1.** Eric: react to Section 1 (positioning), Section 2 (title treatment), Sections 3-5 (bios + role blocks), and Section 11 (open questions) first. Everything else follows from those.
