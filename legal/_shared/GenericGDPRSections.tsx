// GenericGDPRSections.tsx — free-option boilerplate that replaces
// <PasteExternalHere> blocks in the per-LLC privacy policies.
//
// Each export is a drop-in replacement for one of the iubenda/termly-sourced
// sections. The language is industry-standard GDPR/CCPA boilerplate adapted
// from public legal templates (EDPB guidance, CA AG CCPA guidance). Per-LLC
// variation comes from the `entity` prop.
//
// IMPORTANT: Requires legal counsel review before shipping to commercial
// production. These blocks are a working draft intended to unblock the
// "Legal template completion" checkoff (Gov Hub #5) without paid tools.
// For LucidORG (real Stripe payments) + NextGenIntern (COPPA-sensitive),
// treat this as a first-pass that must be reviewed by an attorney.
//
// Usage in a privacy policy:
//   import { DataCategoriesSection, LegalBasisSection, RightsSection,
//            InternationalTransfersSection, CCPASection } from "../_shared/GenericGDPRSections";
//
//   <TemplateSection heading="Information we collect" source="shared">
//     <DataCategoriesSection entity={entity} productNotes={...} />
//   </TemplateSection>

import React from "react";
import type { LegalEntity } from "../entities";

type SectionProps = { entity: LegalEntity };

// ─── 1. Data categories (what we collect) ───────────────────────────────────
export function DataCategoriesSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        We collect the following categories of personal information, each tied to a specific
        purpose described in the next section:
      </p>
      <ul>
        <li>
          <strong>Account information</strong> — name, email address, hashed password (if
          applicable), and any profile details you choose to provide. Collected when you create
          an account and when you update it.
        </li>
        <li>
          <strong>Authentication data</strong> — login tokens, OAuth identifiers from third-party
          identity providers (e.g. Google), and session identifiers. Collected during sign-in and
          session maintenance.
        </li>
        <li>
          <strong>Usage and product telemetry</strong> — pages visited, features used, time
          spent, device type, browser, approximate location inferred from IP. Collected via
          first-party analytics and server logs during your interaction with the Services.
        </li>
        <li>
          <strong>Content you submit</strong> — text, files, prompts, configurations, and any
          other material you upload or type into the Services. Collected when you use features
          that store or process your input.
        </li>
        <li>
          <strong>Communications</strong> — emails, support conversations, feedback, and survey
          responses. Collected when you contact us or respond to outreach.
        </li>
        <li>
          <strong>Billing and payment information</strong> — if you purchase a paid plan, we
          receive limited billing metadata (plan, amount, status) from Stripe. Full card
          details are collected and stored by Stripe, not by us.
        </li>
        <li>
          <strong>Technical data</strong> — IP address, user-agent string, cookies (see our
          Cookie Policy), and crash or error diagnostics.
        </li>
      </ul>
      <p>
        We do <em>not</em> knowingly collect special-category data (health, biometric, political
        affiliation, religion, sexual orientation, etc.). If you share this information
        unsolicited, we delete it on detection and notify you.
      </p>
    </>
  );
}

// ─── 2. Purpose and legal basis (GDPR Article 6) ────────────────────────────
export function LegalBasisSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        We process your personal information for the following purposes, each grounded in one
        of the six legal bases set out in Article 6 of the GDPR:
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1em" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Purpose</th>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Legal basis (GDPR Art. 6)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "6px 10px" }}>Deliver the Services you subscribed to or requested</td>
            <td style={{ padding: "6px 10px" }}>Contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Create, maintain, and secure your account</td>
            <td style={{ padding: "6px 10px" }}>Contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Process payments and maintain billing records</td>
            <td style={{ padding: "6px 10px" }}>Contract + Legal obligation (Art. 6(1)(b) and (c))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Send service-related announcements (outages, policy changes, receipts)</td>
            <td style={{ padding: "6px 10px" }}>Contract + Legitimate interest (Art. 6(1)(b) and (f))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Send marketing communications and product updates</td>
            <td style={{ padding: "6px 10px" }}>Consent (Art. 6(1)(a)) — you can withdraw at any time</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Improve the Services via product analytics and aggregated usage analysis</td>
            <td style={{ padding: "6px 10px" }}>Legitimate interest (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Detect, investigate, and prevent fraud, abuse, or security incidents</td>
            <td style={{ padding: "6px 10px" }}>Legitimate interest + Legal obligation (Art. 6(1)(f) and (c))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Comply with tax, accounting, audit, and other legal requirements</td>
            <td style={{ padding: "6px 10px" }}>Legal obligation (Art. 6(1)(c))</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Defend legal claims and enforce our Terms</td>
            <td style={{ padding: "6px 10px" }}>Legitimate interest (Art. 6(1)(f))</td>
          </tr>
        </tbody>
      </table>
      <p>
        Where we rely on legitimate interest, we have conducted a balancing test between our
        interest and your rights. You may object to this processing at any time by emailing{" "}
        <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
      </p>
    </>
  );
}

