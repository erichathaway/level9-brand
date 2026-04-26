"use client";
/**
 * @level9/brand — MagneticCard
 * 3D tilt on hover + spotlight glow that follows the cursor.
 * Premium hover state for product cards and feature blocks.
 */

import { useEffect, useRef, useState, ReactNode } from "react";

export interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  /** Spotlight glow color (use brand accent at low alpha). */
  glowColor?: string;
  /** Maximum tilt angle in degrees (subtle: 2-4, dramatic: 8-12). */
  maxTilt?: number;
}

export function MagneticCard({
  children,
  className = "",
  glowColor = "rgba(139,92,246,0.15)",
  maxTilt = 6,
}: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });

  // rAF-coalesce per-card mousemove. The DOM event still fires at native rate,
  // but we only setState (and therefore re-render) at most once per frame.
  // 15+ MagneticCards on one page * 1000Hz mouse = 15,000 renders/s without
  // this; with this it caps at the display refresh rate.
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    targetRef.current = {
      ry: (x - 0.5) * maxTilt * 2,
      rx: -(y - 0.5) * maxTilt * 2,
      gx: x * 100,
      gy: y * 100,
    };
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const t = targetRef.current;
      setTilt({ rx: t.rx, ry: t.ry });
      setGlowPos({ x: t.gx, y: t.gy });
    });
  };

  const handleLeave = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setTilt({ rx: 0, ry: 0 });
    setHover(false);
  };

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor} 0%, transparent 50%)`,
          opacity: hover ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}

export default MagneticCard;
