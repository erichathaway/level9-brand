/**
 * @level9/brand/components/architecture — Operating-architecture visualizations.
 *
 * Two canvas-rendered components that depict the Level9 operating system:
 *
 *   - `ConsoleGraphic` — 4-ring radial console:
 *       R1 (outer)  Governance perimeter · 48 officers in 8 categories + 3 gates
 *       R2          4 Bucket quadrants · Decide / Coordinate / Execute / Measure + KPI dials
 *       R3          8 Product discs · docked into their bucket
 *       R4 (core)   8 Operating Domain spokes
 *     Self-contained. Ambient telemetry (tracers, blips, packets, ops log).
 *
 *   - `ForgeCube` — rotating wireframe cube with per-face product popups,
 *     dust-swarm intro, progressive edge reveal, and smart popup positioning.
 *     Takes `products: ForgeProduct[]` as a required prop.
 *
 * Both are client components and use the HTML canvas API directly — no external
 * animation library. They are the canonical canvas-based motion builds in the
 * family; if you need a new 3D/radial system for another site, start here.
 *
 * Usage:
 *   import { ConsoleGraphic, ForgeCube, type ForgeProduct } from "@level9/brand/components/architecture";
 */

export { default as ConsoleGraphic } from "./ConsoleGraphic";
export { default as ForgeCube, type ForgeProduct } from "./ForgeCube";
