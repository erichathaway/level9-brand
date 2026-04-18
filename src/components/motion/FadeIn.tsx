"use client";
/**
 * @level9/brand — FadeIn
 * Fades + slides children into view when they scroll past the IntersectionObserver threshold.
 * One-shot: disconnects after first reveal so re-scrolling doesn't re-trigger.
 */

import { useEffect, useRef, useState, ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;
  /** Seconds to wait before transitioning. */
  delay?: number;
  /** Slide-from direction. */
  direction?: "up" | "down" | "left" | "right";
}

const TRANSFORMS: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up: "translateY(24px)",
  down: "translateY(-24px)",
  left: "translateX(24px)",
  right: "translateX(-24px)",
};

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
