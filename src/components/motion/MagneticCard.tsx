"use client";
/**
 * @level9/brand — MagneticCard
 * 3D tilt on hover + spotlight glow that follows the cursor.
 * Premium hover state for product cards and feature blocks.
 */

import { useRef, useState, ReactNode } from "react";

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

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      ry: (x - 0.5) * maxTilt * 2,
      rx: -(y - 0.5) * maxTilt * 2,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setHover(false);
  };

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
