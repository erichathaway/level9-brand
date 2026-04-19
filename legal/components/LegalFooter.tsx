// LegalFooter.tsx — canonical footer every Level9 site renders.
// Resolves site → LLC → copyright attribution + legal-page links.
//
// Usage:
//   import { LegalFooter } from "@level9/brand/legal";
//   <LegalFooter siteSlug="linkupos-site" />
//
// If the site is missing its /privacy, /terms, or /cookies routes, the links
// will 404 — site-cleaner flags this during Phase 1 audit.

import React from "react";
import { getEntityKeyForSite } from "../attribution";
import { getEntity, type LegalEntity } from "../entities";

export interface LegalFooterProps {
  siteSlug: string;
  // Opt-out toggles if a specific site intentionally omits a page (e.g. erichathaway has no ToS).
  showPrivacy?: boolean;
  showTerms?: boolean;
  showCookies?: boolean;
  // Override display (rare — default is entity.displayName)
  attributionOverride?: string;
  className?: string;
}

export function LegalFooter({
  siteSlug,
  showPrivacy = true,
  showTerms = true,
  showCookies = true,
  attributionOverride,
  className,
}: LegalFooterProps) {
  const entityKey = getEntityKeyForSite(siteSlug);
  const entity = getEntity(entityKey);
  const year = new Date().getFullYear();
  const attribution = attributionOverride ?? entity.displayName;
  const isIndividual = entity.entityType === "Individual";

  // Personal site has no ToS (no commercial terms to agree to).
  const effectiveShowTerms = isIndividual ? false : showTerms;
  const effectiveShowCookies = isIndividual ? false : showCookies;

  return (
    <footer
      className={className}
      data-llc={entity.key}
      data-legal-footer="@level9/brand"
      style={{
        fontSize: 12,
        color: "rgba(255,255,255,0.45)",
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <span>
        © {year} {attribution}
        {!isIndividual ? ` · ${entity.legalName}` : ""}
      </span>
      {showPrivacy && (
        <a href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>
          Privacy
        </a>
      )}
      {effectiveShowTerms && (
        <a href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>
          Terms
        </a>
      )}
      {effectiveShowCookies && (
        <a href="/cookies" style={{ color: "inherit", textDecoration: "underline" }}>
          Cookies
        </a>
      )}
      {entity.privacyEmail && (
        <a
          href={`mailto:${entity.privacyEmail}`}
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          {entity.privacyEmail}
        </a>
      )}
    </footer>
  );
}

// Server-side helper for when a site needs to embed LLC metadata (e.g. schema.org)
export function getLegalMetadata(siteSlug: string): {
  entity: LegalEntity;
  copyrightLine: string;
} {
  const entity = getEntity(getEntityKeyForSite(siteSlug));
  const year = new Date().getFullYear();
  const copyrightLine =
    entity.entityType === "Individual"
      ? `© ${year} ${entity.displayName}`
      : `© ${year} ${entity.displayName} · ${entity.legalName}`;
  return { entity, copyrightLine };
}
