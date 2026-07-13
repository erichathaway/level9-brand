// attribution.ts — which site belongs to which legal entity.
// Single source of truth. If you move a product between LLCs, change it HERE.

import type { EntityKey } from "./entities";

export const SITE_TO_ENTITY: Record<string, EntityKey> = {
  // LucidORG LLC portfolio — all commercial products
  "linkupos-site": "lucidorg",
  "lucidorg-site": "lucidorg",
  "lucidorg-static": "lucidorg",
  "coo-playbook": "lucidorg",
  "coo-playbook-app": "lucidorg",
  "stratos-v2": "lucidorg",
  "stratos-lucidorg": "lucidorg",
  "stratos-app": "lucidorg",
  "stratos-marketing": "lucidorg",
  "outboundos": "lucidorg",

  // NextGen Interns LLC — youth/intern platform (COPPA-sensitive)
  "nextgenintern-site": "nextgenintern",

  // Level9OS LLC — brand/umbrella + consulting relationship to products
  // (kept at legal distance from product operating entities)
  "level9os-site": "level9os",
  // The Vault (governance chassis) + The Liar Liar report/stories — Eric
  // decision 2026-07-10: umbrella-owned per NORTHSTAR ("runs under all four").
  "the-liar-liar": "level9os",
  "vault-kit": "level9os",
  // Governance / CommandOS stack — Level9OS LLC
  "level9-governance": "level9os",
  "commandos-v2": "level9os",
  "commandos-center": "level9os",
  "level9-operations": "level9os",
  "centralos": "level9os",
  "level9-library": "level9os",
  "humanize": "level9os",
  // Max/Verifier trial — umbrella owned per NORTHSTAR decision 2026-07-12
  "max-app": "level9os",
  "max-verifier-trial": "level9os",

  // Eric Hathaway (individual, not LLC) — personal site
  "erichathaway-site": "eric-personal",
};

export function getEntityKeyForSite(siteSlug: string): EntityKey {
  const key = SITE_TO_ENTITY[siteSlug];
  if (!key) {
    throw new Error(
      `No legal entity mapped for site "${siteSlug}". Add it to SITE_TO_ENTITY in @level9/brand/legal/attribution.ts before deploying.`
    );
  }
  return key;
}

// Reverse lookup — given an entity, which sites are under it?
export function getSitesForEntity(entityKey: EntityKey): string[] {
  return Object.entries(SITE_TO_ENTITY)
    .filter(([, v]) => v === entityKey)
    .map(([k]) => k);
}
