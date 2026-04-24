"use client";
/**
 * @level9/brand | VerticalTileFrame
 *
 * Shared 1080x1920 portrait tile frame, companion to TileFrame (1200x630).
 * Ships for Instagram Reels, LinkedIn Reels, TikTok, and YouTube Shorts. The
 * landscape version targets LinkedIn Experience media; this one targets 9:16.
 *
 * Layout (top to bottom):
 *   60..240     top band: eyebrow + status chip + metric line
 *   240..480    product name zone (gradient-filled SVG text)
 *   480..1280   hero zone: the animated metaphor (portrait-adapted, not stretched)
 *   1280..1560  copy zone: problem + answer
 *   1560..1860  bottom band: domain (left) + Level9 OS co-sign (right)
 *
 * Safe area: 60px on all edges. Critical content inside the center 1080x1500
 * because platforms overlay captions and user info at top + bottom.
 *
 * Voice rule: no em dashes, no en dashes, no double hyphens anywhere.
 */

import { ReactNode, CSSProperties } from "react";
import type { Product } from "../../content/products";

export interface VerticalTileFrameProps {
  product: Product;
  metric?: string;
  gradient: { from: string; to: string };
  accent: string;
  domain: string;
  heroSlot: ReactNode;
  copyBlock?: ReactNode;
}

const BG_DARK = "#060610";

export function VerticalTileFrame({
  product,
  metric,
  gradient,
  accent,
  domain,
  heroSlot,
  copyBlock,
}: VerticalTileFrameProps) {
  const statusChip =
    product.status === "LIVE"
      ? {
          color: "#10b981",
          label: "LIVE",
          bg: "rgba(16,185,129,0.12)",
          border: "rgba(16,185,129,0.4)",
        }
      : product.status === "IN PRODUCTION"
        ? {
            color: "#f59e0b",
            label: "IN PRODUCTION",
            bg: "rgba(245,158,11,0.12)",
            border: "rgba(245,158,11,0.4)",
          }
        : {
            color: "#64748b",
            label: "COMING SOON",
            bg: "rgba(100,116,139,0.12)",
            border: "rgba(100,116,139,0.4)",
          };

  const gradientId = `vword-${product.id}`;
  const mono: CSSProperties = {
    fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  };
  const sans: CSSProperties = {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  };

  const nameLen = product.name.length;
  const nameFontSize = nameLen > 11 ? 140 : nameLen > 8 ? 160 : 200;

  return (
    <div
      className="vtile-canvas"
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        background: BG_DARK,
        color: "white",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Ambient radial glow behind hero zone */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          top: 380,
          width: 1240,
          height: 1000,
          background: `radial-gradient(circle at center, ${accent}4a 0%, ${accent}14 42%, transparent 72%)`,
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero animated metaphor spans the full canvas so each tile can bleed
          edges if it wants. Components constrain their own content to the
          480..1280 vertical band. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {heroSlot}
      </div>

      {/* ── Top band (60..240) ───────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 96,
          ...mono,
          fontSize: 18,
          letterSpacing: "0.5em",
          color: accent,
          opacity: 0.9,
          textTransform: "uppercase",
        }}
      >
        {product.tag}
      </div>

      <div
        style={{
          position: "absolute",
          left: 72,
          top: 142,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 16px 6px 14px",
            borderRadius: 999,
            background: statusChip.bg,
            border: `1px solid ${statusChip.border}`,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: statusChip.color,
              boxShadow: `0 0 10px ${statusChip.color}`,
            }}
          />
          <span
            style={{
              ...mono,
              fontSize: 14,
              color: statusChip.color,
              letterSpacing: "0.2em",
            }}
          >
            {statusChip.label}
          </span>
        </div>
        {metric ? (
          <span
            style={{
              ...mono,
              fontSize: 14,
              color: "rgba(255,255,255,0.42)",
              letterSpacing: "0.3em",
            }}
          >
            {metric}
          </span>
        ) : null}
      </div>

      {/* ── Product name zone (240..480) ────────────────────────────── */}
      <svg
        width="960"
        height="240"
        viewBox="0 0 960 240"
        style={{
          position: "absolute",
          left: 60,
          top: 240,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradient.from} />
            <stop offset="100%" stopColor={gradient.to} />
          </linearGradient>
        </defs>
        <text
          x="12"
          y="180"
          style={{
            ...sans,
            fontWeight: 900,
            fontSize: nameFontSize,
            letterSpacing: "-0.04em",
            fill: `url(#${gradientId})`,
          }}
        >
          {product.name}
        </text>
      </svg>

      {/* ── Copy zone (1280..1560) ───────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 1300,
          width: 936,
          ...sans,
        }}
      >
        {copyBlock ?? (
          <>
            <div
              style={{
                fontWeight: 500,
                fontSize: 40,
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 30,
                letterSpacing: "-0.01em",
              }}
            >
              {product.problem}
            </div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 36,
                lineHeight: 1.35,
                color: accent,
                letterSpacing: "-0.01em",
              }}
            >
              {product.answer}
            </div>
          </>
        )}
      </div>

      {/* ── Bottom band (1560..1860) ─────────────────────────────────── */}
      {/* Layer + domain (left) */}
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 112,
          ...mono,
          fontSize: 16,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}
      >
        {product.layer}
      </div>
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 68,
          ...sans,
          fontWeight: 600,
          fontSize: 22,
          color: "rgba(255,255,255,0.58)",
        }}
      >
        {domain}
      </div>

      {/* Level9 co-sign (right) */}
      <div
        style={{
          position: "absolute",
          right: 60,
          bottom: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "#0d0d18",
            border: `1px solid ${accent}`,
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sans,
            fontWeight: 900,
            fontSize: 36,
            color: "white",
            transform: "rotate(-14deg)",
            letterSpacing: "-0.04em",
          }}
        >
          9
        </div>
        <div>
          <div
            style={{
              ...sans,
              fontWeight: 700,
              fontSize: 20,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            Level9 OS
          </div>
          <div
            style={{
              ...mono,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.16em",
            }}
          >
            {product.layer.split("·")[0].trim().toUpperCase()} LAYER
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalTileFrame;
