// eric-personal/TermsOfService.tsx — Eric Hathaway personal site terms.
// Scope is deliberately narrow: this is a personal portfolio + writing
// hub, not a commercial service. No accounts, no payments, no SaaS
// relationship. These Terms exist so there is a stated baseline for
// content use, liability, and governing law.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";

const entity = getEntity("eric-personal");
const TEMPLATE_SECTIONS_REMAINING = 0;

export function TermsOfService() {
  return (
    <PolicyShell
      entity={entity}
      docType="terms"
      title="Terms of Use"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="What this site is" source="internal">
        <p>
          erichathaway.com is the personal site of Eric Hathaway. It hosts a portfolio,
          writing, and links to product work operated by separate entities. It is not a
          commercial service. No accounts exist. No payments are taken. No user
          submissions are stored beyond what the Privacy Notice describes.
        </p>
      </TemplateSection>

      <TemplateSection heading="Content you read here" source="internal">
        <p>
          Everything on this site is provided for informational purposes. Eric shares
          frameworks, opinions, and product observations that reflect his own experience.
          None of it is professional advice (legal, tax, financial, medical, engineering).
          If you act on something you read here, the outcomes are yours.
        </p>
        <p>
          Cite with attribution. Link freely. Do not republish full posts without
          permission. Do not scrape the site for AI training data.
        </p>
      </TemplateSection>

      <TemplateSection heading="Links to other sites" source="internal">
        <p>
          The site links to product domains (LinkUpOS, LucidORG, COO Playbook, Level9OS)
          and other third-party destinations. Those sites have their own terms and
          policies. Eric is not responsible for the availability, accuracy, or conduct of
          third-party destinations.
        </p>
      </TemplateSection>

      <TemplateSection heading="No warranty" source="internal">
        <p>
          The site is provided as-is. Eric makes no warranties of any kind (express,
          implied, statutory) about uptime, accuracy, fitness for a particular purpose,
          or non-infringement.
        </p>
      </TemplateSection>

      <TemplateSection heading="Limitation of liability" source="internal">
        <p>
          To the fullest extent permitted by law, Eric Hathaway is not liable for any
          direct, indirect, incidental, consequential, or punitive damages arising out of
          your use of this site. If a court disagrees, aggregate liability is capped at
          USD 100 or the amount you paid to use the site (zero), whichever is greater.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes and takedown" source="internal">
        <p>
          The site can be changed, moved, or taken down at any time without notice. Posts
          can be revised or removed. If you relied on something that has since changed,
          the historical version may no longer be available.
        </p>
      </TemplateSection>

      <TemplateSection heading="Governing law" source="internal">
        <p>
          These Terms are governed by the laws of the United States and the state in
          which Eric resides at the time a dispute arises. Nothing here waives any
          statutory right you have in your own jurisdiction.
        </p>
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions about these Terms? Email{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
