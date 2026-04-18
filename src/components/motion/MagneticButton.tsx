"use client";
/**
 * @level9/brand — MagneticButton
 * Button that subtly translates toward the cursor when hovered.
 * Renders as <a> if href is provided, otherwise <button>.
 */

import { useRef, useState, ReactNode } from "react";

export interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  /** Cursor-attraction strength: 0 = no movement, 1 = follow exactly. Default 0.3. */
  strength?: number;
}

export function MagneticButton({
  children,
  href,
  onClick,
  target,
  rel,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const style: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition:
      offset.x === 0 && offset.y === 0
        ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        : "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform",
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}

export default MagneticButton;
