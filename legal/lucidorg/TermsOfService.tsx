// lucidorg/TermsOfService.tsx — LucidORG LLC terms of service scaffold.
// Applies to: LinkUpOS, LucidORG.com, COO Playbook, StratOS (all commercial products).

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";
import {
  DisclaimersSection,
  LimitationOfLiabilitySection,
  IndemnificationSection,
} from "../_shared/GenericGDPRSections";

const entity = getEntity("lucidorg");
// 3 external-source sections replaced with GenericGDPRSections (Gov Hub #5).
// Legal counsel review required before shipping to commercial production.
const TEMPLATE_SECTIONS_REMAINING = 0;

export function TermsOfService() {
  return (
    <PolicyShell
      entity={entity}
      docType="terms"
      title="Terms of Service"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="Acceptance" source="shared">
        <p>
          These Terms of Service (“Terms”) form a binding agreement between you and{" "}
          <strong>{entity.legalName}</strong> governing your use of any product or site operated
          by us (the “Services”), including LinkUpOS, LucidORG.com, COO Playbook, and StratOS.
          By creating an account, submitting a form, or otherwise using the Services, you agree
          to these Terms.
        </p>
      </TemplateSection>

      <TemplateSection heading="Account" source="internal">
        <p>
          You must be at least 16 years old and provide accurate information when creating an
          account. You are responsible for activity under your credentials. We may suspend or
          terminate accounts that violate these Terms, abuse the platform, or create legal
          exposure for other users.
        </p>
      </TemplateSection>

      <TemplateSection heading="Acceptable use" source="internal">
        <p>You agree not to:</p>
        <ul>
          <li>Attempt to reverse engineer or access non-public portions of the Services;</li>
          <li>Use the Services to post unlawful, deceptive, defamatory, or harassing content;</li>
          <li>Automate in ways that violate a third-party platform's Terms (e.g., LinkedIn);</li>
          <li>Resell, rent, or white-label the Services without a written agreement;</li>
          <li>Use the Services to train a competing AI product or scrape our outputs at scale.</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Subscription and payment" source="internal">
        <p>
          Paid tiers are billed monthly or annually in advance via Stripe. Prices are stated in
          US Dollars. We may change pricing for upcoming billing cycles with at least 14 days
          notice. Refunds are issued at our discretion for documented service failures; cancel
          any time to stop future billing.
        </p>
      </TemplateSection>

      <TemplateSection heading="User content and intellectual property" source="shared">
        <p>
          You retain ownership of all content you submit. You grant us a non-exclusive,
          royalty-free license to process that content solely to deliver the Services. We retain
          ownership of the Services themselves — code, models, designs, and trademarks.
        </p>
      </TemplateSection>

      <TemplateSection heading="AI-generated outputs" source="internal">
        <p>
          Outputs produced by AI models through the Services (posts, comments, plans,
          recommendations) are provided “as is.” You are responsible for reviewing outputs before
          publishing or acting on them. We do not guarantee accuracy, and you must not represent
          AI-generated outputs as exclusively human-authored where the platform rules of third
          parties (e.g., LinkedIn) require disclosure.
        </p>
      </TemplateSection>

      <TemplateSection heading="Third-party services" source="internal">
        <p>
          The Services integrate with third parties (LinkedIn via Unipile, Stripe, Apollo, email
          providers). Your use of those integrations is governed by their respective terms. We
          are not responsible for their availability or data practices beyond our configuration
          of the integration.
        </p>
      </TemplateSection>

      <TemplateSection heading="Disclaimers" source="shared">
        <DisclaimersSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Limitation of liability" source="shared">
        <LimitationOfLiabilitySection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Indemnification" source="shared">
        <IndemnificationSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Termination" source="internal">
        <p>
          Either party may terminate at any time. Upon termination, your access ends and we
          delete your account data within 30 days except where legal obligations (tax records,
          ongoing support tickets) require longer retention, as described in our Privacy Policy.
        </p>
      </TemplateSection>

      <TemplateSection heading="Governing law and disputes" source="internal">
        <p>
          These Terms are governed by {entity.governingLaw}. Any dispute shall be resolved
          exclusively in the {entity.disputeVenue}. You waive any right to bring claims as a
          class representative or class member.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes to terms" source="shared">
        <p>
          We may revise these Terms. Material changes will be emailed to the address on your
          account at least 14 days before taking effect. Continued use of the Services after the
          effective date constitutes acceptance.
        </p>
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions? <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>. Legal
          notices must be sent by certified mail to our registered office:{" "}
          {entity.registeredAddress.line1}, {entity.registeredAddress.city},{" "}
          {entity.registeredAddress.state} {entity.registeredAddress.postalCode}.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
