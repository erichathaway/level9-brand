"use client";
/**
 * @level9/brand — CursorGradient
 * Ambient radial light that follows the cursor. Premium feel.
 * Auto-disables on touch devices (only renders when pointer: fine matches).
 */

import { useEffect, useState } from "react";

export interface CursorGradientProps {
  /** Glow color (use brand accent at low alpha for subtlety). */
  color?: string;
  /** Diameter in pixels. */
  size?: number;
}

export function CursorGradient({
  color = "rgba(139,92,246,0.08)",
  size = 600,
}: CursorGradientProps) {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setEnabled(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mql.addEventListener("change", onChange);

    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
      mql.removeEventListener("change", onChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed pointer-events-none z-0 transition-opacity duration-500"
      style={{
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: "blur(40px)",
        willChange: "transform",
      }}
    />
  );
}

export default CursorGradient;
