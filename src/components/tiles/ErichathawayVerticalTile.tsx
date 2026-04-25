"use client";
/**
 * Eric Hathaway personal-brand vertical tile (1080x1920).
 *
 * Portrait companion to ErichathawayTile. Isometric wireframe cube sits in
 * the center hero zone (480..1280) at larger scale. Numbers strip moves
 * into the bottom band. Cycling product names anchor below the cube.
 */
import type { CSSProperties } from "react";

const sans: CSSProperties = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};
const mono: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
};

const FACES = [
  { id: "stratos",    name: "StratOS",     color: "#8b5cf6" },
  { id: "commandos",  name: "CommandOS",   color: "#10b981" },
  { id: "outboundos", name: "OutboundOS",  color: "#f59e0b" },
  { id: "lucidorg",   name: "LucidORG",    color: "#06b6d4" },
  { id: "playbook",   name: "Playbook",    color: "#64748b" },
  { id: "max",        name: "MAX",         color: "#ec4899" },
];

const HERO_CX = 540;
const HERO_CY = 880;
const SIZE = 280;

const cos30 = Math.cos(Math.PI / 6);
const sin30 = 0.5;
const proj = (x: number, y: number, z: number): [number, number] => [
  (x - z) * cos30,
  -y + (x + z) * sin30,
];
const V = {
  ftr: proj( SIZE/2,  SIZE/2,  SIZE/2),
  ftl: proj(-SIZE/2,  SIZE/2,  SIZE/2),
  fbr: proj( SIZE/2, -SIZE/2,  SIZE/2),
  fbl: proj(-SIZE/2, -SIZE/2,  SIZE/2),
  btr: proj( SIZE/2,  SIZE/2, -SIZE/2),
  btl: proj(-SIZE/2,  SIZE/2, -SIZE/2),
  bbr: proj( SIZE/2, -SIZE/2, -SIZE/2),
  bbl: proj(-SIZE/2, -SIZE/2, -SIZE/2),
};
const facePts = (a: [number, number], b: [number, number], c: [number, number], d: [number, number]) =>
  `${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]} ${d[0]},${d[1]}`;

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

      {/* Hero metaphor: isometric wireframe cube */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="vehEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="vehCubeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform={`translate(${HERO_CX} ${HERO_CY})`}>
            <ellipse cx={0} cy={0} rx={460} ry={380} fill="url(#vehCubeGlow)" />
            <ellipse cx={0} cy={SIZE * 1.05} rx={250} ry={36} fill="#a78bfa" opacity={0.18} />

            <g style={{ animation: "ehCubeBob 8s ease-in-out infinite", transformOrigin: "0px 0px" }}>
              <polygon
                points={facePts(V.ftl, V.ftr, V.btr, V.btl)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#vehEdge)"
                strokeWidth={2.4}
                style={{ animation: "ehFaceTop 8s ease-in-out infinite" }}
              />
              <polygon
                points={facePts(V.ftl, V.ftr, V.fbr, V.fbl)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#vehEdge)"
                strokeWidth={2.4}
                style={{ animation: "ehFaceFront 8s ease-in-out infinite" }}
              />
              <polygon
                points={facePts(V.ftr, V.btr, V.bbr, V.fbr)}
                fill="#a78bfa"
                fillOpacity={0.06}
                stroke="url(#vehEdge)"
                strokeWidth={2.4}
                style={{ animation: "ehFaceRight 8s ease-in-out infinite" }}
              />

              <line x1={V.btl[0]} y1={V.btl[1]} x2={V.bbl[0]} y2={V.bbl[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1.4} strokeDasharray="4 6" />
              <line x1={V.bbl[0]} y1={V.bbl[1]} x2={V.fbl[0]} y2={V.fbl[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1.4} strokeDasharray="4 6" />
              <line x1={V.bbl[0]} y1={V.bbl[1]} x2={V.bbr[0]} y2={V.bbr[1]} stroke="rgba(167,139,250,0.35)" strokeWidth={1.4} strokeDasharray="4 6" />

              {[V.ftr, V.ftl, V.fbr, V.fbl, V.btr, V.btl, V.bbr].map((v, i) => (
                <circle key={i} cx={v[0]} cy={v[1]} r={6} fill="#a78bfa" />
              ))}

              <text
                x={(V.ftl[0] + V.fbr[0]) / 2}
                y={(V.ftl[1] + V.fbr[1]) / 2 + 22}
                textAnchor="middle"
                style={{
                  ...sans,
                  fontWeight: 900,
                  fontSize: 100,
                  fill: "rgba(255,255,255,0.9)",
                  letterSpacing: "-0.04em",
                }}
              >
                9
              </text>
            </g>

            {/* Cycling product names below the cube */}
            <g transform={`translate(0 ${SIZE + 130})`}>
              {FACES.map((f, i) => (
                <text
                  key={f.id}
                  x={0}
                  y={0}
                  textAnchor="middle"
                  style={{
                    ...mono,
                    fontWeight: 700,
                    fontSize: 30,
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
              50%      { transform: translateY(-10px); }
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
              0%, 5%    { opacity: 0; transform: translateY(8px); }
              10%, 16%  { opacity: 1; transform: translateY(0); }
              22%       { opacity: 0; transform: translateY(-6px); }
              100%      { opacity: 0; }
            }
          `}</style>
        </svg>
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
      <div style={{ position: "absolute", left: 72, bottom: 112, ...mono, fontSize: 16, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
        Personal Brand
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 68, ...sans, fontWeight: 600, fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
        erichathaway.com
      </div>

      <div style={{ position: "absolute", right: 60, bottom: 60, display: "flex", alignItems: "center", gap: 16, ...mono }}>
        {[
          { n: "20+", l: "YEARS",    c: "#a78bfa" },
          { n: "6+",  l: "PRODUCTS", c: "#10b981" },
          { n: "94",  l: "OFFICES",  c: "#06b6d4" },
          { n: "48",  l: "OFFICERS", c: "#f59e0b" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              padding: "14px 16px",
              borderRadius: 12,
              background: `${s.c}10`,
              border: `1px solid ${s.c}45`,
              minWidth: 110,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ ...sans, fontWeight: 900, fontSize: 36, letterSpacing: "-0.03em", color: s.c, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: `${s.c}cc`, marginTop: 6 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ErichathawayVerticalTile;
