/**
 * @level9/brand/components/layout — Layout primitives.
 *
 * Composable patterns for hero sections, headers, cards, and footers.
 * These compose with motion primitives (FadeIn, RevealMask, MagneticCard)
 * and consume canonical content (pressurePoints, playbookDomains).
 *
 * Usage:
 *   import { SectionHeader, AmbientBackground, PressurePointCard } from "@level9/brand/components/layout";
 */

export { SectionHeader, default as SectionHeaderDefault } from "./SectionHeader";
export type { SectionHeaderProps } from "./SectionHeader";

export { AmbientBackground, default as AmbientBackgroundDefault } from "./AmbientBackground";
export type { AmbientBackgroundProps } from "./AmbientBackground";

export { HeroEyebrow, default as HeroEyebrowDefault } from "./HeroEyebrow";
export type { HeroEyebrowProps } from "./HeroEyebrow";

export { CycleRibbon, default as CycleRibbonDefault } from "./CycleRibbon";
export type { CycleRibbonProps } from "./CycleRibbon";

export { PressurePointCard, default as PressurePointCardDefault } from "./PressurePointCard";
export type { PressurePointCardProps } from "./PressurePointCard";

export { PlaybookDomainCard, default as PlaybookDomainCardDefault } from "./PlaybookDomainCard";
export type { PlaybookDomainCardProps } from "./PlaybookDomainCard";

export { FooterPattern, default as FooterPatternDefault } from "./FooterPattern";
export type { FooterPatternProps } from "./FooterPattern";
