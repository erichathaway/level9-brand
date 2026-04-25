"use client";
/**
 * Eric Hathaway personal-brand tile (1200x630).
 *
 * Metaphor: the architect behind the cube. An isometric wireframe cube
 * rotates slowly, faces lighting up sequentially as 6 product names cycle
 * through. Tells the story: he is the architect of all of this.
 *
 * Bespoke (does NOT use TileFrame) because Eric is a person, not a product.
 * Visual rhythm matches TileFrame (text block left, hero right) but chrome
 * is custom: numbers strip in the bottom band, no product layer co-sign.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

// Cube faces: each is a quad in the isometric projection.
// 6 faces map to 6 products. Order: front, right, top, back, left, bottom.
const FACES = [
  { id: "stratos",    name: "StratOS",     color: "#8b5cf6" },
  { id: "commandos",  name: "CommandOS",   color: "#10b981" },
  { id: "outboundos", name: "OutboundOS",  color: "#f59e0b" },
  { id: "lucidorg",   name: "LucidORG",    color: "#06b6d4" },
  { id: "playbook",   name: "Playbook",    color: "#64748b" },
  { id: "max",        name: "MAX",         color: "#ec4899" },
];

const HERO_CX = 930;
const HERO_CY = 320;
const SIZE = 150;

// Isometric cube vertices. Standard 30-degree iso projection.
// All 8 corners of the cube relative to (0,0). +x=right, +y=down.
const cos30 = Math.cos(Math.PI / 6); // ≈ 0.866
const sin30 = 0.5;
const proj = (x: number, y: number, z: number): [number, number] => [
  (x - z) * cos30,
  -y + (x + z) * sin30,
];
const V = {
  // bottom: y = -SIZE/2; top: y = SIZE/2 (note y is flipped at projection)
  // We'll use y > 0 = up.
  ftr: proj( SIZE/2,  SIZE/2,  SIZE/2), // front-top-right
  ftl: proj(-SIZE/2,  SIZE/2,  SIZE/2),
  fbr: proj( SIZE/2, -SIZE/2,  SIZE/2),
  fbl: proj(-SIZE/2, -SIZE/2,  SIZE/2),
  btr: proj( SIZE/2,  SIZE/2, -SIZE/2), // back-top-right
  btl: proj(-SIZE/2,  SIZE/2, -SIZE/2),
  bbr: proj( SIZE/2, -SIZE/2, -SIZE/2),
  bbl: proj(-SIZE/2, -SIZE/2, -SIZE/2),
};

// Three visible faces in iso view: top, front, right
const facePts = (a: [number, number], b: [number, number], c: [number, number], d: [number, number]) =>
  `${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]} ${d[0]},${d[1]}`;

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

      {/* Hero animated metaphor: isometric wireframe cube */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="ehEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="ehCubeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            {/* Cube glow halo */}
            <ellipse cx={0} cy={0} rx={260} ry={210} fill="url(#ehCubeGlow)" />

            {/* Subtle floor reflection */}
            <ellipse cx={0} cy={SIZE * 1.05} rx={140} ry={20} fill="#a78bfa" opacity={0.18} />

            {/* The cube itself: 3 visible faces with cycling color highlight */}
            <g style={{ animation: "ehCubeBob 8s ease-in-out infinite", transformOrigin: "0px 0px" }}>
              {/* Top face */}
              <polygon
                points={facePts(V.ftl, V.ftr, V.btr, V.btl)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#ehEdge)"
                strokeWidth={1.6}
                style={{ animation: "ehFaceTop 8s ease-in-out infinite" }}
              />
              {/* Front face */}
              <polygon
                points={facePts(V.ftl, V.ftr, V.fbr, V.fbl)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#ehEdge)"
                strokeWidth={1.6}
                style={{ animation: "ehFaceFront 8s ease-in-out infinite" }}
              />
              {/* Right face */}
              <polygon
                points={facePts(V.ftr, V.btr, V.bbr, V.fbr)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#ehEdge)"
                strokeWidth={1.6}
                style={{ animation: "ehFaceRight 8s ease-in-out infinite" }}
              />

              {/* Hidden edges as dashed (back-left and bottom edges) */}
              <line x1={V.btl[0]} y1={V.btl[1]} x2={V.bbl[0]} y2={V.bbl[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1} strokeDasharray="3 4" />
              <line x1={V.bbl[0]} y1={V.bbl[1]} x2={V.fbl[0]} y2={V.fbl[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1} strokeDasharray="3 4" />
              <line x1={V.bbl[0]} y1={V.bbl[1]} x2={V.bbr[0]} y2={V.bbr[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1} strokeDasharray="3 4" />

              {/* Vertex dots */}
              {[V.ftr, V.ftl, V.fbr, V.fbl, V.btr, V.btl, V.bbr].map((v, i) => (
                <circle key={i} cx={v[0]} cy={v[1]} r={3.5} fill="#a78bfa" />
              ))}

              {/* Center "9" mark inside front face */}
              <text
                x={(V.ftl[0] + V.fbr[0]) / 2}
                y={(V.ftl[1] + V.fbr[1]) / 2 + 12}
                textAnchor="middle"
                style={{
                  ...sans,
                  fontWeight: 900,
                  fontSize: 56,
                  fill: "rgba(255,255,255,0.9)",
                  letterSpacing: "-0.04em",
                }}
              >
                9
              </text>
            </g>

            {/* Cycling product names below the cube (each appears 1.3s) */}
            <g transform={`translate(0 ${SIZE + 70})`}>
              {FACES.map((f, i) => (
                <text
                  key={f.id}
                  x={0}
                  y={0}
                  textAnchor="middle"
                  style={{
                    ...mono,
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "0.32em",
                    fill: f.color,
                    textTransform: "uppercase",
                    opacity: 0,
                    animation: `ehProductCycle 8s ${(i * 1.33).toFixed(2)}s ease-in-out infinite`,
                  }}
                >
                  {f.name}
                </text>
              ))}
            </g>
          </g>

          <style>{`
            @keyframes ehCubeBob {
              0%, 100% { transform: translateY(0); }
              50%      { transform: translateY(-6px); }
            }
            @keyframes ehFaceTop {
              0%, 12%   { fill: #a78bfa; fill-opacity: 0.06; }
              16%, 25%  { fill: #8b5cf6; fill-opacity: 0.22; }
              30%, 100% { fill: #a78bfa; fill-opacity: 0.06; }
            }
            @keyframes ehFaceFront {
              0%, 30%   { fill: #a78bfa; fill-opacity: 0.06; }
              35%, 55%  { fill: #f59e0b; fill-opacity: 0.22; }
              60%, 100% { fill: #a78bfa; fill-opacity: 0.06; }
            }
            @keyframes ehFaceRight {
              0%, 60%   { fill: #a78bfa; fill-opacity: 0.06; }
              65%, 85%  { fill: #06b6d4; fill-opacity: 0.22; }
              90%, 100% { fill: #a78bfa; fill-opacity: 0.06; }
            }
            @keyframes ehProductCycle {
              0%, 5%    { opacity: 0; transform: translateY(6px); }
              10%, 16%  { opacity: 1; transform: translateY(0); }
              22%       { opacity: 0; transform: translateY(-4px); }
              100%      { opacity: 0; }
            }
          `}</style>
        </svg>
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
      <div style={{ position: "absolute", left: 72, top: 372, width: 600, ...sans }}>
        <div style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginBottom: 18, letterSpacing: "-0.01em" }}>
          The architect behind the cube. Six AI products in production.
        </div>
        <div style={{ fontWeight: 600, fontSize: 20, lineHeight: 1.4, color: "#a78bfa", letterSpacing: "-0.01em" }}>
          20+ years operating. 60+ countries. Now installing AI into the operating chassis.
        </div>
      </div>

      {/* Bottom-left: domain */}
      <div style={{ position: "absolute", left: 72, bottom: 52, ...mono, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Personal Brand
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 28, ...sans, fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.com
      </div>

      {/* Bottom-right: 4 canonical numbers strip */}
      <div style={{ position: "absolute", right: 36, bottom: 28, display: "flex", alignItems: "center", gap: 14, ...mono }}>
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
