"use client";
/**
 * @level9/brand | TileFrame
 *
 * Shared 1200x630 tile frame. Full-bleed canvas that auto-scales to the
 * viewport so consumers can screen-record at 1920x1080 (or any other size).
 *
 * The visual hero lives on the RIGHT side of the safe area (x 670..1180).
 * Text block lives on the LEFT (x 72..640). Every animated tile passes in
 * its own `heroSlot` (the animated metaphor) and this frame handles the
 * shared product name, eyebrow, status chip, problem/answer, and co-sign.
 *
 * No em dashes, no en dashes, no banned phrases anywhere in this component.
 */

import { ReactNode, CSSProperties } from "react";
import type { Product } from "../../content/products";

export interface TileFrameProps {
  product: Product;
  /** Optional eyebrow metric line (e.g. "10 EXECS · 3 ROUNDS"). */
  metric?: string;
  /** Product name gradient colors: start + end. */
  gradient: { from: string; to: string };
  /** Color used for the accent text block (problem/answer). */
  accent: string;
  /** Canonical layer domain display (e.g. "stratos.lucidorg.com"). */
  domain: string;
  /** The animated metaphor. Rendered absolutely inside the 1200x630 canvas. */
  heroSlot: ReactNode;
  /** Optional left-column problem/answer override (multi-line handled). */
  copyBlock?: ReactNode;
}

const BG_DARK = "#060610";

export function TileFrame({
  product,
  metric,
  gradient,
  accent,
  domain,
  heroSlot,
  copyBlock,
}: TileFrameProps) {
  const statusChip =
    product.status === "LIVE"
      ? {
          color: "#10b981",
          label: "LIVE",
          bg: "rgba(16,185,129,0.12)",
          border: "rgba(16,185,129,0.4)",
          width: 62,
        }
      : product.status === "IN PRODUCTION"
        ? {
            color: "#f59e0b",
            label: "IN PRODUCTION",
            bg: "rgba(245,158,11,0.12)",
            border: "rgba(245,158,11,0.4)",
            width: 122,
          }
        : {
            color: "#64748b",
            label: "COMING SOON",
            bg: "rgba(100,116,139,0.12)",
            border: "rgba(100,116,139,0.4)",
            width: 112,
          };

  const gradientId = `word-${product.id}`;
  const mono: CSSProperties = {
    fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  };
  const sans: CSSProperties = {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  };

  return (
    <div
      className="tile-canvas"
      style={{
        position: "relative",
        width: 1200,
        height: 630,
        background: BG_DARK,
        color: "white",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Radial glow behind hero */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 860,
          height: 720,
          background: `radial-gradient(circle at center, ${accent}55 0%, ${accent}18 40%, transparent 70%)`,
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero animated metaphor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {heroSlot}
      </div>

      {/* Eyebrow */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 88,
          ...mono,
          fontSize: 11,
          letterSpacing: "0.5em",
          color: accent,
          opacity: 0.9,
          textTransform: "uppercase",
        }}
      >
        {product.tag}
      </div>

      {/* Status chip + metric */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 118,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px 4px 10px",
            borderRadius: 999,
            background: statusChip.bg,
            border: `1px solid ${statusChip.border}`,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: statusChip.color,
              boxShadow: `0 0 8px ${statusChip.color}`,
            }}
          />
          <span
            style={{
              ...mono,
              fontSize: 10,
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
              fontSize: 10,
              color: "rgba(255,255,255,0.42)",
              letterSpacing: "0.3em",
            }}
          >
            {metric}
          </span>
        ) : null}
      </div>

      {/* Product name with gradient fill */}
      <svg
        width="640"
        height="168"
        viewBox="0 0 640 168"
        style={{
          position: "absolute",
          left: 60,
          top: 160,
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
          y="128"
          style={{
            ...sans,
            fontWeight: 900,
            fontSize: product.name.length > 8 ? 104 : product.name.length > 5 ? 120 : 148,
            letterSpacing: "-0.04em",
            fill: `url(#${gradientId})`,
          }}
        >
          {product.name}
        </text>
      </svg>

      {/* Copy block (problem + answer) */}
      <div
        style={{
          position: "absolute",
          left: 72,
          top: 340,
          width: 600,
          ...sans,
        }}
      >
        {copyBlock ?? (
          <>
            <div
              style={{
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 22,
                letterSpacing: "-0.01em",
              }}
            >
              {product.problem}
            </div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 22,
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

      {/* Signature + layer bottom-left */}
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 52,
          ...mono,
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}
      >
        {product.layer.replace(/·/g, "·")}
      </div>
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 28,
          ...sans,
          fontWeight: 600,
          fontSize: 14,
          color: "rgba(255,255,255,0.58)",
        }}
      >
        {domain}
      </div>

      {/* Level9 co-sign bottom-right */}
      <div
        style={{
          position: "absolute",
          right: 40,
          bottom: 30,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "#0d0d18",
            border: `1px solid ${accent}`,
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sans,
            fontWeight: 900,
            fontSize: 22,
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
              fontSize: 13,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            Level9 OS
          </div>
          <div
            style={{
              ...mono,
              fontSize: 9,
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

export default TileFrame;
