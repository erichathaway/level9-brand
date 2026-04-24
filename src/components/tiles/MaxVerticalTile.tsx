"use client";
/**
 * MAX vertical tile (1080x1920).
 *
 * Portrait companion. Waveform across top, four ask/response pairs cycle
 * below on a 16-second shared loop so short-form reel capture rarely sees
 * the same pair twice.
 *
 * Pair cycle (4s per pair, 16s loop total):
 *   0-4s  Pair 1 · Pod status
 *   4-8s  Pair 2 · Agent activity
 *   8-12s Pair 3 · ECI trend
 *   12-16s Pair 4 · Governance status
 *
 * HARD RULE: no invented metrics. Responses use visual bars, check marks,
 * trend arrows, and status words. No $1,284, no percentages, no counts.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

const bars = Array.from({ length: 40 }, (_, i) => ({
  x: i * 24,
  base: 28 + Math.abs(Math.sin(i * 1.37)) * 110,
  delay: i * 0.04,
}));

export function MaxVerticalTile() {
  const product = getProduct("max")!;
  const accent = "#f9a8d4";

  return (
    <VerticalTileFrame
      product={product}
      metric="PLAIN ENGLISH · STRUCTURED OUTPUT"
      gradient={{ from: "#f9a8d4", to: "#db2777" }}
      accent={accent}
      domain="level9os.com/products"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="maxVWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>

          {/* Waveform bars across the top. Continuous 2s rhythm. */}
          <g transform="translate(60 540)" fill="url(#maxVWave)">
            {bars.map((b, i) => (
              <rect
                key={i}
                x={b.x}
                width={14}
                rx={7}
                style={{
                  animation: `maxVBar 2s ${b.delay.toFixed(2)}s ease-in-out infinite`,
                  transformOrigin: `${b.x + 7}px 80px`,
                  // @ts-expect-error CSS custom property
                  "--base": `${b.base}`,
                }}
              />
            ))}
          </g>

          {/* Ask + response pairs. Each pair is a <g> with its own
              visibility window inside the shared 16s loop. Negative
              animation-delay shifts the cycle per pair. */}

          {/* PAIR 1 · 0-4s · POD STATUS */}
          <g style={{ animation: "maxVPairShow 16s 0s linear infinite" }}>
            <VAskBubble text="Which pods are burning budget this week?" />
            <VArrow />
            <VPanel header="STRUCTURED · POD STATUS">
              <text x={30}  y={92} fontSize={22} fill="rgba(255,255,255,0.78)">pod</text>
              <text x={420} y={92} fontSize={22} fill="rgba(255,255,255,0.78)">state</text>
              <text x={30} y={142} fontSize={20} fill="rgba(255,255,255,0.68)">LinkupOS</text>
              <rect x={420} y={126} width={320} height={12} rx={6} fill="rgba(255,255,255,0.08)" />
              <rect x={420} y={126} width={216} height={12} rx={6} fill="#ec4899" />
              <circle cx={780} cy={132} r={7} fill="#10b981" />
              <text x={30} y={190} fontSize={20} fill="rgba(255,255,255,0.68)">ABM Engine</text>
              <rect x={420} y={174} width={320} height={12} rx={6} fill="rgba(255,255,255,0.08)" />
              <rect x={420} y={174} width={132} height={12} rx={6} fill="#ec4899" />
              <circle cx={780} cy={180} r={7} fill="#10b981" />
            </VPanel>
          </g>

          {/* PAIR 2 · 4-8s · AGENT ACTIVITY */}
          <g style={{ animation: "maxVPairShow 16s -12s linear infinite" }}>
            <VAskBubble text="What did Agent 20 ship yesterday?" />
            <VArrow />
            <VPanel header="STRUCTURED · AGENT 20 ACTIVITY">
              <text x={30}  y={100} fontSize={22} fill="rgba(255,255,255,0.8)">dispatch received</text>
              <text x={640} y={100} fontSize={24} fill="#10b981">G1 ✓</text>
              <text x={30}  y={150} fontSize={22} fill="rgba(255,255,255,0.8)">implementation complete</text>
              <text x={640} y={150} fontSize={24} fill="#10b981">G2 ✓</text>
              <text x={30}  y={200} fontSize={22} fill="rgba(255,255,255,0.8)">ship</text>
              <text x={640} y={200} fontSize={24} fill="#10b981">G3 ✓</text>
            </VPanel>
          </g>

          {/* PAIR 3 · 8-12s · ECI TREND */}
          <g style={{ animation: "maxVPairShow 16s -8s linear infinite" }}>
            <VAskBubble text="How is ECI trending across pillars?" />
            <VArrow />
            <VPanel header="STRUCTURED · ECI TREND">
              <text x={30}  y={96}  fontSize={20} fill="rgba(255,255,255,0.8)" letterSpacing="2">ALIGNMENT</text>
              <text x={640} y={96}  fontSize={26} fill="#10b981">↑</text>
              <text x={30}  y={132} fontSize={20} fill="rgba(255,255,255,0.8)" letterSpacing="2">PEOPLE</text>
              <text x={640} y={132} fontSize={26} fill="rgba(255,255,255,0.55)">→</text>
              <text x={30}  y={168} fontSize={20} fill="rgba(255,255,255,0.8)" letterSpacing="2">PROCESS</text>
              <text x={640} y={168} fontSize={26} fill="#10b981">↑</text>
              <text x={30}  y={204} fontSize={20} fill="rgba(255,255,255,0.8)" letterSpacing="2">LEADERSHIP</text>
              <text x={640} y={204} fontSize={26} fill="#10b981">↑</text>
            </VPanel>
          </g>

          {/* PAIR 4 · 12-16s · GOVERNANCE STATUS */}
          <g style={{ animation: "maxVPairShow 16s -4s linear infinite" }}>
            <VAskBubble text="Any governance exceptions to flag?" />
            <VArrow />
            <VPanel header="STRUCTURED · GOVERNANCE STATUS">
              <text x={30}  y={100} fontSize={22} fill="rgba(255,255,255,0.8)">G1 · PLAN</text>
              <text x={640} y={100} fontSize={22} fill="#10b981">clear</text>
              <text x={30}  y={150} fontSize={22} fill="rgba(255,255,255,0.8)">G2 · MID</text>
              <text x={640} y={150} fontSize={22} fill="#fbbf24">revise queued</text>
              <text x={30}  y={200} fontSize={22} fill="rgba(255,255,255,0.8)">G3 · FINAL</text>
              <text x={640} y={200} fontSize={22} fill="#10b981">clear</text>
            </VPanel>
          </g>

          <style>{`
            @keyframes maxVBar {
              0%, 100% { height: 28px; y: 66px; opacity: 0.35; }
              50%      { height: calc(var(--base) * 1px); y: calc(80px - var(--base) / 2 * 1px); opacity: 0.9; }
            }
            @keyframes maxVPairShow {
              0%, 100% { opacity: 0; transform: translateY(10px); }
              3%, 22%  { opacity: 1; transform: translateY(0);    }
              25%      { opacity: 0; transform: translateY(-10px); }
            }
          `}</style>
        </svg>
      }
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   Sub-components shared across the 4 pairs.
   ═════════════════════════════════════════════════════════════════════ */

