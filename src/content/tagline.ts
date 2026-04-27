/**
 * @level9/brand/content/tagline — Umbrella tagline for the portfolio.
 *
 * Single canonical line that resonates across the company, the founder, and
 * every product. Hardcoded copies of this string anywhere in the family
 * sites should be removed in favor of importing from this module.
 */

export const UMBRELLA_TAGLINE =
  "Organizations should work as beautifully as the people inside them.";

/**
 * Three-part split for sites that render the tagline as a stacked composition
 * (e.g. erichathaway.com home hero where the middle clause gets a gradient
 * fill). Concatenated with single spaces these recompose UMBRELLA_TAGLINE.
 */
export const UMBRELLA_TAGLINE_PARTS = {
  before: "Organizations should",
  emphasis: "work as beautifully",
  after: "as the people inside them.",
} as const;
