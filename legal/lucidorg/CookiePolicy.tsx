// lucidorg/CookiePolicy.tsx — LucidORG LLC cookie policy scaffold.
// Required for EU/UK visitors under ePrivacy Directive + GDPR.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";
import {
  CookieInventorySection,
  CookieChoicesSection,
} from "../_shared/GenericGDPRSections";

const entity = getEntity("lucidorg");
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
          Cookies are small text files stored on your device when you visit a website. They let
          the site remember your actions and preferences (login, language, analytics) across
          sessions. Similar technologies — local storage, session storage, pixels — are covered
          by this policy too.
        </p>
      </TemplateSection>

      <TemplateSection heading="Cookies we use" source="internal">
        <p>
          On {entity.displayName} products (LinkUpOS, LucidORG, COO Playbook, StratOS) we use
          the following categories:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary</strong> — authentication sessions, CSRF tokens, load
            balancer affinity. These cannot be disabled; the site doesn't work without them.
          </li>
          <li>
            <strong>Preferences</strong> — your chosen theme, dashboard layout, language.
          </li>
          <li>
            <strong>Analytics</strong> — [LIST EACH ANALYTICS TOOL ENABLED: Plausible, Vercel
            Analytics, etc. — name, provider, retention period, purpose]. We use privacy-first
            analytics that do not share personal identifiers with third parties.
          </li>
          <li>
            <strong>Marketing</strong> — [IF YOU RUN RETARGETING OR ADS, LIST THEM HERE. If you
            don't, state that explicitly: "We do not run third-party advertising or retargeting
            cookies."]
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Cookie inventory" source="shared">
        <CookieInventorySection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Your choices" source="shared">
        <CookieChoicesSection entity={entity} />
      </TemplateSection>

      <TemplateSection heading="Browser controls" source="shared">
        <p>
          You can also refuse or delete cookies directly in your browser:
        </p>
        <ul>
          <li>
            Chrome: <em>Settings → Privacy → Cookies and other site data</em>
          </li>
          <li>
            Safari: <em>Preferences → Privacy</em>
          </li>
          <li>
            Firefox: <em>Settings → Privacy &amp; Security</em>
          </li>
          <li>
            Edge: <em>Settings → Cookies and site permissions</em>
          </li>
        </ul>
        <p>
          Blocking strictly-necessary cookies will break sign-in and other core features.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes to this policy" source="shared">
        <p>
          We may update this policy as our tooling changes. Material changes are announced with
          a banner for 14 days before taking effect. Last updated: {entity.effectiveDate}.
        </p>
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions about cookies? Email{" "}
          <a href={`mailto:${entity.privacyEmail}`}>{entity.privacyEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
