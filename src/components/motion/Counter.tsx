"use client";
/**
 * @level9/brand — Counter
 * Animated number counter that tweens from 0 to `target` when scrolled into view.
 * Cubic ease-out over a configurable duration (default 1200ms). One-shot.
 *
 * New in v0.20: decimals, format, and duration props.
 * Existing callers using only target/suffix/prefix continue to work unchanged.
 */

import { useEffect, useRef, useState } from "react";

export interface CounterProps {
  /** Final value to count to. */
  target: number;
  /** Optional suffix (e.g. "+", "%", "K+"). */
  suffix?: string;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
  /**
   * Number of decimal places to display (default 0).
   * Ignored when `format` is provided.
   */
  decimals?: number;
  /**
   * Custom formatter called with the current eased value.
   * When provided, overrides `decimals`.
   * Example: (v) => v.toLocaleString("en-US", { minimumFractionDigits: 2 })
   */
  format?: (value: number) => string;
  /**
   * Animation duration in milliseconds (default 1200).
   * Useful when the dashboard wants faster or slower counters per context.
   */
  duration?: number;
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  format,
  duration = 1200,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(
    format ? format(0) : (0).toFixed(decimals)
  );
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedFraction = 1 - Math.pow(1 - progress, 3);
      const easedValue = easedFraction * target;
      const rendered = format
        ? format(easedValue)
        : decimals === 0
        ? String(Math.round(easedValue))
        : easedValue.toFixed(decimals);
      setDisplay(rendered);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration, decimals, format]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default Counter;
