"use client";
/**
 * OutboundOS animated tile (landscape 1200x630).
 *
 * Metaphor: 3 pods orbit a central voice-profile hub along elliptical paths.
 * Each pod travels continuously on its orbit (SMIL animateMotion) with
 * rotate="0" so the label text stays horizontal and readable regardless of
 * where on the orbit the pod currently sits.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

type Orbit = {
  rx: number;
  ry: number;
  color: string;
  name: string;
  tag: string;
  dur: number;
  begin: number;
};

const orbits: Orbit[] = [
  { rx: 105, ry: 42, color: "#f59e0b", name: "LinkupOS",   tag: "LINKEDIN SIGNAL",        dur: 10, begin: 0 },
  { rx: 155, ry: 62, color: "#fb923c", name: "ABM Engine", tag: "MULTI-CHANNEL OUTBOUND", dur: 14, begin: -4 },
  { rx: 200, ry: 80, color: "#f97316", name: "AutoCS",     tag: "CUSTOMER CARE",          dur: 18, begin: -12 },
];

/** Elliptical path centered at (0,0) traced clockwise starting from (rx, 0). */
const ellipsePath = (rx: number, ry: number) =>
  `M ${rx} 0 A ${rx} ${ry} 0 1 1 ${-rx} 0 A ${rx} ${ry} 0 1 1 ${rx} 0`;

export function OutboundosTile() {
  const product = getProduct("outboundos")!;
  const accent = "#fbbf24";

  return (
    <TileFrame
      product={product}
      metric="3 PODS · ONE VOICE PROFILE"
      gradient={{ from: "#fbbf24", to: "#ea580c" }}
      accent={accent}
      domain="linkupos.com · abm · autocs"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="obHub">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
          </defs>

          <g transform="translate(930 315)">
            {/* Voice-profile pulse rings from the center */}
            {[0, 1.5, 3].map((delay, i) => (
              <circle
                key={i}
                r={40}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1}
                opacity={0.55}
                style={{
                  animation: `obPulseRing 4.5s ${delay}s ease-out infinite`,
                  transformOrigin: "0px 0px",
                }}
              />
            ))}

            {/* Static orbit ellipses */}
            {orbits.map((o, i) => (
              <ellipse
                key={`orbit-${i}`}
                cx={0}
                cy={0}
                rx={o.rx}
                ry={o.ry}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1}
                opacity={0.45 - i * 0.1}
              />
            ))}

            {/* Orbiting pods + labels. Each <g> travels its elliptical path
                via animateMotion. rotate="0" keeps the group upright so
                text reads horizontally for the entire loop. */}
            {orbits.map((o, i) => (
              <g key={`pod-${i}`}>
                <animateMotion
                  dur={`${o.dur}s`}
                  repeatCount="indefinite"
                  rotate="0"
                  path={ellipsePath(o.rx, o.ry)}
                  begin={`${o.begin}s`}
                />
                <circle r={18} fill={o.color} opacity={0.22} />
                <circle
                  r={11}
                  fill="#060610"
                  stroke={o.color}
                  strokeWidth={2.5}
                />
                <circle
                  r={4}
                  fill={o.color}
                  style={{
                    animation: `obNodeBlink 2s ${(i * 0.4).toFixed(1)}s ease-in-out infinite`,
                  }}
                />
                <text
                  y={-28}
                  textAnchor="middle"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight={700}
                  fontSize={12}
                  fill="rgba(255,255,255,0.85)"
                >
                  {o.name}
                </text>
                <text
                  y={-42}
                  textAnchor="middle"
                  fontFamily='"SF Mono", Menlo, monospace'
                  fontSize={8}
                  fill={o.color}
                  opacity={0.85}
                  letterSpacing="1.5"
                >
                  {o.tag}
                </text>
              </g>
            ))}

            {/* Central voice-profile hub */}
            <circle r={56} fill="#f59e0b" opacity={0.14} />
            <circle r={40} fill="url(#obHub)" />
            <circle r={40} fill="#060610" opacity={0.55} />
            <text
              y={-2}
              textAnchor="middle"
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={9}
              fill="#fbbf24"
              letterSpacing="2.2"
            >
              VOICE
            </text>
            <text
              y={14}
              textAnchor="middle"
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={9}
              fill="#fbbf24"
              letterSpacing="2.2"
            >
              PROFILE
            </text>
          </g>

          <style>{`
            @keyframes obNodeBlink {
              0%, 100% { opacity: 0.6; }
              50%      { opacity: 1;   }
            }
            @keyframes obPulseRing {
              0%   { r: 40;  opacity: 0.55; }
              100% { r: 220; opacity: 0;    }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default OutboundosTile;
