// entities.ts — canonical LLC records.
// Source of truth for legal attribution across all Level9 portfolio sites.
// If you change an LLC's name, registered address, or governing law, change it HERE.
// All LegalFooter + PrivacyPolicy + TermsOfService + CookiePolicy components read from this.

export type EntityKey = "lucidorg" | "nextgenintern" | "level9os" | "eric-personal";

export interface LegalEntity {
  key: EntityKey;
  displayName: string;            // shown in footers + headers
  legalName: string;              // exact registered legal name (for contracts)
  entityType: "LLC" | "Individual";
  jurisdiction: string;           // state of formation — e.g. "Delaware"
  registeredAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  governingLaw: string;           // e.g. "Laws of the State of Delaware, USA"
  disputeVenue: string;           // e.g. "state or federal courts in Delaware"
  contactEmail: string;           // primary legal contact
  privacyEmail?: string;          // privacy-specific contact (if different)
  supportEmail?: string;
  effectiveDate: string;          // ISO date of last legal doc update
  // Compliance scope — drives which sections render in templates:
  complies: {
    gdpr: boolean;                // if true, include EU/UK/EEA section
    ccpa: boolean;                // if true, include California resident rights
    cprasensitive: boolean;       // include CPRA sensitive personal info section
    canSpam: boolean;             // marketing emails → include CAN-SPAM disclosures
    childrenUnder13: boolean;     // COPPA — NextGen will be true
  };
}

// IMPORTANT: these placeholder values MUST be filled with real registered details
// before any site goes live. Commit actual values separately and flag in PR.
const PLACEHOLDER_ADDRESS_LUCIDORG = {
  line1: "[REGISTERED ADDRESS LINE 1]",
  city: "[CITY]",
  state: "[STATE]",
  postalCode: "[ZIP]",
  country: "USA",
};

export const ENTITIES: Record<EntityKey, LegalEntity> = {
  lucidorg: {
    key: "lucidorg",
    displayName: "LucidORG",
    legalName: "LucidORG LLC",
    entityType: "LLC",
    jurisdiction: "Delaware",
    registeredAddress: PLACEHOLDER_ADDRESS_LUCIDORG,
    governingLaw: "Laws of the State of Delaware, USA",
    disputeVenue: "state or federal courts located in Delaware",
    contactEmail: "legal@lucidorg.com",
    privacyEmail: "privacy@lucidorg.com",
    supportEmail: "support@lucidorg.com",
    effectiveDate: "2026-04-19",
    complies: {
      gdpr: true,
      ccpa: true,
      cprasensitive: true,
      canSpam: true,
      childrenUnder13: false,
    },
  },
  nextgenintern: {
    key: "nextgenintern",
    displayName: "NextGen Interns",
    legalName: "NextGen Interns LLC",
    entityType: "LLC",
    jurisdiction: "[STATE OF FORMATION — CONFIRM]",
    registeredAddress: {
      line1: "[REGISTERED ADDRESS LINE 1]",
      city: "[CITY]",
      state: "[STATE]",
      postalCode: "[ZIP]",
      country: "USA",
    },
    governingLaw: "[STATE] law",
    disputeVenue: "state or federal courts located in [STATE]",
    contactEmail: "legal@nextgeninterns.com",
    privacyEmail: "privacy@nextgeninterns.com",
    supportEmail: "hello@nextgeninterns.com",
    effectiveDate: "2026-04-19",
    complies: {
      gdpr: true,
      ccpa: true,
      cprasensitive: true,
      canSpam: true,
      childrenUnder13: true, // COPPA applicable — youth/intern audience
    },
  },
  level9os: {
    key: "level9os",
    displayName: "Level9OS",
    legalName: "Level9OS LLC",
    entityType: "LLC",
    jurisdiction: "[STATE OF FORMATION — CONFIRM]",
    registeredAddress: {
      line1: "[REGISTERED ADDRESS LINE 1]",
      city: "[CITY]",
      state: "[STATE]",
      postalCode: "[ZIP]",
      country: "USA",
    },
    governingLaw: "[STATE] law",
    disputeVenue: "state or federal courts located in [STATE]",
    contactEmail: "legal@level9os.com",
    privacyEmail: "privacy@level9os.com",
    supportEmail: "hello@level9os.com",
    effectiveDate: "2026-04-19",
    complies: {
      gdpr: true,
      ccpa: true,
      cprasensitive: false,
      canSpam: true,
      childrenUnder13: false,
    },
  },
  "eric-personal": {
    key: "eric-personal",
    displayName: "Eric Hathaway",
    legalName: "Eric Hathaway",
    entityType: "Individual",
    jurisdiction: "individual — no corporate entity",
    registeredAddress: {
      line1: "N/A — personal site, no commercial operations",
      city: "",
      state: "",
      postalCode: "",
      country: "USA",
    },
    governingLaw: "Laws of the State where Eric Hathaway resides",
    disputeVenue: "courts of competent jurisdiction",
    contactEmail: "hello@erichathaway.com",
    effectiveDate: "2026-04-19",
    complies: {
      gdpr: true, // personal site still needs to handle EU visitor data per GDPR
      ccpa: false,
      cprasensitive: false,
      canSpam: false, // no marketing emails
      childrenUnder13: false,
    },
  },
};

export function getEntity(key: EntityKey): LegalEntity {
  const e = ENTITIES[key];
  if (!e) throw new Error(`Unknown legal entity: ${key}`);
  return e;
}
