// level9os/PrivacyPolicy.tsx — Level9OS LLC privacy policy scaffold.
// Scope: Level9OS operates as a brand/umbrella + consulting entity.
// It is legally distinct from the product-operating LLCs (LucidORG, NextGen).
// This policy covers only Level9OS.com visitor data + consulting engagement data.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection, PasteExternalHere } from "../_shared/PolicyShell";

const entity = getEntity("level9os");
const TEMPLATE_SECTIONS_REMAINING = 3;

export function PrivacyPolicy() {
  return (
    <PolicyShell
      entity={entity}
      docType="privacy"
      title="Privacy Policy"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="Scope — Level9OS LLC is an umbrella entity" source="internal">
        <p>
          <strong>{entity.legalName}</strong> (“Level9OS,” “we”) operates the Level9OS brand
          and a consulting practice. Level9OS is <strong>not</strong> the operator of the
          products featured on this site (LinkUpOS, COO Playbook, StratOS) — those are operated
          by LucidORG LLC. NextGen Interns is operated by NextGen Interns LLC. This Privacy
          Policy covers only:
        </p>
        <ul>
          <li>Visitors to level9os.com (analytics, contact forms).</li>
          <li>Consulting engagement clients of Level9OS LLC.</li>
          <li>Newsletter subscribers to Level9OS communications.</li>
        </ul>
        <p>
          For product-specific data practices, see the Privacy Policy on the product site (each
          product's LLC is its Data Controller).
        </p>
      </TemplateSection>

      <TemplateSection heading="Information we collect" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="Narrow scope: marketing-site data (email signup, contact form, visit analytics) + consulting-engagement data (company name, engagement scope). Declare only these in Iubenda — do NOT include product-side processors."
        />
      </TemplateSection>

      <TemplateSection heading="How we use it" source="internal">
        <ul>
          <li>Responding to inbound inquiries and scheduling consulting conversations.</li>
          <li>Sending newsletter content to subscribers who opt in.</li>
          <li>Understanding site usage in aggregate (privacy-first analytics only).</li>
        </ul>
        <p>
          We never share your contact information with the product-operating LLCs or with any
          third party for marketing purposes.
        </p>
      </TemplateSection>

      <TemplateSection heading="Third-party processors" source="internal">
        <ul>
          <li>Hosting: Vercel.</li>
          <li>Email: [LIST — Resend, Google Workspace, or equivalent].</li>
          <li>Analytics: [Plausible or Vercel Analytics — name the one enabled].</li>
          <li>Consulting CRM: [IF ANY — Notion, Airtable, or similar; name it].</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Your rights" source="iubenda">
        <PasteExternalHere source="iubenda" note="GDPR + CCPA rights. Identical to LucidORG but with Level9OS as Controller." />
      </TemplateSection>

      <TemplateSection heading="Retention" source="internal">
        <p>
          Contact form submissions: 2 years. Newsletter subscribers: until you unsubscribe.
          Consulting engagement records: 7 years (tax requirement).
        </p>
      </TemplateSection>

      <TemplateSection heading="Security and contact" source="internal">
        <p>
          We use TLS and privacy-first tooling. Questions? Contact{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes" source="shared">
        <p>
          Material changes are announced on this page with a revision date at least 14 days
          before taking effect.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