// ─── 3. Your rights (GDPR + CCPA unless disabled) ───────────────────────────
export function RightsSection({ entity, includeCCPA = true }: SectionProps & { includeCCPA?: boolean }) {
  return (
    <>
      <p>
        Depending on your location and applicable law, you have the following rights with
        respect to your personal information. To exercise any of these, email{" "}
        <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>. We respond within
        30 days (GDPR) or 45 days (CCPA) and will not discriminate against you for exercising
        any right.
      </p>
      <p>
        <strong>GDPR rights (EU / UK residents):</strong>
      </p>
      <ul>
        <li>
          <strong>Access</strong> (Art. 15) — obtain a copy of the personal data we hold about
          you.
        </li>
        <li>
          <strong>Rectification</strong> (Art. 16) — correct inaccurate or incomplete data.
        </li>
        <li>
          <strong>Erasure</strong> (Art. 17) — request deletion where no overriding legal basis
          requires retention.
        </li>
        <li>
          <strong>Restriction of processing</strong> (Art. 18) — limit how we use your data in
          specific circumstances.
        </li>
        <li>
          <strong>Data portability</strong> (Art. 20) — receive your data in a structured,
          machine-readable format.
        </li>
        <li>
          <strong>Objection</strong> (Art. 21) — object to processing based on legitimate
          interest or direct marketing.
        </li>
        <li>
          <strong>Withdraw consent</strong> (Art. 7(3)) — at any time, without affecting the
          lawfulness of processing before withdrawal.
        </li>
        <li>
          <strong>Lodge a complaint</strong> (Art. 77) — with your national supervisory
          authority. The lead authority for {entity.legalName} is the data protection authority
          of our establishment (see GDPR Art. 56).
        </li>
        <li>
          <strong>Not be subject to solely automated decision-making</strong> (Art. 22) — we do
          not make decisions that produce legal or similarly significant effects solely by
          automated means without human review.
        </li>
      </ul>
      {includeCCPA && (
        <>
          <p>
            <strong>CCPA/CPRA rights (California residents):</strong>
          </p>
          <ul>
            <li>
              <strong>Right to know</strong> what categories of personal information we collect,
              the sources, purposes, and third parties we share with.
            </li>
            <li>
              <strong>Right to access</strong> a copy of the specific pieces of personal
              information we hold about you.
            </li>
            <li>
              <strong>Right to delete</strong> personal information we have collected, subject to
              legal exceptions (e.g. fraud prevention, tax records, active transactions).
            </li>
            <li>
              <strong>Right to correct</strong> inaccurate personal information.
            </li>
            <li>
              <strong>Right to opt out of sale or sharing</strong> — we do not sell personal
              information for monetary consideration. We do not share personal information for
              cross-context behavioural advertising.
            </li>
            <li>
              <strong>Right to limit use of sensitive personal information</strong> — we do not
              use sensitive personal information beyond what is necessary to provide the Services.
            </li>
            <li>
              <strong>Right to non-discrimination</strong> — we will not deny service, charge
              different prices, or provide a different level of service as a consequence of
              exercising your CCPA rights.
            </li>
          </ul>
          <p>
            To submit a CCPA request, email{" "}
            <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>. We verify
            identity via the email address on file plus one additional data point before
            processing deletion or access requests. Authorized agents may submit requests on
            your behalf with written authorization.
          </p>
        </>
      )}
    </>
  );
}

// ─── 4. International transfers (SCCs) ──────────────────────────────────────
export function InternationalTransfersSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        {entity.legalName} is based in the United States. If you access the Services from the
        European Economic Area (EEA), United Kingdom, or Switzerland, your personal data will
        be transferred to, stored in, and processed in the United States and potentially other
        countries where our service providers operate.
      </p>
      <p>
        For transfers of EEA / UK / Swiss personal data to the United States and other third
        countries, we rely on the following safeguards under GDPR Chapter V:
      </p>
      <ul>
        <li>
          <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European
          Commission in its Implementing Decision (EU) 2021/914, with our sub-processors where
          applicable.
        </li>
        <li>
          <strong>UK International Data Transfer Addendum</strong> (IDTA) or the UK's approved
          transfer mechanism, where UK data is involved.
        </li>
        <li>
          <strong>EU-US Data Privacy Framework (DPF)</strong> where a processor is certified
          (e.g. cloud vendors listed on the DPF List maintained by the US Department of
          Commerce).
        </li>
        <li>
          <strong>Supplementary measures</strong> including encryption in transit and at rest,
          access controls, and contractual obligations on sub-processors.
        </li>
      </ul>
      <p>
        You can request a copy of the relevant SCCs or DPF certification details by emailing{" "}
        <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
      </p>
    </>
  );
}

