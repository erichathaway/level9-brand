"use client";
/**
 * CommandOS vertical tile (1080x1920).
 *
 * Portrait companion. Same rich dispatch-feed content as landscape: 10-line
 * project lifecycle with specific agent IDs and explicit gate decisions so
 * the feed reads as real orchestrator activity. Officer strip dropped for
 * breathing room before the copy block below.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { VerticalTileFrame } from "./VerticalTileFrame";

type FeedEvent = {
  actor: string;
  actorColor: "emerald" | "cyan" | "amber";
  text: string;
  end?: string;
};

const FEED_LINES: FeedEvent[] = [
  { actor: "DISPATCH", actorColor: "emerald", text: "ProjectAlpha",           end: "→ Agent 01" },
  { actor: "Agent 01", actorColor: "cyan",    text: "plan drafted",           end: "→ G1" },
  { actor: "GATE G1",  actorColor: "emerald", text: "decision: approve" },
  { actor: "Agent 20", actorColor: "cyan",    text: "implementation 47%..." },
  { actor: "Agent 20", actorColor: "cyan",    text: "complete",               end: "→ G2" },
  { actor: "GATE G2",  actorColor: "emerald", text: "decision: revise",       end: "· Agent 39 review" },
  { actor: "Agent 39", actorColor: "cyan",    text: "notes → Agent 20",       end: "revised ✓" },
  { actor: "HUMAN",    actorColor: "amber",   text: "approval requested",     end: "· Eric" },
  { actor: "HUMAN ✓",  actorColor: "amber",   text: "Eric approved" },
  { actor: "GATE G3",  actorColor: "emerald", text: "decision: SHIPPED",      end: "· ProjectAlpha" },
];

const ACTOR_COLOR = {
  emerald: "#6ee7b7",
  cyan:    "#67e8f9",
  amber:   "#fbbf24",
} as const;

export function CommandosVerticalTile() {
  const product = getProduct("commandos")!;
  const accent = "#6ee7b7";

  const officerDots: { col: number; row: number }[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      officerDots.push({ col: c, row: r });
    }
  }

  return (
    <VerticalTileFrame
      product={product}
      metric="48 OFFICERS · 3 GATES"
      gradient={{ from: "#6ee7b7", to: "#0d9488" }}
      accent={accent}
      domain="commandos.level9os.com"
      heroSlot={
        <svg
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="cmdVFeedFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#060610" stopOpacity="1" />
              <stop offset="10%" stopColor="#060610" stopOpacity="0" />
              <stop offset="90%" stopColor="#060610" stopOpacity="0" />
              <stop offset="100%" stopColor="#060610" stopOpacity="1" />
            </linearGradient>
            <clipPath id="cmdVFeedClip">
              <rect x={0} y={60} width={860} height={540} />
            </clipPath>
          </defs>

          {/* Console window: dispatch feed */}
          <g transform="translate(110 510)">
            <rect
              x={0} y={0} width={860} height={620}
              rx={18} ry={18}
              fill="rgba(6,6,16,0.72)"
              stroke="rgba(16,185,129,0.3)"
              strokeWidth={1.4}
            />
            <rect x={0} y={0} width={860} height={50} rx={18} ry={18} fill="rgba(16,185,129,0.08)" />
            <circle cx={30} cy={25} r={7} fill="#10b981" opacity={0.85} />
            <circle cx={54} cy={25} r={7} fill="rgba(110,231,183,0.4)" />
            <circle cx={78} cy={25} r={7} fill="rgba(110,231,183,0.22)" />
            <text
              x={110} y={31}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={18}
              fill="rgba(255,255,255,0.6)"
              letterSpacing="3"
            >
              commandos · dispatch feed
            </text>
            <circle
              cx={808} cy={25} r={6}
              fill="#10b981"
              style={{ animation: "cmdVFeedBlink 1.2s ease-in-out infinite" }}
            />
            <text
              x={826} y={30}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={15}
              fill="rgba(110,231,183,0.85)"
              letterSpacing="3"
              textAnchor="end"
            >
              LIVE
            </text>

            <g clipPath="url(#cmdVFeedClip)">
              {FEED_LINES.map((line, i) => {
                const delay = (i * 1.0).toFixed(2);
                return (
                  <text
                    key={i}
                    x={40} y={0}
                    fontFamily='"SF Mono", Menlo, monospace'
                    fontSize={24}
                    fill="rgba(255,255,255,0.9)"
                    letterSpacing="0.5"
                    style={{ animation: `cmdVFeedLine 10s ${delay}s linear infinite` }}
                  >
                    <tspan fill={ACTOR_COLOR[line.actorColor]} fontWeight={600}>
                      {line.actor}
                    </tspan>
                    <tspan fill="rgba(255,255,255,0.3)"> · </tspan>
                    <tspan fill="rgba(255,255,255,0.95)">{line.text}</tspan>
                    {line.end ? (
                      <>
                        <tspan fill="rgba(255,255,255,0.3)">  </tspan>
                        <tspan fill="#10b981">{line.end}</tspan>
                      </>
                    ) : null}
                  </text>
                );
              })}
            </g>

            <rect
              x={0} y={50} width={860} height={570}
              fill="url(#cmdVFeedFade)"
              pointerEvents="none"
            />
          </g>

          {/* Officer strip */}
          <g transform="translate(170 1200)">
            <text
              x={0} y={-22}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={16}
              fill="rgba(110,231,183,0.7)"
              letterSpacing="3"
            >
              48 OFFICERS
            </text>
            {officerDots.map(({ col, row }, i) => {
              const cx = col * 64;
              const cy = row * 16;
              const delay = ((i * 0.06) % 5).toFixed(2);
              return (
                <circle
                  key={i}
                  cx={cx} cy={cy} r={5}
                  fill="#10b981"
                  style={{
                    animation: `cmdVFeedDot 5s ${delay}s ease-in-out infinite`,
                    transformOrigin: `${cx}px ${cy}px`,
                    transformBox: "fill-box",
                  }}
                />
              );
            })}
          </g>

          <style>{`
            @keyframes cmdVFeedLine {
              0%   { transform: translate(0px, 600px); opacity: 0; }
              3%   { opacity: 1; }
              97%  { opacity: 0.85; }
              100% { transform: translate(0px, 100px); opacity: 0; }
            }
            @keyframes cmdVFeedDot {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50%      { opacity: 1;   transform: scale(1.4); }
            }
            @keyframes cmdVFeedBlink {
              0%, 100% { opacity: 0.25; }
              50%      { opacity: 1; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default CommandosVerticalTile;
