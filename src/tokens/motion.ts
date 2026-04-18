/**
 * @level9/brand — Motion tokens.
 *
 * Easing + duration constants used by every motion primitive
 * (FadeIn, RevealMask, MagneticCard, etc).
 */

/* ─── Easing curves ─────────────────────────────────────────── */
export const ease = {
  /** Material-style smooth easing (in + out). */
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  /** Cinematic ease-out (used by RevealMask). */
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Linear for ticker-style continuous motion. */
  linear: "linear",
} as const;

/* ─── Durations (ms) ────────────────────────────────────────── */
export const duration = {
  fast: 150,
  medium: 500,
  slow: 700,
  cinematic: 900,   // RevealMask default
  counter: 1200,    // Counter target tween
} as const;

/* ─── IntersectionObserver thresholds ───────────────────────── */
export const observerThreshold = {
  early: 0.1,    // FadeIn (kick in early)
  reveal: 0.15,  // RevealMask
  counter: 0.3,  // Counter (wait until clearly visible)
} as const;
