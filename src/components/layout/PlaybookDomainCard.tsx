"use client";
/**
 * @level9/brand — PlaybookDomainCard
 * Renders one of the 8 COO Playbook domains as a small card.
 * Use in a 4-col grid on the architecture / install pages.
 */

import type { PlaybookDomain } from "../../content/playbookDomains";

export type PlaybookDomainCardProps = PlaybookDomain;

export function PlaybookDomainCard(d: PlaybookDomainCardProps) {
  return (
    <div
      className="rounded-lg border bg-[#060610]/60 p-3"
      style={{ borderColor: `${d.color}20` }}
    >
      <div
        className="text-[10px] font-mono tracking-wider mb-1"
        style={{ color: d.color }}
      >
        DOMAIN {d.n}
      </div>
      <div className="text-white/85 text-[13px] font-bold leading-tight">{d.title}</div>
    </div>
  );
}

export default PlaybookDomainCard;
