"use client";
/**
 * @level9/brand — HeroEyebrow
 * The standard hero "pill" that sits above the title: small uppercase mono
 * tracked label inside a subtle border + background, with an optional
 * pulsing dot on the left.
 */

export interface HeroEyebrowProps {
  /** The label text. */
  children: string;
  /** Pulsing dot color (use a brand accent). Pass null to omit the dot. */
  dotColor?: string | null;
}

export function HeroEyebrow({
  children,
  dotColor = "#10b981",
}: HeroEyebrowProps) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
      {dotColor && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: dotColor }}
        />
      )}
      <span className="text-[12px] font-mono tracking-[0.3em] uppercase text-white/60">
        {children}
      </span>
    </div>
  );
}

export default HeroEyebrow;
