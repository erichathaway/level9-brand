"use client";
/**
 * OutboundOS vertical tile (1080x1920).
 *
 * Portrait companion. 3 pods orbit a central voice-profile hub along
 * elliptical paths via SMIL animateMotion with rotate="0" so labels stay
 * horizontal regardless of where the pod is on its orbit. Portrait has more
 * vertical room so orbits are larger.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

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
  { rx: 220, ry: 165, color: "#f59e0b", name: "LinkupOS",   tag: "LINKEDIN SIGNAL",        dur: 10, begin: 0 },
  { rx: 320, ry: 240, color: "#fb923c", name: "ABM Engine", tag: "MULTI-CHANNEL OUTBOUND", dur: 14, begin: -4 },
  { rx: 420, ry: 310, color: "#f97316", name: "AutoCS",     tag: "CUSTOMER CARE",          dur: 18, begin: -12 },
];

const ellipsePath = (rx: number, ry: number) =>
  `M ${rx} 0 A ${rx} ${ry} 0 1 1 ${-rx} 0 A ${rx} ${ry} 0 1 1 ${rx} 0`;

export function OutboundosVerticalTile() {
  const product = getProduct("outboundos")!;
  const accent = "#fbbf24";

  return (
    <VerticalTileFrame
      product={product}
      metric="3 PODS · ONE VOICE PROFILE"
      gradient={{ from: "#fbbf24", to: "#ea580c" }}
      accent={accent}
      domain="linkupos.com · abm · autocs"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="obVHub">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
          </defs>

          <g transform="translate(540 880)">
            {/* Voice-profile pulse rings */}
            {[0, 1.5, 3].map((delay, i) => (
              <circle
                key={i}
                r={80}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1.6}
                opacity={0.55}
                style={{
                  animation: `obVPulseRing 4.5s ${delay}s ease-out infinite`,
                  transformOrigin: "0px 0px",
                }}
              />
            ))}

            {/* Static orbit ellipses (depth / context) */}
            {orbits.map((o, i) => (
              <ellipse
                key={`orbit-${i}`}
                cx={0}
                cy={0}
                rx={o.rx}
                ry={o.ry}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1.6}
                opacity={0.5 - i * 0.1}
              />
            ))}

            {/* Orbiting pods. animateMotion with rotate="0" keeps the group
                upright so label text stays horizontal for the whole loop
                regardless of where the pod sits on its ellipse. */}
            {orbits.map((o, i) => (
              <g key={`pod-${i}`}>
                <animateMotion
                  dur={`${o.dur}s`}
                  repeatCount="indefinite"
                  rotate="0"
                  path={ellipsePath(o.rx, o.ry)}
                  begin={`${o.begin}s`}
                />
                <circle r={32} fill={o.color} opacity={0.22} />
                <circle
                  r={20}
                  fill="#060610"
                  stroke={o.color}
                  strokeWidth={3.5}
                />
                <circle
                  r={8}
                  fill={o.color}
                  style={{
                    animation: `obVNodeBlink 2s ${(i * 0.4).toFixed(1)}s ease-in-out infinite`,
                  }}
                />
                <text
                  y={-54}
                  textAnchor="middle"
                  fontFamily='"SF Mono", Menlo, monospace'
                  fontSize={13}
                  fill={o.color}
                  opacity={0.9}
                  letterSpacing="2.2"
                >
                  {o.tag}
                </text>
                <text
                  y={-34}
                  textAnchor="middle"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight={700}
                  fontSize={20}
                  fill="rgba(255,255,255,0.9)"
                >
                  {o.name}
                </text>
              </g>
            ))}

            {/* Central voice-profile hub */}
            <circle r={100} fill="#f59e0b" opacity={0.14} />
            <circle r={72} fill="url(#obVHub)" />
            <circle r={72} fill="#060610" opacity={0.55} />
            <text
              y={-6}
              textAnchor="middle"
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={16}
              fill="#fbbf24"
              letterSpacing="3"
            >
              VOICE
            </text>
            <text
              y={22}
              textAnchor="middle"
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={16}
              fill="#fbbf24"
              letterSpacing="3"
            >
              PROFILE
            </text>
          </g>

          <style>{`
            @keyframes obVNodeBlink {
              0%, 100% { opacity: 0.6; }
              50%      { opacity: 1;   }
            }
            @keyframes obVPulseRing {
              0%   { r: 80;  opacity: 0.55; }
              100% { r: 440; opacity: 0;    }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default OutboundosVerticalTile;
