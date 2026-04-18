"use client";
/**
 * @level9/brand — AnimatedBar
 * Horizontal progress bar that fills from 0% to `value`% when scrolled into view.
 * Color-customizable. One-shot.
 */

import { useEffect, useRef, useState } from "react";

export interface AnimatedBarProps {
  /** Fill value 0-100. */
  value: number;
  /** Bar fill color (gradients applied automatically: color → color60). */
  color: string;
}

export function AnimatedBar({ value, color }: AnimatedBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${value}%` : "0%",
          background: `linear-gradient(90deg, ${color}, ${color}60)`,
        }}
      />
    </div>
  );
}

export default AnimatedBar;
