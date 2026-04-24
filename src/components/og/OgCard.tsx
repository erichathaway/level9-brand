/**
 * OgCard — satori-compatible OG image layout for `next/og`.
 *
 * Usage in a consumer site's src/app/opengraph-image.tsx:
 *
 *   import { ImageResponse } from "next/og";
 *   import { SITE_META } from "@level9/brand/content/siteMeta";
 *   import { OgCard } from "@level9/brand/components/og";
 *
 *   const meta = SITE_META.erichathaway;
 *   export const runtime = "edge";
 *   export const alt = meta.description;
 *   export const size = { width: 1200, height: 630 };
 *   export const contentType = "image/png";
 *   export default async function Image() {
 *     return new ImageResponse(<OgCard meta={meta} />, size);
 *   }
 *
 * Satori constraints respected: no external fonts, no @keyframes, only
 * CSS properties satori supports, all elements have display:flex.
 */

import type { SiteMeta } from "../../content/siteMeta";
import { OgMark } from "./OgMark";

export type OgCardProps = { meta: SiteMeta };

export function OgCard({ meta }: OgCardProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        background: `linear-gradient(135deg, ${meta.ogBg.from} 0%, ${meta.ogBg.to} 100%)`,
        padding: "80px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Left: brand mark chip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "320px",
          height: "320px",
          borderRadius: "56px",
          background: `linear-gradient(135deg, ${meta.ogBg.from} 0%, ${meta.ogBg.to} 100%)`,
          border: `3px solid ${meta.ogBorder}`,
          marginRight: "80px",
          flexShrink: 0,
        }}
      >
        <OgMark mark={meta.mark} />
      </div>

      {/* Right: copy stack */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          {meta.ogEyebrow}
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          {meta.ogHeadline}
        </div>
        <div
          style={{
            fontSize: "26px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            display: "flex",
          }}
        >
          {meta.ogTagline}
        </div>
      </div>
    </div>
  );
}
