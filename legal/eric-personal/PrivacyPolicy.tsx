// eric-personal/PrivacyPolicy.tsx — Eric Hathaway personal site.
// Individual, not LLC. Scope is narrow: analytics + contact form only.
// No ToS (no commercial relationship). Cookie disclosure folded in here.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection, PasteExternalHere } from "../_shared/PolicyShell";

const entity = getEntity("eric-personal");
const TEMPLATE_SECTIONS_REMAINING = 1;

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

      <TemplateSection heading="Your rights" source="iubenda">
        <PasteExternalHere
          source="iubenda"
          note="For EU/UK visitors: GDPR access / erasure / objection rights. Iubenda generates a minimal version suitable for personal sites."
        />
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
