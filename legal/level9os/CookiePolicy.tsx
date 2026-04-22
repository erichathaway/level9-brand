// level9os/CookiePolicy.tsx — Level9OS LLC cookie policy scaffold.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";
import {
  CookieInventorySection,
  CookieChoicesSection,
} from "../_shared/GenericGDPRSections";

const entity = getEntity("level9os");
const TEMPLATE_SECTIONS_REMAINING = 0;

export function CookiePolicy() {
  return (
    <PolicyShell
      entity={entity}
      docType="cookies"
      title="Cookie Policy"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="What are cookies" source="shared">
        <p>
          Cookies are small text files saved to your device by websites. This policy covers
          cookies on level9os.com (marketing site only — product-site cookies are governed by
          each product's own policy).
        </p>
      </TemplateSection>

      <TemplateSection heading="Cookies we use" source="internal">
        <ul>
          <li><strong>Strictly necessary</strong> — page rendering, no tracking.</li>
          <li><strong>Analytics</strong> — [LIST: Plausible or similar privacy-first tool. No cross-site tracking, no personal identifiers sent to third parties.]</li>
          <li><strong>No advertising, no retargeting, no social pixels.</strong></li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Cookie inventory" source="shared">
        <CookieInventorySection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Your choices" source="shared">
        <CookieChoicesSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions? <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
