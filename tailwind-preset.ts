/**
 * @level9/brand — Tailwind preset.
 *
 * Sites extend this preset to get all brand colors, typography, spacing,
 * radius, shadow, and motion tokens as Tailwind utility classes.
 *
 * Usage in a consuming site's tailwind.config.ts:
 *
 *   import preset from "@level9/brand/tailwind-preset";
 *
 *   export default {
 *     presets: [preset],
 *     content: ["./src/**\/*.{ts,tsx}"],
 *     // site-specific extends here if needed
 *   } satisfies Config;
 *
 * Then in your code:
 *   <div className="bg-decide text-decide-soft">  // semantic
 *   <div className="bg-violet text-violet-soft">  // primitive
 *
 * Both work — semantic names (bg-decide) are preferred when the meaning
 * matters; primitive names (bg-violet) are fine for one-off cases.
 */

import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  theme: {
    extend: {
      /* ─── Brand colors ─────────────────────────────────────── */
      colors: {
        /* Semantic — pressure-point + role colors */
        decide:        "#8b5cf6",  // Decide pressure point · StratOS · primary brand
        coordinate:    "#10b981",  // Coordinate pressure point · CommandOS
        execute:       "#f59e0b",  // Execute pressure point · OutboundOS · LinkupOS
        measure:       "#06b6d4",  // Measure pressure point · LucidORG
        chassis:       "#ef4444",  // Governance chassis · The Vault
        methodology:   "#64748b",  // COO Playbook · install protocol
        max:           "#ec4899",  // MAX · voice layer · accent

        /* Soft variants — accent at 15% alpha for tints + glows */
        "decide-soft":     "rgba(139, 92, 246, 0.15)",
        "coordinate-soft": "rgba(16, 185, 129, 0.15)",
        "execute-soft":    "rgba(245, 158, 11, 0.15)",
        "measure-soft":    "rgba(6, 182, 212, 0.15)",
        "chassis-soft":    "rgba(239, 68, 68, 0.15)",
        "methodology-soft":"rgba(100, 116, 139, 0.15)",
        "max-soft":        "rgba(236, 72, 153, 0.15)",

        /* Primitive aliases (same colors, named by hue) */
        violet:  "#8b5cf6",
        cyan:    "#06b6d4",
        fuchsia: "#ec4899",
        amber:   "#f59e0b",
        emerald: "#10b981",
        slate:   "#64748b",

        /* Page surfaces */
        "bg-root":     "#030306",
        "bg-surface":  "#0d0d18",
        "bg-elevated": "#14142a",
        "bg-navy":     "#0a0e1a",
      },

      /* ─── Typography ───────────────────────────────────────── */
      fontFamily: {
        editorial: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        // Display-scale clamps for headlines
        "display-hero":    ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.1" }],
        "display-page":    ["clamp(2.5rem, 6vw, 5rem)",   { lineHeight: "1.1" }],
        "display-section": ["clamp(2rem, 5vw, 4rem)",     { lineHeight: "1.05" }],
        "display-pillar":  ["clamp(2rem, 4.5vw, 3.6rem)", { lineHeight: "1.05" }],
        // Section-label utility (small uppercase tracked mono)
        "label-sm":  ["10px", { letterSpacing: "0.4em", textTransform: "uppercase" }],
        "label-md":  ["11px", { letterSpacing: "0.3em", textTransform: "uppercase" }],
      },
      letterSpacing: {
        "wide-mono": "0.4em",  // section-label tracking
      },

      /* ─── Layout + spacing ─────────────────────────────────── */
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "16px",
      },
      boxShadow: {
        card:     "0 2px 8px rgba(0, 0, 0, 0.3)",
        elevated: "0 8px 24px rgba(0, 0, 0, 0.4)",
        glow:     "0 0 32px rgba(139, 92, 246, 0.15)",
      },

      /* ─── Motion ───────────────────────────────────────────── */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        out:    "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast:      "150ms",
        medium:    "500ms",
        slow:      "700ms",
        cinematic: "900ms",
      },
    },
  },
};

export default preset;
