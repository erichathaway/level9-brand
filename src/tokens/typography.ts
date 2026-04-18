/**
 * @level9/brand — Typography tokens.
 *
 * Type system: Inter for everything UI. Playfair Display for editorial flourishes
 * (.font-editorial class). System mono for label tracking.
 *
 * Sizing rule: prefer fluid clamp() values for hero/section headlines.
 * Body text uses Tailwind defaults.
 */

export const fontFamily = {
  /** Primary UI sans-serif. Wired in Next.js layout via next/font/google. */
  sans: "var(--font-inter), system-ui, -apple-system, sans-serif",
  /** Editorial serif. Used for italic flourishes via .font-editorial class. */
  editorial: "var(--font-playfair), Georgia, serif",
  /** Monospace for tracking-wider labels. */
  mono: '"SF Mono", "Fira Code", monospace',
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
} as const;

/** Display sizes (clamp-based fluid type for headlines). */
export const display = {
  hero: "clamp(2.5rem, 6vw, 5.5rem)",     // h1 hero on home pages
  page: "clamp(2.5rem, 6vw, 5rem)",       // h1 on inner pages
  section: "clamp(2rem, 5vw, 4rem)",      // large h2 section headers
  pillar: "clamp(2rem, 4.5vw, 3.6rem)",   // secondary pillar h1
  cta: "clamp(2.5rem, 5vw, 4.5rem)",      // closing CTA h2
} as const;

/**
 * Leading rule: NEVER go below 1.05 on any heading that may contain
 * descenders (g, y, p, q, j) — they will clip against
 * <RevealMask>'s overflow-hidden. Default to 1.05 for tight display
 * type, 1.1+ for very large heroes.
 */
export const leading = {
  tight: "1.05",
  display: "1.1",
  body: "1.45",
  relaxed: "1.65",
} as const;

/** Section-label utility — small, uppercase, tracked-out monospace label. */
export const sectionLabel = {
  fontSize: "10px",
  letterSpacing: "0.4em",
  textTransform: "uppercase" as const,
  fontFamily: fontFamily.mono,
};
