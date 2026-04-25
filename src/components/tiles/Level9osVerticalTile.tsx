"use client";
/**
 * Level9OS umbrella vertical tile (1080x1920).
 *
 * Portrait companion to Level9osTile. Same flash + 4-pond-ripple pattern
 * as level9os.com's HomeHeroSplash, anchored on the Coordinate dot,
 * looping every 5s. Ripples scale up to fill the full 1080x1920 canvas.
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

const PULSE_X = HERO_CX + RING_R; // 860
const PULSE_Y = HERO_CY;          // 880

const RIPPLES = [
  { delay: 0.0, dur: 4.0, peakAlpha: 0.13, maxR: 2400 },
  { delay: 0.7, dur: 4.0, peakAlpha: 0.10, maxR: 2200 },
  { delay: 1.4, dur: 4.0, peakAlpha: 0.075, maxR: 2000 },
  { delay: 2.1, dur: 4.0, peakAlpha: 0.05,  maxR: 1800 },
];

const LOOP = 5;

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
      {/* Mesh background */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { color: "139,92,246", alpha: 0.42, size: 900, top: "30%", left: "62%", flow: 1, dur: 28 },
          { color: "6,182,212",  alpha: 0.32, size: 760, top: "55%", left: "20%", flow: 2, dur: 34 },
          { color: "236,72,153", alpha: 0.22, size: 600, top: "75%", left: "55%", flow: 3, dur: 40 },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(${b.color},${b.alpha}) 0%, transparent 62%)`,
              filter: "blur(90px)",
              willChange: "transform",
              animation: `vl9tile-flow-${b.flow} ${b.dur}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Hero animated metaphor: alignment cycle + pulse + ripples */}
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
            <radialGradient id="vl9osFlashGrad">
              <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="28%"  stopColor="#a78bfa" stopOpacity="0.6" />
              <stop offset="55%"  stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="75%"  stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Pond ripples — 4 expanding stroke circles */}
          {RIPPLES.map((rp, i) => (
            <circle
              key={`vrip-${i}`}
              cx={PULSE_X}
              cy={PULSE_Y}
              r={0}
              fill="none"
              stroke="rgba(220,232,255,1)"
              strokeWidth={48}
              style={{
                animation: `vl9tile-ripple ${LOOP}s ${rp.delay}s linear infinite`,
                ['--rip-max' as string]: `${rp.maxR}px`,
                ['--rip-peak' as string]: `${rp.peakAlpha}`,
                mixBlendMode: "screen",
              } as CSSProperties}
            />
          ))}

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            <circle r={RING_R} fill="none" stroke="url(#vl9osChassis)" strokeWidth={2.4} />
            <circle r={RING_R - 36} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1.4} strokeDasharray="3 8" />
            <circle r={130} fill="url(#vl9osHubGlow)" />

            <text
              x={0}
              y={20}
              textAnchor="middle"
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 76,
                letterSpacing: "-0.03em",
                fill: "#10b981",
              }}
            >
              Coordinate.
            </text>
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

            {POINTS.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * RING_R;
              const y = Math.sin(rad) * RING_R;
              const isPulse = p.id === "coordinate";
              return (
                <g key={`vdot-${p.id}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isPulse ? 60 : 40}
                    fill={p.color}
                    opacity={isPulse ? 0.55 : 0.18}
                    style={{
                      animation: isPulse
                        ? `vl9tile-pulseGlow ${LOOP}s ease-in-out infinite`
                        : undefined,
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  />
                  <circle cx={x} cy={y} r={20} fill="#0d0d18" stroke={p.color} strokeWidth={isPulse ? 3.4 : 3} />
                  <circle cx={x} cy={y} r={isPulse ? 9 : 7} fill={p.color} />
                </g>
              );
            })}
          </g>

          {/* HIT flash */}
          <circle
            cx={PULSE_X}
            cy={PULSE_Y}
            r={220}
            fill="url(#vl9osFlashGrad)"
            style={{
              transformOrigin: `${PULSE_X}px ${PULSE_Y}px`,
              animation: `vl9tile-flash ${LOOP}s ease-out infinite`,
              mixBlendMode: "screen",
              filter: "blur(14px)",
            }}
          />

          <style>{`
            @keyframes vl9tile-flash {
              0%   { opacity: 0; transform: scale(0.3); }
              4%   { opacity: 1; transform: scale(2.4); }
              16%  { opacity: 0; transform: scale(3.2); }
              100% { opacity: 0; transform: scale(0.3); }
            }
            @keyframes vl9tile-ripple {
              0%   { r: 0;     opacity: 0; }
              4%   { opacity: var(--rip-peak); }
              60%  { opacity: calc(var(--rip-peak) * 0.6); }
              78%  { r: var(--rip-max); opacity: 0; }
              100% { r: var(--rip-max); opacity: 0; }
            }
            @keyframes vl9tile-pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.55; }
              4%       { transform: scale(1.6); opacity: 0.95; }
              20%      { transform: scale(1); opacity: 0.55; }
            }
            @keyframes vl9tile-flow-1 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(-6%, -8%); }
            }
            @keyframes vl9tile-flow-2 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(-8%, 6%); }
            }
            @keyframes vl9tile-flow-3 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(6%, -6%); }
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

      {/* Bottom band */}
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
