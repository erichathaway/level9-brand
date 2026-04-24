"use client";
/**
 * StratOS animated tile.
 *
 * Metaphor: 10 executive nodes (left cluster) debate across 3 round-trip arcs
 * converging on one verdict node on the right. Loops cleanly every 4.5s.
 *
 * Signature motion: arc pulses travel left -> right (rounds 1..3), hero text
 * reveal on load, verdict node settles with a fuchsia flash at the crescendo.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

// 10 executive node coordinates around the left arc of the converge layout.
// Origin of hero group: (930, 315). Verdict sits at origin.
const execNodes = [
  { x: -170, y: -190 },
  { x: -195, y: -145 },
  { x: -210, y: -95 },
  { x: -218, y: -40 },
  { x: -218, y: 18 },
  { x: -212, y: 70 },
  { x: -200, y: 118 },
  { x: -182, y: 160 },
  { x: -158, y: 195 },
  { x: -130, y: 222 },
];

export function StratosTile() {
  const product = getProduct("stratos")!;
  const accent = "#a78bfa";

  return (
    <TileFrame
      product={product}
      metric="10 EXECS · 3 ROUNDS"
      gradient={{ from: "#a78bfa", to: "#ec4899" }}
      accent={accent}
      domain="stratosonline.com"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="stratosArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="stratosVerdictGlow">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform="translate(1026 315)">
            {/* Three debate arcs (rounds) — each pulses once per loop */}
            {[0, 1, 2].map((round) => (
              <g key={round}>
                {[-1, 1].map((sign) => (
                  <path
                    key={sign}
                    d={`M -220,0 Q 0,${sign * (200 - round * 50)} 0,0`}
                    fill="none"
                    stroke="url(#stratosArc)"
                    strokeWidth={1.6}
                    opacity={0.5}
                    style={{
                      animation: `stratosArc 4.5s ${round * 0.4}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </g>
            ))}

            {/* 10 exec nodes */}
            {execNodes.map((n, i) => (
              <g key={i}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={16}
                  fill="#8b5cf6"
                  opacity={0.25}
                  style={{
                    animation: `stratosNode 4.5s ${(i * 0.12).toFixed(2)}s ease-in-out infinite`,
                    transformOrigin: `${n.x}px ${n.y}px`,
                  }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={9}
                  fill="#0d0d18"
                  stroke="#a78bfa"
                  strokeWidth={1.5}
                />
              </g>
            ))}

            {/* Traveling pulses along three arcs (round 1, 2, 3) */}
            {[0, 1, 2].map((round) => (
              <circle
                key={`pulse-${round}`}
                r={5}
                fill="#ec4899"
                style={{
                  offsetPath: `path('M -220,0 Q 0,${round === 0 ? -180 : round === 1 ? 0 : 180} 0,0')`,
                  animation: `stratosPulse 4.5s ${round * 0.5}s ease-in-out infinite`,
                  filter: "drop-shadow(0 0 6px #ec4899)",
                }}
              />
            ))}

            {/* Verdict node */}
            <circle
              cx={0}
              cy={0}
              r={40}
              fill="url(#stratosVerdictGlow)"
              style={{
                animation: "stratosVerdict 4.5s ease-in-out infinite",
                transformOrigin: "0px 0px",
              }}
            />
            <circle
              cx={0}
              cy={0}
              r={18}
              fill="#0d0d18"
              stroke="#ec4899"
              strokeWidth={2.5}
            />
            <circle cx={0} cy={0} r={6} fill="#ec4899" />
          </g>

          <style>{`
            @keyframes stratosArc {
              0%, 20%   { opacity: 0.15; }
              40%, 60%  { opacity: 0.85; }
              80%, 100% { opacity: 0.15; }
            }
            @keyframes stratosNode {
              0%, 100% { transform: scale(1); opacity: 0.25; }
              30%      { transform: scale(1.4); opacity: 0.6; }
              60%      { transform: scale(1);   opacity: 0.25; }
            }
            @keyframes stratosPulse {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes stratosVerdict {
              0%, 55% { opacity: 0.2; }
              65%     { opacity: 1; }
              100%    { opacity: 0.2; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default StratosTile;
