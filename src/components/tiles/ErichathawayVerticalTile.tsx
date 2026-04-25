"use client";
/**
 * Eric Hathaway personal-brand vertical tile (1080x1920).
 *
 * Portrait companion to ErichathawayTile. The CANONICAL ForgeCube fills
 * the center hero zone (480..1280); chrome pieces (eyebrow, name, copy,
 * numbers strip) wrap around it. Same product-roster as ErichathawayTile.
 */
import type { CSSProperties } from "react";
import ForgeCube, { type ForgeProduct } from "../architecture/ForgeCube";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const FORGE_PRODUCTS: ForgeProduct[] = [
  { id: "stratos",    name: "StratOS",      short: "Decision OS",         color: "#8b5cf6", rgb: [139, 92, 246], icon: "S", side: "left",
    role: "10-person simulated exec room. 3 rounds. Kill criteria built in.",
    specs: ["10 workflows · 3 rounds / run", "$5.89 per run", "Governance-audited recommendations"],
    stack: ["n8n", "Supabase", "Claude Sonnet 4.6", "Next.js", "Vercel"] },
  { id: "commandos",  name: "CommandOS",    short: "Fleet Orchestration", color: "#10b981", rgb: [16, 185, 129], icon: "C", side: "right",
    role: "48 domain officers. 3 governance gates. Agents managing agents.",
    specs: ["48 officers · 8 categories", "G1 / G2 / G3 governance", "Multi-LLM routing"],
    stack: ["Claude", "GPT-4o", "Perplexity", "n8n NAS", "tmux"] },
  { id: "playbook",   name: "COO Playbook", short: "Methodology Product", color: "#94a3b8", rgb: [148, 163, 184], icon: "P", side: "left",
    role: "87K+ words. 24-week install. The operating layer beneath EOS and OKRs.",
    specs: ["4-part methodology", "ECI / CxfO / Lean Ops / AHI", "9 training courses bundled"],
    stack: ["Substack", "n8n", "ElevenLabs", "Notion"] },
  { id: "lucidorg",   name: "LucidORG",     short: "Digital Twin",        color: "#ec4899", rgb: [236, 72, 153], icon: "O", side: "left",
    role: "The nervous system. Measures AI vs human at every interaction point.",
    specs: ["4 pillars · 11 metrics · 37 levers", "ECI scoring 0-1000", "Real-time friction detection"],
    stack: ["Supabase", "TypeScript", "Recharts", "Next.js"] },
  { id: "outboundos", name: "OutboundOS",   short: "Outbound Umbrella",   color: "#f59e0b", rgb: [245, 158, 11], icon: "O", side: "right",
    role: "LinkupOS + ABM Engine + AutoCS. One voice, one governance trail.",
    specs: ["3 pods · one voice profile", "Multi-channel calibrated", "Replaces marketing + outbound + CS"],
    stack: ["Postgres triggers", "Apollo", "LinkedIn API", "Supabase"] },
  { id: "level9",     name: "Level9",       short: "Parent Company",      color: "#06b6d4", rgb: [6, 182, 212],  icon: "L", side: "right",
    role: "The product company. 6+ production AI systems for the operational layer.",
    specs: ["6+ products under one chassis", "Next.js 14 · Vercel edge", "20+ years operational pattern-recognition"],
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"] },
];

export function ErichathawayVerticalTile() {
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
          background: "radial-gradient(circle at center, #a78bfa4a 0%, #f59e0b14 42%, transparent 72%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero: canonical ForgeCube fills the center hero zone (480..1280).
          Wrapper is 900x800 centered horizontally, popup off, dust skipped. */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: 480,
          width: 900,
          height: 800,
          pointerEvents: "none",
        }}
      >
        <ForgeCube products={FORGE_PRODUCTS} skipDust showPopup={false} />
      </div>

      {/* Top band */}
      <div style={{ position: "absolute", left: 72, top: 96, ...mono, fontSize: 18, letterSpacing: "0.5em", color: "#a78bfa", opacity: 0.9, textTransform: "uppercase" }}>
        AI Operating Architect
      </div>
      <div style={{ position: "absolute", left: 72, top: 142, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 16px 6px 14px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 10px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 14, color: "#f59e0b", letterSpacing: "0.2em" }}>OPEN TO EXEC AI ROLES</span>
        </div>
        <span style={{ ...mono, fontSize: 14, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          OPERATOR · ARCHITECT
        </span>
      </div>

      {/* Name zone */}
      <svg width="960" height="280" viewBox="0 0 960 280" style={{ position: "absolute", left: 60, top: 240 }}>
        <defs>
          <linearGradient id="vehName" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <text x="12" y="120" style={{ ...sans, fontWeight: 900, fontSize: 124, letterSpacing: "-0.04em", fill: "url(#vehName)" }}>
          Eric Hathaway.
        </text>
        <text x="12" y="200" style={{ ...sans, fontWeight: 600, fontSize: 42, letterSpacing: "-0.01em", fill: "rgba(255,255,255,0.65)" }}>
          Chief AI Officer @ Level9 OS.
        </text>
      </svg>

      {/* Copy zone */}
      <div style={{ position: "absolute", left: 72, top: 1320, width: 936, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginBottom: 30, letterSpacing: "-0.01em" }}>
          The architect behind the cube. Six AI products in production.
        </div>
        <div style={{ fontWeight: 600, fontSize: 34, lineHeight: 1.35, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          20+ years operating. 60+ countries. Now installing AI into the chassis.
        </div>
      </div>

      {/* Bottom band: domain + numbers strip */}
      <div style={{ position: "absolute", left: 72, bottom: 168, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Personal Brand · erichathaway.com
      </div>

      <div style={{ position: "absolute", left: 72, right: 72, bottom: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, ...mono }}>
        {[
          { n: "20+", l: "YEARS",    c: "#a78bfa" },
          { n: "6+",  l: "PRODUCTS", c: "#10b981" },
          { n: "94",  l: "OFFICES",  c: "#06b6d4" },
          { n: "48",  l: "OFFICERS", c: "#f59e0b" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              flex: 1,
              padding: "16px 18px",
              borderRadius: 14,
              background: `${s.c}10`,
              border: `1px solid ${s.c}45`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ ...sans, fontWeight: 900, fontSize: 44, letterSpacing: "-0.03em", color: s.c, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 12, letterSpacing: "0.22em", color: `${s.c}cc`, marginTop: 8 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ErichathawayVerticalTile;