// ─── 6. Disclaimers (Terms placeholder) ─────────────────────────────────────
export function DisclaimersSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        <strong>The Services are provided "AS IS" and "AS AVAILABLE"</strong> without warranty
        of any kind. To the fullest extent permitted by applicable law, {entity.legalName}{" "}
        disclaims all warranties, whether express, implied, statutory, or otherwise, including
        without limitation:
      </p>
      <ul>
        <li>implied warranties of merchantability, fitness for a particular purpose, and non-infringement;</li>
        <li>warranties arising out of course of dealing, usage, or trade;</li>
        <li>warranties that the Services will be uninterrupted, error-free, secure, or free of viruses or other harmful code;</li>
        <li>warranties regarding the accuracy, reliability, or completeness of any content, including AI-generated output;</li>
        <li>warranties regarding specific outcomes, results, or economic value derived from using the Services.</li>
      </ul>
      <p>
        AI outputs produced through the Services are generated by statistical models and may
        contain errors, omissions, or fabrications. You are responsible for reviewing AI output
        before relying on or distributing it. No AI output should be treated as legal,
        financial, medical, or professional advice unless separately verified by a qualified
        human professional.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain warranties; in those
        jurisdictions the above exclusions apply to the maximum extent permitted by law.
      </p>
    </>
  );
}

// ─── 7. Limitation of liability (Terms placeholder) ─────────────────────────
export function LimitationOfLiabilitySection({ entity }: SectionProps) {
  return (
    <>
      <p>
        <strong>To the maximum extent permitted by applicable law:</strong>
      </p>
      <ul>
        <li>
          In no event will {entity.legalName}, its affiliates, officers, directors, employees,
          agents, or licensors be liable for any indirect, incidental, special, consequential,
          punitive, or exemplary damages, including without limitation damages for lost
          profits, lost revenue, lost data, business interruption, goodwill, or other
          intangible losses, arising out of or in connection with your use of (or inability to
          use) the Services.
        </li>
        <li>
          The aggregate liability of {entity.legalName} for all claims arising out of or
          relating to the Services will not exceed the greater of (a) the total amount you
          paid to {entity.legalName} for the Services in the twelve (12) months preceding the
          event giving rise to the claim, or (b) one hundred US dollars (USD $100).
        </li>
        <li>
          These limitations apply regardless of the legal theory of liability (contract, tort,
          strict liability, statutory, or otherwise) and even if {entity.legalName} has been
          advised of the possibility of such damages.
        </li>
      </ul>
      <p>
        Some jurisdictions do not allow the limitation or exclusion of liability for incidental
        or consequential damages, so the above limitation may not apply to you. In those
        jurisdictions, liability is limited to the maximum extent permitted by law.
      </p>
    </>
  );
}

// ─── 8. Indemnification (Terms placeholder) ─────────────────────────────────
export function IndemnificationSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        You agree to indemnify, defend, and hold harmless {entity.legalName}, its affiliates,
        officers, directors, employees, agents, and licensors from and against any claims,
        demands, losses, liabilities, damages, costs, and expenses (including reasonable
        attorneys' fees) arising out of or related to:
      </p>
      <ul>
        <li>your use of or interaction with the Services;</li>
        <li>your violation of these Terms or any applicable law or regulation;</li>
        <li>your violation of any third-party right, including intellectual property, privacy, or publicity rights;</li>
        <li>any content you submit to the Services or any distribution of AI output you obtain through the Services;</li>
        <li>any dispute between you and a third party that arises from your use of the Services.</li>
      </ul>
      <p>
        {entity.legalName} reserves the right, at its own expense, to assume the exclusive
        defense and control of any matter otherwise subject to indemnification by you, in which
        event you will cooperate in asserting any available defenses.
      </p>
    </>
  );
}

