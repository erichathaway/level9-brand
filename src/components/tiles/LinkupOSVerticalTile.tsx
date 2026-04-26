"use client";
/**
 * LinkupOS vertical tile (1080x1920).
 *
 * Portrait companion. Anchor + signal rings centered in hero zone.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const HERO_CX = 540;
const HERO_CY = 880;

const RINGS = [
  { delay: 0.0, peakAlpha: 0.32, maxR: 520 },
  { delay: 1.0, peakAlpha: 0.22, maxR: 440 },
  { delay: 2.0, peakAlpha: 0.14, maxR: 360 },
];

export function LinkupOSVerticalTile() {
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
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          top: 380,
          width: 1240,
          height: 1000,
          background: "radial-gradient(circle at center, rgba(245,158,11,0.36) 0%, rgba(249,115,22,0.10) 42%, transparent 72%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="vlupAnchorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <radialGradient id="vlupAnchorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#fcd34d" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
            </radialGradient>
          </defs>

          <line
            x1={HERO_CX}
            y1={400}
            x2={HERO_CX}
            y2={HERO_CY - 220}
            stroke="rgba(245,158,11,0.25)"
            strokeWidth={2}
            strokeDasharray="3 9"
          />

          {RINGS.map((rp, i) => (
            <circle
              key={`vring-${i}`}
              cx={HERO_CX}
              cy={HERO_CY + 160}
              r={0}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={3}
              style={{
                animation: `vlupRing 4s ${rp.delay}s ease-out infinite`,
                ['--ring-max' as string]: `${rp.maxR}px`,
                ['--ring-peak' as string]: `${rp.peakAlpha}`,
              } as CSSProperties}
            />
          ))}

          <g
            style={{
              transformOrigin: `${HERO_CX}px ${HERO_CY - 220}px`,
              animation: "vlupSway 6s ease-in-out infinite",
            }}
          >
            <circle cx={HERO_CX} cy={HERO_CY} r={260} fill="url(#vlupAnchorGlow)" opacity={0.55} />
            <g
              transform={`translate(${HERO_CX} ${HERO_CY}) scale(15) rotate(180) translate(-12,-12)`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g stroke="#0d0d18" strokeWidth={4}>
                <path d="M12 6v16" />
                <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
                <path d="M9 11h6" />
                <circle cx={12} cy={4} r={2} />
              </g>
              <g stroke="url(#vlupAnchorGrad)" strokeWidth={2.6}>
                <path d="M12 6v16" />
                <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
                <path d="M9 11h6" />
                <circle cx={12} cy={4} r={2} fill="#f59e0b" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Top band */}
      <div style={{ position: "absolute", left: 72, top: 96, ...mono, fontSize: 18, letterSpacing: "0.5em", color: "#f59e0b", opacity: 0.9, textTransform: "uppercase" }}>
        LinkedIn Signal Pod
      </div>
      <div style={{ position: "absolute", left: 72, top: 142, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 16px 6px 14px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 10px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 14, color: "#f59e0b", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 14, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          OUTBOUNDOS POD
        </span>
      </div>

      {/* Wordmark */}
      <svg width="960" height="240" viewBox="0 0 960 240" style={{ position: "absolute", left: 60, top: 240 }}>
        <defs>
          <linearGradient id="vlupWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <text x="12" y="180" style={{ ...sans, fontWeight: 900, fontSize: 200, letterSpacing: "-0.04em", fill: "url(#vlupWord)" }}>
          LinkupOS
        </text>
      </svg>

      {/* Copy zone */}
      <div style={{ position: "absolute", left: 72, top: 1340, width: 936, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 30, letterSpacing: "-0.01em" }}>
          LinkedIn signal. Voice-calibrated outbound.
        </div>
        <div style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.35, color: "#f59e0b", letterSpacing: "-0.01em" }}>
          Anchored in your voice. Cast across your network.
        </div>
      </div>

      {/* Bottom band */}
      <div style={{ position: "absolute", left: 72, bottom: 112, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Outbound · Signal Pod
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 68, ...sans, fontWeight: 600, fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
        linkupos.com
      </div>

      <style>{`
        @keyframes vlupSway {
          0%, 100% { transform: rotate(-4deg); }
          50%      { transform: rotate(4deg); }
        }
        @keyframes vlupRing {
          0%   { r: 0; opacity: 0; }
          6%   { opacity: var(--ring-peak); }
          80%  { r: var(--ring-max); opacity: 0; }
          100% { r: var(--ring-max); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default LinkupOSVerticalTile;
