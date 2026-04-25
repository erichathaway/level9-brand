"use client";
/**
 * Level9OS umbrella vertical tile (1080x1920).
 *
 * Portrait companion to Level9osTile. The 4-pressure-point alignment cycle
 * lives in the center hero zone (480..1280); chassis ring + dots scaled up
 * from the landscape version. 6 product chips ribbon sits in the bottom band.
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

const HERO_CX = 540;
const HERO_CY = 880;
const RING_R = 320;

export function Level9osVerticalTile() {
  return (
    <div
      className="vtile-canvas"
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        background: "#060610",
        color: "white",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          top: 380,
          width: 1240,
          height: 1000,
          background: "radial-gradient(circle at center, #8b5cf64a 0%, #06b6d414 42%, transparent 72%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero metaphor: alignment cycle */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="vl9osChassis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%"  stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="vl9osHubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            <circle r={RING_R} fill="none" stroke="url(#vl9osChassis)" strokeWidth={2.4} />
            <circle r={RING_R - 36} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1.4} strokeDasharray="3 8" />
            <circle r={130} fill="url(#vl9osHubGlow)" />

            {/* Cycling verb */}
            {POINTS.map((p, i) => (
              <text
                key={p.id}
                x={0}
                y={20}
                textAnchor="middle"
                style={{
                  ...sans,
                  fontWeight: 900,
                  fontSize: 76,
                  letterSpacing: "-0.03em",
                  fill: p.color,
                  animation: `l9osVerb 8s ${i * 2}s ease-in-out infinite`,
                  opacity: 0,
                }}
              >
                {p.verb}
              </text>
            ))}

            <text
              x={0}
              y={-200}
              textAnchor="middle"
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 28,
                letterSpacing: "0.45em",
                fill: "rgba(255,255,255,0.32)",
              }}
            >
              ALIGNMENT CYCLE
            </text>

            {/* 4 pressure-point dots around ring */}
            {POINTS.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * RING_R;
              const y = Math.sin(rad) * RING_R;
              return (
                <g key={`dot-${p.id}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={48}
                    fill={p.color}
                    opacity={0.18}
                    style={{
                      animation: `l9osDotPulse 8s ${i * 2}s ease-in-out infinite`,
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  />
                  <circle cx={x} cy={y} r={20} fill="#0d0d18" stroke={p.color} strokeWidth={3} />
                  <circle
                    cx={x}
                    cy={y}
                    r={7}
                    fill={p.color}
                    style={{ animation: `l9osDotCore 8s ${i * 2}s ease-in-out infinite` }}
                  />
                </g>
              );
            })}

            {/* Traveling pulse */}
            <circle
              r={11}
              fill="#a78bfa"
              style={{
                offsetPath: `path('M ${RING_R} 0 a ${RING_R} ${RING_R} 0 1 1 -${RING_R * 2} 0 a ${RING_R} ${RING_R} 0 1 1 ${RING_R * 2} 0')`,
                animation: "l9osTravel 8s linear infinite",
                filter: "drop-shadow(0 0 10px #a78bfa)",
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

      {/* Top band */}
      <div style={{ position: "absolute", left: 72, top: 96, ...mono, fontSize: 18, letterSpacing: "0.5em", color: "#a78bfa", opacity: 0.9, textTransform: "uppercase" }}>
        AI for Operations
      </div>
      <div style={{ position: "absolute", left: 72, top: 142, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 16px 6px 14px", borderRadius: 999, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.4)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
          <span style={{ ...mono, fontSize: 14, color: "#10b981", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 14, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          6 PRODUCTS · 4 PRESSURE POINTS
        </span>
      </div>

      {/* Name zone */}
      <svg width="960" height="240" viewBox="0 0 960 240" style={{ position: "absolute", left: 60, top: 240 }}>
        <defs>
          <linearGradient id="vl9osWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a78bfa" />
            <stop offset="50%"  stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <text x="12" y="180" style={{ ...sans, fontWeight: 900, fontSize: 180, letterSpacing: "-0.04em", fill: "url(#vl9osWord)" }}>
          Level9<tspan fill="#06b6d4">OS</tspan>
        </text>
      </svg>

      {/* Copy zone */}
      <div style={{ position: "absolute", left: 72, top: 1320, width: 936, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 30, letterSpacing: "-0.01em" }}>
          Six AI products. Four pressure points. One operating chassis.
        </div>
        <div style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.35, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          Augments the workforce. Replaces the friction.
        </div>
      </div>

      {/* Bottom band: domain + chips ribbon */}
      <div style={{ position: "absolute", left: 72, bottom: 112, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Umbrella · Level9OS
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 68, ...sans, fontWeight: 600, fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
        level9os.com
      </div>

      <div style={{ position: "absolute", right: 60, bottom: 70, display: "flex", alignItems: "center", gap: 12, ...mono }}>
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
              width: 52,
              height: 52,
              borderRadius: 12,
              background: `${c.c}1c`,
              border: `1px solid ${c.c}55`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
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

export default Level9osVerticalTile;
