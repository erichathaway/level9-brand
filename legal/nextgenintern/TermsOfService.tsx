// nextgenintern/TermsOfService.tsx — NextGen Interns LLC terms scaffold.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection, PasteExternalHere } from "../_shared/PolicyShell";

const entity = getEntity("nextgenintern");
const TEMPLATE_SECTIONS_REMAINING = 3;

export function TermsOfService() {
  return (
    <PolicyShell
      entity={entity}
      docType="terms"
      title="Terms of Service"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="Who these terms apply to" source="internal">
        <p>
          These Terms form a binding agreement between you and <strong>{entity.legalName}</strong>{" "}
          governing your use of the NextGen Interns platform (the “Service”). They apply to
          three types of users:
        </p>
        <ul>
          <li><strong>Students / interns</strong> seeking opportunities.</li>
          <li><strong>Employers</strong> posting opportunities and reviewing applicants.</li>
          <li><strong>School / program administrators</strong> managing student accounts.</li>
        </ul>
        <p>
          If you are under 18 you affirm that a parent or guardian has reviewed these Terms
          with you. Users under 13 are not permitted.
        </p>
      </TemplateSection>

      <TemplateSection heading="Account" source="internal">
        <p>
          You are responsible for the accuracy of your profile and the security of your login.
          Misrepresenting your age, school affiliation, or qualifications is grounds for
          immediate termination. Employers must use real company information and make accurate
          postings.
        </p>
      </TemplateSection>

      <TemplateSection heading="Acceptable use" source="internal">
        <ul>
          <li>No harassment, discrimination, or predatory behavior of any kind.</li>
          <li>No scraping the student database or bulk-downloading profiles.</li>
          <li>No contacting students off-platform until an application has been initiated.</li>
          <li>No reselling access to candidates to third-party recruiters.</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Employer fees (if applicable)" source="internal">
        <p>
          [IF EMPLOYERS PAY: Paid plans are billed monthly via Stripe. Prices stated in USD.
          Refunds for unused portions are issued on request within 30 days of billing. OTHERWISE
          state: "The Service is currently free to employers; this may change with 30 days notice."]
        </p>
      </TemplateSection>

      <TemplateSection heading="Employment relationship disclaimer" source="internal">
        <p>
          NextGen is a platform, not an employer. We do not guarantee internships, job offers,
          compensation, or continued employment. The relationship between a student and an
          employer is entirely between them; we do not mediate disputes, payment, or performance.
        </p>
      </TemplateSection>

      <TemplateSection heading="School / program terms" source="internal">
        <p>
          If your school has entered into a separate agreement with NextGen (school partnership,
          campus pilot, etc.), the terms of that agreement govern the school's use of the
          Service and take precedence over these consumer Terms where there is a conflict.
        </p>
      </TemplateSection>

      <TemplateSection heading="User content and IP" source="shared">
        <p>
          You retain ownership of everything you post (resume, portfolio, job descriptions). You
          grant us a non-exclusive license to display it to other authorized users and to store
          it for matching purposes.
        </p>
      </TemplateSection>

      <TemplateSection heading="Disclaimers" source="termly">
        <PasteExternalHere source="termly" note="AS IS, no warranty of employment outcomes, no warranty of employer quality." />
      </TemplateSection>

      <TemplateSection heading="Limitation of liability" source="termly">
        <PasteExternalHere source="termly" note="Cap + consequential damages exclusion, with minor-safety carve-out if applicable." />
      </TemplateSection>

      <TemplateSection heading="Indemnification" source="termly">
        <PasteExternalHere source="termly" note="User indemnifies NextGen for their content and misuse." />
      </TemplateSection>

      <TemplateSection heading="Termination" source="internal">
        <p>
          Either party may terminate at any time. NextGen may terminate accounts that violate
          these Terms, pose safety concerns, or are inactive for more than 12 months. Upon
          termination, your profile becomes invisible to employers and is deleted per the
          retention schedule in our Privacy Policy.
        </p>
      </TemplateSection>

      <TemplateSection heading="Governing law" source="internal">
        <p>
          These Terms are governed by {entity.governingLaw}. Disputes will be resolved in the{" "}
          {entity.disputeVenue}. You waive class-action rights.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes and contact" source="shared">
        <p>
          Material changes are emailed 14 days before effect. Contact:{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
