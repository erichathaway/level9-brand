/**
 * @level9/brand/assets/logos — Typed logo registry.
 *
 * Single source of truth for every brand mark across the Level9 family.
 * Use the `logo()` helper for type-safe lookup, or import paths directly
 * from LOGO_PATHS.
 *
 * Each brand has at minimum: chip, wordmark.
 * Most also have: square (edge-to-edge sharp corners for app icons).
 * Big E Sessions also has: mini (bars-only, for sizes <80px).
 * StratOS only has chip + wordmark (always round, no square per brand spec).
 *
 * Path format is RELATIVE to this file's directory. Sites that consume
 * the package can:
 *   1. Copy the SVGs to their own /public/logos/ at build time, or
 *   2. Import directly via bundler (Next.js will inline / asset-handle), or
 *   3. Reference via CDN URL (https://cdn.jsdelivr.net/gh/erichathaway/level9-brand@main/src/assets/logos/...)
 *
 * Recommended for v0.x: option 1 (copy at build via a small script).
 */

/* ─── Brand identifier type ─────────────────────────────────── */
export type BrandId =
  | "level9"
  | "erichathaway"
  | "lucidorg"
  | "linkupos"
  | "commandos"
  | "stratos"
  | "coo-playbook"
  | "bigesessions"
  | "outboundos"
  | "nextgenintern";

/* ─── Logo variant type ─────────────────────────────────────── */
export type LogoVariant = "chip" | "square" | "wordmark" | "mini";

/* ─── Canonical logo path map (relative to /assets/logos/) ──── */
export const LOGO_PATHS = {
  level9: {
    chip: "level9/chip.svg",
    square: "level9/square.svg",
    wordmark: "level9/wordmark.svg",
  },
  erichathaway: {
    chip: "erichathaway/chip.svg",
    square: "erichathaway/square.svg",
    wordmark: "erichathaway/wordmark.svg",
  },
  lucidorg: {
    chip: "lucidorg/chip.svg",
    square: "lucidorg/square.svg",
    wordmark: "lucidorg/wordmark.svg",
  },
  linkupos: {
    chip: "linkupos/chip.svg",
    square: "linkupos/square.svg",
    wordmark: "linkupos/wordmark.svg",
  },
  commandos: {
    chip: "commandos/chip.svg",
    square: "commandos/square.svg",
    wordmark: "commandos/wordmark.svg",
  },
  stratos: {
    chip: "stratos/chip.svg",        // always round; no square variant by design
    wordmark: "stratos/wordmark.svg",
  },
  "coo-playbook": {
    chip: "coo-playbook/chip.svg",
    square: "coo-playbook/square.svg",
    wordmark: "coo-playbook/wordmark.svg",
  },
  bigesessions: {
    chip: "bigesessions/chip.svg",
    square: "bigesessions/square.svg",
    wordmark: "bigesessions/wordmark.svg",
    mini: "bigesessions/mini.svg",   // bars-only, use at <80px
  },
  outboundos: {
    chip: "outboundos/chip.svg",         // PLACEHOLDER — brand-agent designs final
    square: "outboundos/square.svg",     // PLACEHOLDER
    wordmark: "outboundos/wordmark.svg", // PLACEHOLDER
  },
  nextgenintern: {
    chip: "nextgenintern/chip.svg",         // PLACEHOLDER — brand-agent designs final
    square: "nextgenintern/square.svg",     // PLACEHOLDER
    wordmark: "nextgenintern/wordmark.svg", // PLACEHOLDER
  },
} as const;

/* ─── Brands flagged as PLACEHOLDER (need brand-agent design) ─── */
export const PLACEHOLDER_BRANDS: ReadonlyArray<BrandId> = [
  "outboundos",
  "nextgenintern",
];

/**
 * Type-safe logo path lookup.
 *
 *   logo("stratos", "chip")          // → "stratos/chip.svg"
 *   logo("level9", "wordmark")       // → "level9/wordmark.svg"
 *   logo("bigesessions", "mini")     // → "bigesessions/mini.svg"
 *
 * Compile-time errors if you ask for a variant that doesn't exist for
 * the brand (e.g. logo("stratos", "square") fails — StratOS is round-only).
 */
export function logo<B extends BrandId, V extends keyof (typeof LOGO_PATHS)[B]>(
  brand: B,
  variant: V
): (typeof LOGO_PATHS)[B][V] {
  return LOGO_PATHS[brand][variant];
}

/** Is this brand still on a placeholder mark? */
export function isPlaceholder(brand: BrandId): boolean {
  return PLACEHOLDER_BRANDS.includes(brand);
}

/** Brand display names — for use in alt text, aria-label, etc. */
export const BRAND_NAMES: Readonly<Record<BrandId, string>> = {
  level9: "Level9",
  erichathaway: "Eric Hathaway",
  lucidorg: "LucidORG",
  linkupos: "LinkupOS",
  commandos: "CommandOS",
  stratos: "StratOS",
  "coo-playbook": "COO Playbook",
  bigesessions: "Big E Sessions",
  outboundos: "OutboundOS",
  nextgenintern: "NextGenIntern",
};
