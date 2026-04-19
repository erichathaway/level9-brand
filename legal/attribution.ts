// attribution.ts — which site belongs to which legal entity.
// Single source of truth. If you move a product between LLCs, change it HERE.

import type { EntityKey } from "./entities";

export const SITE_TO_ENTITY: Record<string, EntityKey> = {
  // LucidORG LLC portfolio — all commercial products
  "linkupos-site": "lucidorg",
  "lucidorg-site": "lucidorg",
  "coo-playbook": "lucidorg",
  "coo-playbook-app": "lucidorg",
  "stratos-v2": "lucidorg",
  "stratos-lucidorg": "lucidorg",

  // NextGen Interns LLC — youth/intern platform (COPPA-sensitive)
  "nextgenintern-site": "nextgenintern",

  // Level9OS LLC — brand/umbrella + consulting relationship to products
  // (kept at legal distance from product operating entities)
  "level9os-site": "level9os",

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