function VAskBubble({ text }: { text: string }) {
  return (
    <g transform="translate(90 740)">
      <rect
        width={900}
        height={96}
        rx={48}
        fill="rgba(236,72,153,0.12)"
        stroke="rgba(236,72,153,0.5)"
        strokeWidth={2}
      />
      <text
        x={44}
        y={60}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={500}
        fontSize={30}
        fill="rgba(255,255,255,0.92)"
      >
        &quot;{text}&quot;
      </text>
    </g>
  );
}

function VArrow() {
  return (
    <g
      transform="translate(520 890)"
      stroke="#ec4899"
      strokeWidth={3}
      fill="none"
    >
      <line x1={0} y1={0} x2={0} y2={72} />
      <polygon points="0,72 -14,48 14,48" fill="#ec4899" stroke="none" />
    </g>
  );
}

function VPanel({ header, children }: { header: string; children: React.ReactNode }) {
  return (
    <g transform="translate(90 1000)" fontFamily='"SF Mono", Menlo, monospace'>
      <rect
        width={900}
        height={260}
        rx={20}
        fill="#0d0d18"
        stroke="rgba(236,72,153,0.5)"
        strokeWidth={2}
      />
      <text
        x={30}
        y={42}
        fontSize={16}
        fill="rgba(236,72,153,0.85)"
        letterSpacing="3.5"
      >
        {header}
      </text>
      {children}
    </g>
  );
}

export default MaxVerticalTile;
