import {
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Landmark,
  Plane,
  ShieldCheck,
  Timer
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/services/company-registration-in-china", label: "China Registration" },
  { href: "/tax-accounting", label: "Tax & Accounting" },
  { href: "/services/china-visa-service", label: "Visa Services" },
  { href: "/services/business-license", label: "Business Licenses" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "China Company Registration",
    href: "/services/company-registration-in-china",
    icon: Landmark,
    description:
      "End-to-end support for foreign investors establishing companies in China, including entity structure, name approval, business scope review, registered address coordination, and post-registration compliance."
  },
  {
    title: "Accounting & Bookkeeping",
    href: "/services/bookkeeping",
    icon: Calculator,
    description:
      "Monthly bookkeeping, accounting services in China, voucher review, financial statements, management reports, and organized records for audit-ready compliance."
  },
  {
    title: "Tax Advisory",
    href: "/services/tax-consulting",
    icon: ShieldCheck,
    description:
      "Practical China tax advisory for VAT, corporate income tax, cross-border payments, withholding tax, individual income tax, and tax authority communication."
  },
  {
    title: "Tax Planning",
    href: "/services/tax-planning",
    icon: ClipboardCheck,
    description:
      "Commercially grounded tax planning for entity structures, founder compensation, invoicing models, profit repatriation, and China expansion decisions."
  },
  {
    title: "Audit Services",
    href: "/services/audit-services",
    icon: ClipboardCheck,
    description:
      "Annual audit coordination, statutory reporting preparation, due diligence support, accounting record review, and compliance guidance for shareholders and management teams."
  },
  {
    title: "Business License Application",
    href: "/services/business-license",
    icon: FileCheck2,
    description:
      "Assessment and application coordination for China business licenses, operating permits, regulated industry qualifications, scope amendments, renewals, and compliance checklists."
  },
  {
    title: "Work Visa",
    href: "/services/china-visa-service",
    icon: Plane,
    description:
      "Visa services in China for foreign founders, executives, employees, and families, including business visa guidance, work permit support, and residence permit coordination."
  },
  {
    title: "Foreign Investment Consulting",
    href: "/services/foreign-investment",
    icon: BriefcaseBusiness,
    description:
      "Market-entry consulting for foreign investors, including entity strategy, business scope planning, licensing risks, tax setup, hiring considerations, and long-term compliance."
  },
  {
    title: "Overseas Company Registration",
    href: "/services/china-company-formation",
    icon: Globe2,
    description:
      "Overseas entity setup support for Chinese entrepreneurs and global companies, including structure review, document preparation, registration coordination, and ongoing maintenance planning."
  }
];

export const strengths = [
  {
    title: "English-speaking consultants",
    icon: Globe2,
    text: "International clients receive clear English communication, practical document guidance, and direct explanations of China registration, tax, visa, and compliance requirements."
  },
  {
    title: "One-stop business services",
    icon: BriefcaseBusiness,
    text: "Company registration, accounting, tax, visas, licenses, audit coordination, and overseas setup are planned together instead of handled as disconnected tasks."
  },
  {
    title: "Compliance experts",
    icon: ShieldCheck,
    text: "We focus on documentation quality, filing calendars, local procedures, audit readiness, and risk control after the business license is issued."
  },
  {
    title: "Fast response",
    icon: Timer,
    text: "Clients get responsive answers, milestone updates, and practical next steps when timing matters for registration, tax filings, work visas, or license deadlines."
  },
  {
    title: "Transparent pricing",
    icon: BadgeCheck,
    text: "We explain service scope, likely government steps, expected timelines, and pricing before work begins so international teams can plan with confidence."
  }
];

export const processSteps = [
  "Consultation",
  "Planning",
  "Registration",
  "Compliance",
  "Long-term Support"
];

export const processDescriptions = [
  "Understand your ownership, activity, visa needs, target timeline, and China or overseas expansion goals.",
  "Confirm entity structure, tax setup, license exposure, documentation, pricing, and implementation milestones.",
  "Coordinate application materials, filings, authority communication, and approval steps for the chosen service.",
  "Set up tax, accounting, reporting, audit readiness, visa follow-up, and post-approval compliance routines.",
  "Provide ongoing advisory, renewals, bookkeeping, filings, reporting, and expansion support as the business grows."
];
