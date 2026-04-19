#!/usr/bin/env node
/**
 * sync-logos.mjs — copies the canonical SVG logo database into a consumer
 * site's /public/ folder so <Image src="/brand/logos/stratos/chip.svg"> works.
 *
 * Usage (from a consumer site's package.json, postinstall):
 *   node node_modules/@level9/brand/scripts/sync-logos.mjs ./public/brand/logos
 *
 * The destination arg is relative to process.cwd() (the consumer site root).
 * The script mirrors the exact directory structure of src/assets/logos/.
 *
 * This is the sync mechanism for "single source of truth" across every site.
 * Update logos in the brand repo once, then bump the git ref in each
 * consumer (or run `npm install --force`) and they propagate automatically.
 */

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE = resolve(__dirname, "..", "src", "assets", "logos");
const destArg = process.argv[2];

if (!destArg) {
  console.error("sync-logos: missing destination argument.");
  console.error("  usage: node sync-logos.mjs <dest-path>");
  console.error("  example: node sync-logos.mjs ./public/brand/logos");
  process.exit(1);
}

const DEST = resolve(process.cwd(), destArg);

if (!existsSync(SOURCE)) {
  console.error(`sync-logos: source dir not found at ${SOURCE}`);
  process.exit(1);
}

// Clean destination to avoid stale files from prior syncs
if (existsSync(DEST)) {
  rmSync(DEST, { recursive: true, force: true });
}
mkdirSync(DEST, { recursive: true });

// Copy every brand folder, skipping the index.ts (TS not needed in /public)
cpSync(SOURCE, DEST, {
  recursive: true,
  filter: (src) => !src.endsWith("index.ts"),
});

console.log(`sync-logos: canonical logos copied to ${destArg}`);
