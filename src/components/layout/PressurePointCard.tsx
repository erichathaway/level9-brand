"use client";
/**
 * @level9/brand — PressurePointCard
 * Renders one of the four alignment-cycle pressure points with consistent
 * styling. Drop into a 2-col grid + map over `pressurePoints`.
 *
 * Usage:
 *   import { pressurePoints } from "@level9/brand/content/pressurePoints";
 *   import { PressurePointCard } from "@level9/brand/components/layout";
 *   ...
 *   {pressurePoints.map((pp, i) => (
 *     <FadeIn key={pp.id} delay={i * 0.08}>
 *       <PressurePointCard {...pp} />
 *     </FadeIn>
 *   ))}
 */

import type { PressurePoint } from "../../content/pressurePoints";
import { MagneticCard } from "../motion/MagneticCard";

export type PressurePointCardProps = PressurePoint;

export function PressurePointCard(pp: PressurePointCardProps) {
  return (
    <MagneticCard
      className="rounded-2xl h-full"
      glowColor={`${pp.color}25`}
      maxTilt={3}
    >
      <div
        className="rounded-2xl border bg-[#0a0a14]/40 backdrop-blur-sm overflow-hidden group hover:bg-[#0a0a14]/60 transition-colors h-full"
        style={{ borderColor: `${pp.color}20` }}
      >
        {/* Top accent line */}
        <div
          className="h-[2px]"
          style={{
            background: `linear-gradient(90deg, ${pp.color}, ${pp.color}30, transparent)`,
          }}
        />

        <div className="p-7 md:p-8">
          {/* Header row: number + breaks badge */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div
                className="text-[11px] font-mono tracking-[0.3em] mb-1.5"
                style={{ color: `${pp.color}aa` }}
              >
                PRESSURE POINT {pp.number}
              </div>
              <h3
                className="text-3xl sm:text-4xl font-black tracking-tight"
                style={{ color: pp.color }}
              >
                {pp.verb}
              </h3>
            </div>
            <div
              className="px-3 py-1.5 rounded-full border text-[10px] font-mono tracking-wider uppercase"
              style={{
                borderColor: `${pp.color}30`,
                background: `${pp.color}10`,
                color: `${pp.color}cc`,
              }}
            >
              Breaks {pp.breaks}
            </div>
          </div>

          {/* Problem */}
          <div className="mb-4">
            <div className="text-white/30 text-[11px] uppercase tracking-wider font-mono mb-1.5">
              Problem
            </div>
            <p className="text-white/65 text-sm leading-relaxed">{pp.problem}</p>
          </div>

          {/* Answer */}
          <div className="mb-6 pl-3 border-l-2" style={{ borderColor: pp.color }}>
            <div
              className="text-[11px] uppercase tracking-wider font-mono mb-1.5"
              style={{ color: `${pp.color}aa` }}
            >
              Answer
            </div>
            <p className="text-white/90 text-sm leading-relaxed font-medium">{pp.answer}</p>
          </div>

          {/* Capabilities */}
          <div className="space-y-1.5 mb-6">
            {pp.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-2 text-white/60 text-xs"
              >
                <div
                  className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: pp.color }}
                />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          {/* Product anchor */}
          <div
            className="flex items-center justify-between pt-5 border-t"
            style={{ borderColor: `${pp.color}15` }}
          >
            <div>
              <div className="text-white/25 text-[10px] uppercase tracking-wider font-mono mb-0.5">
                Built as
              </div>
              <div className="text-white/85 text-base font-bold">{pp.product}</div>
              <div className="text-white/40 text-[11px] mt-0.5">{pp.category}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: pp.color }}
              />
              <span
                className="text-[10px] font-mono tracking-wider"
                style={{ color: `${pp.color}cc` }}
              >
                {pp.productStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MagneticCard>
  );
}

export default PressurePointCard;
