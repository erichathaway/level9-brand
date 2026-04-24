"use client";
/**
 * COO Playbook animated tile.
 *
 * Metaphor: three horizontal timeline bars fill in sequence. Day 30 first,
 * then Day 90, then Day 180, each with milestone circle settling at the
 * end. After all three are full, they hold briefly, then reset. 5s loop.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

export function PlaybookTile() {
  const product = getProduct("playbook")!;
  const accent = "#cbd5e1";

  return (
    <TileFrame
      product={product}
      metric="30 · 90 · 180"
      gradient={{ from: "#cbd5e1", to: "#475569" }}
      accent={accent}
      domain="thenewcoo.com"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="pbBar30" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="pbBar90" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="pbBar180" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <g transform="translate(790 170)" fontFamily="Inter, system-ui, sans-serif">
            {/* Phase 1 — Day 30 */}
            <g>
              <text x={0} y={16} fontFamily='"SF Mono", Menlo, monospace' fontSize={10} fill="rgba(255,255,255,0.5)" letterSpacing="2.2">DAY 30</text>
              <text x={0} y={34} fontWeight={600} fontSize={14} fill="rgba(255,255,255,0.85)">Diagnose · ECI baseline</text>
              <rect x={0} y={44} width={380} height={10} rx={5} fill="rgba(148,163,184,0.1)" />
              <rect x={0} y={44} height={10} rx={5} fill="url(#pbBar30)"
                style={{ animation: "pbBar30Fill 5s infinite" }}
              />
              <circle cy={49} r={8} fill="#060610" stroke="#94a3b8" strokeWidth={2}
                style={{ animation: "pbMark30 5s infinite" }}
              />
            </g>

            {/* Phase 2 — Day 90 */}
            <g transform="translate(0 86)">
              <text x={0} y={16} fontFamily='"SF Mono", Menlo, monospace' fontSize={10} fill="rgba(255,255,255,0.5)" letterSpacing="2.2">DAY 90</text>
              <text x={0} y={34} fontWeight={600} fontSize={14} fill="rgba(255,255,255,0.85)">Install · Lean Ops + CxfO</text>
              <rect x={0} y={44} width={380} height={10} rx={5} fill="rgba(148,163,184,0.1)" />
              <rect x={0} y={44} height={10} rx={5} fill="url(#pbBar90)"
                style={{ animation: "pbBar90Fill 5s infinite" }}
              />
              <circle cy={49} r={8} fill="#060610" stroke="#cbd5e1" strokeWidth={2}
                style={{ animation: "pbMark90 5s infinite" }}
              />
            </g>

            {/* Phase 3 — Day 180 */}
            <g transform="translate(0 172)">
              <text x={0} y={16} fontFamily='"SF Mono", Menlo, monospace' fontSize={10} fill="rgba(255,255,255,0.5)" letterSpacing="2.2">DAY 180</text>
              <text x={0} y={34} fontWeight={600} fontSize={14} fill="rgba(255,255,255,0.85)">Compound · Alignment Cycle</text>
              <rect x={0} y={44} width={380} height={10} rx={5} fill="rgba(148,163,184,0.1)" />
              <rect x={0} y={44} height={10} rx={5} fill="url(#pbBar180)"
                style={{ animation: "pbBar180Fill 5s infinite" }}
              />
              <circle cy={49} r={8} fill="#060610" stroke="#e2e8f0" strokeWidth={2}
                style={{ animation: "pbMark180 5s infinite" }}
              />
            </g>

            {/* Framework badges */}
            <g transform="translate(0 276)" fontFamily='"SF Mono", Menlo, monospace' fontSize={10} fill="rgba(255,255,255,0.45)">
              <text x={0}   y={0} letterSpacing="1.8">ECI</text>
              <text x={70}  y={0} letterSpacing="1.8">CxfO</text>
              <text x={140} y={0} letterSpacing="1.8">LEAN OPS</text>
              <text x={235} y={0} letterSpacing="1.8">ALIGNMENT</text>
            </g>
          </g>

          <style>{`
            /* Each bar fills during its third of the loop, then stays filled until the reset at the end */
            @keyframes pbBar30Fill {
              0%   { width: 0;   }
              20%  { width: 77;  }
              95%  { width: 77;  }
              100% { width: 0;   }
            }
            @keyframes pbBar90Fill {
              0%, 20%  { width: 0;   }
              45%      { width: 194; }
              95%      { width: 194; }
              100%     { width: 0;   }
            }
            @keyframes pbBar180Fill {
              0%, 45%  { width: 0;   }
              75%      { width: 380; }
              95%      { width: 380; }
              100%     { width: 0;   }
            }
            @keyframes pbMark30 {
              0%       { cx: 0;   opacity: 0; }
              20%      { cx: 77;  opacity: 1; }
              95%      { cx: 77;  opacity: 1; }
              100%     { cx: 0;   opacity: 0; }
            }
            @keyframes pbMark90 {
              0%, 20%  { cx: 0;   opacity: 0; }
              45%      { cx: 194; opacity: 1; }
              95%      { cx: 194; opacity: 1; }
              100%     { cx: 0;   opacity: 0; }
            }
            @keyframes pbMark180 {
              0%, 45%  { cx: 0;   opacity: 0; }
              75%      { cx: 380; opacity: 1; }
              95%      { cx: 380; opacity: 1; }
              100%     { cx: 0;   opacity: 0; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default PlaybookTile;
