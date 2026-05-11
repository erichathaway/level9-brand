"use client";
/**
 * StayLevelVerticalTile (1080x1920).
 *
 * Portrait companion to StayLevelTile. Same bubble-level hero metaphor,
 * scaled and positioned for vertical Reels / Shorts / TikTok.
 * Bubble drifts off-center then settles to true. M/W/F section markers
 * above the level pulse with staggered timing. Full Level9 palette.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

export function StayLevelVerticalTile() {
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
      {/* Multi-color radial glow centered on hero zone */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          top: 480,
          width: 1240,
          height: 1000,
          background:
            "radial-gradient(circle at center, rgba(167,139,250,0.32) 0%, rgba(244,114,182,0.16) 42%, transparent 72%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero: bubble level + section markers, centered */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="vslPalette" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="20%" stopColor="#22d3ee" />
              <stop offset="40%" stopColor="#a78bfa" />
              <stop offset="60%" stopColor="#f472b6" />
              <stop offset="80%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="vslGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
            <radialGradient id="vslBubbleGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
            </radialGradient>
          </defs>

          {/* Subtle horizon line behind level */}
          <line
            x1="60"
            y1="965"
            x2="1020"
            y2="965"
            stroke="url(#vslPalette)"
            strokeWidth="1.5"
            strokeOpacity="0.22"
          />

          {/* M / W / F section markers above level */}
          <g>
            <text x="380" y="800" textAnchor="middle" style={{ ...mono, fontSize: 18, letterSpacing: "0.3em" }} fill="rgba(139,92,246,0.92)">
              M
            </text>
            <circle cx="380" cy="830" r="12" fill="#8b5cf6">
              <animate attributeName="r" values="12;16;12" dur="2.4s" repeatCount="indefinite" />
            </circle>

            <text x="540" y="800" textAnchor="middle" style={{ ...mono, fontSize: 18, letterSpacing: "0.3em" }} fill="rgba(6,182,212,0.92)">
              W
            </text>
            <circle cx="540" cy="830" r="12" fill="#06b6d4">
              <animate attributeName="r" values="12;16;12" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            </circle>

            <text x="700" y="800" textAnchor="middle" style={{ ...mono, fontSize: 18, letterSpacing: "0.3em" }} fill="rgba(236,72,153,0.92)">
              F
            </text>
            <circle cx="700" cy="830" r="12" fill="#ec4899">
              <animate attributeName="r" values="12;16;12" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Bubble level body — subtle tilt + bubble wobble */}
          <g style={{ transformOrigin: "540px 965px", animation: "vslLevelTilt 8s ease-in-out infinite" }}>
            {/* Outer pill */}
            <rect
              x="120"
              y="900"
              width="840"
              height="130"
              rx="65"
              fill="#0d0d18"
              stroke="url(#vslPalette)"
              strokeWidth="4"
            />

            {/* Inner glass tube */}
            <rect
              x="170"
              y="942"
              width="740"
              height="46"
              rx="23"
              fill="url(#vslGlass)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.5"
            />

            {/* Center tick marks */}
            <line x1="510" y1="932" x2="510" y2="998" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" />
            <line x1="570" y1="932" x2="570" y2="998" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" />

            {/* Bubble — drifts off-center, returns to true */}
            <g style={{ animation: "vslBubble 5s ease-in-out infinite" }}>
              <circle cx="540" cy="965" r="17" fill="url(#vslBubbleGrad)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
            </g>
          </g>
        </svg>
      </div>

      {/* Top band: eyebrow */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 96,
          ...mono,
          fontSize: 18,
          letterSpacing: "0.5em",
          color: "#22d3ee",
          opacity: 0.9,
          textTransform: "uppercase",
        }}
      >
        Operator-Grade Thinking
      </div>
      <div style={{ position: "absolute", left: 72, top: 142, display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 16px 6px 14px",
            borderRadius: 999,
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.4)",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
          <span style={{ ...mono, fontSize: 14, color: "#10b981", letterSpacing: "0.2em" }}>LIVE</span>
        </div>
        <span style={{ ...mono, fontSize: 14, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          M/W/F NEWSLETTER · LEVEL9OS
        </span>
      </div>

      {/* Wordmark */}
      <svg width="1020" height="240" viewBox="0 0 1020 240" style={{ position: "absolute", left: 60, top: 240 }}>
        <defs>
          <linearGradient id="vslWord" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="20%" stopColor="#22d3ee" />
            <stop offset="40%" stopColor="#a78bfa" />
            <stop offset="60%" stopColor="#f472b6" />
            <stop offset="80%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <text x="12" y="190" style={{ ...sans, fontWeight: 900, fontSize: 200, letterSpacing: "-0.04em", fill: "url(#vslWord)" }}>
          Stay Level.
        </text>
      </svg>

      {/* Copy zone — below the hero level */}
      <div style={{ position: "absolute", left: 72, top: 1340, width: 936, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 30, letterSpacing: "-0.01em" }}>
          On the shifts. The scars. The forward.
        </div>
        <div style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.35, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          Operator-grade thinking, three lenses, M/W/F.
        </div>
      </div>

      {/* Bottom band: layer + domain */}
      <div style={{ position: "absolute", left: 72, bottom: 112, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Operator · Newsletter
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 68, ...sans, fontWeight: 600, fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.substack.com
      </div>

      {/* Level9 co-sign bottom-right */}
      <div style={{ position: "absolute", right: 64, bottom: 64, display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "#0d0d18",
            border: "1.5px solid rgba(167,139,250,0.6)",
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sans,
            fontWeight: 900,
            fontSize: 32,
            color: "white",
            transform: "rotate(-14deg)",
            letterSpacing: "-0.04em",
          }}
        >
          9
        </div>
        <div>
          <div style={{ ...sans, fontWeight: 700, fontSize: 18, color: "rgba(255,255,255,0.72)" }}>
            Level9 OS
          </div>
          <div style={{ ...mono, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em" }}>
            PUBLICATION
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vslBubble {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-26px); }
          50%      { transform: translateX(0); }
          75%      { transform: translateX(20px); }
        }
        @keyframes vslLevelTilt {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(-0.6deg); }
          75%      { transform: rotate(0.5deg); }
        }
      `}</style>
    </div>
  );
}

export default StayLevelVerticalTile;
