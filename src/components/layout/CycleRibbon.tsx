"use client";
/**
 * @level9/brand — CycleRibbon
 * The "misalignment → drag → cost → reactive leadership → repeat" ribbon
 * that visualizes the alignment cycle. Drop above the 4-pressure-point grid.
 */

const CYCLE_STAGES: Array<{ label: string; color: string }> = [
  { label: "Misalignment", color: "rgba(239,68,68,0.7)" },        // red-400
  { label: "Drag", color: "rgba(245,158,11,0.7)" },                // amber-400
  { label: "Cost", color: "rgba(249,115,22,0.7)" },                // orange-400
  { label: "Reactive leadership", color: "rgba(236,72,153,0.7)" }, // fuchsia-400
];

export interface CycleRibbonProps {
  /** Optional custom stage list. Defaults to the canonical alignment cycle. */
  stages?: typeof CYCLE_STAGES;
}

export function CycleRibbon({ stages = CYCLE_STAGES }: CycleRibbonProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 text-[11px] font-mono tracking-[0.25em] uppercase">
      {stages.map((stage, i) => (
        <span key={stage.label} className="contents">
          <span style={{ color: stage.color }}>{stage.label}</span>
          {i < stages.length - 1 ? (
            <span className="text-white/20">→</span>
          ) : (
            <>
              <span className="text-white/20">↺</span>
              <span className="text-white/40">repeat</span>
            </>
          )}
        </span>
      ))}
    </div>
  );
}

export default CycleRibbon;
