"use client";
/**
 * StayLevelTile (1200x630).
 *
 * Hero motion: a horizontal bubble level instrument. The bubble drifts
 * gently off-center then settles back to true center, embodying the
 * "stay level" operator philosophy. Three small dots above the level —
 * violet, cyan, fuchsia — represent the publication's three sections
 * (Mindshift Monday, Wisdom Wednesday, Future Friday).
 *
 * Bespoke chrome (umbrella-style) — Stay Level is a publication, not a
 * product, so no TileFrame. Same visual rhythm as the existing umbrella
 * tiles (Level9OS, Eric Hathaway), with the full Level9 palette flowing
 * through the wordmark.
 *
 * Brand: Stay Level. erichathaway.substack.com.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

export function StayLevelTile() {
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
      {/* Multi-color radial glow behind hero (violet → pink) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 860,
          height: 720,
          background:
            "radial-gradient(circle at center, rgba(167,139,250,0.28) 0%, rgba(244,114,182,0.14) 40%, transparent 70%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero: bubble level + M/W/F section markers */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="slPalette" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="20%" stopColor="#22d3ee" />
              <stop offset="40%" stopColor="#a78bfa" />
              <stop offset="60%" stopColor="#f472b6" />
              <stop offset="80%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="slGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
            <radialGradient id="slBubbleGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
            </radialGradient>
          </defs>

          {/* Subtle horizon line behind the level */}
          <line
            x1="640"
            y1="325"
            x2="1180"
            y2="325"
            stroke="url(#slPalette)"
            strokeWidth="1"
            strokeOpacity="0.20"
          />

          {/* M / W / F section markers above level */}
          <g>
            <text x="800" y="208" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.3em" }} fill="rgba(139,92,246,0.9)">
              M
            </text>
            <circle cx="800" cy="225" r="6" fill="#8b5cf6">
              <animate attributeName="r" values="6;8;6" dur="2.4s" repeatCount="indefinite" />
            </circle>

            <text x="920" y="208" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.3em" }} fill="rgba(6,182,212,0.9)">
              W
            </text>
            <circle cx="920" cy="225" r="6" fill="#06b6d4">
              <animate attributeName="r" values="6;8;6" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            </circle>

            <text x="1040" y="208" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.3em" }} fill="rgba(236,72,153,0.9)">
              F
            </text>
            <circle cx="1040" cy="225" r="6" fill="#ec4899">
              <animate attributeName="r" values="6;8;6" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Bubble level body — gentle tilt, settles back */}
          <g style={{ transformOrigin: "920px 325px", animation: "slLevelTilt 8s ease-in-out infinite" }}>
            {/* Outer pill */}
            <rect
              x="710"
              y="290"
              width="420"
              height="70"
              rx="35"
              fill="#0d0d18"
              stroke="url(#slPalette)"
              strokeWidth="2.5"
            />

            {/* Inner glass tube */}
            <rect
              x="740"
              y="312"
              width="360"
              height="26"
              rx="13"
              fill="url(#slGlass)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1"
            />

            {/* Center tick marks */}
            <line x1="903" y1="306" x2="903" y2="344" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
            <line x1="937" y1="306" x2="937" y2="344" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />

            {/* The bubble — drifts off-center, returns to true */}
            <g style={{ animation: "slBubble 5s ease-in-out infinite" }}>
              <circle cx="920" cy="325" r="10" fill="url(#slBubbleGrad)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      </div>

      {/* Eyebrow */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 88,
          ...mono,
          fontSize: 11,
          letterSpacing: "0.5em",
          color: "#22d3ee",
          opacity: 0.9,
          textTransform: "uppercase",
        }}
      >
        Operator-Grade Thinking
      </div>

      {/* Status chip + sub-eyebrow */}
      <div style={{ position: "absolute", left: 72, top: 118, display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px 4px 10px",
            borderRadius: 999,
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.4)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
          <span style={{ ...mono, fontSize: 10, color: "#10b981", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          M/W/F NEWSLETTER · LEVEL9OS
        </span>
      </div>

      {/* Wordmark — full palette gradient, matches the Substack banner */}
      <svg width="700" height="168" viewBox="0 0 700 168" style={{ position: "absolute", left: 60, top: 160 }}>
        <defs>
          <linearGradient id="slWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="20%" stopColor="#22d3ee" />
            <stop offset="40%" stopColor="#a78bfa" />
            <stop offset="60%" stopColor="#f472b6" />
            <stop offset="80%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <text x="12" y="128" style={{ ...sans, fontWeight: 900, fontSize: 112, letterSpacing: "-0.04em", fill: "url(#slWord)" }}>
          Stay Level.
        </text>
      </svg>

      {/* Copy block */}
      <div style={{ position: "absolute", left: 72, top: 340, width: 600, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 24, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 22, letterSpacing: "-0.01em" }}>
          On the shifts. The scars. The forward.
        </div>
        <div style={{ fontWeight: 600, fontSize: 22, lineHeight: 1.35, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          Operator-grade thinking, three lenses, M/W/F.
        </div>
      </div>

      {/* Bottom-left: layer + domain */}
      <div style={{ position: "absolute", left: 72, bottom: 52, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Operator · Newsletter
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, ...sans, fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.substack.com
      </div>

      {/* Level9 co-sign bottom-right */}
      <div style={{ position: "absolute", right: 40, bottom: 30, display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "#0d0d18",
            border: "1px solid rgba(167,139,250,0.6)",
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sans,
            fontWeight: 900,
            fontSize: 22,
            color: "white",
            transform: "rotate(-14deg)",
            letterSpacing: "-0.04em",
          }}
        >
          9
        </div>
        <div>
          <div style={{ ...sans, fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.68)" }}>
            Level9 OS
          </div>
          <div style={{ ...mono, fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.16em" }}>
            PUBLICATION
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slBubble {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-14px); }
          50%      { transform: translateX(0); }
          75%      { transform: translateX(10px); }
        }
        @keyframes slLevelTilt {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(-0.6deg); }
          75%      { transform: rotate(0.5deg); }
        }
      `}</style>
    </div>
  );
}

export default StayLevelTile;
