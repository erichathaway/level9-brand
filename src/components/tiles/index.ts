/**
 * @level9/brand/components/tiles — canonical animated + portrait tile set.
 *
 * 18 components total:
 *   - TileFrame + VerticalTileFrame (shared 1200x630 and 1080x1920 chrome)
 *   - 6 landscape product tiles: Stratos, Commandos, Outboundos, Lucidorg,
 *     Playbook, Max
 *   - 6 portrait (vertical) product tiles: same six, 1080x1920 variants
 *   - 2 umbrella landscape tiles: Level9os (the company), Erichathaway (the person)
 *   - 2 umbrella vertical tiles: same two, 1080x1920 variants
 *
 * Umbrella tiles are bespoke (do NOT use TileFrame) because Level9OS is the
 * company itself and Eric is a person, not a product. They reuse the visual
 * rhythm but customize the chrome (no Level9 co-sign in the corner, custom
 * status chips, custom bottom-band content).
 *
 * Static SVG counterparts (one per tile, 8 total) live at
 * @level9/brand/assets/tiles/static/*.svg. They are copied into each consumer
 * site's public/tiles/static/ folder by scripts/sync-tiles.mjs on postinstall.
 *
 * Consumers:
 *   import { StratosTile, Level9osTile, ErichathawayTile } from "@level9/brand/components/tiles";
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

// Umbrella tiles (not products): Level9OS the company, Eric the person.
export { Level9osTile } from "./Level9osTile";
export { Level9osVerticalTile } from "./Level9osVerticalTile";
export { ErichathawayTile } from "./ErichathawayTile";
export { ErichathawayVerticalTile } from "./ErichathawayVerticalTile";
