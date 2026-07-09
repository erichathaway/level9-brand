"use client";
/**
 * @level9/brand — CounterToastDemo
 * Reference page exercising Counter (decimals + prefix) and Toast primitives.
 * NOT production UI. NOT test infrastructure. Drop this in a Next.js route to
 * verify the primitives render correctly after the Phase 7a install.
 *
 * Verification steps:
 *   1. Scroll the page down so the counter enters view.
 *      Observe: animates from $0.00 to $1,234.56 over 1200ms.
 *   2. Click "Trigger success toast".
 *      Observe: branded green toast appears top-right.
 *   3. Click "Trigger error toast".
 *      Observe: branded red toast appears top-right.
 */

import { Counter, Toaster, toast } from "../index";

export default function CounterToastDemo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030306",
        color: "rgba(255,255,255,0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        fontFamily: "inherit",
      }}
    >
      <Toaster />

      <h1 style={{ fontSize: "14px", letterSpacing: "0.1em", opacity: 0.5 }}>
        Phase 7a: Counter + Toast demo
      </h1>

      <div style={{ fontSize: "48px", fontWeight: 700 }}>
        <Counter
          target={1234.56}
          prefix="$"
          decimals={2}
          duration={1200}
        />
      </div>

      <p style={{ fontSize: "12px", opacity: 0.4 }}>
        Scroll into view to trigger the counter animation.
      </p>

      <div style={{ display: "flex", gap: "16px" }}>
        <button
          onClick={() => toast.success("Cost savings updated.")}
          style={{
            padding: "10px 20px",
            background: "rgba(16,185,129,0.15)",
            border: "1px solid #10b981",
            color: "#10b981",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Trigger success toast
        </button>

        <button
          onClick={() => toast.error("Threshold exceeded.")}
          style={{
            padding: "10px 20px",
            background: "rgba(239,68,68,0.15)",
            border: "1px solid #ef4444",
            color: "#ef4444",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Trigger error toast
        </button>

        <button
          onClick={() => toast.info("New session recorded.")}
          style={{
            padding: "10px 20px",
            background: "rgba(6,182,212,0.15)",
            border: "1px solid #06b6d4",
            color: "#06b6d4",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Trigger info toast
        </button>
      </div>
    </div>
  );
}
