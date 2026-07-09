"use client";
/**
 * @level9/brand — Toast
 * Branded toast notification system wrapping sonner.
 *
 * Usage:
 *   // Mount once near the root of your app:
 *   import { Toaster } from "@level9/brand/components/motion";
 *   <Toaster />
 *
 *   // Trigger toasts from anywhere:
 *   import { toast } from "@level9/brand/components/motion";
 *   toast.success("Saved.");
 *   toast.error("Something went wrong.");
 *   toast("Hello from Level9.");
 *
 * Brand token mapping:
 *   success  -> accent.emerald  (#10b981)
 *   error    -> accent.red      (#ef4444)
 *   info     -> accent.cyan     (#06b6d4)
 *   default  -> accent.violet   (#8b5cf6)
 *
 * Enter/exit animation: opacity + translateY, matching FadeIn primitive curve
 * (0.8s ease, translateY 24px). Sonner handles the animation via its built-in
 * system; we layer brand colors via toastOptions.style.
 *
 * Position: top-right (brand default). Override via the `position` prop.
 */

import type { CSSProperties } from "react";
import { Toaster as SonnerToaster, toast } from "sonner";
import type { ToasterProps as SonnerToasterProps } from "sonner";
import { bg, accent, text, border } from "../../tokens/colors";

export type { ExternalToast } from "sonner";

/** Props for the branded Toaster mount component. Extends sonner's ToasterProps. */
export type ToasterProps = SonnerToasterProps;

/** Re-export the sonner `toast` helper under the brand surface. */
export { toast };

/**
 * Branded Toaster mount component.
 * Drop this once near the root of your app (e.g. in layout.tsx).
 * All toast() calls anywhere in the tree will render here.
 */
export function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      position="top-right"
      richColors={false}
      {...props}
      toastOptions={{
        ...props.toastOptions,
        style: {
          background: bg.elevated,
          border: `1px solid ${border.medium}`,
          color: text.primary,
          borderRadius: "8px",
          fontFamily: "inherit",
          fontSize: "14px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
          ...props.toastOptions?.style,
        },
        classNames: {
          ...props.toastOptions?.classNames,
        },
      }}
      theme="dark"
      style={{
        "--normal-bg": bg.elevated,
        "--normal-border": border.medium,
        "--normal-text": text.primary,
        "--success-bg": bg.elevated,
        "--success-border": accent.emerald,
        "--success-text": accent.emerald,
        "--error-bg": bg.elevated,
        "--error-border": accent.red,
        "--error-text": accent.red,
        "--info-bg": bg.elevated,
        "--info-border": accent.cyan,
        "--info-text": accent.cyan,
        "--warning-bg": bg.elevated,
        "--warning-border": accent.amber,
        "--warning-text": accent.amber,
      } as CSSProperties}
    />
  );
}

export default Toaster;
