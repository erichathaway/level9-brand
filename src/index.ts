/**
 * @level9/brand — Top-level entry.
 *
 * Stable subpath imports preferred (smaller bundles, clearer intent):
 *   import { accent } from "@level9/brand/tokens";
 *   import { logo, BRAND_NAMES } from "@level9/brand/assets";
 *   import "@level9/brand/styles/globals.css";
 *
 * Components + content land here as later phases extract them from
 * level9os-site and erichathaway-site.
 */

export * from "./tokens/index.js";
export * from "./assets/index.js";
