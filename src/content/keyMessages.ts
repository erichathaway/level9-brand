/**
 * @level9/brand/content/keyMessages — Per-entity message libraries.
 *
 * 3-7 short, citable messages per entity. Use in copy, decks, OG images,
 * email signatures. NOT the same as tagline.ts (single canonical line).
 *
 * Voice rules apply: no em-dashes, no banned phrases. Run through
 * voiceRules.passesVoiceCheck() before publishing.
 *
 * Migrated 2026-05-09 from marketing-assets/BRAND_PACKAGE.md (historical).
 */

export const ericPersonal = [
  "I make organizations work.",
  "Architect. Build. Scale.",
  "Organizations should work as beautifully as the people inside them.",
  "Alignment is the only edge left.",
  "The system is the language.",
  "If you need a transformation, you already lost.",
  "Same people. Same tools. Same market. Different operating system.",
] as const;

export const level9 = [
  "One operator. Six AI products. Four pressure points. One governance trail.",
  "AI pods replace org departments.",
  "We run our own company on the stack.",
  "We sell you the pattern, the tools, and the proof.",
  "Decide. Coordinate. Execute. Measure.",
] as const;

export const KEY_MESSAGES = {
  ericPersonal,
  level9,
} as const;

export type MessageEntityKey = keyof typeof KEY_MESSAGES;
