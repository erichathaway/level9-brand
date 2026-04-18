/**
 * @level9/brand — Color tokens.
 *
 * Single source of truth for every color used across the Level9 family of sites
 * (level9os.com, erichathaway.com, nextgenintern.com, linkupos.com, etc).
 *
 * Mirrors the CSS custom properties in src/styles/globals.css. If you change
 * a value here, also update the matching :root variable in globals.css.
 *
 * Color usage rule:
 *   - Pressure-point + product accents are deterministic. Don't reassign them.
 *   - Use the soft variants (color + alpha 15%) for tints / backgrounds.
 *   - Use the text-* and border-* tokens for opacity-aware foregrounds.
 */

/* ─── Backgrounds ───────────────────────────────────────────── */
export const bg = {
  root: "#030306",        // page background
  surface: "#0d0d18",     // card / surface
  elevated: "#14142a",    // modal / elevated surface
  navy: "#0a0e1a",        // alt section bg
  light: "#f8f9fa",       // light theme surface
  cream: "#faf8f5",       // warm light theme
  overlay: "rgba(0, 0, 0, 0.7)",
} as const;

/* ─── Brand accents ─────────────────────────────────────────── */
export const accent = {
  violet: "#8b5cf6",   // Decide pressure point · StratOS · primary brand
  cyan: "#06b6d4",     // Measure pressure point · LucidORG
  fuchsia: "#ec4899",  // MAX · accent
  amber: "#f59e0b",    // Execute pressure point · OutboundOS umbrella · LinkupOS
  emerald: "#10b981",  // Coordinate pressure point · CommandOS
  slate: "#64748b",    // COO Playbook · methodology
  red: "#ef4444",      // The Vault · governance chassis · alarm
} as const;

/** Soft variants — accent color at 15% alpha. Use for tints, badges, glows. */
export const accentSoft = {
  violet: "rgba(139, 92, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.15)",
  fuchsia: "rgba(236, 72, 153, 0.15)",
  amber: "rgba(245, 158, 11, 0.15)",
  emerald: "rgba(16, 185, 129, 0.15)",
} as const;

/* ─── Text on dark backgrounds ──────────────────────────────── */
export const text = {
  primary: "rgba(255, 255, 255, 0.90)",
  secondary: "rgba(255, 255, 255, 0.70)",
  muted: "rgba(255, 255, 255, 0.50)",
  subtle: "rgba(255, 255, 255, 0.35)",
  ghost: "rgba(255, 255, 255, 0.20)",
} as const;

/* ─── Text on light backgrounds ─────────────────────────────── */
export const textOnLight = {
  primary: "rgba(0, 0, 0, 0.90)",
  secondary: "rgba(0, 0, 0, 0.65)",
  muted: "rgba(0, 0, 0, 0.45)",
} as const;

/* ─── Borders ───────────────────────────────────────────────── */
export const border = {
  subtle: "rgba(255, 255, 255, 0.06)",
  medium: "rgba(255, 255, 255, 0.10)",
  hover: "rgba(255, 255, 255, 0.18)",
} as const;

/** Default brand color (used for non-product accents). */
export const colorAccent = accent.violet;

/* ─── Pressure-point color map ──────────────────────────────── */
/** Maps each of the four alignment-cycle pressure points to its accent color. */
export const pressurePointColor = {
  decide: accent.violet,      // 01 · breaks Misalignment · StratOS
  coordinate: accent.emerald, // 02 · breaks Drag · CommandOS
  execute: accent.amber,      // 03 · breaks Cost · OutboundOS
  measure: accent.cyan,       // 04 · breaks Reactive leadership · LucidORG
} as const;

export const chassisColor = accent.red;     // The Vault — governance chassis under all four
export const methodologyColor = accent.slate; // COO Playbook — install protocol
