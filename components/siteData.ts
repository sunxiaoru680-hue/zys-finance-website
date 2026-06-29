import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Landmark,
  Plane,
  ReceiptText,
  Scale,
  ShieldCheck
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/china-company-registration", label: "China Registration" },
  { href: "/tax-accounting", label: "Tax & Accounting" },
  { href: "/visa-services", label: "Visa Services" },
  { href: "/business-licenses", label: "Business Licenses" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "China Company Registration",
    href: "/china-company-registration",
    icon: Landmark,
    description:
      "Practical support for foreign-invested enterprises, representative offices, entity structure, company name approval, registered address coordination, and compliance setup."
  },
  {
    title: "Overseas Company Registration",
    href: "/services#overseas-registration",
    icon: Globe2,
    description:
      "Overseas entity setup support for Chinese entrepreneurs, including structure review, document preparation, registration coordination, and ongoing maintenance guidance."
  },
  {
    title: "Tax Agency Services",
    href: "/tax-accounting",
    icon: ReceiptText,
    description:
      "Tax filing calendars, declaration preparation, tax authority communication, and ongoing agency support for domestic and international operations."
  },
  {
    title: "Bookkeeping & Accounting",
    href: "/tax-accounting",
    icon: Calculator,
    description:
      "Monthly bookkeeping, voucher review, financial statements, management accounts, and orderly accounting records aligned with China compliance requirements."
  },
  {
    title: "Visa Services",
    href: "/visa-services",
    icon: Plane,
    description:
      "Business, work, residence, and family-related visa guidance for foreign founders, executives, employees, and accompanying family members in China."
  },
  {
    title: "Business Licenses & Qualifications",
    href: "/business-licenses",
    icon: FileCheck2,
    description:
      "Sector-specific license assessment and application coordination for China market entry, operating permits, and regulated business qualifications."
  },
  {
    title: "Tax Consulting",
    href: "/tax-accounting#tax-consulting",
    icon: Scale,
    description:
      "Clear, decision-ready advice on China tax obligations, VAT, corporate income tax, withholding tax, individual income tax, and cross-border tax matters."
  },
  {
    title: "Tax Planning",
    href: "/tax-accounting#tax-planning",
    icon: Banknote,
    description:
      "Commercially grounded tax planning for entity setup, supply chains, profit repatriation, transfer pricing exposure, and founder compensation."
  },
  {
    title: "Audit Services",
    href: "/tax-accounting#audit",
    icon: ClipboardCheck,
    description:
      "Annual audit coordination, statutory reporting preparation, due diligence support, and audit-ready accounting records for shareholders and business stakeholders."
  }
];

export const strengths = [
  {
    title: "Cross-Border Perspective",
    icon: Globe2,
    text: "We support foreign investors entering China and Chinese clients expanding overseas, giving each engagement a practical international business perspective."
  },
  {
    title: "Compliance-Led Delivery",
    icon: ShieldCheck,
    text: "Registration, tax, accounting, visas, and licenses are handled with careful attention to documentation, timelines, local procedures, and risk control."
  },
  {
    title: "Business-Focused Advice",
    icon: BriefcaseBusiness,
    text: "Our recommendations consider ownership, operations, payroll, invoicing, tax exposure, and long-term maintenance, not only a one-time application."
  },
  {
    title: "Clear Process",
    icon: BadgeCheck,
    text: "Clients receive transparent requirements, milestone updates, and practical next steps from consultation through post-registration compliance."
  }
];

export const processSteps = [
  "Initial consultation and business objective review",
  "Entity, license, tax, and visa requirement assessment",
  "Document checklist and application preparation",
  "Filing coordination with the relevant authorities",
  "Post-approval tax, accounting, and compliance handover"
];
