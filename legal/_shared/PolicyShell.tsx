// PolicyShell.tsx — shared scaffolding for Privacy / Terms / Cookie pages.
// Every per-LLC policy component renders inside this shell to enforce:
//   - consistent heading, effective date, entity identification
//   - consistent [TEMPLATE] warning banner when placeholders remain
//   - consistent typography (reads brand tokens)
//
// The external-compliance text (Iubenda / Termly output) goes inside <section>
// children. Internal additions go in their own sections. This keeps the mix
// explicit and makes audits easy: sections flagged "[TEMPLATE]" haven't been
// populated yet.

import React from "react";
import type { LegalEntity } from "../entities";

export interface PolicyShellProps {
  entity: LegalEntity;
  docType: "privacy" | "terms" | "cookies";
  title: string;
  children: React.ReactNode;
  // Count of TEMPLATE placeholders still unpopulated (for the banner).
  // When this is >0 the shell renders a big yellow warning banner.
  templateSectionsRemaining?: number;
}

export function PolicyShell({
  entity,
  docType,
  title,
  children,
  templateSectionsRemaining = 0,
}: PolicyShellProps) {
  return (
    <article
      data-legal-doc={docType}
      data-llc={entity.key}
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "48px 24px 96px",
        fontSize: 15,
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.8)",
      }}
    >
      {templateSectionsRemaining > 0 && (
        <div
          role="alert"
          style={{
            background: "rgba(234,179,8,0.1)",
            border: "1px solid rgba(234,179,8,0.35)",
            color: "rgb(234,179,8)",
            padding: "12px 16px",
            borderRadius: 8,
            marginBottom: 24,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          ⚠ TEMPLATE — {templateSectionsRemaining} section
          {templateSectionsRemaining === 1 ? "" : "s"} still contain placeholder
          text. Do NOT deploy to production until every [PASTE IUBENDA OUTPUT
          HERE] block is replaced.
        </div>
      )}

      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
          {title}
        </h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          {entity.entityType === "Individual" ? entity.displayName : entity.legalName}
          {" · "}Effective {entity.effectiveDate}
        </p>
      </header>

      {children}

      <footer
        style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: 13,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        <p>
          Questions about this {docType} notice? Contact{" "}
          <a
            href={`mailto:${entity.privacyEmail ?? entity.contactEmail}`}
            style={{ color: "rgb(34,211,238)", textDecoration: "underline" }}
          >
            {entity.privacyEmail ?? entity.contactEmail}
          </a>
          .
        </p>
      </footer>
    </article>
  );
}

// Helper for in-doc sections with template markers.
export function TemplateSection({
  heading,
  source,
  children,
}: {
  heading: string;
  /** "iubenda" | "termly" | "internal" — just tags the section visibly in audit mode */
  source: "iubenda" | "termly" | "internal" | "shared";
  children: React.ReactNode;
}) {
  // WCAG AA compliance: these badge colors render at 10px on a #030306 body.
  // The palette uses lightened tints of each canonical accent so contrast is
  // at least 4.5:1 against the dark bg. Do not re-dim without re-auditing.
  const srcBadge = {
    iubenda: { label: "Iubenda", color: "rgb(52,211,153)" },  // emerald-400
    termly: { label: "Termly", color: "rgb(96,165,250)" },     // blue-400
    internal: { label: "Internal", color: "rgb(167,139,250)" }, // violet-400
    shared: { label: "Shared", color: "rgb(148,163,184)" },    // slate-400
  }[source];

  return (
    <section
      data-legal-section={source}
      style={{ marginBottom: 32 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 }}>
          {heading}
        </h2>
        <span
          style={{
            fontSize: 10,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: 999,
            color: srcBadge.color,
            border: `1px solid ${srcBadge.color}`,
          }}
          title={`Content source: ${srcBadge.label}`}
        >
          {srcBadge.label}
        </span>
      </div>
      {children}
    </section>
  );
}

// Placeholder block — used inside TemplateSection when external content hasn't been pasted yet.
export function PasteExternalHere({ source, note }: { source: "iubenda" | "termly"; note?: string }) {
  return (
    <div
      style={{
        background: "rgba(234,179,8,0.06)",
        border: "1px dashed rgba(234,179,8,0.4)",
        padding: "16px 20px",
        borderRadius: 6,
        color: "rgb(234,179,8)",
        fontFamily: "monospace",
        fontSize: 13,
      }}
    >
      [PASTE {source.toUpperCase()} OUTPUT HERE]
      {note && <div style={{ marginTop: 8, opacity: 0.85 }}>{note}</div>}
    </div>
  );
}
