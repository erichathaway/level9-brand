/**
 * @level9/brand/components/motion — Motion primitives.
 *
 * Eight scroll/hover/cursor-driven UI primitives extracted from the
 * canonical level9os.com implementation. Every site in the family uses these.
 *
 * Usage:
 *   import { FadeIn, RevealMask, MagneticCard, Counter } from "@level9/brand/components/motion";
 */

export { FadeIn, default as FadeInDefault } from "./FadeIn.js";
export type { FadeInProps } from "./FadeIn.js";

export { Counter, default as CounterDefault } from "./Counter.js";
export type { CounterProps } from "./Counter.js";

export { AnimatedBar, default as AnimatedBarDefault } from "./AnimatedBar.js";
export type { AnimatedBarProps } from "./AnimatedBar.js";

export { RevealMask, default as RevealMaskDefault } from "./RevealMask.js";
export type { RevealMaskProps } from "./RevealMask.js";

export { MagneticCard, default as MagneticCardDefault } from "./MagneticCard.js";
export type { MagneticCardProps } from "./MagneticCard.js";

export { MagneticButton, default as MagneticButtonDefault } from "./MagneticButton.js";
export type { MagneticButtonProps } from "./MagneticButton.js";

export { CursorGradient, default as CursorGradientDefault } from "./CursorGradient.js";
export type { CursorGradientProps } from "./CursorGradient.js";

export { LiveTicker, default as LiveTickerDefault } from "./LiveTicker.js";
export type { LiveTickerProps, TickerMetric } from "./LiveTicker.js";
