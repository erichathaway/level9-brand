"use client";
/**
 * LucidORG vertical tile (1080x1920).
 *
 * Portrait adaptation: oscilloscope waveform scans left to right across the
 * full 1080 width. 4 pillars shown as stacked horizontal bands (one above the
 * wave, three below as a faint stack to evoke the ECI pillar structure).
 * Intervention markers fade in as the scan passes each spike. 5s loop.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

export function LucidorgVerticalTile() {
  const product = getProduct("lucidorg")!;
  const accent = "#67e8f9";

  // Hero vertical band: 480..1280. We put the scope at 600..1180 (580 tall).
  // Scan spans x=60..1020. Baseline at y=880.
  const PILLAR_LABELS = [
    { label: "PILLAR 1 · ALIGNMENT",  y: 520 },
    { label: "PILLAR 2 · PEOPLE",     y: 700 },
    { label: "PILLAR 3 · PROCESS",    y: 1000 },
    { label: "PILLAR 4 · LEADERSHIP", y: 1170 },
  ];

  return (
    <VerticalTileFrame
      product={product}
      metric="4 PILLARS · 37 LEVERS"
      gradient={{ from: "#67e8f9", to: "#2563eb" }}
      accent={accent}
      domain="lucidorg.com"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="lucVWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <clipPath id="lucVScan">
              <rect x="60" y="600" width="960" height="580">
                <animate
                  attributeName="width"
                  values="0;960;960"
                  keyTimes="0;0.7;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </rect>
            </clipPath>
          </defs>

          {/* 4 pillar horizontal bands + labels (stacked backdrop) */}
          {PILLAR_LABELS.map((p, i) => (
            <g key={i}>
              <line
                x1={60}
                y1={p.y}
                x2={1020}
                y2={p.y}
                stroke="rgba(6,182,212,0.22)"
                strokeWidth={1}
                strokeDasharray="2 8"
              />
              <text
                x={60}
                y={p.y - 14}
                fontFamily='"SF Mono", Menlo, monospace'
                fontSize={14}
                fill="rgba(103,232,249,0.65)"
                letterSpacing="3"
              >
                {p.label}
              </text>
            </g>
          ))}

          {/* Scope gridlines */}
          <g stroke="rgba(6,182,212,0.1)" strokeWidth={1}>
            {[640, 760, 880, 1000, 1120].map((y) => (
              <line key={y} x1={60} y1={y} x2={1020} y2={y} />
            ))}
            {[180, 300, 420, 540, 660, 780, 900].map((x) => (
              <line key={x} x1={x} y1={620} x2={x} y2={1160} />
            ))}
          </g>

          {/* Baseline */}
          <line
            x1={60}
            y1={880}
            x2={1020}
            y2={880}
            stroke="rgba(6,182,212,0.35)"
            strokeWidth={1.5}
            strokeDasharray="4 8"
          />

          {/* Waveform. wider scale for portrait. Spikes at LEVER 14 and LEVER 29. */}
          <g clipPath="url(#lucVScan)">
            <path
              d="M 60,880 L 100,880 L 130,864 L 160,892 L 200,874 L 240,884
                 L 280,872 L 310,878
                 L 340,680 L 370,880
                 L 410,884 L 450,874 L 490,890 L 540,878 L 580,882 L 620,874
                 L 660,1080 L 690,880
                 L 730,886 L 760,876 L 800,886 L 850,878 L 900,882 L 950,880 L 1020,880"
              fill="none"
              stroke="url(#lucVWave)"
              strokeWidth={3.4}
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 6px #06b6d4)" }}
            />
          </g>

          {/* Scan line. thicker for portrait */}
          <line
            x1={60}
            y1={620}
            x2={60}
            y2={1160}
            stroke="#67e8f9"
            strokeWidth={2.5}
            opacity={0.9}
            style={{
              animation: "lucVScanLine 5s linear infinite",
            }}
          />

          {/* Intervention markers */}
          <g style={{ animation: "lucVMarker1 5s infinite" }}>
            <circle cx={340} cy={680} r={18} fill="#060610" stroke="#06b6d4" strokeWidth={3} />
            <circle cx={340} cy={680} r={5} fill="#06b6d4" />
            <text x={370} y={670} fontFamily='"SF Mono", Menlo, monospace' fontSize={16} fill="#67e8f9" letterSpacing="2.5">
              LEVER 14
            </text>
            <text x={370} y={690} fontFamily='"SF Mono", Menlo, monospace' fontSize={16} fill="rgba(255,255,255,0.55)" letterSpacing="2.5">
              HANDOFF FRICTION
            </text>
          </g>
          <g style={{ animation: "lucVMarker2 5s infinite" }}>
            <circle cx={660} cy={1080} r={18} fill="#060610" stroke="#06b6d4" strokeWidth={3} />
            <circle cx={660} cy={1080} r={5} fill="#06b6d4" />
            <text x={632} y={1062} textAnchor="end" fontFamily='"SF Mono", Menlo, monospace' fontSize={16} fill="#67e8f9" letterSpacing="2.5">
              LEVER 29
            </text>
            <text x={632} y={1082} textAnchor="end" fontFamily='"SF Mono", Menlo, monospace' fontSize={16} fill="rgba(255,255,255,0.55)" letterSpacing="2.5">
              DECISION LAG
            </text>
          </g>

          <text
            x={60}
            y={1220}
            fontFamily='"SF Mono", Menlo, monospace'
            fontSize={16}
            fill="rgba(6,182,212,0.65)"
            letterSpacing="3.5"
          >
            ECI · EXECUTION CAPABILITY INDEX · LIVE
          </text>

          <style>{`
            @keyframes lucVScanLine {
              0%   { transform: translateX(0);     opacity: 0;    }
              5%   { opacity: 0.9; }
              70%  { transform: translateX(960px); opacity: 0.9;  }
              72%  { transform: translateX(960px); opacity: 0;    }
              100% { transform: translateX(960px); opacity: 0;    }
            }
            @keyframes lucVMarker1 {
              0%, 25% { opacity: 0; transform: scale(0.8); transform-origin: 340px 680px; }
              35%     { opacity: 1; transform: scale(1);   transform-origin: 340px 680px; }
              100%    { opacity: 1; transform: scale(1);   transform-origin: 340px 680px; }
            }
            @keyframes lucVMarker2 {
              0%, 50% { opacity: 0; transform: scale(0.8); transform-origin: 660px 1080px; }
              60%     { opacity: 1; transform: scale(1);   transform-origin: 660px 1080px; }
              100%    { opacity: 1; transform: scale(1);   transform-origin: 660px 1080px; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default LucidorgVerticalTile;
