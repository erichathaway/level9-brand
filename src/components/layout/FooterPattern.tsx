"use client";
/**
 * @level9/brand — FooterPattern
 * Three-section minimal footer used across every site:
 *   left: brand logo + name
 *   center: nav links
 *   right: copyright
 *
 * Pass children to inject custom slots if needed.
 */

import type { ReactNode } from "react";

export interface FooterPatternProps {
  /** Brand logo + tagline element (typically a logo image + 2-line label). */
  brand?: ReactNode;
  /** Center nav links — typically <Link> elements styled uniformly. */
  links?: ReactNode;
  /** Right-side copyright / credit text. */
  copyright?: ReactNode;
  /** Background color (defaults to "#060610"). */
  background?: string;
}

export function FooterPattern({
  brand,
  links,
  copyright,
  background = "#060610",
}: FooterPatternProps) {
  return (
    <footer
      className="py-12 border-t border-white/[0.04]"
      style={{ background }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {brand && <div className="flex items-center gap-3">{brand}</div>}
        {links && (
          <div className="flex items-center gap-6 text-[12px] font-mono tracking-wider uppercase flex-wrap justify-center">
            {links}
          </div>
        )}
        {copyright && (
          <div className="text-white/20 text-[11px] font-mono">{copyright}</div>
        )}
      </div>
    </footer>
  );
}

export default FooterPattern;
