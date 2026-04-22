// level9os/TermsOfService.tsx — Level9OS LLC terms (consulting + site use).
// Narrow: no product subscription, no SaaS terms. Marketing-site + consulting only.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";
import {
  DisclaimersSection,
  LimitationOfLiabilitySection,
} from "../_shared/GenericGDPRSections";

const entity = getEntity("level9os");
// 1 external-source section ("Disclaimers and liability") replaced with two
// GenericGDPRSections components back-to-back. Narrower scope than LucidORG
// (consulting + site only, no paid SaaS). Legal counsel review recommended.
const TEMPLATE_SECTIONS_REMAINING = 0;

export function TermsOfService() {
  return (
    <PolicyShell
      entity={entity}
      docType="terms"
      title="Terms of Use"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="Scope" source="internal">
        <p>
          These Terms govern your use of level9os.com and any publicly-facing Level9OS
          communications (newsletter, articles, contact forms). Consulting engagements between
          Level9OS LLC and clients are governed by a separate written Statement of Work (SOW)
          executed by both parties — not by these public Terms.
        </p>
        <p>
          Level9OS products referenced on this site (LinkUpOS, COO Playbook, StratOS) are
          operated by <strong>LucidORG LLC</strong>, a separate legal entity. NextGen Interns
          is operated by <strong>NextGen Interns LLC</strong>, also separate. Use of those
          products is governed by their own Terms of Service on their respective sites.
        </p>
      </TemplateSection>

      <TemplateSection heading="Site use" source="internal">
        <p>
          You may read, share, and cite content on this site with attribution. You may not:
        </p>
        <ul>
          <li>Scrape or bulk-download content for AI training without written permission;</li>
          <li>Misrepresent Level9OS as the operator of products it does not operate;</li>
          <li>Use Level9OS's marks in your own marketing without permission.</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Content and IP" source="shared">
        <p>
          All articles, frameworks, and brand marks on this site are owned by Level9OS LLC
          unless explicitly attributed otherwise.
        </p>
      </TemplateSection>

      <TemplateSection heading="Disclaimers" source="shared">
        <DisclaimersSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Limitation of liability" source="shared">
        <LimitationOfLiabilitySection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Third-party links" source="shared">
        <p>
          This site links to the product sites (linkupos.com, etc.) and to our social channels.
          We are not responsible for the availability or content of third-party destinations.
        </p>
      </TemplateSection>

      <TemplateSection heading="Governing law" source="internal">
        <p>
          These Terms are governed by {entity.governingLaw}. Disputes resolved in the{" "}
          {entity.disputeVenue}.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes and contact" source="shared">
        <p>
          Material changes are posted here with the revised effective date.{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
