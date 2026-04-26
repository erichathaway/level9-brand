#!/usr/bin/env node
/**
 * sync-banners.mjs — copies canonical LinkedIn banner assets into a
 * consumer site's /public/ folder.
 *
 * Two banner sets:
 *   - personal: LinkedIn personal-profile cover banners (1584x396).
 *     7 candidates × {svg, jpg, png} = 21 files. Source filename pattern
 *     `linkedin-banner-NN-name.*`.
 *   - business: LinkedIn company-page banners (1128x191).
 *     8 candidates × {svg, jpg, png} = 24 files. Source filename pattern
 *     `linkedin-company-{slug}-NN.*`. 4 companies × 2 candidates each.
 *
 * Usage (from a consumer site's package.json, postinstall):
 *   node node_modules/@level9/brand/scripts/sync-banners.mjs <dest-base>
 *
 * The dest-base is the path under which two subfolders will be created:
 *   <dest-base>/personal/
 *   <dest-base>/business/
 *
 * Example:
 *   node node_modules/@level9/brand/scripts/sync-banners.mjs ./public/brand/banners
 *
 * Single source of truth: edit a banner SVG in this brand repo, run the
 * convert pipeline (consumer-site `scripts/convert-banners.mjs`) to refresh
 * the JPG/PNG raster derivatives, copy back into this package, bump the
 * brand version. Consumer sites pick up the new assets on next install.
 *
 * Mirrors sync-tiles.mjs + sync-logos.mjs one-for-one so the postinstall
 * pattern stays predictable across consumer sites.
 */

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_BASE = resolve(__dirname, "..", "src", "assets", "banners");
const destArg = process.argv[2];

if (!destArg) {
  console.error("sync-banners: missing destination argument.");
  console.error("  usage: node sync-banners.mjs <dest-base>");
  console.error("  example: node sync-banners.mjs ./public/brand/banners");
  process.exit(1);
}

const DEST_BASE = resolve(process.cwd(), destArg);

if (!existsSync(SOURCE_BASE)) {
  console.error(`sync-banners: source base dir not found at ${SOURCE_BASE}`);
  process.exit(1);
}

// Clean destination so stale candidates (e.g. retired banner numbers)
// don't accumulate in consumer site /public.
if (existsSync(DEST_BASE)) {
  rmSync(DEST_BASE, { recursive: true, force: true });
}
mkdirSync(DEST_BASE, { recursive: true });

for (const subset of ["personal", "business"]) {
  const src = resolve(SOURCE_BASE, subset);
  const dest = resolve(DEST_BASE, subset);
  if (!existsSync(src)) continue;
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

console.log(`sync-banners: canonical banners copied to ${destArg}`);
