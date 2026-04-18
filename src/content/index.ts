/**
 * @level9/brand/content — Canonical site content + brand rules.
 *
 * Single source of truth for the data that drives every site:
 *   - The 4 pressure points + governance chassis + install manual
 *   - The 8-layer operating stack (mapped down from pressure points)
 *   - The 8 COO Playbook operating domains (mapped up from pressure points)
 *   - The product roster (StratOS, CommandOS, OutboundOS pods, etc)
 *   - Brand voice rules (em-dash ban, banned phrases, voice characteristics)
 *
 * Mapping:
 *   pressure point → stack layers (down) → playbook domains (up)
 *   See pressurePoints.ts for the canonical map.
 */

export * from "./pressurePoints.js";
export * from "./stack.js";
export * from "./products.js";
export * from "./playbookDomains.js";
export * from "./voiceRules.js";
