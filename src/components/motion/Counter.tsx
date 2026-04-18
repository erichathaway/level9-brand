"use client";
/**
 * @level9/brand — Counter
 * Animated number counter that tweens from 0 to `target` when scrolled into view.
 * Cubic ease-out over 1200ms. One-shot.
 */

import { useEffect, useRef, useState } from "react";

export interface CounterProps {
  /** Final value to count to. */
  target: number;
  /** Optional suffix (e.g. "+", "%", "K+"). */
  suffix?: string;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
}

export function Counter({ target, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
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
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
