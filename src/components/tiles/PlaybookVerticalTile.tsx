"use client";
/**
 * COO Playbook vertical tile (1080x1920).
 *
 * Portrait adaptation: three horizontal timeline bars stacked VERTICALLY with
 * much more breathing room between phases. Day 30 top, Day 90 mid, Day 180
 * bottom. each with a full-width progress bar, milestone circle, and phase
 * description. 5s loop.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

export function PlaybookVerticalTile() {
  const product = getProduct("playbook")!;
  const accent = "#cbd5e1";

  // Each phase spans 200 vertical pixels. Bars are 860 wide, starting at x=110.
  const BAR_X = 110;
  const BAR_W = 860;

  return (
    <VerticalTileFrame
      product={product}
      metric="30 · 90 · 180"
      gradient={{ from: "#cbd5e1", to: "#475569" }}
      accent={accent}
      domain="thenewcoo.com"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="pbVBar30" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="pbVBar90" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="pbVBar180" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <g fontFamily="Inter, system-ui, sans-serif">
            {/* Phase 1. Day 30 (hero zone top, around y=560) */}
            <g>
              <text x={BAR_X} y={540} fontFamily='"SF Mono", Menlo, monospace' fontSize={20} fill="rgba(255,255,255,0.55)" letterSpacing="4">DAY 30</text>
              <text x={BAR_X} y={580} fontWeight={700} fontSize={32} fill="rgba(255,255,255,0.9)">Diagnose</text>
              <text x={BAR_X} y={618} fontWeight={500} fontSize={22} fill="rgba(255,255,255,0.55)">ECI baseline · pressure-point map</text>
              <rect x={BAR_X} y={640} width={BAR_W} height={16} rx={8} fill="rgba(148,163,184,0.12)" />
              <rect x={BAR_X} y={640} height={16} rx={8} fill="url(#pbVBar30)"
                style={{ animation: "pbVBar30Fill 5s infinite" }}
              />
              <circle cy={648} r={14} fill="#060610" stroke="#94a3b8" strokeWidth={3}
                style={{ animation: "pbVMark30 5s infinite" }}
              />
            </g>

            {/* Phase 2. Day 90 (hero zone middle, around y=820) */}
            <g>
              <text x={BAR_X} y={800} fontFamily='"SF Mono", Menlo, monospace' fontSize={20} fill="rgba(255,255,255,0.55)" letterSpacing="4">DAY 90</text>
              <text x={BAR_X} y={840} fontWeight={700} fontSize={32} fill="rgba(255,255,255,0.9)">Install</text>
              <text x={BAR_X} y={878} fontWeight={500} fontSize={22} fill="rgba(255,255,255,0.55)">Lean Ops · CxfO · governance loop</text>
              <rect x={BAR_X} y={900} width={BAR_W} height={16} rx={8} fill="rgba(148,163,184,0.12)" />
              <rect x={BAR_X} y={900} height={16} rx={8} fill="url(#pbVBar90)"
                style={{ animation: "pbVBar90Fill 5s infinite" }}
              />
              <circle cy={908} r={14} fill="#060610" stroke="#cbd5e1" strokeWidth={3}
                style={{ animation: "pbVMark90 5s infinite" }}
              />
            </g>

            {/* Phase 3. Day 180 (hero zone bottom, around y=1080) */}
            <g>
              <text x={BAR_X} y={1060} fontFamily='"SF Mono", Menlo, monospace' fontSize={20} fill="rgba(255,255,255,0.55)" letterSpacing="4">DAY 180</text>
              <text x={BAR_X} y={1100} fontWeight={700} fontSize={32} fill="rgba(255,255,255,0.9)">Compound</text>
              <text x={BAR_X} y={1138} fontWeight={500} fontSize={22} fill="rgba(255,255,255,0.55)">Alignment Cycle · continuous gains</text>
              <rect x={BAR_X} y={1160} width={BAR_W} height={16} rx={8} fill="rgba(148,163,184,0.12)" />
              <rect x={BAR_X} y={1160} height={16} rx={8} fill="url(#pbVBar180)"
                style={{ animation: "pbVBar180Fill 5s infinite" }}
              />
              <circle cy={1168} r={14} fill="#060610" stroke="#e2e8f0" strokeWidth={3}
                style={{ animation: "pbVMark180 5s infinite" }}
              />
            </g>

            {/* Framework badges */}
            <g fontFamily='"SF Mono", Menlo, monospace' fontSize={16} fill="rgba(255,255,255,0.5)" letterSpacing="3">
              <text x={BAR_X}       y={1240}>ECI</text>
              <text x={BAR_X + 140} y={1240}>CxfO</text>
              <text x={BAR_X + 290} y={1240}>LEAN OPS</text>
              <text x={BAR_X + 470} y={1240}>ALIGNMENT</text>
            </g>
          </g>

          <style>{`
            @keyframes pbVBar30Fill {
              0%   { width: 0;   }
              20%  { width: 172; }
              95%  { width: 172; }
              100% { width: 0;   }
            }
            @keyframes pbVBar90Fill {
              0%, 20%  { width: 0;   }
              45%      { width: 440; }
              95%      { width: 440; }
              100%     { width: 0;   }
            }
            @keyframes pbVBar180Fill {
              0%, 45%  { width: 0;   }
              75%      { width: 860; }
              95%      { width: 860; }
              100%     { width: 0;   }
            }
            @keyframes pbVMark30 {
              0%       { cx: 110; opacity: 0; }
              20%      { cx: 282; opacity: 1; }
              95%      { cx: 282; opacity: 1; }
              100%     { cx: 110; opacity: 0; }
            }
            @keyframes pbVMark90 {
              0%, 20%  { cx: 110; opacity: 0; }
              45%      { cx: 550; opacity: 1; }
              95%      { cx: 550; opacity: 1; }
              100%     { cx: 110; opacity: 0; }
            }
            @keyframes pbVMark180 {
              0%, 45%  { cx: 110; opacity: 0; }
              75%      { cx: 970; opacity: 1; }
              95%      { cx: 970; opacity: 1; }
              100%     { cx: 110; opacity: 0; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default PlaybookVerticalTile;
