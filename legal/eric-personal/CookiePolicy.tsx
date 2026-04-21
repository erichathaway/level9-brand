// eric-personal/CookiePolicy.tsx — Eric Hathaway personal site cookie policy.
// Scope is narrow: this site runs strictly-necessary cookies + privacy-first
// analytics only. No advertising, no retargeting, no cross-site tracking.
// The policy exists so visitors have a dedicated, linkable disclosure
// separate from the broader Privacy Notice.

import React from "react";
import { getEntity } from "../entities";
import { PolicyShell, TemplateSection } from "../_shared/PolicyShell";

const entity = getEntity("eric-personal");
const TEMPLATE_SECTIONS_REMAINING = 0;

export function CookiePolicy() {
  return (
    <PolicyShell
      entity={entity}
      docType="cookies"
      title="Cookie Notice"
      templateSectionsRemaining={TEMPLATE_SECTIONS_REMAINING}
    >
      <TemplateSection heading="What are cookies" source="internal">
        <p>
          Cookies are small text files a website stores on your device so it can
          recognize you on return visits. Similar technologies (local storage, pixels)
          are covered by this notice too.
        </p>
      </TemplateSection>

      <TemplateSection heading="What this site uses" source="internal">
        <ul>
          <li>
            <strong>Strictly necessary.</strong> Cookies needed for the site to render
            correctly (session integrity, basic preferences). These are first-party only
            and cannot be turned off without breaking the site.
          </li>
          <li>
            <strong>Privacy-first analytics.</strong> Aggregate analytics that do not
            identify you personally, do not follow you across other sites, and do not
            feed advertising networks. Typical providers in this category are Plausible
            or Vercel Analytics.
          </li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="What this site does NOT use" source="internal">
        <ul>
          <li>No advertising cookies.</li>
          <li>No retargeting pixels (no Meta Pixel, no LinkedIn Insight Tag, no Google Ads tags).</li>
          <li>No cross-site tracking of any kind.</li>
          <li>No data broker or behavioral profiling scripts.</li>
        </ul>
      </TemplateSection>

      <TemplateSection heading="Your choices" source="internal">
        <p>
          Most browsers let you block or delete cookies from individual sites. Blocking
          strictly-necessary cookies on this site may cause layout or navigation issues;
          blocking the analytics cookie has no functional impact on your experience.
        </p>
        <p>
          Private / Incognito browsing clears all cookies when you close the window and
          is a clean way to visit without any persisted state.
        </p>
      </TemplateSection>

      <TemplateSection heading="Changes" source="shared">
        <p>
          If this site adds or removes a cookie category, this notice will be updated
          with a new effective date at the top of the page.
        </p>
      </TemplateSection>

      <TemplateSection heading="Contact" source="internal">
        <p>
          Questions about cookies on this site? Email{" "}
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>.
        </p>
      </TemplateSection>
    </PolicyShell>
  );
}
