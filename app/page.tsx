import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Landmark,
  Plane,
  PlayCircle,
  ShieldCheck,
  Timer
} from "lucide-react";
import { CTA } from "@/components/CTA";
import { SocialIcons } from "@/components/SocialIcons";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  companyName,
  createPageMetadata,
  faqSchema,
  serviceSchema,
  siteUrl,
  StructuredData
} from "@/components/seo";

const priorityServices = [
  {
    title: "China Company Registration",
    href: "/services/company-registration-in-china",
    icon: Landmark,
    text: "Entity setup support for foreign investors, including structure review, business scope, filings, tax setup, and post-registration handover."
  },
  {
    title: "Accounting and Bookkeeping",
    href: "/services/bookkeeping",
    icon: Calculator,
    text: "Monthly records, voucher review, statements, filing calendars, and management-ready financial information for China entities."
  },
  {
    title: "Tax Advisory",
    href: "/services/tax-consulting",
    icon: ShieldCheck,
    text: "Practical support for VAT, corporate income tax, withholding tax, individual income tax, and tax authority communication."
  },
  {
    title: "Work Permit and Visa Support",
    href: "/services/china-visa-service",
    icon: Plane,
    text: "Work permit, residence permit, and visa planning for foreign founders, employees, executives, and eligible family members."
  },
  {
    title: "Business Licenses",
    href: "/services/business-license",
    icon: FileCheck2,
    text: "Business scope review, permit pathway assessment, application coordination, renewals, amendments, and license checklists."
  },
  {
    title: "Overseas Company Registration",
    href: "/services/china-company-formation",
    icon: Globe2,
    text: "Formation planning for Hong Kong, Singapore, US, and Dubai structures connected with China or international expansion."
  }
];

const trustSignals = [
  "Bilingual English and Chinese communication",
  "Coordinated registration, tax, accounting, visa, and license support",
  "Clear timelines, document checklists, and compliance handover"
];

const companyMedia = [
  {
    src: "/images/corporate-video/zys-office-lobby.jpg",
    alt: "ZYS Advisory office lobby for client meetings"
  },
  {
    src: "/images/corporate-video/zys-meeting-room.jpg",
    alt: "ZYS Advisory meeting room for China business advisory consultations"
  },
  {
    src: "/images/corporate-video/zys-conference-table.jpg",
    alt: "Conference table prepared for company registration and tax advisory discussion"
  },
  {
    src: "/images/corporate-video/zys-display-wall.jpg",
    alt: "ZYS Advisory corporate display area"
  },
  {
    src: "/images/corporate-video/zys-policy-consulting-desk.jpg",
    alt: "Advisory desk with China policy and corporate service documents"
  }
];

const introServices = [
  "China company registration and WFOE setup",
  "Accounting, bookkeeping, tax and audit support",
  "Work permit, residence permit and visa coordination",
  "Business licenses, trademarks and cross-border formation"
];

const latestUpdates = [
  {
    title: "China market entry guidance",
    text: "Practical notes on entity setup, tax registration, licenses, and ongoing compliance for international businesses."
  },
  {
    title: "Tax and accounting reminders",
    text: "Updates can highlight filing calendars, bookkeeping priorities, and documents management teams should prepare."
  },
  {
    title: "Visa and work permit insights",
    text: "Future posts can cover planning points for foreign founders, employees, and eligible family members."
  }
];

const clientGroups = [
  {
    title: "Foreign investors entering China",
    text: "Founders, SMEs, and overseas management teams that need a compliant China operating entity and practical post-registration support."
  },
  {
    title: "International companies already operating in China",
    text: "Teams that need cleaner bookkeeping, tax filing, payroll coordination, audit preparation, or license maintenance."
  },
  {
    title: "Chinese companies expanding overseas",
    text: "Entrepreneurs and business owners comparing Hong Kong, Singapore, US, Dubai, and other cross-border company structures."
  }
];

const reasons = [
  {
    title: "One coordinated advisory team",
    icon: BriefcaseBusiness,
    text: "Registration, tax, accounting, licenses, visas, and ongoing compliance are planned together instead of as disconnected tasks."
  },
  {
    title: "Compliance-first execution",
    icon: ClipboardCheck,
    text: "Document quality, filing calendars, authority touchpoints, and audit-ready records are considered from the start."
  },
  {
    title: "International communication standard",
    icon: Globe2,
    text: "Clients receive English and Chinese explanations that management teams can use for decisions and internal approvals."
  },
  {
    title: "Transparent scope and next steps",
    icon: BadgeCheck,
    text: "ZYS clarifies likely documents, timing, assumptions, and follow-up obligations before implementation begins."
  }
];

