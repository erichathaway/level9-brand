// eric-personal/PrivacyPolicy.tsx — Eric Hathaway personal site.
// Individual, not LLC. Scope is narrow: analytics + contact form only.
// No ToS (no commercial relationship). Cookie disclosure folded in here.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";

const entity = getEntity("eric-personal");
const TEMPLATE_SECTIONS_REMAINING = 0;

export function PrivacyPolicy() {
  return (
    <PolicyShell
      entity={entity}
      docType="privacy"
      title="Privacy Notice"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="This is a personal site" source="internal">
        <p>
          erichathaway.com is Eric Hathaway's personal site — a portfolio and writing hub. It
          is not operated by any LLC. Eric's product work lives on separate domains (LinkUpOS,
          LucidORG.com, COO Playbook) operated by LucidORG LLC or other entities; those have
          their own Privacy Policies.
        </p>
      </TemplateSection>

      <TemplateSection heading="What this site collects" source="internal">
        <ul>
          <li>
            <strong>Analytics</strong> — aggregate, privacy-first analytics (no cross-site
            tracking, no cookies that identify you personally).
          </li>
          <li>
            <strong>Contact form / email</strong> — if you email Eric directly, that message
            and your email address are processed through Google Workspace to deliver the
            message.
          </li>
          <li>
            <strong>No marketing automation</strong> — this site does not run newsletters,
            retargeting, or marketing pixels.
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Cookies" source="internal">
        <p>
          The only cookies this site sets are strictly-necessary ones for the analytics script
          and basic rendering. No third-party advertising or retargeting cookies.
        </p>
      </TemplateSection>

      <TemplateSection heading="Legal basis for processing" source="internal">
        <p>
          This site relies on two legal bases under the GDPR:
        </p>
        <ul>
          <li>
            <strong>Legitimate interest</strong> for aggregate analytics. The
            data is not used to profile or identify individual visitors and
            runs only what is needed to understand overall site performance.
          </li>
          <li>
            <strong>Consent</strong> when you email Eric directly. Your
            message and email address are processed only to reply to you.
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Your rights" source="internal">
        <p>
          If you are a visitor from the EU, UK, or EEA, the GDPR gives you
          the following rights over your personal data:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — ask what personal data this site holds
            about you.
          </li>
          <li>
            <strong>Rectification</strong> — ask for inaccurate data to be
            corrected.
          </li>
          <li>
            <strong>Erasure</strong> — ask for your data to be deleted, also
            known as the right to be forgotten.
          </li>
          <li>
            <strong>Restriction</strong> — ask that processing of your data
            be limited.
          </li>
          <li>
            <strong>Objection</strong> — object to processing based on
            legitimate interest.
          </li>
          <li>
            <strong>Portability</strong> — request a copy of your data in a
            portable format.
          </li>
          <li>
            <strong>Complaint</strong> — lodge a complaint with your local
            data protection authority if you believe your rights have been
            violated.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>.
          Because this is a personal site with no commercial operations, most
          requests can be handled within a few days and at no cost.
        </p>
      </TemplateSection>

      <TemplateSection heading="Data retention" source="internal">
        <p>
          Aggregate analytics data is retained by the analytics provider
          according to its own retention schedule and is not tied to any
          individual visitor. Email correspondence is retained in Google
          Workspace under Eric's standard inbox policy and can be deleted on
          request.
        </p>
      </TemplateSection>

      <TemplateSection heading="International transfers" source="internal">
        <p>
          Analytics and email infrastructure are provided by US-based
          companies (Vercel, Google). If you are an EU/UK/EEA visitor, your
          data may be transferred to the United States under the EU-US Data
          Privacy Framework or equivalent Standard Contractual Clauses
          maintained by those providers.
        </p>
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions? Email{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>. Your message
          will go directly to Eric and will not be processed by any automated system beyond
          normal email delivery.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes" source="shared">
        <p>
          If this site's data practices change (e.g., a newsletter is added), this page will
          be updated with a new effective date at the top.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
