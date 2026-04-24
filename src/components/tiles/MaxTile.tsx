"use client";
/**
 * MAX animated tile (landscape 1200x630).
 *
 * Waveform at the top represents MAX listening. Below, four ask/response
 * pairs cycle through a 16-second loop so a short-form reel capture rarely
 * sees the same pair twice. Each pair is visible ~3 seconds with a slide-in
 * and fade-out. Waveform pulses independently on a 2s rhythm.
 *
 * Pair cycle (4 sec per pair, 16 sec loop total):
 *   0-4s  Pair 1 · Pod status
 *   4-8s  Pair 2 · Agent activity
 *   8-12s Pair 3 · ECI trend
 *   12-16s Pair 4 · Governance status
 *
 * No invented metrics: responses render visual bars, check marks, trend
 * arrows, and status words. No dollar figures, no percentages, no counts.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

const bars = Array.from({ length: 30 }, (_, i) => ({
  x: i * 12,
  base: 16 + Math.abs(Math.sin(i * 1.37)) * 50,
  delay: i * 0.04,
}));

export function MaxTile() {
  const product = getProduct("max")!;
  const accent = "#f9a8d4";

  return (
    <TileFrame
      product={product}
      metric="PLAIN ENGLISH · STRUCTURED OUTPUT"
      gradient={{ from: "#f9a8d4", to: "#db2777" }}
      accent={accent}
      domain="level9os.com/products"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="maxWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>

          {/* Waveform bars — continuous rhythm throughout the loop */}
          <g transform="translate(700 100)" fill="url(#maxWave)">
            {bars.map((b, i) => (
              <rect
                key={i}
                x={b.x}
                width={6}
                rx={3}
                style={{
                  animation: `maxBar 2s ${b.delay.toFixed(2)}s ease-in-out infinite`,
                  transformOrigin: `${b.x + 3}px 40px`,
                  // @ts-expect-error CSS custom property
                  "--base": `${b.base}`,
                }}
              />
            ))}
          </g>

          {/* Ask + response pairs. Each pair is a <g> with its own
              visibility window inside the 16s shared loop. Negative
              animation-delay values shift the cycle start per pair. */}

          {/* PAIR 1 · 0-4s · POD STATUS */}
          <g style={{ animation: "maxPairShow 16s 0s linear infinite" }}>
            <AskBubble text="Which pods are burning budget this week?" />
            <Arrow />
            <ResponsePanel header="STRUCTURED · POD STATUS">
              <text x={14} y={46} fontSize={12} fill="rgba(255,255,255,0.78)">pod</text>
              <text x={180} y={46} fontSize={12} fill="rgba(255,255,255,0.78)">state</text>
              <text x={14} y={68} fontSize={11} fill="rgba(255,255,255,0.6)">LinkupOS</text>
              <rect x={180} y={60} width={140} height={6} rx={3} fill="rgba(255,255,255,0.08)" />
              <rect x={180} y={60} width={96} height={6} rx={3} fill="#ec4899" />
              <circle cx={335} cy={63} r={3} fill="#10b981" />
              <text x={14} y={86} fontSize={11} fill="rgba(255,255,255,0.6)">ABM Engine</text>
              <rect x={180} y={78} width={140} height={6} rx={3} fill="rgba(255,255,255,0.08)" />
              <rect x={180} y={78} width={58} height={6} rx={3} fill="#ec4899" />
              <circle cx={335} cy={81} r={3} fill="#10b981" />
            </ResponsePanel>
          </g>

          {/* PAIR 2 · 4-8s · AGENT ACTIVITY */}
          <g style={{ animation: "maxPairShow 16s -12s linear infinite" }}>
            <AskBubble text="What did Agent 20 ship yesterday?" />
            <Arrow />
            <ResponsePanel header="STRUCTURED · AGENT 20 ACTIVITY">
              <text x={14} y={46} fontSize={11} fill="rgba(255,255,255,0.78)">dispatch received</text>
              <text x={260} y={46} fontSize={11} fill="#10b981">G1 ✓</text>
              <text x={14} y={66} fontSize={11} fill="rgba(255,255,255,0.78)">implementation complete</text>
              <text x={260} y={66} fontSize={11} fill="#10b981">G2 ✓</text>
              <text x={14} y={86} fontSize={11} fill="rgba(255,255,255,0.78)">ship</text>
              <text x={260} y={86} fontSize={11} fill="#10b981">G3 ✓</text>
            </ResponsePanel>
          </g>

          {/* PAIR 3 · 8-12s · ECI TREND */}
          <g style={{ animation: "maxPairShow 16s -8s linear infinite" }}>
            <AskBubble text="How is ECI trending across pillars?" />
            <Arrow />
            <ResponsePanel header="STRUCTURED · ECI TREND">
              <text x={14} y={46} fontSize={10} fill="rgba(255,255,255,0.78)" letterSpacing="1.5">ALIGNMENT</text>
              <text x={260} y={46} fontSize={12} fill="#10b981">↑</text>
              <text x={14} y={62} fontSize={10} fill="rgba(255,255,255,0.78)" letterSpacing="1.5">PEOPLE</text>
              <text x={260} y={62} fontSize={12} fill="rgba(255,255,255,0.55)">→</text>
              <text x={14} y={78} fontSize={10} fill="rgba(255,255,255,0.78)" letterSpacing="1.5">PROCESS</text>
              <text x={260} y={78} fontSize={12} fill="#10b981">↑</text>
              <text x={14} y={94} fontSize={10} fill="rgba(255,255,255,0.78)" letterSpacing="1.5">LEADERSHIP</text>
              <text x={260} y={94} fontSize={12} fill="#10b981">↑</text>
            </ResponsePanel>
          </g>

          {/* PAIR 4 · 12-16s · GOVERNANCE STATUS */}
          <g style={{ animation: "maxPairShow 16s -4s linear infinite" }}>
            <AskBubble text="Any governance exceptions to flag?" />
            <Arrow />
            <ResponsePanel header="STRUCTURED · GOVERNANCE STATUS">
              <text x={14} y={46} fontSize={11} fill="rgba(255,255,255,0.78)">G1 · PLAN</text>
              <text x={260} y={46} fontSize={11} fill="#10b981">clear</text>
              <text x={14} y={66} fontSize={11} fill="rgba(255,255,255,0.78)">G2 · MID</text>
              <text x={260} y={66} fontSize={11} fill="#fbbf24">revise queued</text>
              <text x={14} y={86} fontSize={11} fill="rgba(255,255,255,0.78)">G3 · FINAL</text>
              <text x={260} y={86} fontSize={11} fill="#10b981">clear</text>
            </ResponsePanel>
          </g>

          <style>{`
            @keyframes maxBar {
              0%, 100% { height: 12px; y: 34px; opacity: 0.35; }
              50%      { height: calc(var(--base) * 1px); y: calc(40px - var(--base) / 2 * 1px); opacity: 0.9; }
            }
            @keyframes maxPairShow {
              0%, 100% { opacity: 0; transform: translateY(6px); }
              3%, 22%  { opacity: 1; transform: translateY(0);   }
              25%      { opacity: 0; transform: translateY(-6px); }
            }
          `}</style>
        </svg>
      }
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   Sub-components. Each pair reuses the same bubble + arrow + panel frame,
   only the content varies.
   ═════════════════════════════════════════════════════════════════════ */