const processSteps = [
  {
    title: "Consultation",
    text: "Understand the business activity, target city, ownership structure, visa needs, timeline, and current documents."
  },
  {
    title: "Planning",
    text: "Confirm structure, scope, pricing, document checklist, licensing exposure, and compliance priorities."
  },
  {
    title: "Implementation",
    text: "Coordinate filings, accounting setup, tax registration, license work, visa steps, or overseas company formation."
  },
  {
    title: "Ongoing support",
    text: "Maintain filing calendars, monthly records, renewals, audit readiness, and advisory support as the business changes."
  }
];

const clientScenarios = [
  {
    profile: "Foreign founder preparing a China consulting company",
    challenge: "The founder needed a practical setup path that aligned business scope, registered address, tax setup, and future work permit planning.",
    approach: "ZYS reviewed the operating plan, prepared a document checklist, coordinated registration steps, and mapped post-registration accounting and tax tasks.",
    outcome: "The client had a clearer implementation sequence and a compliance handover plan for the first operating period."
  },
  {
    profile: "International SME cleaning up China finance records",
    challenge: "Management needed better visibility before annual reporting and wanted to reduce uncertainty around invoices, vouchers, and monthly tax filings.",
    approach: "ZYS reviewed available records, identified missing information, organized bookkeeping priorities, and prepared management-ready follow-up actions.",
    outcome: "The finance team received a structured path for cleaner reporting and audit preparation without relying on unsupported assumptions."
  },
  {
    profile: "Chinese entrepreneur comparing overseas registration options",
    challenge: "The business owner needed to compare Hong Kong, Singapore, US, and Dubai company routes for trading and cross-border contracting.",
    approach: "ZYS discussed commercial purpose, ownership, banking readiness, maintenance duties, and China-related tax touchpoints before recommending next steps.",
    outcome: "The client could evaluate jurisdictions based on operating needs, maintenance obligations, and documentation requirements."
  }
];

const faqItems = [
  {
    question: "Can foreign investors register a company in China?",
    answer:
      "Yes, many foreign investors can register a China company, subject to business scope, industry restrictions, shareholder documents, registered address, and local filing requirements."
  },
  {
    question: "How long does China company registration usually take?",
    answer:
      "Timing depends on the city, business activity, address readiness, shareholder documents, license exposure, and tax setup. ZYS confirms the likely sequence after reviewing the project details."
  },
  {
    question: "Do China companies need bookkeeping and tax filing after registration?",
    answer:
      "Yes. A China company normally needs ongoing accounting records, tax filings, annual reporting, and organized documents that can support audit and management review."
  },
  {
    question: "Can ZYS support work permits and residence permits?",
    answer:
      "ZYS can help foreign founders and employees understand sponsor requirements, document preparation, work permit support, residence permit coordination, and related visa planning."
  },
  {
    question: "Does ZYS support overseas company formation?",
    answer:
      "Yes. ZYS supports planning and document coordination for Hong Kong, Singapore, US, and Dubai company formation where it connects with cross-border business activity."
  }
];

