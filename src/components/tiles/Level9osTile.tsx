"use client";
/**
 * Level9OS umbrella tile (1200x630).
 *
 * Metaphor: the alignment cycle. 4 pressure-point dots travel around a
 * chassis ring; the active verb (Decide -> Coordinate -> Execute -> Measure)
 * pulses in the center. Loops cleanly every 8s.
 *
 * Bespoke (does NOT use TileFrame) because Level9OS is the umbrella, not a
 * product. Layout matches TileFrame's visual rhythm: text block left,
 * animated hero right, brand co-sign reduced to a domain wordmark only.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const POINTS = [
  { id: "decide",     verb: "Decide.",     color: "#8b5cf6", angle: -90 },
  { id: "coordinate", verb: "Coordinate.", color: "#10b981", angle: 0 },
  { id: "execute",    verb: "Execute.",    color: "#f59e0b", angle: 90 },
  { id: "measure",    verb: "Measure.",    color: "#06b6d4", angle: 180 },
];

const HERO_CX = 930;
const HERO_CY = 315;
const RING_R = 180;

export function Level9osTile() {
  return (
    <div
      className="tile-canvas"
      style={{
        position: "relative",
        width: 1200,
        height: 630,
        background: "#060610",
        color: "white",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Radial glow behind hero */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 860,
          height: 720,
          background:
            "radial-gradient(circle at center, #8b5cf655 0%, #06b6d422 40%, transparent 70%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero animated metaphor: 4-point alignment cycle */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="l9osChassis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%"  stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="l9osHubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            {/* Chassis ring */}
            <circle r={RING_R} fill="none" stroke="url(#l9osChassis)" strokeWidth={1.4} />
            <circle r={RING_R - 22} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} strokeDasharray="2 5" />

            {/* Hub glow */}
            <circle r={70} fill="url(#l9osHubGlow)" />

            {/* Center hub: rotating verb word */}
            {POINTS.map((p, i) => (
              <text
                key={p.id}
                x={0}
                y={6}
                textAnchor="middle"
                style={{
                  ...sans,
                  fontWeight: 900,
                  fontSize: 38,
                  letterSpacing: "-0.03em",
                  fill: p.color,
                  animation: `l9osVerb 8s ${i * 2}s ease-in-out infinite`,
                  opacity: 0,
                }}
              >
                {p.verb}
              </text>
            ))}

            {/* "9" mark behind the verb, very faint */}
            <text
              x={0}
              y={-110}
              textAnchor="middle"
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: "0.45em",
                fill: "rgba(255,255,255,0.32)",
              }}
            >
              ALIGNMENT CYCLE
            </text>

            {/* 4 pressure-point dots around the ring */}
            {POINTS.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * RING_R;
              const y = Math.sin(rad) * RING_R;
              return (
                <g key={`dot-${p.id}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={26}
                    fill={p.color}
                    opacity={0.18}
                    style={{
                      animation: `l9osDotPulse 8s ${i * 2}s ease-in-out infinite`,
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  />
                  <circle cx={x} cy={y} r={11} fill="#0d0d18" stroke={p.color} strokeWidth={2} />
                  <circle
                    cx={x}
                    cy={y}
                    r={4}
                    fill={p.color}
                    style={{
                      animation: `l9osDotCore 8s ${i * 2}s ease-in-out infinite`,
                    }}
                  />
                </g>
              );
            })}

            {/* Traveling pulse around the chassis */}
            <circle
              r={6}
              fill="#a78bfa"
              style={{
                offsetPath: `path('M ${RING_R} 0 a ${RING_R} ${RING_R} 0 1 1 -${RING_R * 2} 0 a ${RING_R} ${RING_R} 0 1 1 ${RING_R * 2} 0')`,
                animation: "l9osTravel 8s linear infinite",
                filter: "drop-shadow(0 0 6px #a78bfa)",
              }}
            />
          </g>

          <style>{`
            @keyframes l9osVerb {
              0%, 4%   { opacity: 0; transform: scale(0.92); }
              10%, 23% { opacity: 1; transform: scale(1); }
              28%      { opacity: 0; transform: scale(0.92); }
              100%     { opacity: 0; }
            }
            @keyframes l9osDotPulse {
              0%, 100% { transform: scale(1); opacity: 0.18; }
              12%      { transform: scale(1.55); opacity: 0.7; }
              24%      { transform: scale(1); opacity: 0.18; }
            }
            @keyframes l9osDotCore {
              0%, 100% { opacity: 0.5; }
              12%      { opacity: 1; }
              24%      { opacity: 0.5; }
            }
            @keyframes l9osTravel {
              0%   { offset-distance: 0%; }
              100% { offset-distance: 100%; }
            }
          `}</style>
        </svg>
      </div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", left: 72, top: 88, ...mono, fontSize: 11, letterSpacing: "0.5em", color: "#a78bfa", opacity: 0.9, textTransform: "uppercase" }}>
        AI for Operations
      </div>

      {/* Status chip + metric */}
      <div style={{ position: "absolute", left: 72, top: 118, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px 4px 10px", borderRadius: 999, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.4)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
          <span style={{ ...mono, fontSize: 10, color: "#10b981", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          6 PRODUCTS · 4 PRESSURE POINTS · 1 CHASSIS
        </span>
      </div>

      {/* Wordmark: Level9 OS with gradient fill */}
      <svg width="640" height="168" viewBox="0 0 640 168" style={{ position: "absolute", left: 60, top: 160 }}>
        <defs>
          <linearGradient id="l9osWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a78bfa" />
            <stop offset="50%"  stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <text x="12" y="128" style={{ ...sans, fontWeight: 900, fontSize: 120, letterSpacing: "-0.04em", fill: "url(#l9osWord)" }}>
          Level9<tspan fill="#06b6d4">OS</tspan>
        </text>
      </svg>

      {/* Copy block */}
      <div style={{ position: "absolute", left: 72, top: 340, width: 600, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 24, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 22, letterSpacing: "-0.01em" }}>
          Six AI products. Four pressure points. One operating chassis.
        </div>
        <div style={{ fontWeight: 600, fontSize: 22, lineHeight: 1.35, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          Augments the workforce. Replaces the friction.
        </div>
      </div>

      {/* Bottom-left: domain */}
      <div style={{ position: "absolute", left: 72, bottom: 52, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Umbrella · Level9OS
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, ...sans, fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.58)" }}>
        level9os.com
      </div>

      {/* Bottom-right: 6 product chips ribbon */}
      <div style={{ position: "absolute", right: 40, bottom: 28, display: "flex", alignItems: "center", gap: 8, ...mono }}>
        {[
          { l: "S", c: "#8b5cf6" },
          { l: "C", c: "#10b981" },
          { l: "O", c: "#f59e0b" },
          { l: "L", c: "#06b6d4" },
          { l: "P", c: "#64748b" },
          { l: "M", c: "#ec4899" },
        ].map((c) => (
          <div
            key={c.l}
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: `${c.c}1c`,
              border: `1px solid ${c.c}55`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 800,
              color: c.c,
            }}
          >
            {c.l}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Level9osTile;
