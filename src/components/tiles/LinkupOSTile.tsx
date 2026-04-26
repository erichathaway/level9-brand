"use client";
/**
 * LinkupOS tile (1200x630).
 *
 * Hero motion: the canonical upside-down anchor (LinkupOS brand mark)
 * sways gently on a chain, with concentric "signal cast" rings pulsing
 * outward from the anchor's tip every 4s. The metaphor: anchored signal
 * that reaches out — the LinkedIn-signal pod, anchored to one voice,
 * casting outbound rings into the network.
 *
 * Anchor path is the Lucide anchor icon, scaled and rotated 180° to
 * match the canonical chip mark in @level9/brand/assets/logos/linkupos.
 * Brand color: amber (LinkupOS sits under the OutboundOS umbrella).
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const HERO_CX = 930;
const HERO_CY = 320;

// Signal pulse rings — emit from anchor TIP every loop. Each ring expands
// + fades. 3 rings, staggered, 4s loop.
const RINGS = [
  { delay: 0.0, peakAlpha: 0.32, maxR: 280 },
  { delay: 1.0, peakAlpha: 0.22, maxR: 240 },
  { delay: 2.0, peakAlpha: 0.14, maxR: 200 },
];

export function LinkupOSTile() {
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
      {/* Amber radial glow behind anchor */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 860,
          height: 720,
          background: "radial-gradient(circle at center, rgba(245,158,11,0.32) 0%, rgba(249,115,22,0.10) 40%, transparent 70%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero: anchor + signal rings + chain */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="lupAnchorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <radialGradient id="lupAnchorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#fcd34d" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Chain line going up off-canvas (subtle) */}
          <line
            x1={HERO_CX}
            y1={-20}
            x2={HERO_CX}
            y2={HERO_CY - 130}
            stroke="rgba(245,158,11,0.25)"
            strokeWidth={1.4}
            strokeDasharray="2 6"
          />

          {/* Signal pulse rings expanding from anchor tip (downward end of upside-down anchor) */}
          {RINGS.map((rp, i) => (
            <circle
              key={`ring-${i}`}
              cx={HERO_CX}
              cy={HERO_CY + 100}
              r={0}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={2}
              style={{
                animation: `lupRing 4s ${rp.delay}s ease-out infinite`,
                ['--ring-max' as string]: `${rp.maxR}px`,
                ['--ring-peak' as string]: `${rp.peakAlpha}`,
              } as CSSProperties}
            />
          ))}

          {/* Anchor group — sways gently like a pendulum */}
          <g
            style={{
              transformOrigin: `${HERO_CX}px ${HERO_CY - 130}px`,
              animation: "lupSway 6s ease-in-out infinite",
            }}
          >
            {/* Subtle glow halo BEHIND anchor; opacity dropped so the anchor
                strokes read clearly against it (was 0.45 — too bright, washed
                out the shaft + cross-bar). */}
            <circle cx={HERO_CX} cy={HERO_CY} r={150} fill="url(#lupAnchorGlow)" opacity={0.55} />

            {/* Anchor: Lucide paths scaled 9x and rotated 180° around its
                own center. Strokes are paint-ordered so the dark obsidian
                outline draws first, then the amber gradient stroke on top.
                The dark outline (stroke-width 4) gives the colored stroke
                (stroke-width 2.6) clear contrast against the warm glow. */}
            <g
              transform={`translate(${HERO_CX} ${HERO_CY}) scale(9) rotate(180) translate(-12,-12)`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Dark outline pass — slightly wider than the colored stroke
                  for clean contrast halo. Thinner per Eric. */}
              <g stroke="#0d0d18" strokeWidth={2.6}>
                <path d="M12 6v16" />
                <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
                <path d="M9 11h6" />
                <circle cx={12} cy={4} r={2} />
              </g>
              {/* Bright amber pass on top — thinner per Eric so the anchor
                  reads cleaner, less heavy. */}
              <g stroke="url(#lupAnchorGrad)" strokeWidth={1.6}>
                <path d="M12 6v16" />
                <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
                <path d="M9 11h6" />
                <circle cx={12} cy={4} r={2} fill="#f59e0b" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", left: 72, top: 88, ...mono, fontSize: 11, letterSpacing: "0.5em", color: "#f59e0b", opacity: 0.9, textTransform: "uppercase" }}>
        LinkedIn Signal Pod
      </div>

      {/* Status chip */}
      <div style={{ position: "absolute", left: 72, top: 118, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px 4px 10px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 10, color: "#f59e0b", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          OUTBOUNDOS POD · LUCIDORG LLC
        </span>
      </div>

      {/* Wordmark */}
      <svg width="640" height="168" viewBox="0 0 640 168" style={{ position: "absolute", left: 60, top: 160 }}>
        <defs>
          <linearGradient id="lupWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <text x="12" y="128" style={{ ...sans, fontWeight: 900, fontSize: 120, letterSpacing: "-0.04em", fill: "url(#lupWord)" }}>
          LinkupOS
        </text>
      </svg>

      {/* Copy block */}
      <div style={{ position: "absolute", left: 72, top: 340, width: 600, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 24, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 22, letterSpacing: "-0.01em" }}>
          LinkedIn signal. Voice-calibrated outbound.
        </div>
        <div style={{ fontWeight: 600, fontSize: 22, lineHeight: 1.35, color: "#f59e0b", letterSpacing: "-0.01em" }}>
          Anchored in your voice. Cast across your network.
        </div>
      </div>

      {/* Bottom-left domain */}
      <div style={{ position: "absolute", left: 72, bottom: 52, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Outbound · Signal Pod
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, ...sans, fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.58)" }}>
        linkupos.com
      </div>

      <style>{`
        @keyframes lupSway {
          0%, 100% { transform: rotate(-4deg); }
          50%      { transform: rotate(4deg); }
        }
        @keyframes lupRing {
          0%   { r: 0; opacity: 0; }
          6%   { opacity: var(--ring-peak); }
          80%  { r: var(--ring-max); opacity: 0; }
          100% { r: var(--ring-max); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default LinkupOSTile;
