"use client";
/**
 * BigE Sessions tile (1200x630).
 *
 * Hero motion: 48-bar equalizer mirroring the EqHeader on
 * erichathaway.com/sessions. Same eqPulse1/2/3 keyframes, same amber
 * gradient bars, same triangular envelope (full height in the middle,
 * tapered to the edges).
 *
 * Bespoke (not via TileFrame) because BigE Sessions is Eric's personal
 * music project, not a Level9 product. Amber palette throughout.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const BARS = 48;
const ANIMS = ["bgePulse1", "bgePulse2", "bgePulse3"];

export function BigeSessionsTile() {
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
      {/* Radial glow behind eq */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 65%, rgba(245,158,11,0.30) 0%, rgba(249,115,22,0.10) 35%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Equalizer bar field — center-anchored, 320px tall, full canvas wide */}
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 290,
          height: 280,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {Array.from({ length: BARS }).map((_, i) => {
          const scale = 1 - (Math.abs(i - BARS / 2) / (BARS / 2)) * 0.7;
          return (
            <div
              key={i}
              style={{
                width: 8,
                borderRadius: 3,
                background:
                  "linear-gradient(180deg, rgba(252,211,77,1) 0%, rgba(245,158,11,1) 50%, rgba(245,158,11,0.30) 100%)",
                maxHeight: `${scale * 100}%`,
                animation: `${ANIMS[i % 3]} ${(1.8 + (i % 7) * 0.25).toFixed(2)}s ease-in-out ${(i * 0.04).toFixed(2)}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", left: 72, top: 88, ...mono, fontSize: 11, letterSpacing: "0.5em", color: "#f59e0b", opacity: 0.9, textTransform: "uppercase" }}>
        Eric Hathaway · Music
      </div>

      {/* Status chip */}
      <div style={{ position: "absolute", left: 72, top: 118, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px 4px 10px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 10, color: "#f59e0b", letterSpacing: "0.2em" }}>LISTENING ROOM</span>
        </div>
        <span style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          ALBUMS · SHUFFLE · BACKING TRACKS
        </span>
      </div>

      {/* Wordmark: big E sessions */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 168,
          ...sans,
          fontWeight: 900,
          fontSize: 132,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)" }}>big</span>
        <span
          style={{
            margin: "0 8px",
            background: "linear-gradient(to bottom right, #fcd34d, #f59e0b, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          E
        </span>
        <span style={{ color: "rgba(255,255,255,0.55)" }}>sessions</span>
      </div>

      {/* Bottom-left: domain block */}
      <div style={{ position: "absolute", left: 72, bottom: 52, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Listening Room · Personal Brand
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, ...sans, fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.com/sessions
      </div>

      {/* Bottom-right: tagline + Spotify cue */}
      <div
        style={{
          position: "absolute",
          right: 60,
          bottom: 28,
          textAlign: "right",
          ...sans,
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.85)" }}>
          The other half of the operator.
        </div>
        <div style={{ ...mono, fontSize: 10, letterSpacing: "0.25em", color: "#f59e0b", marginTop: 6 }}>
          STREAM · SHUFFLE · LISTEN
        </div>
      </div>

      <style>{`
        @keyframes bgePulse1 { 0%,100%{height:30%} 25%{height:90%} 50%{height:50%} 75%{height:75%} }
        @keyframes bgePulse2 { 0%,100%{height:25%} 30%{height:85%} 55%{height:45%} 80%{height:70%} }
        @keyframes bgePulse3 { 0%,100%{height:35%} 20%{height:95%} 45%{height:55%} 70%{height:80%} }
      `}</style>
    </div>
  );
}

export default BigeSessionsTile;
