"use client";
/**
 * CommandOS animated tile (landscape 1200x630).
 *
 * Dispatch-feed metaphor. A live terminal-style log cycles through a full
 * project lifecycle (dispatch, agent work, gate decisions, human-in-the-loop,
 * ship) with specific agent IDs so the feed reads as real orchestrator
 * activity. A horizontal 48-officer dot strip docks below the console.
 * 10s loop, pure CSS animation.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens.
 */
import { getProduct } from "../../content/products";
import { TileFrame } from "./TileFrame";

/** One event in the dispatch feed. Rendered as a single monospace line.
 *  actor is colored per its role: DISPATCH / GATE / SHIPPED = emerald,
 *  Agent xx = cyan, HUMAN = amber. Everything else dims. */
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

export function CommandosTile() {
  const product = getProduct("commandos")!;
  const accent = "#6ee7b7";

  // 48 officer dots, horizontal 12 cols x 4 rows, docked BELOW the terminal
  // so they never conflict with the "CommandOS" wordmark on the left.
  const officerDots: { col: number; row: number }[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      officerDots.push({ col: c, row: r });
    }
  }

  return (
    <TileFrame
      product={product}
      metric="48 OFFICERS · 3 GATES"
      gradient={{ from: "#6ee7b7", to: "#0d9488" }}
      accent={accent}
      domain="commandos.level9os.com"
      heroSlot={
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="cmdFeedFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#060610" stopOpacity="1" />
              <stop offset="12%" stopColor="#060610" stopOpacity="0" />
              <stop offset="88%" stopColor="#060610" stopOpacity="0" />
              <stop offset="100%" stopColor="#060610" stopOpacity="1" />
            </linearGradient>
            <clipPath id="cmdFeedClip">
              <rect x={0} y={40} width={380} height={310} />
            </clipPath>
          </defs>

          {/* Console window: dispatch feed */}
          <g transform="translate(780 130)">
            <rect
              x={0} y={0} width={380} height={360}
              rx={10} ry={10}
              fill="rgba(6,6,16,0.72)"
              stroke="rgba(16,185,129,0.3)"
              strokeWidth={1}
            />
            <rect x={0} y={0} width={380} height={28} rx={10} ry={10} fill="rgba(16,185,129,0.08)" />
            <circle cx={16} cy={14} r={4} fill="#10b981" opacity={0.75} />
            <circle cx={30} cy={14} r={4} fill="rgba(110,231,183,0.35)" />
            <circle cx={44} cy={14} r={4} fill="rgba(110,231,183,0.2)" />
            <text
              x={66} y={18}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={10}
              fill="rgba(255,255,255,0.55)"
              letterSpacing="2"
            >
              commandos · dispatch feed
            </text>
            <circle
              cx={354} cy={14} r={3.5}
              fill="#10b981"
              style={{ animation: "cmdFeedBlink 1.2s ease-in-out infinite" }}
            />
            <text
              x={362} y={17}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={9}
              fill="rgba(110,231,183,0.8)"
              letterSpacing="2"
              textAnchor="end"
            >
              LIVE
            </text>

            <g clipPath="url(#cmdFeedClip)">
              {FEED_LINES.map((line, i) => {
                const delay = (i * 1.0).toFixed(2);
                return (
                  <text
                    key={i}
                    x={18} y={0}
                    fontFamily='"SF Mono", Menlo, monospace'
                    fontSize={12}
                    fill="rgba(255,255,255,0.85)"
                    letterSpacing="0.3"
                    style={{ animation: `cmdFeedLine 10s ${delay}s linear infinite` }}
                  >
                    <tspan fill={ACTOR_COLOR[line.actorColor]} fontWeight={600}>
                      {line.actor}
                    </tspan>
                    <tspan fill="rgba(255,255,255,0.3)"> · </tspan>
                    <tspan fill="rgba(255,255,255,0.92)">{line.text}</tspan>
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
              x={0} y={28} width={380} height={332}
              fill="url(#cmdFeedFade)"
              pointerEvents="none"
            />
          </g>

          {/* 48-officer horizontal strip */}
          <g transform="translate(780 538)">
            <text
              x={0} y={-18}
              fontFamily='"SF Mono", Menlo, monospace'
              fontSize={10}
              fill="rgba(110,231,183,0.65)"
              letterSpacing="2.5"
            >
              48 OFFICERS
            </text>
            {officerDots.map(({ col, row }, i) => {
              const cx = col * 12;
              const cy = row * 7;
              const delay = ((i * 0.06) % 5).toFixed(2);
              return (
                <circle
                  key={i}
                  cx={cx} cy={cy} r={3}
                  fill="#10b981"
                  style={{
                    animation: `cmdFeedDot 5s ${delay}s ease-in-out infinite`,
                    transformOrigin: `${cx}px ${cy}px`,
                    transformBox: "fill-box",
                  }}
                />
              );
            })}
          </g>

          <style>{`
            @keyframes cmdFeedLine {
              0%   { transform: translate(0px, 330px); opacity: 0; }
              3%   { opacity: 1; }
              97%  { opacity: 0.85; }
              100% { transform: translate(0px, 58px);  opacity: 0; }
            }
            @keyframes cmdFeedDot {
              0%, 100% { opacity: 0.35; transform: scale(1); }
              50%      { opacity: 1;    transform: scale(1.35); }
            }
            @keyframes cmdFeedBlink {
              0%, 100% { opacity: 0.25; }
              50%      { opacity: 1; }
            }
          `}</style>
        </svg>
      }
    />
  );
}

export default CommandosTile;
