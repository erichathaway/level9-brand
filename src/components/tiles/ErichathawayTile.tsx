"use client";
/**
 * Eric Hathaway personal-brand tile (1200x630).
 *
 * Metaphor: the architect behind the cube. The CANONICAL ForgeCube
 * (rotating 3D wireframe with 6 product faces) sits on the right; text
 * block + numbers strip on the left.
 *
 * Bespoke (does NOT use TileFrame) because Eric is a person, not a product.
 * Reuses the canonical ForgeCube component so this tile and the
 * /architect page share one cube — change the cube once, propagate
 * everywhere.
 */
import type { CSSProperties } from "react";
import ForgeCube, { type ForgeProduct } from "../architecture/ForgeCube";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

// Canonical 6-product roster for the cube faces. Mirrors FORGE_PRODUCTS in
// erichathaway-site/src/app/page.tsx so the tile cube and the home-page
// cube show the exact same six products. Inlined here to keep the brand
// package self-contained (no cross-package consumer-site imports).
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

export function ErichathawayTile() {
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
      {/* Radial glow behind cube */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 860,
          height: 720,
          background: "radial-gradient(circle at center, #8b5cf655 0%, #f59e0b18 40%, transparent 70%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero: canonical ForgeCube, sized to the right half. Popup disabled
          (no hover in a screen-recorded tile) and dust skipped (we want the
          live rotating state from frame 0). Wrapper is 540x540 centered on
          (930, 315) — the same hero anchor every product tile uses. */}
      <div
        style={{
          position: "absolute",
          left: 660,
          top: 45,
          width: 540,
          height: 540,
          pointerEvents: "none",
        }}
      >
        <ForgeCube products={FORGE_PRODUCTS} skipDust showPopup={false} />
      </div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", left: 72, top: 88, ...mono, fontSize: 11, letterSpacing: "0.5em", color: "#a78bfa", opacity: 0.9, textTransform: "uppercase" }}>
        AI Operating Architect
      </div>

      {/* Status chip */}
      <div style={{ position: "absolute", left: 72, top: 118, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px 4px 10px", borderRadius: 999, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
          <span style={{ ...mono, fontSize: 10, color: "#f59e0b", letterSpacing: "0.2em" }}>OPEN TO EXEC AI ROLES</span>
        </div>
        <span style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: "0.3em" }}>
          OPERATOR · ARCHITECT
        </span>
      </div>

      {/* Name wordmark */}
      <svg width="640" height="180" viewBox="0 0 640 180" style={{ position: "absolute", left: 60, top: 158 }}>
        <defs>
          <linearGradient id="ehName" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <text x="12" y="74" style={{ ...sans, fontWeight: 900, fontSize: 76, letterSpacing: "-0.04em", fill: "url(#ehName)" }}>
          Eric Hathaway.
        </text>
        <text x="12" y="132" style={{ ...sans, fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", fill: "rgba(255,255,255,0.65)" }}>
          Chief AI Officer @ Level9 OS.
        </text>
      </svg>

      {/* Copy block */}
      <div style={{ position: "absolute", left: 72, top: 372, width: 580, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginBottom: 18, letterSpacing: "-0.01em" }}>
          The architect behind the cube. Six AI products in production.
        </div>
        <div style={{ fontWeight: 600, fontSize: 20, lineHeight: 1.4, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          20+ years operating. 60+ countries. Now installing AI into the operating chassis.
        </div>
      </div>

      {/* Bottom-left: domain block + numbers strip stacked left side so it
          doesn't collide with the cube's right-side popup zone. */}
      <div style={{ position: "absolute", left: 72, bottom: 90, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Personal Brand · erichathaway.com
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, display: "flex", alignItems: "center", gap: 10, ...mono }}>
        {[
          { n: "20+", l: "YEARS",    c: "#a78bfa" },
          { n: "6+",  l: "PRODUCTS", c: "#10b981" },
          { n: "94",  l: "OFFICES",  c: "#06b6d4" },
          { n: "48",  l: "OFFICERS", c: "#f59e0b" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              background: `${s.c}10`,
              border: `1px solid ${s.c}45`,
              minWidth: 78,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ ...sans, fontWeight: 900, fontSize: 22, letterSpacing: "-0.03em", color: s.c, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 8, letterSpacing: "0.22em", color: `${s.c}cc`, marginTop: 4 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ErichathawayTile;
