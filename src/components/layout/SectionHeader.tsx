"use client";
/**
 * @level9/brand — SectionHeader
 * Canonical section header pattern: small uppercase eyebrow label,
 * large two-line h2 with optional accent gradient, optional subhead.
 * Each line wrapped in RevealMask for the cinematic slide-up.
 */

import type { ReactNode } from "react";
import { RevealMask } from "../motion/RevealMask";

export interface SectionHeaderProps {
  /** Small uppercase tracked label above the heading. */
  eyebrow: string;
  /** Hex color for the eyebrow text. Use a brand accent. */
  eyebrowColor?: string;
  /** First line of the heading (rendered in primary text color). */
  title: string;
  /** Second line of the heading (rendered in muted text color OR as a gradient if `gradient` is provided). */
  subtitle?: string;
  /** If true, the subtitle gets a violet→cyan→fuchsia gradient instead of muted text. */
  subtitleGradient?: boolean;
  /** Optional descriptive paragraph below the heading. */
  description?: ReactNode;
  /** Center the whole block (defaults to left-aligned). */
  centered?: boolean;
  /** Max-width on the heading + description (Tailwind class, e.g. "max-w-3xl"). */
  maxWidth?: string;
  /** Bottom margin on the whole header block. */
  marginBottom?: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowColor = "rgba(139,92,246,0.5)",
  title,
  subtitle,
  subtitleGradient = false,
  description,
  centered = false,
  maxWidth = "max-w-3xl",
  marginBottom = "mb-16",
}: SectionHeaderProps) {
  const align = centered ? "text-center mx-auto" : "";
  return (
    <div className={`${marginBottom}`}>
      <RevealMask>
        <div
          className={`text-[11px] tracking-[0.5em] uppercase font-mono font-semibold mb-4 ${centered ? "text-center" : ""}`}
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </div>
      </RevealMask>
      <RevealMask delay={100}>
        <h2 className={`text-4xl sm:text-5xl font-black text-white/90 mb-6 leading-[1.05] ${maxWidth} ${align}`}>
          {title}
          {subtitle && (
            <>
              <br />
              {subtitleGradient ? (
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {subtitle}
                </span>
              ) : (
                <span className="text-white/40">{subtitle}</span>
              )}
            </>
          )}
        </h2>
      </RevealMask>
      {description && (
        <RevealMask delay={200}>
          <p className={`text-white/55 text-lg leading-relaxed ${maxWidth === "max-w-3xl" ? "max-w-2xl" : maxWidth} ${align}`}>
            {description}
          </p>
        </RevealMask>
      )}
    </div>
  );
}

export default SectionHeader;
