/**
 * @level9/brand — Spacing, layout, radius, and shadow tokens.
 */

/* ─── Layout dimensions ─────────────────────────────────────── */
export const layout = {
  headerHeight: "56px",
  tabBarHeight: "56px",
  sidebarWidth: "220px",
  /** WCAG minimum touch target. */
  touchMin: "44px",
} as const;

/* ─── Border radius ─────────────────────────────────────────── */
export const radius = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "16px",
  full: "9999px",
} as const;

/* ─── Shadows ───────────────────────────────────────────────── */
export const shadow = {
  card: "0 2px 8px rgba(0, 0, 0, 0.3)",
  elevated: "0 8px 24px rgba(0, 0, 0, 0.4)",
} as const;

/* ─── Section padding scale (vertical rhythm for marketing pages) ─── */
export const sectionPadding = {
  /** Compact section. */
  sm: "py-16",
  /** Standard section. */
  md: "py-24",
  /** Hero / large section. */
  lg: "py-32",
} as const;

/* ─── Container widths ──────────────────────────────────────── */
export const container = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
  ultrawide: "max-w-7xl",
} as const;
