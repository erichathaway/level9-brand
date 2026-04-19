"use client";
/** Reusable Forge cube — used both on /architect/cube-lab/forge (full size)
 *  and inline in home page section 7 (scaled down, wrapped in a link).
 *  Popup flips above/below the hovered face based on face position so it
 *  never falls off the top of the frame.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Product shape (inline, tech-facts) ─── */
export type ForgeProduct = {
  id: string;
  name: string;
  short: string;
  color: string;
  rgb: [number, number, number];
  icon: string;
  specs: string[];
  stack: string[];
  role: string;
  /** Fixed side of the cube where the popup anchors for THIS product. */
  side: "left" | "right";
};

type Props = {
  products: ForgeProduct[];
  /** If provided, the whole cube becomes a link pointing here.
   *  Hover still triggers the popup; any click navigates. */
  href?: string;
  /** Outer wrapper class — controls size via CSS. Cube fills parent. */
  className?: string;
  /** Skip dust phase for already-visible inline use (jumps to live faster). */
  skipDust?: boolean;
  /** Whether hover popups appear at all (pass false to render just the cube). */
  showPopup?: boolean;
};

/* ─── 3D math ─── */
type V3 = [number, number, number];
const rY = (x: number, z: number, a: number): [number, number] => [x * Math.cos(a) - z * Math.sin(a), x * Math.sin(a) + z * Math.cos(a)];
const rX = (y: number, z: number, a: number): [number, number] => [y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
const project = (v: V3, cx: number, cy: number, f: number): [number, number, number] => {
  const s = f / (f + v[2]);
  return [cx + v[0] * s, cy + v[1] * s, s];
};

function buildCube(size: number) {
  const n = 4;
  const h = size / 2;
  const s = size / n;
  const verts: V3[] = [];
  const key = new Map<string, number>();
  const add = (ix: number, iy: number, iz: number) => {
    const k = `${ix},${iy},${iz}`;
    if (key.has(k)) return key.get(k)!;
    const idx = verts.length;
    verts.push([ix * s - h, iy * s - h, iz * s - h]);
    key.set(k, idx);
    return idx;
  };
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  const addEdge = (a: number, b: number) => {
    const k = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (edgeSet.has(k)) return;
    edgeSet.add(k);
    edges.push([a, b]);
  };
  for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
    add(i, j, 0); add(i, j, n); add(i, 0, j); add(i, n, j); add(0, i, j); add(n, i, j);
  }
  for (let i = 0; i <= n; i++) for (let j = 0; j < n; j++) {
    addEdge(add(i, j, 0), add(i, j + 1, 0)); addEdge(add(j, i, 0), add(j + 1, i, 0));
    addEdge(add(i, j, n), add(i, j + 1, n)); addEdge(add(j, i, n), add(j + 1, i, n));
    addEdge(add(i, 0, j), add(i, 0, j + 1)); addEdge(add(j, 0, i), add(j + 1, 0, i));
    addEdge(add(i, n, j), add(i, n, j + 1)); addEdge(add(j, n, i), add(j + 1, n, i));
    addEdge(add(0, i, j), add(0, i, j + 1)); addEdge(add(0, j, i), add(0, j + 1, i));
    addEdge(add(n, i, j), add(n, i, j + 1)); addEdge(add(n, j, i), add(n, j + 1, i));
  }
  // 6 faces — one per product (cube faces). product index assigned by caller position in products[].
  const faces = [
    { id: 0, normal: [0, 0, -1] as V3, corners: [[-h,-h,-h],[h,-h,-h],[h,h,-h],[-h,h,-h]] as V3[] },
    { id: 1, normal: [0, 0, 1] as V3,  corners: [[-h,-h,h],[h,-h,h],[h,h,h],[-h,h,h]] as V3[] },
    { id: 2, normal: [-1, 0, 0] as V3, corners: [[-h,-h,-h],[-h,-h,h],[-h,h,h],[-h,h,-h]] as V3[] },
    { id: 3, normal: [1, 0, 0] as V3,  corners: [[h,-h,-h],[h,-h,h],[h,h,h],[h,h,-h]] as V3[] },
    { id: 4, normal: [0, -1, 0] as V3, corners: [[-h,-h,-h],[h,-h,-h],[h,-h,h],[-h,-h,h]] as V3[] },
    { id: 5, normal: [0, 1, 0] as V3,  corners: [[-h,h,-h],[h,h,-h],[h,h,h],[-h,h,h]] as V3[] },
  ];
  return { verts, edges, faces };
}

