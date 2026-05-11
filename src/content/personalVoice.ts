/**
 * @level9/brand/content/personalVoice — Per-entity voice extensions.
 *
 * Umbrella voice rules live in voiceRules.ts (HARD_BANS, BANNED_PHRASES,
 * SOFT_PREFERENCES, VOICE one-liner). This file ADDS entity-specific
 * messaging nuances on top of the shared visual identity from tokens/.
 *
 * Inheritance:
 *   every entity inherits tokens/* (visual) + voiceRules.* (umbrella voice)
 *   each entity ADDS its own tagline + positioning + characteristics
 *   no entity may OVERRIDE umbrella hard-bans
 *
 * Migrated 2026-05-09 from marketing-assets/BRAND_PACKAGE.md (historical,
 * superseded). That file marked as historical; this is the canonical home.
 */

export interface EntityVoice {
  /** Short tagline. Used in OG images, signatures, hero lines. */
  tagline: string;
  /** Positioning statement: who + what + why. One sentence. */
  positioning: string;
  /** Voice descriptors extending the umbrella VOICE.oneLiner. */
  characteristics: readonly string[];
}

/** Eric Hathaway personal portfolio (erichathaway.com, OG images). */
export const ericPersonal: EntityVoice = {
  tagline: "Architect. Build. Scale.",
  positioning:
    "Fractional COO and organizational systems architect who makes " +
    "companies work as beautifully as the people inside them.",
  characteristics: [
    "Direct",
    "Confident",
    "Warm",
    "Provocative",
  ],
} as const;

/** Eric Hathaway LinkedIn voice. Same visual, LinkedIn-extension messaging. */
export const ericLinkedIn: EntityVoice = {
  tagline: "Architect. Build. Scale.",
  positioning: ericPersonal.positioning,
  characteristics: [
    ...ericPersonal.characteristics,
    "Operator-to-operator on a platform that rewards specifics",
    "Cites real evidence; no buzzword soup",
  ],
} as const;

/** Level9OS umbrella corporate voice (level9os.com, investor + buyer copy). */
export const level9: EntityVoice = {
  tagline: "Organizations should work as beautifully as the people inside them.",
  positioning:
    "AI pods replace org departments. We run our own company on the " +
    "stack. We sell you the pattern, the tools, and the proof.",
  characteristics: [
    "Direct, operator-to-operator",
    "Earned authority through evidence",
    "No pitch energy",
    "Cuts through bullshit",
  ],
} as const;

export const ENTITY_VOICES = {
  ericPersonal,
  ericLinkedIn,
  level9,
} as const;

export type EntityKey = keyof typeof ENTITY_VOICES;
