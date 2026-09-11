export type WorkEntry = {
  slug: string;
  title: string;
  /** One line. Home page and work index. */
  summary: string;
  /** Role · Timeframe · Stack (handoff §6.0). */
  meta: string;
  /** Page description for search results and link previews. */
  description: string;
};

export const workEntries: WorkEntry[] = [
  {
    slug: "waivers",
    title: "Digital waivers and rider intake",
    summary:
      "Legally binding waivers across web, kiosk, and staff check-in — in two languages, with the data model to make them queryable.",
    meta: "Full-stack developer, embedded · 2025–present · TypeScript, React Router, MySQL, Zod",
    description:
      "Legally binding waivers across web, kiosk, and staff check-in, in two languages.",
  },
  {
    slug: "fleet",
    title: "Fleet and asset lifecycle",
    summary:
      "Vehicles from enrollment through prep, ride, service, and end of life, plus a system-wide overhaul of how usage metrics are recorded.",
    meta: "Full-stack developer, embedded · 2025–present · TypeScript, MySQL, React Router",
    description:
      "Vehicles from enrollment through end of life, and a system-wide metrics overhaul.",
  },
  {
    slug: "vehicle-orders",
    title: "Enterprise vehicle orders",
    summary:
      "Stage-gated B2B ordering with e-signature, inspection forms, and integration into a mainframe ERP.",
    meta: "Full-stack developer, embedded · 2026 · TypeScript, Node.js, MySQL",
    description:
      "Stage-gated B2B ordering with e-signature and mainframe ERP integration.",
  },
  {
    slug: "payments",
    title: "Payments, disputes, and money edges",
    summary:
      "Chargeback evidence workflows, Stripe Connect, gift cards, promotions, and insurance fees.",
    meta: "Full-stack developer, embedded · 2025–present · TypeScript, MySQL, Stripe",
    description:
      "Chargeback evidence workflows, Stripe Connect, gift cards, and promotions.",
  },
];

export function workEntry(slug: string): WorkEntry {
  const entry = workEntries.find((e) => e.slug === slug);
  if (!entry) throw new Error(`Unknown work entry: ${slug}`);
  return entry;
}

/**
 * v3 routes superseded by the v4 restructure (handoff §12). Kept as redirects
 * so any link already in the wild lands somewhere sensible rather than on a 404.
 */
export const supersededWorkRoutes: Record<string, string> = {
  "reservations-platform": "/work",
  "erp-integration": "/work/vehicle-orders",
  "data-integrity": "/work/fleet",
};
