/**
 * Single source of truth for all site copy.
 *
 * There is no CMS: editing content = editing this file. Because it's typed,
 * you get autocomplete while editing and a compile error if a field is
 * missing or mistyped.
 *
 * Positioning note: this copy is written B2B — we deliver to healthcare
 * *businesses* (hospitals, pharmacies, clinics), not to patients. The client
 * is still finalizing B2B vs B2C; if that flips, nearly all edits happen right
 * here rather than across components.
 */

/** A lucide-react icon name. The rendering component maps it to the real icon. */
export type IconName =
  | "Truck"
  | "CalendarClock"
  | "Siren"
  | "PackageCheck"
  | "ShieldCheck"
  | "BadgeCheck"
  | "Headset"
  | "Building2";

export interface NavLink {
  label: string;
  /** In-page anchor, e.g. "#services". */
  href: string;
}

export interface CtaLink {
  label: string;
  /** tel: or mailto: only — this site has no forms. */
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: IconName;
}

export interface SiteContent {
  name: string;
  tagline: string;
  nav: NavLink[];
  hero: {
    headline: string;
    subhead: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  about: {
    heading: string;
    lead: string;
    body: string[];
  };
  services: {
    heading: string;
    intro: string;
    items: Service[];
  };
  whyUs: {
    heading: string;
    intro: string;
    items: ValueProp[];
  };
  contact: {
    heading: string;
    intro: string;
    /** Human-readable phone for display. */
    phone: string;
    /** tel: href — digits only with country code. */
    phoneHref: string;
    email: string;
    addressLines: string[];
    hours: string;
  };
  footer: {
    blurb: string;
  };
}

// TODO(client): replace every PLACEHOLDER value below with the real details.
// Placeholders use reserved-for-fiction values (555-01xx phone, .example domain).
export const siteContent: SiteContent = {
  name: "KGeeMediWorld",
  tagline: "Your dependable medical supply partner",

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "The medical supplies your facility depends on — delivered on time.",
    subhead:
      "KGeeMediWorld is a wholesale medical supply delivery partner for hospitals, pharmacies, and clinics. Dependable stock, fast turnaround, and a team that treats your supply chain like it matters.",
    primaryCta: { label: "Call to order", href: "tel:+15550100199" },
    secondaryCta: { label: "Email us", href: "mailto:orders@kgeemediworld.example" },
  },

  about: {
    heading: "Who we are",
    lead: "A medical supply distributor built around one promise: your shelves stay stocked.",
    body: [
      "KGeeMediWorld supplies the healthcare businesses that care for everyone else. We deliver the consumables, equipment, and everyday essentials that hospitals, pharmacies, and clinics rely on — sourced from vetted manufacturers and delivered on a schedule you can plan around.",
      "We're not a marketplace or a middleman you have to chase for updates. We're a delivery partner: real people, predictable timelines, and a catalog broad enough to consolidate your ordering with a single dependable source.",
    ],
  },

  services: {
    heading: "What we deliver",
    intro: "End-to-end medical supply delivery, scaled to your facility's volume.",
    items: [
      {
        title: "Bulk supply delivery",
        description:
          "Wholesale quantities of consumables, PPE, wound care, and diagnostics — delivered to your loading dock, not your doorstep.",
        icon: "Truck",
      },
      {
        title: "Scheduled replenishment",
        description:
          "Set recurring deliveries matched to your usage so critical items never run low between orders.",
        icon: "CalendarClock",
      },
      {
        title: "Emergency restock",
        description:
          "Short-notice and same-day restocking for the moments when a shortfall isn't an option.",
        icon: "Siren",
      },
      {
        title: "One broad catalog",
        description:
          "Consolidate ordering across hundreds of medical SKUs with a single supplier and a single invoice.",
        icon: "PackageCheck",
      },
    ],
  },

  whyUs: {
    heading: "Why facilities choose us",
    intro: "The difference is dependability — measured in on-time deliveries, not promises.",
    items: [
      {
        title: "On time, every time",
        description: "Deliveries you can schedule around, with proactive updates if anything changes.",
        icon: "ShieldCheck",
      },
      {
        title: "Vetted, compliant sourcing",
        description: "Products from manufacturers we've vetted, so quality and documentation are never in question.",
        icon: "BadgeCheck",
      },
      {
        title: "A real account team",
        description: "Talk to people who know your facility — not a ticket queue.",
        icon: "Headset",
      },
      {
        title: "Built for facilities",
        description: "Dock delivery, bulk pricing, and ordering workflows designed for healthcare operations.",
        icon: "Building2",
      },
    ],
  },

  contact: {
    heading: "Get in touch",
    intro:
      "Ready to simplify your medical supply chain? Reach us directly — a real person will help you set up an account or place an order.",
    phone: "(555) 010-0199",
    phoneHref: "tel:+15550100199",
    email: "orders@kgeemediworld.example",
    addressLines: ["123 Distribution Way", "Suite 200", "Springfield, ST 00000"],
    hours: "Monday–Friday, 8:00 AM – 6:00 PM",
  },

  footer: {
    blurb: "Wholesale medical supply delivery for hospitals, pharmacies, and clinics.",
  },
};
