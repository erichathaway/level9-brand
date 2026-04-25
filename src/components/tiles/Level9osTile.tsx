"use client";
/**
 * Level9OS umbrella tile (1200x630).
 *
 * Metaphor: the alignment cycle. 4 pressure-point dots sit on a chassis ring;
 * a HIT flash fires from the Coordinate dot every 5s and emits 4 pond ripples
 * that travel across the full canvas. Same flash + ripple pattern as
 * level9os.com's HomeHeroSplash, ported to a tile-scale loop.
 *
 * Bespoke (does NOT use TileFrame) because Level9OS is the umbrella, not a
 * product.
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

// Coordinate dot is the pulse anchor (angle 0, on the right of the ring).
// Cosmetic in the canvas; the pulse fires from this absolute coordinate.
const PULSE_X = HERO_CX + RING_R; // 1110
const PULSE_Y = HERO_CY;          // 315

// 4 pond ripples expand outward across the whole 1200x630 canvas. Loop
// every 5s with staggered delays so the screen always has at least one
// active wave.
const RIPPLES = [
  { delay: 0.0, dur: 4.0, peakAlpha: 0.13, maxR: 1300 },
  { delay: 0.7, dur: 4.0, peakAlpha: 0.10, maxR: 1200 },
  { delay: 1.4, dur: 4.0, peakAlpha: 0.075, maxR: 1100 },
  { delay: 2.1, dur: 4.0, peakAlpha: 0.05,  maxR: 1000 },
];

const LOOP = 5; // seconds

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
      {/* Background mesh field — 5 drifting blobs (mirrors HomeHeroSplash's
          mesh layer at smaller scale, kept subtle so the pulse + ripples
          dominate). */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { color: "139,92,246", alpha: 0.42, size: 720, top: "22%", left: "62%", flow: 1, dur: 28 },
          { color: "6,182,212",  alpha: 0.32, size: 600, top: "55%", left: "78%", flow: 2, dur: 34 },
          { color: "236,72,153", alpha: 0.22, size: 500, top: "70%", left: "55%", flow: 3, dur: 40 },
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
              filter: "blur(70px)",
              willChange: "transform",
              animation: `l9tile-flow-${b.flow} ${b.dur}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Hero animated metaphor: alignment cycle + pulse + ripples */}
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
            <radialGradient id="l9osFlashGrad">
              <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="28%"  stopColor="#a78bfa" stopOpacity="0.6" />
              <stop offset="55%"  stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="75%"  stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Pond ripples — 4 expanding stroke circles centered on the
              Coordinate dot. Loop period 5s. Each ripple's r animates
              from 0 to maxR, opacity peaks then fades. */}
          {RIPPLES.map((rp, i) => (
            <circle
              key={`rip-${i}`}
              cx={PULSE_X}
              cy={PULSE_Y}
              r={0}
              fill="none"
              stroke="rgba(220,232,255,1)"
              strokeWidth={28}
              style={{
                animation: `l9tile-ripple ${LOOP}s ${rp.delay}s linear infinite`,
                ['--rip-max' as string]: `${rp.maxR}px`,
                ['--rip-peak' as string]: `${rp.peakAlpha}`,
                mixBlendMode: "screen",
              } as CSSProperties}
            />
          ))}

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            {/* Chassis ring */}
            <circle r={RING_R} fill="none" stroke="url(#l9osChassis)" strokeWidth={1.6} />
            <circle r={RING_R - 22} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} strokeDasharray="2 5" />

            {/* Hub glow */}
            <circle r={70} fill="url(#l9osHubGlow)" />

            {/* Center: Coordinate. label (the pulse anchor's verb) */}
            <text
              x={0}
              y={6}
              textAnchor="middle"
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 38,
                letterSpacing: "-0.03em",
                fill: "#10b981",
              }}
            >
              Coordinate.
            </text>
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

            {/* 4 pressure-point dots around the ring. Coordinate dot has
                an extra pulsing glow to anchor the wave origin. */}
            {POINTS.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * RING_R;
              const y = Math.sin(rad) * RING_R;
              const isPulse = p.id === "coordinate";
              return (
                <g key={`dot-${p.id}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isPulse ? 32 : 22}
                    fill={p.color}
                    opacity={isPulse ? 0.55 : 0.18}
                    style={{
                      animation: isPulse
                        ? `l9tile-pulseGlow ${LOOP}s ease-in-out infinite`
                        : undefined,
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  />
                  <circle cx={x} cy={y} r={11} fill="#0d0d18" stroke={p.color} strokeWidth={isPulse ? 2.4 : 2} />
                  <circle cx={x} cy={y} r={isPulse ? 5 : 4} fill={p.color} />
                </g>
              );
            })}
          </g>

          {/* HIT flash centered on the Coordinate dot. Fires once per loop. */}
          <circle
            cx={PULSE_X}
            cy={PULSE_Y}
            r={120}
            fill="url(#l9osFlashGrad)"
            style={{
              transformOrigin: `${PULSE_X}px ${PULSE_Y}px`,
              animation: `l9tile-flash ${LOOP}s ease-out infinite`,
              mixBlendMode: "screen",
              filter: "blur(8px)",
            }}
          />

          <style>{`
            @keyframes l9tile-flash {
              0%   { opacity: 0; transform: scale(0.3); }
              4%   { opacity: 1; transform: scale(2.4); }
              16%  { opacity: 0; transform: scale(3.2); }
              100% { opacity: 0; transform: scale(0.3); }
            }
            @keyframes l9tile-ripple {
              0%   { r: 0;     opacity: 0; }
              4%   { opacity: var(--rip-peak); }
              60%  { opacity: calc(var(--rip-peak) * 0.6); }
              78%  { r: var(--rip-max); opacity: 0; }
              100% { r: var(--rip-max); opacity: 0; }
            }
            @keyframes l9tile-pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.55; }
              4%       { transform: scale(1.6); opacity: 0.95; }
              20%      { transform: scale(1); opacity: 0.55; }
            }
            @keyframes l9tile-flow-1 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(-6%, -8%); }
            }
            @keyframes l9tile-flow-2 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(-8%, 6%); }
            }
            @keyframes l9tile-flow-3 {
              0%, 100% { transform: translate(0, 0); }
              50%      { transform: translate(6%, -6%); }
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
