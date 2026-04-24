/**
 * @level9/brand/content/siteMeta — per-site metadata presets.
 *
 * Single source of truth for how each site presents itself to browsers
 * and social networks: title, description, OG headline + tagline, brand
 * color for OG border, and the brand mark mark-type used on the OG card.
 *
 * Consumed by:
 *   - Each site's src/app/layout.tsx (metadata export)
 *   - Each site's src/app/opengraph-image.tsx (via og-card.tsx helper)
 *   - LLC attribution lookup (legal/attribution.ts)
 */

import type { BrandId } from "../assets/logos/index";

export type OgMark =
  | { kind: "letter"; char: string; color?: string }   // big letter on chip (level9 "9", nextgen "N", etc)
  | { kind: "north-needle"; accent?: string }          // erichathaway compass
  | { kind: "anchor"; color?: string }                 // linkupos inverted anchor
  | { kind: "hex-ring"; color?: string }               // lucidorg
  | { kind: "chevron-terminal"; color?: string }       // commandos
  | { kind: "stratos-compass"; color?: string }        // stratos
  | { kind: "alignment-bars"; color?: string }         // coo-playbook
  | { kind: "equalizer"; color?: string };             // bigesessions

export type SiteMeta = {
  brand: BrandId;
  domain: string;               // naked domain, e.g. "erichathaway.com"
  siteName: string;             // browser title suffix / OG site_name
  title: string;                // default <title>
  description: string;          // meta description + OG description
  ogEyebrow: string;            // small uppercase label on OG card
  ogHeadline: string;            // hero line on OG card
  ogTagline: string;             // subtitle on OG card (domain + tagline)
  ogBg: { from: string; to: string };  // OG card gradient
  ogBorder: string;             // OG chip border color (single brand accent)
  mark: OgMark;                 // what mark sits in the OG chip
};

export const SITE_META: Record<string, SiteMeta> = {
  erichathaway: {
    brand: "erichathaway",
    domain: "erichathaway.com",
    siteName: "Eric Hathaway",
    title: "Eric Hathaway. The architect behind the builds.",
    description: "Founder, LucidORG. CEO, Level9. 20+ years of operations leadership across six continents, building commercial AI for the half of every company that isn't customer-facing.",
    ogEyebrow: "Eric Hathaway",
    ogHeadline: "The architect behind the builds.",
    ogTagline: "Founder, LucidORG · CEO, Level9 · erichathaway.com",
    ogBg: { from: "#1A1208", to: "#08040A" },
    ogBorder: "#F59E0B",
    mark: { kind: "north-needle", accent: "#FBBF24" },
  },
  level9os: {
    brand: "level9",
    domain: "level9os.com",
    siteName: "Level9OS",
    title: "Level9OS. We build the half it all runs on.",
    description: "AI for operations. We build the half of the company that isn't customer-facing: decide, coordinate, execute, measure.",
    ogEyebrow: "Level9OS",
    ogHeadline: "We build the half it all runs on.",
    ogTagline: "AI for Operations · level9os.com",
    ogBg: { from: "#14082E", to: "#041521" },
    ogBorder: "#8B5CF6",
    mark: { kind: "letter", char: "9", color: "#FFFFFF" },
  },
  linkupos: {
    brand: "linkupos",
    domain: "linkupos.com",
    siteName: "LinkUpOS",
    title: "LinkUpOS. Your autonomous LinkedIn signal engine.",
    description: "Posts, comments, and intros generated in your voice. Tier-gated automation with autopilot. The LinkedIn engine built for operators.",
    ogEyebrow: "LinkUpOS",
    ogHeadline: "Your autonomous LinkedIn signal engine.",
    ogTagline: "Posts, comments, intros in your voice · linkupos.com",
    ogBg: { from: "#1A1208", to: "#08040A" },
    ogBorder: "#F59E0B",
    mark: { kind: "anchor", color: "#F59E0B" },
  },
  lucidorg: {
    brand: "lucidorg",
    domain: "lucidorg.com",
    siteName: "LucidORG",
    title: "LucidORG. Measure what matters.",
    description: "The measurement layer for commercial AI operations. Part of the Level9 family.",
    ogEyebrow: "LucidORG",
    ogHeadline: "Measure what matters.",
    ogTagline: "The measurement layer · lucidorg.com",
    ogBg: { from: "#0A1A2E", to: "#020812" },
    ogBorder: "#06B6D4",
    mark: { kind: "hex-ring", color: "#06B6D4" },
  },
  nextgenintern: {
    brand: "nextgenintern",
    domain: "nextgenintern.com",
    siteName: "NextGen Interns",
    title: "NextGen Interns. Build the resume employers actually want.",
    description: "Structured AI-assisted internship experiences for students building real-world operating skills.",
    ogEyebrow: "NextGen Interns",
    ogHeadline: "Build the resume employers actually want.",
    ogTagline: "AI-assisted internships · nextgenintern.com",
    ogBg: { from: "#0A1226", to: "#02060F" },
    ogBorder: "#3B82F6",
    mark: { kind: "letter", char: "N", color: "#FFFFFF" },
  },
  "coo-playbook": {
    brand: "coo-playbook",
    domain: "thenewcoo.com",
    siteName: "COO Playbook",
    title: "The COO Playbook. The operating model for the AI era.",
    description: "ECI, CxfO, and Lean Ops frameworks. A methodology for running the modern company.",
    ogEyebrow: "COO Playbook",
    ogHeadline: "The operating model for the AI era.",
    ogTagline: "ECI · CxfO · Lean Ops · thenewcoo.com",
    ogBg: { from: "#0F1117", to: "#050709" },
    ogBorder: "#64748B",
    mark: { kind: "alignment-bars" },
  },
  stratos: {
    brand: "stratos",
    domain: "stratos.lucidorg.com",
    siteName: "StratOS",
    title: "StratOS. Strategy decisions that hold.",
    description: "AI-facilitated strategy rooms. Decide with clarity, align without churn.",
    ogEyebrow: "StratOS",
    ogHeadline: "Strategy decisions that hold.",
    ogTagline: "AI-facilitated strategy rooms · stratos.lucidorg.com",
    ogBg: { from: "#070D1A", to: "#020509" },
    ogBorder: "#06B6D4",
    mark: { kind: "stratos-compass", color: "#00E5FF" },
  },
  outboundos: {
    brand: "outboundos",
    domain: "outboundos.com",
    siteName: "OutboundOS",
    title: "OutboundOS. Pipeline in your voice.",
    description: "The outbound umbrella: inbound, outbound, and every touch between, operated as one signal engine.",
    ogEyebrow: "OutboundOS",
    ogHeadline: "Pipeline in your voice.",
    ogTagline: "The outbound umbrella · outboundos.com",
    ogBg: { from: "#1A1208", to: "#08040A" },
    ogBorder: "#F59E0B",
    mark: { kind: "letter", char: "O", color: "#FFFFFF" },
  },
};

export type SiteKey = keyof typeof SITE_META;
