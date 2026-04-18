/**
 * @level9/brand/content/voiceRules — Brand voice + writing rules.
 *
 * Encoded as data so AI agents writing copy can reference at prompt time
 * and lint-style checks can validate at build time.
 *
 * Rules in three categories:
 *   - HARD bans (lint should fail the build if violated)
 *   - SOFT preferences (linter warns)
 *   - Voice guidance (free-form, prompt context for agents)
 */

/* ─── HARD bans — character/string-level rules ──────────────── */
export const HARD_BANS = {
  /** Em dash. Use period, colon, or rephrase. The biggest brand violation. */
  emDash: "—",
  /** En dash. Same problem as em dash but smaller. */
  enDash: "–",
  /** Double hyphen used as em dash substitute. */
  doubleHyphen: "--",
} as const;

/** Default replacement when an em dash is detected (period). */
export const HARD_BAN_REPLACEMENT = ".";

/* ─── HARD-banned phrases (specific tone violations) ────────── */
export const BANNED_PHRASES = [
  "Great post",
  "Well said",
  "Couldn't agree more",
  "Absolutely",
  "100%",
  "in today's fast-paced world",
  "in this day and age",
  "at the end of the day",
  "leverage synergies",
  "circle back",
  "let's unpack",
] as const;

/* ─── SOFT preferences — style we prefer ────────────────────── */
export const SOFT_PREFERENCES = {
  /** Prefer numerals over spelled-out numbers in product copy: "20 years" not "twenty years". */
  numerals: true,
  /** Prefer contractions for warmth: "we're" over "we are", "doesn't" over "does not". */
  contractions: true,
  /** Date format in code/notation: ISO YYYY-MM-DD. Flowing months ("Apr 2026") in copy. */
  dateFormat: "YYYY-MM-DD" as const,
  /** Title case for headings, sentence case for sub-text. */
  headingCase: "title" as const,
  subheadCase: "sentence" as const,
} as const;

/* ─── Voice guidance — prompt context for AI agents ─────────── */
export const VOICE = {
  /** One-line summary of the brand voice. */
  oneLiner: "Direct, operator-to-operator. Earned authority. No pitch energy.",

  /** What we sound like. */
  characteristics: [
    "Direct without being aggressive",
    "Specific over general",
    "Operator-to-operator (we ran the rooms we're now building tools for)",
    "Earned authority through evidence, not claims",
    "Cuts through bullshit",
    "Augments the workforce — never positions AI as replacing people",
  ],

  /** What we never sound like. */
  antiPatterns: [
    "Marketing copy / pitchy",
    "Buzzword soup ('synergies', 'leverage', 'paradigm')",
    "Empty validation ('great post', 'absolutely')",
    "Keyword inflation",
    "Promises we can't measure",
    "Sales-AI replacement framing",
    "Hyperbolic adjectives without evidence",
  ],

  /** Engagement formula for posts/comments. */
  engagementFormula: [
    "A real take (not a generic observation)",
    "Something specific from the original referenced",
    "A personal angle (what we're seeing, building, or experiencing)",
    "ONE citation if relevant (not forced)",
    "An engagement hook on longer posts (genuine question that invites replies)",
  ],

  /** Numbers + claims rules. */
  evidenceRules: [
    "Never hallucinate stats. Only cite from verified sources.",
    "Never claim experience the operator doesn't have.",
    "Quantitative claims must be traceable to a source line.",
    "Confident hallucination is the worst possible failure mode.",
  ],
} as const;

/* ─── Helpers for runtime checks ────────────────────────────── */

/** Returns array of HARD_BAN characters found in the input string. */
export function findHardBans(text: string): string[] {
  const found: string[] = [];
  for (const ban of Object.values(HARD_BANS)) {
    if (text.includes(ban)) found.push(ban);
  }
  return found;
}

/** Returns array of BANNED_PHRASES found (case-insensitive). */
export function findBannedPhrases(text: string): string[] {
  const lower = text.toLowerCase();
  return BANNED_PHRASES.filter((p) => lower.includes(p.toLowerCase()));
}

/** Auto-fix hard bans (replaces em/en dashes + double hyphens with period). */
export function fixHardBans(text: string): string {
  return text
    .replace(/—/g, HARD_BAN_REPLACEMENT)
    .replace(/–/g, HARD_BAN_REPLACEMENT)
    .replace(/ -- /g, ` ${HARD_BAN_REPLACEMENT} `);
}

/** Returns true if the text passes all hard-ban + banned-phrase checks. */
export function passesVoiceCheck(text: string): boolean {
  return findHardBans(text).length === 0 && findBannedPhrases(text).length === 0;
}