function AskBubble({ text }: { text: string }) {
  return (
    <g transform="translate(720 230)">
      <rect
        width={330}
        height={44}
        rx={22}
        fill="rgba(236,72,153,0.12)"
        stroke="rgba(236,72,153,0.5)"
        strokeWidth={1}
      />
      <text
        x={22}
        y={28}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={500}
        fontSize={14}
        fill="rgba(255,255,255,0.9)"
      >
        &quot;{text}&quot;
      </text>
    </g>
  );
}

function Arrow() {
  return (
    <g
      transform="translate(740 295)"
      stroke="#ec4899"
      strokeWidth={1.5}
      fill="none"
    >
      <line x1={40} y1={0} x2={40} y2={28} />
      <polygon points="40,28 33,16 47,16" fill="#ec4899" />
    </g>
  );
}

function ResponsePanel({ header, children }: { header: string; children: React.ReactNode }) {
  return (
    <g transform="translate(720 330)" fontFamily='"SF Mono", Menlo, monospace'>
      <rect
        width={420}
        height={108}
        rx={10}
        fill="#0d0d18"
        stroke="rgba(236,72,153,0.5)"
        strokeWidth={1}
      />
      <text
        x={14}
        y={20}
        fontSize={9}
        fill="rgba(236,72,153,0.85)"
        letterSpacing="2"
      >
        {header}
      </text>
      {children}
    </g>
  );
}

export default MaxTile;
