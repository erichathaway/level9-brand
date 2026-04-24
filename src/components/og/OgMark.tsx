/**
 * OgMark — satori-compatible per-brand mark renderer.
 *
 * Each `kind` renders a different mark inside the 320×320 OG chip.
 * All returned JSX is satori-safe (divs with flex, inline SVG).
 */

import type { OgMark as OgMarkType } from "../../content/siteMeta";

export function OgMark({ mark }: { mark: OgMarkType }) {
  switch (mark.kind) {
    case "letter":
      return (
        <div
          style={{
            fontSize: "240px",
            fontWeight: 900,
            color: mark.color ?? "#FFFFFF",
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          {mark.char}
        </div>
      );

    case "north-needle":
      // Erichathaway: dominant white "N" (brand signal: navigator/direction)
      return (
        <div
          style={{
            fontSize: "200px",
            fontWeight: 900,
            color: mark.accent ?? "#FBBF24",
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          N
        </div>
      );

    case "anchor":
      // LinkupOS: inline SVG, satori renders this natively
      return (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12,12) rotate(180) translate(-12,-12)" stroke={mark.color ?? "#F59E0B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6v16"/>
            <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/>
            <path d="M9 11h6"/>
            <circle cx="12" cy="4" r="2"/>
          </g>
        </svg>
      );

    case "hex-ring":
      return (
        <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ogHex" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4"/>
              <stop offset="50%" stopColor="#0EA5E9"/>
              <stop offset="100%" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
          <polygon points="120,20 210,70 210,170 120,220 30,170 30,70" fill="none" stroke="url(#ogHex)" strokeWidth="18" strokeLinejoin="round"/>
        </svg>
      );

    case "chevron-terminal":
      return (
        <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <path d="M 40 40 L 140 120 L 40 200" stroke={mark.color ?? "#10B981"} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <rect x="170" y="104" width="50" height="30" rx="6" fill={mark.color ?? "#10B981"}/>
        </svg>
      );

    case "stratos-compass":
      return (
        <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <polygon points="120,20 100,130 140,130" fill={mark.color ?? "#00E5FF"}/>
          <polygon points="120,220 106,130 134,130" fill="#0E7490" opacity="0.6"/>
          <circle cx="120" cy="130" r="22" fill={mark.color ?? "#00E5FF"}/>
          <circle cx="120" cy="130" r="10" fill="#070D1A"/>
        </svg>
      );

    case "alignment-bars":
      return (
        <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ogBar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6"/>
              <stop offset="100%" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>
          <rect x="20"  y="54"  width="140" height="22" rx="11" fill="url(#ogBar)" opacity="0.92"/>
          <rect x="20"  y="92"  width="105" height="22" rx="11" fill="url(#ogBar)" opacity="0.68"/>
          <rect x="20"  y="130" width="140" height="22" rx="11" fill="url(#ogBar)" opacity="0.92"/>
          <rect x="20"  y="168" width="80"  height="22" rx="11" fill="url(#ogBar)" opacity="0.46"/>
          <circle cx="180" cy="65" r="14" fill="#EC4899"/>
        </svg>
      );

    case "equalizer":
      return (
        <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <g fill={mark.color ?? "#F59E0B"}>
            <rect x="20"  y="140" width="14" height="50"  rx="2"/>
            <rect x="42"  y="120" width="14" height="70"  rx="2"/>
            <rect x="64"  y="96"  width="14" height="94"  rx="2"/>
            <rect x="86"  y="70"  width="14" height="120" rx="2"/>
            <rect x="108" y="42"  width="14" height="148" rx="2"/>
            <rect x="130" y="70"  width="14" height="120" rx="2"/>
            <rect x="152" y="96"  width="14" height="94"  rx="2"/>
            <rect x="174" y="120" width="14" height="70"  rx="2"/>
            <rect x="196" y="140" width="14" height="50"  rx="2"/>
          </g>
        </svg>
      );
  }
}