// ─── 9. Cookie inventory (Cookie Policy placeholder) ────────────────────────
export function CookieInventorySection({ entity }: SectionProps) {
  return (
    <>
      <p>
        We use cookies and similar technologies for the purposes described below. Some cookies
        are strictly necessary to operate the Services; others are set only with your consent.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1em" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Category</th>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Purpose</th>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Typical duration</th>
            <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Consent required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "6px 10px" }}>Strictly necessary</td>
            <td style={{ padding: "6px 10px" }}>Authentication, session integrity, load balancing, CSRF protection</td>
            <td style={{ padding: "6px 10px" }}>Session / up to 30 days</td>
            <td style={{ padding: "6px 10px" }}>No (exempt under ePrivacy)</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Functional</td>
            <td style={{ padding: "6px 10px" }}>Remember preferences (language, theme, recent views)</td>
            <td style={{ padding: "6px 10px" }}>Up to 12 months</td>
            <td style={{ padding: "6px 10px" }}>Yes</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Analytics</td>
            <td style={{ padding: "6px 10px" }}>Measure site usage in aggregate (privacy-first analytics where possible)</td>
            <td style={{ padding: "6px 10px" }}>Up to 24 months</td>
            <td style={{ padding: "6px 10px" }}>Yes</td>
          </tr>
          <tr>
            <td style={{ padding: "6px 10px" }}>Marketing</td>
            <td style={{ padding: "6px 10px" }}>We do not currently set marketing or advertising cookies. If this changes, this policy will be updated with 14 days' notice.</td>
            <td style={{ padding: "6px 10px" }}>—</td>
            <td style={{ padding: "6px 10px" }}>Yes (when introduced)</td>
          </tr>
        </tbody>
      </table>
      <p>
        A current, scanner-generated inventory of individual cookies (name, provider, specific
        duration) is available on request via{" "}
        <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>. We will refresh
        this inventory at least quarterly and whenever a new third-party script is added.
      </p>
    </>
  );
}

// ─── 10. Cookie choices (Cookie Policy placeholder) ─────────────────────────
export function CookieChoicesSection({ entity }: SectionProps) {
  return (
    <>
      <p>
        You have several ways to control cookies and similar technologies on our site:
      </p>
      <ul>
        <li>
          <strong>In-product consent preferences</strong> — when required by law, we show a
          consent banner on your first visit. You can change your choices at any time by
          clicking "Cookie Preferences" in the footer (or the equivalent link on your account
          settings page). Strictly-necessary cookies cannot be disabled because the Services
          cannot function without them.
        </li>
        <li>
          <strong>Browser controls</strong> — most browsers allow you to block cookies, delete
          existing cookies, or receive a warning before a cookie is stored. Instructions differ
          by browser; search your browser's help for "cookie settings." Blocking strictly
          necessary cookies will prevent you from using core features of the Services.
        </li>
        <li>
          <strong>Global Privacy Control (GPC)</strong> — we honour browser-sent GPC signals
          as an opt-out of any sale or sharing for users in jurisdictions where the signal is
          required (e.g. California). Because we do not sell or share personal information as
          defined in the CCPA, the practical effect of GPC on this site is limited.
        </li>
        <li>
          <strong>Do Not Track</strong> — some browsers send a "Do Not Track" header. There is
          no industry consensus on how to respond to this signal and we do not currently alter
          behaviour based on it. We disclose this per California Business & Professions Code §
          22575(b)(5).
        </li>
        <li>
          <strong>Specific opt-outs</strong> — you can opt out of some analytics tools
          directly with the provider (e.g. browser add-ons or account-level opt-outs where
          supported). Contact{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a> for help.
        </li>
      </ul>
    </>
  );
}

// ─── 5. CCPA (when it has its own section, separate from RightsSection) ─────
export function CCPASection({
  entity,
  includeMinor = false,
}: SectionProps & { includeMinor?: boolean }) {
  return (
    <>
      <p>
        This section applies to California residents and supplements the general rights
        described above. It reflects California Civil Code §§ 1798.100 et seq. (CCPA as amended
        by CPRA).
      </p>
      <p>
        <strong>Categories of personal information we collect and disclose.</strong> In the
        last 12 months, we have collected the following CCPA-defined categories:
      </p>
      <ul>
        <li>Identifiers (name, email, IP address, device identifiers).</li>
        <li>Commercial information (subscription status, transaction history).</li>
        <li>Internet or network activity (browsing, usage logs, interactions with the Services).</li>
        <li>Inferences drawn from the above (usage patterns, preferences).</li>
        <li>Professional or employment-related information (if you provide it in your profile).</li>
      </ul>
      <p>
        We disclose these categories to service providers (infrastructure, payments, email,
        AI processors) solely to deliver the Services. We do <strong>not sell</strong>{" "}
        personal information for monetary consideration and do <strong>not share</strong> it
        for cross-context behavioural advertising.
      </p>
      <p>
        <strong>Do Not Sell or Share My Personal Information.</strong> Because we do not sell
        or share as those terms are defined in the CCPA, no opt-out is required. You may still
        submit an opt-out preference signal (GPC); we will honour it as a request to cease any
        future sharing.
      </p>
      {includeMinor && (
        <p>
          <strong>Minors (under 16).</strong> Where the Services involve users under 16, we
          obtain affirmative consent from the user (13–15) and verifiable parental consent for
          users under 13 before any sale or sharing, consistent with CCPA and COPPA. See our
          separate COPPA-specific disclosures.
        </p>
      )}
      <p>
        <strong>How to exercise CCPA rights.</strong> Email{" "}
        <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a> with the subject
        line "CCPA Request." We will verify your identity and respond within 45 days (extendable
        once by 45 additional days with notice).
      </p>
    </>
  );
}
