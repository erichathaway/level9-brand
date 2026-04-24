/**
 * @level9/brand/components/tiles — canonical animated + portrait tile set.
 *
 * 14 components total:
 *   - TileFrame + VerticalTileFrame (shared 1200x630 and 1080x1920 chrome)
 *   - 6 landscape product tiles: Stratos, Commandos, Outboundos, Lucidorg,
 *     Playbook, Max
 *   - 6 portrait (vertical) product tiles: same six, 1080x1920 variants
 *
 * Static SVG counterparts (one per product) live at
 * @level9/brand/assets/tiles/static/*.svg. They are copied into each consumer
 * site's public/tiles/static/ folder by scripts/sync-tiles.mjs on postinstall.
 *
 * Consumers:
 *   import { StratosTile, StratosVerticalTile } from "@level9/brand/components/tiles";
 */

export { TileFrame } from "./TileFrame";
export type { TileFrameProps } from "./TileFrame";
export { VerticalTileFrame } from "./VerticalTileFrame";
export type { VerticalTileFrameProps } from "./VerticalTileFrame";

export { StratosTile } from "./StratosTile";
export { StratosVerticalTile } from "./StratosVerticalTile";
export { CommandosTile } from "./CommandosTile";
export { CommandosVerticalTile } from "./CommandosVerticalTile";
export { OutboundosTile } from "./OutboundosTile";
export { OutboundosVerticalTile } from "./OutboundosVerticalTile";
export { LucidorgTile } from "./LucidorgTile";
export { LucidorgVerticalTile } from "./LucidorgVerticalTile";
export { PlaybookTile } from "./PlaybookTile";
export { PlaybookVerticalTile } from "./PlaybookVerticalTile";
export { MaxTile } from "./MaxTile";
export { MaxVerticalTile } from "./MaxVerticalTile";
