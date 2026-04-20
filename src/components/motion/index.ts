/**
 * @level9/brand/components/motion — Motion primitives.
 *
 * Eight scroll/hover/cursor-driven UI primitives extracted from the
 * canonical level9os.com implementation. Every site in the family uses these.
 *
 * Usage:
 *   import { FadeIn, RevealMask, MagneticCard, Counter } from "@level9/brand/components/motion";
 *
 * Also re-exports the raw framer-motion `motion` component and
 * `AnimatePresence` wrapper so consumer sites can flow through the
 * canonical package instead of taking a direct framer-motion dependency.
 * If we ever need to wrap framer-motion globally (prefers-reduced-motion,
 * pause-on-battery, etc.), we have the seam here.
 */

export { motion, AnimatePresence } from "framer-motion";

export { FadeIn, default as FadeInDefault } from "./FadeIn";
export type { FadeInProps } from "./FadeIn";

export { Counter, default as CounterDefault } from "./Counter";
export type { CounterProps } from "./Counter";

export { AnimatedBar, default as AnimatedBarDefault } from "./AnimatedBar";
export type { AnimatedBarProps } from "./AnimatedBar";

export { RevealMask, default as RevealMaskDefault } from "./RevealMask";
export type { RevealMaskProps } from "./RevealMask";

export { MagneticCard, default as MagneticCardDefault } from "./MagneticCard";
export type { MagneticCardProps } from "./MagneticCard";

export { MagneticButton, default as MagneticButtonDefault } from "./MagneticButton";
export type { MagneticButtonProps } from "./MagneticButton";

export { CursorGradient, default as CursorGradientDefault } from "./CursorGradient";
export type { CursorGradientProps } from "./CursorGradient";

export { LiveTicker, default as LiveTickerDefault } from "./LiveTicker";
export type { LiveTickerProps, TickerMetric } from "./LiveTicker";