const baseMetadata = createPageMetadata({
  title: "China Company Registration, Tax, Accounting & Business Advisory",
  description:
    "Nanjing ZYS Advisory Co., Ltd. helps international businesses with China company registration, accounting, tax compliance, bookkeeping, work permits, business licenses, and overseas company formation.",
  keywords: [
    "Nanjing ZYS Advisory",
    "China company registration",
    "China accounting services",
    "China tax services",
    "China work permit",
    "business license application China",
    "foreign investment consulting China",
    "overseas company registration"
  ],
  path: "/"
});

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      "zh-CN": `${siteUrl}/zh`
    }
  }
};

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "Nanjing ZYS Advisory Co., Ltd. China Business & Tax Advisory",
          "China company registration, accounting, bookkeeping, tax advisory, business license, work permit, visa, audit support, and overseas company formation services for international businesses.",
          [
            "China company registration",
            "China accounting services",
            "China tax services",
            "China work permit",
            "business license China",
            "overseas company formation"
          ]
        )}
      />
      <StructuredData data={faqSchema(faqItems)} />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/global-finance-consulting-hero.png"
          alt="International consultants reviewing China business registration and tax documents"
          fill
          priority
          className="object-cover object-center opacity-[0.36]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/30" />
        <div className="container-shell relative grid min-h-[650px] items-center py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-white/75">
              Nanjing ZYS Advisory Co., Ltd.
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              China Company Registration, Tax and Accounting Services for International Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              Establish and operate your China business with coordinated support
              for company formation, bookkeeping, tax compliance, work permits,
              licenses and ongoing advisory.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact"
                source="home_hero_consultation"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                Book a Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </TrackedLink>
              <Link
                href="/services"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <WhatsAppButton
              source="home_hero_whatsapp"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition hover:text-white"
              iconClassName="h-4 w-4 text-[#25D366]"
            >
              Prefer WhatsApp? Contact ZYS directly
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {trustSignals.map((item) => (
            <div key={item} className="flex gap-3 rounded-md border border-line bg-paper p-5">
              <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
              <p className="text-sm font-semibold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="relative min-w-0 overflow-hidden rounded-md border border-line bg-ink shadow-soft">
            <div className="relative h-full min-h-[360px] lg:min-h-[460px]">
              {companyMedia.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="corporate-video-slide object-cover"
                  sizes="(min-width: 1024px) 560px, calc(100vw - 32px)"
                  style={{ animationDelay: `${index * 5.6}s` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-3 py-1 text-xs font-semibold backdrop-blur">
                  <PlayCircle aria-hidden="true" className="h-4 w-4 text-gold" />
                  Company Introduction
                </div>
                <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight md:text-[30px]">
                  Professional advisory support for China market entry and international expansion.
                </h2>
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-md border border-line bg-white p-6 shadow-sm md:p-8 lg:flex lg:flex-col lg:justify-center">
            <p className="text-sm font-bold uppercase text-evergreen">About ZYS Advisory</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-ink md:text-3xl">
              A coordinated business, tax and compliance partner for international clients.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              ZYS Advisory supports founders, investors and management teams
              that need clear execution across company formation, finance,
              taxation, licensing, visas and ongoing compliance. Our work is
              designed for cross-border decision makers who need practical
              guidance in English and Chinese.
            </p>
            <div className="mt-7 grid gap-3">
              {introServices.map((service) => (
                <div key={service} className="flex gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  <p className="text-sm font-semibold leading-7 text-ink">{service}</p>
                </div>
              ))}
            </div>
            <TrackedLink
              href="/contact"
              source="home_company_intro_consultation"
              className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Book Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              Core Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Six priority services for China market entry and ongoing operation.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {priorityServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="focus-ring rounded-md border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-evergreen" />
                  <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{service.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <p className="text-sm font-bold uppercase text-evergreen">Who We Help</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            Advisory support for international founders, finance teams, and cross-border business owners.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {clientGroups.map((group) => (
              <article key={group.title} className="rounded-md border border-line bg-paper p-6">
                <Building2 aria-hidden="true" className="h-6 w-6 text-gold" />
                <h3 className="mt-4 text-lg font-bold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Follow ZYS Advisory
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Connect with ZYS for business, tax and China market updates.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Follow our social channels for practical commentary on company
              registration, accounting, tax, visas, business licenses and
              international expansion planning.
            </p>
            <SocialIcons className="mt-7" showLabel />
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-evergreen">Latest Updates</p>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  Prepared for future Facebook posts.
                </h3>
              </div>
              <p className="text-sm font-semibold text-gold">Facebook feed ready</p>
            </div>
            <div className="mt-7 grid gap-4">
              {latestUpdates.map((update) => (
                <article key={update.title} className="rounded-md border border-line bg-paper p-5">
                  <h4 className="font-bold text-ink">{update.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-graphite">{update.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">Why Choose ZYS</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Practical guidance before filings, hiring, invoicing, or expansion decisions become costly to reverse.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="rounded-md border border-line bg-white p-6 shadow-sm">
                  <Icon aria-hidden="true" className="h-6 w-6 text-evergreen" />
                  <h3 className="mt-4 font-bold text-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">Process</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              A four-step path from first consultation to ongoing compliance support.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-md border border-line bg-paper p-6">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">Client Scenarios</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Representative situations where coordinated advisory support matters.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              These anonymized scenarios describe common service patterns. They
              are not testimonials and do not disclose client identities or
              guaranteed results.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {clientScenarios.map((scenario) => (
              <article key={scenario.profile} className="rounded-md border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase text-gold">Scenario</p>
                <h3 className="mt-3 text-xl font-bold text-ink">{scenario.profile}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite">
                  <strong className="text-ink">Challenge:</strong> {scenario.challenge}
                </p>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  <strong className="text-ink">ZYS approach:</strong> {scenario.approach}
                </p>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  <strong className="text-ink">Outcome:</strong> {scenario.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Useful answers before you start a China or cross-border project.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-md border border-line bg-paper p-6">
                <summary className="cursor-pointer text-lg font-bold text-ink">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
