// nextgenintern/CookiePolicy.tsx — NextGen Interns LLC cookie policy scaffold.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection, PasteExternalHere } from "../_shared/PolicyShell";

const entity = getEntity("nextgenintern");
const TEMPLATE_SECTIONS_REMAINING = 2;

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
          Cookies are small text files saved to your device by websites. Similar technologies
          (local storage, pixels) are covered by this policy too.
        </p>
      </TemplateSection>

      <TemplateSection heading="Cookies we use" source="internal">
        <ul>
          <li><strong>Strictly necessary</strong> — authentication, session management, CSRF protection.</li>
          <li><strong>Preferences</strong> — remembered search filters, theme.</li>
          <li><strong>Analytics</strong> — [LIST TOOLS — Plausible, Vercel Analytics]. Privacy-first; no cross-site tracking.</li>
          <li><strong>No advertising cookies.</strong> We do not run retargeting or ad-network pixels, which is especially important given our student-heavy audience.</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Minors and consent" source="internal">
        <p>
          If you are under 16, EU/UK law requires parental consent before non-essential cookies
          are set. Our consent banner defaults to "necessary only" for anyone who hasn't
          explicitly opted in.
        </p>
      </TemplateSection>

      <TemplateSection heading="Cookie inventory" source="iubenda">
        <PasteExternalHere source="iubenda" note="Iubenda scan + auto-generated vendor/purpose/duration table." />
      </TemplateSection>

      <TemplateSection heading="Your choices" source="iubenda">
        <PasteExternalHere source="iubenda" note="Consent banner snippet + preferences link." />
      </TemplateSection>

      <TemplateSection heading="Changes and contact" source="shared">
        <p>
          Material changes are banner-announced for 14 days. Contact:{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
