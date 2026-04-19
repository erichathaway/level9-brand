// @level9/brand/legal — top-level barrel.
// Consumer sites typically import from a specific LLC subpath:
//   import { PrivacyPolicy } from "@level9/brand/legal/lucidorg";
//
// But shared primitives (entity records, site → LLC map, LegalFooter) export
// from the top-level path for convenience:
//   import { LegalFooter, getEntityKeyForSite, ENTITIES } from "@level9/brand/legal";

export { LegalFooter, getLegalMetadata } from "./components/LegalFooter";
export type { LegalFooterProps } from "./components/LegalFooter";
export { SITE_TO_ENTITY, getEntityKeyForSite, getSitesForEntity } from "./attribution";
export { ENTITIES, getEntity } from "./entities";
export type { EntityKey, LegalEntity } from "./entities";
export { PolicyShell, TemplateSection, PasteExternalHere } from "./_shared/PolicyShell";
