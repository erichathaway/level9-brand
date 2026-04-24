"use client";
/**
 * StratOS vertical tile (1080x1920).
 *
 * Portrait adaptation of the landscape converge metaphor: 10 executive nodes
 * sit in a wide horizontal arc across the TOP of the hero zone and debate arcs
 * flow DOWNWARD to a single verdict node at the BOTTOM of the hero zone.
 *
 * The direction of the arcs is what makes this version read as portrait.
 * landscape is left-to-right convergence, portrait is top-to-bottom.
 *
 * Loops cleanly every 4.5s.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

// 10 executive node coordinates on a wide horizontal arc.
// Hero group origin: (540, 1200). that is the VERDICT node.
// Execs sit roughly 640px above the verdict on a concave arc spanning ~880px wide.
const execNodes = [
  { x: -360, y: -500 },
  { x: -290, y: -570 },
  { x: -205, y: -616 },
  { x: -110, y: -640 },
  { x: -18,  y: -648 },
  { x: 77,   y: -642 },
  { x: 172,  y: -620 },
  { x: 258,  y: -580 },
  { x: 330,  y: -525 },
  { x: 388,  y: -460 },
];

export function StratosVerticalTile() {
  const product = getProduct("stratos")!;
  const accent = "#a78bfa";

  return (
    <VerticalTileFrame
      product={product}
      metric="10 EXECS · 3 ROUNDS"
      gradient={{ from: "#a78bfa", to: "#ec4899" }}
      accent={accent}
      domain="stratosonline.com"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="stratosVArc" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="stratosVVerdictGlow">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform="translate(540 1180)">
            {/* Three debate arcs. converge top-to-bottom on the verdict */}
            {[0, 1, 2].map((round) => (
              <g key={round}>
                {[-1, 1].map((sign) => (
                  <path
                    key={sign}
                    d={`M 0,-620 Q ${sign * (380 - round * 90)},-340 0,0`}
                    fill="none"
                    stroke="url(#stratosVArc)"
                    strokeWidth={2.4}
                    opacity={0.5}
                    style={{
                      animation: `stratosVArc 4.5s ${round * 0.4}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </g>
            ))}

            {/* 10 exec nodes across the top arc */}
            {execNodes.map((n, i) => (
              <g key={i}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={28}
                  fill="#8b5cf6"
                  opacity={0.25}
                  style={{
                    animation: `stratosVNode 4.5s ${(i * 0.12).toFixed(2)}s ease-in-out infinite`,
                    transformOrigin: `${n.x}px ${n.y}px`,
                  }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={16}
                  fill="#0d0d18"
                  stroke="#a78bfa"
                  strokeWidth={2.5}
                />
              </g>
            ))}

            {/* Traveling pulses along three arcs (round 1, 2, 3) */}
            {[0, 1, 2].map((round) => (
              <circle
                key={`pulse-${round}`}
                r={9}
                fill="#ec4899"
                style={{
                  offsetPath: `path('M 0,-620 Q ${round === 0 ? -290 : round === 1 ? 0 : 290},-340 0,0')`,
                  animation: `stratosVPulse 4.5s ${round * 0.5}s ease-in-out infinite`,
                  filter: "drop-shadow(0 0 10px #ec4899)",
                }}
              />
            ))}

            {/* Verdict node */}
            <circle
              cx={0}
              cy={0}
              r={72}
              fill="url(#stratosVVerdictGlow)"
              style={{
                animation: "stratosVVerdict 4.5s ease-in-out infinite",
                transformOrigin: "0px 0px",
              }}
            />
            <circle
              cx={0}
              cy={0}
              r={34}
              fill="#0d0d18"
              stroke="#ec4899"
              strokeWidth={3.5}
            />
            <circle cx={0} cy={0} r={11} fill="#ec4899" />
            <text
              x={0}
              y={65}
              textAnchor="middle"
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={16}
              fill="#f9a8d4"
              letterSpacing="3"
            >
              VERDICT
            </text>
          </g>

          <style>{`
            @keyframes stratosVArc {
              0%, 20%   { opacity: 0.15; }
              40%, 60%  { opacity: 0.85; }
              80%, 100% { opacity: 0.15; }
            }
            @keyframes stratosVNode {
              0%, 100% { transform: scale(1);   opacity: 0.25; }
              30%      { transform: scale(1.4); opacity: 0.6;  }
              60%      { transform: scale(1);   opacity: 0.25; }
            }
            @keyframes stratosVPulse {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes stratosVVerdict {
              0%, 55% { opacity: 0.2; }
              65%     { opacity: 1;   }
              100%    { opacity: 0.2; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default StratosVerticalTile;
