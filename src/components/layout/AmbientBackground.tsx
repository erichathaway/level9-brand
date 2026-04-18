"use client";
/**
 * @level9/brand — AmbientBackground
 * Premium dark-page background pattern: 2-3 large soft gradient orbs +
 * subtle grid mask. Drop into any section as the absolute layer.
 * Wrap in a positioned parent (relative).
 */

export interface AmbientBackgroundProps {
  /** Color set for the orbs. Each entry creates one blurred orb. */
  orbs?: Array<{
    color: string;        // rgba string with alpha (e.g. "rgba(139,92,246,0.12)")
    size?: number;        // pixel diameter, default 600
    position: string;     // tailwind position classes (e.g. "top-1/4 right-0 -translate-y-1/2")
  }>;
  /** Show the subtle grid pattern overlay. */
  grid?: boolean;
  /** Color used for the grid lines (with low alpha). */
  gridColor?: string;
}

const DEFAULT_ORBS = [
  { color: "rgba(139,92,246,0.12)", size: 800, position: "top-1/4 right-0 -translate-y-1/2" },
  { color: "rgba(6,182,212,0.08)",  size: 600, position: "bottom-0 left-1/4" },
  { color: "rgba(236,72,153,0.05)", size: 500, position: "top-1/3 left-0" },
];

export function AmbientBackground({
  orbs = DEFAULT_ORBS,
  grid = true,
  gridColor = "rgba(139,92,246,0.4)",
}: AmbientBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        {orbs.map((orb, i) => {
          const size = orb.size ?? 600;
          return (
            <div
              key={i}
              className={`absolute rounded-full ${orb.position}`}
              style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 60%)`,
                filter: "blur(100px)",
              }}
            />
          );
        })}
      </div>
      {grid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          }}
        />
      )}
    </>
  );
}

export default AmbientBackground;
