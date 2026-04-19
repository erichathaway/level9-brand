// lucidorg/PrivacyPolicy.tsx — LucidORG LLC privacy policy scaffold.
// Structure mirrors Iubenda's output so sections map 1:1. External sections are
// placeholders; internal sections carry product-specific context that doesn't
// belong in a generic compliance generator.
//
// Consumer usage (linkupos, lucidorg, coo-playbook, stratos):
//   import { PrivacyPolicy } from "@level9/brand/legal/lucidorg";
//   export default () => <PrivacyPolicy />;

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection, PasteExternalHere } from "../_shared/PolicyShell";

const entity = getEntity("lucidorg");

// Count template-placeholder sections so PolicyShell can render the banner.
// When populating: decrement this as you replace each [PASTE] block with real text.
const TEMPLATE_SECTIONS_REMAINING = 5;

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
          This privacy notice describes how <strong>{entity.legalName}</strong> (“we,” “us,” or
          “LucidORG”) collects, uses, and shares personal information when you interact with our
          products and websites, including LinkUpOS, LucidORG.com, COO Playbook, and StratOS
          (collectively, “the Services”).
        </p>
        <p>
          Registered office: {entity.registeredAddress.line1}, {entity.registeredAddress.city},{" "}
          {entity.registeredAddress.state} {entity.registeredAddress.postalCode},{" "}
          {entity.registeredAddress.country}.
          Privacy contact:{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="Information we collect" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="Iubenda will enumerate data categories based on the services we've declared (analytics, authentication, payment, email, AI providers). Paste the full 'Types of Data collected' block here."
        />
      </TemplateSection>

      <TemplateSection heading="Product-specific data flows (additions)" source="internal">
        <p>
          Beyond the generated Iubenda list above, the following Service-specific flows apply:
        </p>
        <ul>
          <li>
            <strong>LinkUpOS</strong> — LinkedIn account data via Unipile (posts, comments,
            connection metadata) is processed solely to deliver the content-generation service you
            subscribe to. We never resell this data.
          </li>
          <li>
            <strong>COO Playbook / StratOS</strong> — strategic input you share during interviews
            or deliberations is encrypted at rest, retained only for the lifetime of your account,
            and never used to train third-party models.
          </li>
          <li>
            <strong>AI processors</strong> — prompts and outputs may be routed through Anthropic,
            OpenAI, or Perplexity under their enterprise no-training agreements. Your content is
            not used to train their public models.
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Purpose and legal basis (GDPR)" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="Per-purpose legal basis table (contract, legitimate interest, consent). Iubenda generates this when GDPR scope is enabled."
        />
      </TemplateSection>

      <TemplateSection heading="Your rights (GDPR + CCPA)" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="Rights enumeration: access, rectification, erasure, portability, objection, restriction, withdraw consent, lodge complaint with supervisory authority. For California residents, include CCPA-specific rights (know, delete, opt-out of sale, non-discrimination)."
        />
      </TemplateSection>

      <TemplateSection heading="Third-party processors" source="internal">
        <p>We share personal information with the following categories of processors:</p>
        <ul>
          <li>Infrastructure: Vercel (hosting), Supabase (database), NAS-hosted n8n (workflow).</li>
          <li>Communications: Google Workspace (email), Resend (transactional mail), Slack (ops).</li>
          <li>Payments: Stripe (card processing, subscription billing).</li>
          <li>AI: Anthropic, OpenAI, Perplexity (content generation, research enrichment).</li>
          <li>LinkedIn automation: Unipile (posting, commenting).</li>
          <li>Prospecting: Apollo.io (for LinkUpOS ICP generation).</li>
          <li>Analytics: [LIST ENABLED ANALYTICS — Plausible, Vercel Analytics, etc.]</li>
        </ul>
        <p>
          Each processor is bound by a Data Processing Agreement (DPA) that restricts them to
          processing only for the Service purpose and requires appropriate technical and
          organizational measures. DPAs are available on request to{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="Data retention" source="internal">
        <p>
          Account data is retained for the lifetime of your account plus 30 days after deletion
          to accommodate recovery requests. Content-generation artifacts are retained for 12
          months. Billing records are retained for 7 years per US tax requirements. You can
          request earlier deletion by emailing{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>

      <TemplateSection heading="International transfers" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="Standard Contractual Clauses and safeguards language. Required if you have any EU/UK users."
        />
      </TemplateSection>

      <TemplateSection heading="Security" source="internal">
        <p>
          We use industry-standard encryption in transit (TLS 1.2+) and at rest, row-level
          security on our database, rotating API keys, and least-privilege access controls. No
          system is perfectly secure; we disclose material breaches to affected users within 72
          hours of discovery per GDPR Article 33 requirements.
        </p>
      </TemplateSection>

      <TemplateSection heading="Children's privacy" source="internal">
        <p>
          The Services are not directed to individuals under the age of 16. We do not knowingly
          collect personal information from children. If you believe a child has provided us
          personal information, contact{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a> and we will delete
          it promptly.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes to this policy" source="shared">
        <p>
          We may update this policy as the Services evolve. Material changes will be announced by
          email (to the address on your account) and/or via a banner in the product at least 14
          days before taking effect. The {entity.effectiveDate} effective date at the top of this
          page indicates the most recent revision.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
