// nextgenintern/PrivacyPolicy.tsx — NextGen Interns LLC privacy policy scaffold.
// COPPA-critical: audience likely includes minors (students / early-career).
// Expanded parental-consent + minor-rights sections vs LucidORG template.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";
import {
  DataCategoriesSection,
  LegalBasisSection,
  RightsSection,
  InternationalTransfersSection,
  CCPASection,
} from "../_shared/GenericGDPRSections";

const entity = getEntity("nextgenintern");
// Replaced 5 external-source sections with GenericGDPRSections (2026-04-20 #5).
// Special: CCPASection uses includeMinor=true because audience includes under-16s.
// COPPA-specific disclosures already handled in the dedicated "Children under 13"
// internal section above. Legal counsel review required (COPPA-sensitive).
const TEMPLATE_SECTIONS_REMAINING = 0;

export function PrivacyPolicy() {
  return (
    <PolicyShell
      entity={entity}
      docType="privacy"
      title="Privacy Policy"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="Who we are (Data Controller)" source="internal">
        <p>
          This notice describes how <strong>{entity.legalName}</strong> (“we,” “NextGen”)
          collects and uses personal information when students, interns, and employers interact
          with the NextGen Interns platform (the “Service”).
        </p>
        <p>
          Privacy contact: <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="Children under 13 (COPPA)" source="internal">
        <p>
          The Service is not intended for children under 13. Accounts are available only to
          users 13 or older. If we learn a child under 13 has provided personal information
          without verifiable parental consent, we delete the account and data promptly.
        </p>
        <p>
          Parents or guardians who believe their child has registered may request deletion by
          emailing <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="Information we collect" source="shared">
        <DataCategoriesSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Purpose and legal basis" source="shared">
        <LegalBasisSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Student / intern specifics" source="internal">
        <ul>
          <li>
            School-provided information (institution, major, graduation year) is used solely to
            match candidates with relevant employers.
          </li>
          <li>
            Resume and profile data are visible to employers you apply to, and only to them.
          </li>
          <li>
            We never sell student data. Employer access is revocable by the student at any
            time.
          </li>
          <li>
            If you are 13–17, you may use the Service with the knowledge of a parent or
            guardian.
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Your rights" source="shared">
        <RightsSection entity={entity} includeCCPA={true} />
      </TemplateSection>

      <TemplateSection heading="FERPA considerations" source="internal">
        <p>
          If you are enrolled at a US school that has partnered with NextGen, information
          shared with us under that partnership may be governed by the Family Educational Rights
          and Privacy Act (FERPA). We treat such information as confidential educational
          records and share it only as permitted by the school's directory information policy.
        </p>
      </TemplateSection>

      <TemplateSection heading="Third-party processors" source="internal">
        <p>Processor categories:</p>
        <ul>
          <li>Infrastructure: Vercel (hosting), Supabase (database).</li>
          <li>Communications: Email provider [LIST — Resend or Postmark], Slack for ops.</li>
          <li>Payments: [IF EMPLOYERS ARE CHARGED: Stripe — otherwise state "No payment processing"].</li>
          <li>AI: [IF USED FOR MATCHING — Anthropic / OpenAI under enterprise no-training agreements].</li>
          <li>Background verification: [IF USED — Checkr or similar; list here].</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Data retention" source="internal">
        <p>
          Active accounts: data retained while account is active. Inactive (90+ days): account
          data archived, no longer shown to employers. Deleted: all personal information
          removed within 30 days except records we must retain by law (tax, dispute records).
        </p>
      </TemplateSection>

      <TemplateSection heading="International transfers" source="shared">
        <InternationalTransfersSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Security" source="internal">
        <p>
          We use TLS 1.2+ encryption in transit, at-rest encryption, and row-level access
          controls. We disclose material breaches to affected users within 72 hours per GDPR
          and any stricter timelines required by US state law.
        </p>
      </TemplateSection>

      <TemplateSection heading="California (CCPA)" source="shared">
        <CCPASection entity={entity} includeMinor={true} />
      </TemplateSection>

      <TemplateSection heading="Changes" source="shared">
        <p>
          We may update this policy as the Service evolves. Material changes are emailed to the
          address on your account at least 14 days before taking effect.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
