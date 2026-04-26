"use client";
/**
 * BigE Sessions vertical tile (1080x1920).
 *
 * Portrait companion to BigeSessionsTile. Eq bars span more of the
 * vertical axis (taller envelope), wordmark stacks vertically.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const BARS = 56;
const ANIMS = ["bgePulse1", "bgePulse2", "bgePulse3"];

export function BigeSessionsVerticalTile() {
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
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.32) 0%, rgba(249,115,22,0.10) 38%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Eq bars in the center hero zone */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 760,
          height: 480,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {Array.from({ length: BARS }).map((_, i) => {
          const scale = 1 - (Math.abs(i - BARS / 2) / (BARS / 2)) * 0.7;
          return (
            <div
              key={i}
              style={{
                width: 10,
                borderRadius: 4,
                background:
                  "linear-gradient(180deg, rgba(252,211,77,1) 0%, rgba(245,158,11,1) 50%, rgba(245,158,11,0.30) 100%)",
                maxHeight: `${scale * 100}%`,
                animation: `${ANIMS[i % 3]} ${(1.8 + (i % 7) * 0.25).toFixed(2)}s ease-in-out ${(i * 0.04).toFixed(2)}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Top band */}
      <div style={{ position: "absolute", left: 72, top: 96, ...mono, fontSize: 18, letterSpacing: "0.5em", color: "#f59e0b", opacity: 0.9, textTransform: "uppercase" }}>
        Eric Hathaway · Music
      </div>
      <div style={{ position: "absolute", left: 72, top: 142, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 16px 6px 14px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 10px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 14, color: "#f59e0b", letterSpacing: "0.2em" }}>LISTENING ROOM</span>
        </div>
        <span style={{ ...mono, fontSize: 14, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          ALBUMS · SHUFFLE
        </span>
      </div>

      {/* Wordmark stacked: "bigE" on top (joined, no space), "sessions" below.
          Per Eric: merging the E with "big" so the wordmark reads as a 2-line
          stack instead of 3, which solves the previous vertical overlap of
          the standalone E line with the eq bars below. */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 280,
          ...sans,
          fontWeight: 900,
          fontSize: 220,
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
        }}
      >
        <div>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>big</span>
          <span
            style={{
              background: "linear-gradient(to bottom right, #fcd34d, #f59e0b, #ea580c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            E
          </span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)" }}>sessions</div>
      </div>

      {/* Tagline below eq bars */}
      <div
        style={{
          position: "absolute",
          left: 72,
          right: 72,
          top: 1320,
          ...sans,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 38, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.85)", lineHeight: 1.25 }}>
          The other half of the operator.
        </div>
        <div style={{ ...mono, fontSize: 16, letterSpacing: "0.32em", color: "#f59e0b", marginTop: 18 }}>
          STREAM · SHUFFLE · LISTEN
        </div>
      </div>

      {/* Bottom band */}
      <div style={{ position: "absolute", left: 72, bottom: 112, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Listening Room · Personal Brand
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 68, ...sans, fontWeight: 600, fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.com/sessions
      </div>

      <style>{`
        @keyframes bgePulse1 { 0%,100%{height:30%} 25%{height:90%} 50%{height:50%} 75%{height:75%} }
        @keyframes bgePulse2 { 0%,100%{height:25%} 30%{height:85%} 55%{height:45%} 80%{height:70%} }
        @keyframes bgePulse3 { 0%,100%{height:35%} 20%{height:95%} 45%{height:55%} 70%{height:80%} }
      `}</style>
    </div>
  );
}

export default BigeSessionsVerticalTile;
