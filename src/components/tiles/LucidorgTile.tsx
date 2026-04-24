"use client";
/**
 * LucidORG animated tile.
 *
 * Metaphor: oscilloscope waveform scans left to right. Friction spikes appear
 * as the scan passes them, triggering intervention markers that fade in.
 * 5s loop.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

export function LucidorgTile() {
  const product = getProduct("lucidorg")!;
  const accent = "#67e8f9";

  return (
    <TileFrame
      product={product}
      metric="4 PILLARS · 37 LEVERS"
      gradient={{ from: "#67e8f9", to: "#2563eb" }}
      accent={accent}
      domain="lucidorg.com"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="lucWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <clipPath id="lucScan">
              <rect x="700" y="150" width="480" height="320">
                <animate
                  attributeName="width"
                  values="0;480;480"
                  keyTimes="0;0.7;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </rect>
            </clipPath>
          </defs>

          {/* Scope gridlines */}
          <g stroke="rgba(6,182,212,0.08)" strokeWidth={1}>
            {[200, 260, 315, 370, 430].map((y) => (
              <line key={y} x1={700} y1={y} x2={1180} y2={y} />
            ))}
            {[760, 820, 880, 940, 1000, 1060, 1120].map((x) => (
              <line key={x} x1={x} y1={180} x2={x} y2={450} />
            ))}
          </g>

          {/* Baseline */}
          <line
            x1={700}
            y1={315}
            x2={1180}
            y2={315}
            stroke="rgba(6,182,212,0.25)"
            strokeWidth={1}
            strokeDasharray="2 4"
          />

          {/* Waveform (full path, revealed by scan clip) */}
          <g clipPath="url(#lucScan)">
            <path
              d="M 700,315 L 720,315 L 730,308 L 740,322 L 755,312 L 770,318 L 785,310 L 800,315
                 L 820,215 L 830,315
                 L 850,318 L 870,312 L 890,320 L 910,310 L 930,318 L 950,312
                 L 975,418 L 985,315
                 L 1005,318 L 1025,310 L 1045,320 L 1070,312 L 1100,316 L 1130,314 L 1180,315"
              fill="none"
              stroke="url(#lucWave)"
              strokeWidth={2.4}
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 4px #06b6d4)" }}
            />
          </g>

          {/* Scan line */}
          <line
            x1={700}
            y1={160}
            x2={700}
            y2={450}
            stroke="#67e8f9"
            strokeWidth={1.5}
            opacity={0.85}
            style={{
              animation: "lucScanLine 5s linear infinite",
            }}
          />

          {/* Intervention markers — fade in as scan passes each spike */}
          <g style={{ animation: "lucMarker1 5s infinite" }}>
            <circle cx={825} cy={215} r={10} fill="#060610" stroke="#06b6d4" strokeWidth={2} />
            <circle cx={825} cy={215} r={3} fill="#06b6d4" />
            <text x={840} y={210} fontFamily='"SF Mono", Menlo, monospace' fontSize={9} fill="#67e8f9" letterSpacing="1.5">
              LEVER 14
            </text>
            <text x={840} y={222} fontFamily='"SF Mono", Menlo, monospace' fontSize={9} fill="rgba(255,255,255,0.5)" letterSpacing="1.5">
              HANDOFF FRICTION
            </text>
          </g>
          <g style={{ animation: "lucMarker2 5s infinite" }}>
            <circle cx={975} cy={418} r={10} fill="#060610" stroke="#06b6d4" strokeWidth={2} />
            <circle cx={975} cy={418} r={3} fill="#06b6d4" />
            <text x={960} y={405} textAnchor="end" fontFamily='"SF Mono", Menlo, monospace' fontSize={9} fill="#67e8f9" letterSpacing="1.5">
              LEVER 29
            </text>
            <text x={960} y={417} textAnchor="end" fontFamily='"SF Mono", Menlo, monospace' fontSize={9} fill="rgba(255,255,255,0.5)" letterSpacing="1.5">
              DECISION LAG
            </text>
          </g>

          <text
            x={710}
            y={474}
            fontFamily='"SF Mono", Menlo, monospace'
            fontSize={9}
            fill="rgba(6,182,212,0.65)"
            letterSpacing="2.5"
          >
            ECI · EXECUTION CAPABILITY INDEX · LIVE
          </text>

          <style>{`
            @keyframes lucScanLine {
              0%   { transform: translateX(0);    opacity: 0; }
              5%   { opacity: 0.85; }
              70%  { transform: translateX(480px); opacity: 0.85; }
              72%  { transform: translateX(480px); opacity: 0; }
              100% { transform: translateX(480px); opacity: 0; }
            }
            @keyframes lucMarker1 {
              0%, 25% { opacity: 0; transform: scale(0.8); transform-origin: 825px 215px; }
              35%     { opacity: 1; transform: scale(1);   transform-origin: 825px 215px; }
              100%    { opacity: 1; transform: scale(1);   transform-origin: 825px 215px; }
            }
            @keyframes lucMarker2 {
              0%, 50% { opacity: 0; transform: scale(0.8); transform-origin: 975px 418px; }
              60%     { opacity: 1; transform: scale(1);   transform-origin: 975px 418px; }
              100%    { opacity: 1; transform: scale(1);   transform-origin: 975px 418px; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default LucidorgTile;
