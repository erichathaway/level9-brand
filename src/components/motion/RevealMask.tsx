"use client";
/**
 * @level9/brand — RevealMask
 * Cinematic slide-up reveal: content translates from translateY(110%) to 0
 * inside an overflow-hidden mask. Used for section headers + hero text.
 *
 * IMPORTANT: 0.2em paddingBottom on the outer mask gives descenders
 * (g, y, p, q, j) room to render inside the overflow-hidden box. Without
 * it, large display headings get their descenders clipped — a real bug
 * we shipped twice before fixing here.
 */

import { useEffect, useRef, useState, ReactNode } from "react";

export interface RevealMaskProps {
  children: ReactNode;
  /** Milliseconds to wait before transitioning. */
  delay?: number;
  /** Transition duration in milliseconds. */
  duration?: number;
  /** Extra classes on the outer mask container. */
  className?: string;
}

export function RevealMask({
  children,
  delay = 0,
  duration = 900,
  className = "",
}: RevealMaskProps) {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ paddingBottom: "0.2em" }}
    >
      <div
        style={{
          transform: visible ? "translateY(0)" : "translateY(110%)",
          opacity: visible ? 1 : 0,
          transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RevealMask;
