#!/usr/bin/env node
/**
 * sync-tiles.mjs — copies the canonical static-tile SVGs into a consumer
 * site's /public/ folder so <img src="/tiles/static/stratos.svg"> works.
 *
 * Usage (from a consumer site's package.json, postinstall):
 *   node node_modules/@level9/brand/scripts/sync-tiles.mjs ./public/tiles/static
 *
 * The destination arg is relative to process.cwd() (the consumer site root).
 * Source: src/assets/tiles/static/ in this package. 6 files as of v0.10:
 * stratos.svg, commandos.svg, outboundos.svg, lucidorg.svg, playbook.svg,
 * max.svg.
 *
 * This is the sync mechanism for "single source of truth" on static tile art.
 * Update an SVG in the brand repo once, then bump the git ref in each
 * consumer (or run `npm install @level9/brand --force`) and they propagate.
 *
 * Mirrors sync-logos.mjs one-for-one so the postinstall pattern stays
 * predictable across consumer sites.
 */

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE = resolve(__dirname, "..", "src", "assets", "tiles", "static");
const destArg = process.argv[2];

if (!destArg) {
  console.error("sync-tiles: missing destination argument.");
  console.error("  usage: node sync-tiles.mjs <dest-path>");
  console.error("  example: node sync-tiles.mjs ./public/tiles/static");
  process.exit(1);
}

const DEST = resolve(process.cwd(), destArg);

if (!existsSync(SOURCE)) {
  console.error(`sync-tiles: source dir not found at ${SOURCE}`);
  process.exit(1);
}

// Clean destination to avoid stale files from prior syncs
if (existsSync(DEST)) {
  rmSync(DEST, { recursive: true, force: true });
}
mkdirSync(DEST, { recursive: true });

// Copy every static tile SVG. No index files to skip (folder is SVG-only).
cpSync(SOURCE, DEST, {
  recursive: true,
  filter: (src) => !src.endsWith("index.ts"),
});

console.log(`sync-tiles: canonical static tiles copied to ${destArg}`);