export default function ForgeCube({ products, href, className, skipDust = false, showPopup = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const [hoveredFace, setHoveredFace] = useState<number | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const faceCentersRef = useRef<{ id: number; x: number; y: number; z: number }[]>([]);
  const canvasDimRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || products.length < 6) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px"; canvas.style.height = rect.height + "px";
      canvasDimRef.current = { w: rect.width, h: rect.height };
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas.parentElement!);

    // scale cube to canvas — 42% of shortest dim works well
    const initialRect = canvas.parentElement!.getBoundingClientRect();
    const CUBE_SIZE = Math.min(initialRect.width, initialRect.height) * 0.42;
    const FOCAL = 900;
    const { verts, edges, faces } = buildCube(CUBE_SIZE);
    const start = performance.now();

    const dust = skipDust ? [] : verts.flatMap((_, i) =>
      Array.from({ length: 3 }, () => ({
        vertIdx: i,
        originX: (Math.random() - 0.5) * 1600,
        originY: (Math.random() - 0.5) * 1000,
        delay: Math.random() * 1.2,
      }))
    );

    const tracers = Array.from({ length: 6 }, (_, i) => ({
      e: Math.floor((edges.length / 6) * i),
      p: 0,
      speed: 0.008 + Math.random() * 0.004,
    }));

    const PHASE_TIMES = skipDust
      ? { dust: 0, wire: 900, glass: 800 }
      : { dust: 2200, wire: 3200, glass: 2200 };
    const TOTAL_BUILD = PHASE_TIMES.dust + PHASE_TIMES.wire + PHASE_TIMES.glass;

    const render = () => {
      const now = performance.now();
      const t = now - start;
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const cx = cw / 2;
      const cy = ch / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);

      const live = t > TOTAL_BUILD;
      const aY = (t * 0.00022) % (Math.PI * 2);
      const aX = t * 0.00014 + 0.3;

      const rotate = (v: V3): V3 => {
        const [rx, rz] = rY(v[0], v[2], aY);
        const [ry, rz2] = rX(v[1], rz, aX);
        return [rx, ry, rz2];
      };

      const projected: [number, number, number][] = verts.map((v) => {
        const r = rotate(v);
        return project(r, cx, cy, FOCAL);
      });

      /* ─── dust phase ─── */
      if (!skipDust && t < PHASE_TIMES.dust) {
        const pct = t / PHASE_TIMES.dust;
        for (const d of dust) {
          const local = Math.max(0, Math.min(1, (pct - d.delay * 0.3) * 1.6));
          const e = 1 - Math.pow(1 - local, 3);
          const [tx, ty] = projected[d.vertIdx];
          const px = d.originX + (tx - d.originX) * e;
          const py = d.originY + (ty - d.originY) * e;
          const alpha = 0.1 + e * 0.7;
          ctx.fillStyle = `rgba(139,92,246,${alpha * 0.5})`;
          ctx.beginPath(); ctx.arc(px, py, 1, 0, Math.PI * 2); ctx.fill();
        }
      }

      /* ─── wire phase ─── */
      const wireT = Math.max(0, t - PHASE_TIMES.dust);
      const edgeProgress = live ? 1 : Math.min(1, wireT / PHASE_TIMES.wire);
      const edgesToDraw = Math.floor(edges.length * edgeProgress);
      for (let i = 0; i < edgesToDraw; i++) {
        const [a, b] = edges[i];
        const [ax, ay, asc] = projected[a];
        const [bx, by, bsc] = projected[b];
        const depth = (asc + bsc) / 2;
        const alpha = 0.06 + depth * 0.16;
        ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
        ctx.lineWidth = 0.4 + depth * 0.4;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      }

      if (t > PHASE_TIMES.dust * 0.6) {
        for (const [px, py, ps] of projected) {
          const alpha = 0.25 + ps * 0.25;
          ctx.fillStyle = `rgba(200,200,255,${alpha})`;
          ctx.beginPath(); ctx.arc(px, py, 0.8 + ps * 0.7, 0, Math.PI * 2); ctx.fill();
        }
      }

      /* ─── glass phase: product faces ─── */
      const glassT = Math.max(0, t - PHASE_TIMES.dust - PHASE_TIMES.wire);
      const glassOpacity = live ? 1 : Math.min(1, glassT / PHASE_TIMES.glass);

      type FaceRender = { face: typeof faces[0]; corners2d: [number, number, number][]; z: number };
      const rendered: FaceRender[] = faces.map((f) => {
        const corners2d = f.corners.map((c) => {
          const r = rotate(c);
          return project(r, cx, cy, FOCAL);
        });
        const z = corners2d.reduce((s, p) => s + (1 - p[2]), 0) / 4;
        return { face: f, corners2d, z };
      }).sort((a, b) => a.z - b.z);

      faceCentersRef.current = rendered.map((r) => {
        const cxs = r.corners2d.reduce((s, p) => s + p[0], 0) / 4;
        const cys = r.corners2d.reduce((s, p) => s + p[1], 0) / 4;
        return { id: r.face.id, x: cxs, y: cys, z: r.z };
      });

      if (glassOpacity > 0) {
        for (const r of rendered) {
          const [, , rz2] = rotate(r.face.normal);
          const facing = Math.max(0, -rz2);
          if (facing < 0.05) continue;
          const p = products[r.face.id];
          if (!p) continue;
          const isHover = hoveredFace === r.face.id;
          const faceAlpha = glassOpacity * (0.08 + facing * 0.18) * (isHover ? 2 : 1);

          ctx.beginPath();
          ctx.moveTo(r.corners2d[0][0], r.corners2d[0][1]);
          for (let i = 1; i < r.corners2d.length; i++) ctx.lineTo(r.corners2d[i][0], r.corners2d[i][1]);
          ctx.closePath();

          const cxs = r.corners2d.reduce((s, v) => s + v[0], 0) / 4;
          const cys = r.corners2d.reduce((s, v) => s + v[1], 0) / 4;
          const grad = ctx.createRadialGradient(cxs, cys, 5, cxs, cys, 200);
          grad.addColorStop(0, `rgba(${p.rgb.join(",")},${faceAlpha * 1.3})`);
          grad.addColorStop(1, `rgba(${p.rgb.join(",")},${faceAlpha * 0.3})`);
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = `rgba(${p.rgb.join(",")},${glassOpacity * (isHover ? 0.9 : 0.5)})`;
          ctx.lineWidth = isHover ? 1.8 : 0.8;
          ctx.stroke();

          if (facing > 0.35) {
            ctx.save();
            ctx.font = `900 ${Math.round(36 + facing * 24)}px Inter, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = `rgba(${p.rgb.join(",")},${glassOpacity * (isHover ? 1 : 0.85)})`;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = isHover ? 20 : 8;
            ctx.fillText(p.icon, cxs, cys);
            ctx.restore();

            ctx.save();
            ctx.font = `600 ${Math.round(10 + facing * 2)}px "JetBrains Mono", monospace`;
            ctx.textAlign = "center";
            ctx.fillStyle = `rgba(${p.rgb.join(",")},${glassOpacity * 0.7})`;
            ctx.fillText(p.name.toUpperCase(), cxs, cys + 38);
            ctx.restore();
          }
        }
      }

      /* tracers — white pips with soft halo, less pronounced */
      if (wireT > 300) {
        for (const tr of tracers) {
          tr.p += tr.speed;
          if (tr.p >= 1) { tr.p = 0; tr.e = (tr.e + 1) % edges.length; }
          const [a, b] = edges[tr.e];
          const [ax, ay] = projected[a];
          const [bx, by] = projected[b];
          const tx = ax + (bx - ax) * tr.p;
          const ty = ay + (by - ay) * tr.p;
          const g = ctx.createRadialGradient(tx, ty, 0, tx, ty, 7);
          g.addColorStop(0, "rgba(255,255,255,0.38)");
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(tx, ty, 7, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "rgba(255,255,255,0.8)";
          ctx.beginPath(); ctx.arc(tx, ty, 1.1, 0, Math.PI * 2); ctx.fill();
        }
      }

      /* hit-test */
      if (live) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        let best: number | null = null;
        let bestZ = -Infinity;
        for (const fc of faceCentersRef.current) {
          const d = Math.hypot(fc.x - mx, fc.y - my);
          if (d < 100 && fc.z > bestZ) {
            const face = faces[fc.id];
            const [, , rz2] = rotate(face.normal);
            if (-rz2 > 0.25) { best = fc.id; bestZ = fc.z; }
          }
        }
        if (best !== hoveredFace) setHoveredFace(best);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, skipDust]);

  const hoveredProduct = hoveredFace !== null ? products[hoveredFace] : null;

  const body = (
    <div className={`relative w-full h-full ${className ?? ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer" />
      <div
        className="absolute inset-0"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }}
        onMouseLeave={() => { mouseRef.current = { x: -9999, y: -9999 }; }}
      />
      {/* Popup: rendered only while a face is hovered. When the mouse leaves,
        *  the card unmounts so there's no ghost/opacity-0 element lingering. */}
      {showPopup && hoveredProduct && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(300px, 32vw)",
            ...(hoveredProduct.side === "left"
              ? { right: "calc(100% + 24px)" }
              : { left: "calc(100% + 24px)" }),
          }}
        >
          <div
            className="rounded-xl border p-4 backdrop-blur-md"
            style={{
              borderColor: `${hoveredProduct.color}40`,
              background: `linear-gradient(135deg, rgba(0,0,0,0.88), ${hoveredProduct.color}08)`,
              boxShadow: `0 20px 60px ${hoveredProduct.color}30, 0 0 0 1px ${hoveredProduct.color}20`,
            }}
          >
            <div className="text-[9px] font-mono tracking-[0.35em] uppercase mb-2" style={{ color: `${hoveredProduct.color}cc` }}>
              {hoveredProduct.short}
            </div>
            <div className="text-lg font-black text-white/95 mb-2 leading-tight">{hoveredProduct.name}</div>
            <div className="text-white/55 text-xs mb-3 leading-relaxed italic">{hoveredProduct.role}</div>
            <div className="space-y-1 pb-3 mb-3 border-b border-white/[0.08]">
              {hoveredProduct.specs.map((s) => (
                <div key={s} className="text-[11px] font-mono text-white/70 flex gap-2 items-start">
                  <span style={{ color: hoveredProduct.color }}>›</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {hoveredProduct.stack.slice(0, 5).map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-mono px-2 py-0.5 rounded border tracking-wide"
                  style={{
                    borderColor: `${hoveredProduct.color}30`,
                    color: `${hoveredProduct.color}dd`,
                    background: `${hoveredProduct.color}08`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            {/* Subtle "click for more" hint — tells the user this goes somewhere */}
            <div className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/35 flex items-center gap-1.5">
              <span style={{ color: `${hoveredProduct.color}aa` }}>→</span>
              <span>Architecture detail</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full h-full" aria-label="Open Architect">
        {body}
      </Link>
    );
  }
  return body;
}
