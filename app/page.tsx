import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, CheckCircle2, CalendarDays, Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CorporateVideo } from "@/components/CorporateVideo";
import { CTA } from "@/components/CTA";
import { ServiceGrid } from "@/components/ServiceGrid";
import { processDescriptions, processSteps, strengths } from "@/components/siteData";
import {
  companyName,
  createPageMetadata,
  calendlyUrl,
  emailAddress,
  faqSchema,
  serviceSchema,
  StructuredData,
  whatsappUrl
} from "@/components/seo";

const faqItems = [
  {
    question: "What services does Nanjing ZYS Advisory provide for foreign investors in China?",
    answer:
      "ZYS supports foreign investors with China company registration, accounting and bookkeeping, tax advisory, tax planning, audit coordination, business license applications, work visa support, foreign investment consulting, and long-term compliance services."
  },
  {
    question: "Can a foreign investor register a company in China?",
    answer:
      "Yes. Foreign investors can register a foreign-invested company in China when the ownership structure, business scope, shareholder documents, registered address, and compliance requirements are prepared correctly."
  },
  {
    question: "How long does China company registration usually take?",
    answer:
      "Timing depends on the city, business scope, shareholder documents, licensing requirements, and tax setup. A clear document checklist and early business scope review help reduce delays."
  },
  {
    question: "Do I need accounting and bookkeeping after registering a company in China?",
    answer:
      "Yes. Companies in China normally need ongoing accounting records, bookkeeping, tax filings, annual reporting, and audit-ready financial documentation after registration."
  },
  {
    question: "What China tax services does ZYS provide?",
    answer:
      "ZYS provides China tax advisory, tax filing support, VAT and corporate income tax guidance, withholding tax advice, individual income tax coordination, tax planning, and communication support for routine compliance matters."
  },
  {
    question: "Can ZYS help with China work visas for foreign founders and employees?",
    answer:
      "Yes. ZYS helps foreign founders, executives, and employees understand company sponsor requirements, document preparation, work permit support, residence permit coordination, and visa planning connected to China operations."
  },
  {
    question: "Do all companies need a separate business license or permit in China?",
    answer:
      "Every company needs a business license, but some industries also require additional permits, filings, or regulated qualifications. ZYS helps review the business scope and identify license requirements early."
  },
  {
    question: "Can ZYS support Chinese companies expanding overseas?",
    answer:
      "Yes. ZYS assists Chinese companies and entrepreneurs with overseas company registration planning, document preparation, structure review, maintenance considerations, and cross-border business consulting."
  },
  {
    question: "Does ZYS provide English-speaking consulting services?",
    answer:
      "Yes. ZYS works with international clients in English and Chinese, helping foreign investors understand China registration, tax, accounting, visa, licensing, audit, and compliance requirements clearly."
  },
  {
    question: "How do I book a free consultation with ZYS?",
    answer:
      "You can book a free consultation through the contact page, WhatsApp, or email. Share your business activity, ownership structure, timeline, and service needs so ZYS can recommend practical next steps."
  }
];

export const metadata: Metadata = createPageMetadata({
  title: "China Company Registration, Tax, Accounting & Business Advisory",
  description:
    "Nanjing ZYS Advisory Co., Ltd. helps foreign investors, international SMEs, and Chinese companies expanding overseas with China company registration, accounting, tax advisory, work visas, business licenses, audit services, and overseas company registration.",
  keywords: [
    "Nanjing ZYS Advisory",
    "China company registration",
    "China company registration for foreign investors",
    "China tax advisory",
    "accounting and bookkeeping China",
    "work visa China",
    "business license application China",
    "foreign investment consulting China",
    "overseas company registration",
    "Register Company in Shanghai",
    "Register Company in Beijing",
    "Register Company in Shenzhen",
    "Register Company in Guangzhou",
    "Register Company in Suzhou",
    "Register Company in Hangzhou",
    "Register Company in Nanjing",
    "Register Company in Chengdu",
    "Register Company in Tianjin"
  ],
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "Nanjing ZYS Advisory Co., Ltd. China Business & Tax Advisory",
          "China company registration, accounting, bookkeeping, tax advisory, tax planning, audit services, work visa support, business license applications, foreign investment consulting, and overseas company registration.",
          [
            "China company registration",
            "China tax advisory",
            "accounting services in China",
            "work visa China",
            "foreign investment consulting",
            "overseas company registration"
          ]
        )}
      />
      <StructuredData data={faqSchema(faqItems)} />
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/global-finance-consulting-hero.png"
          alt="International finance consultants reviewing cross-border business documents"
          fill
          priority
          className="object-cover object-center opacity-[0.4]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/22" />
        <div className="container-shell relative grid min-h-[690px] items-center py-20 md:min-h-[740px] md:py-24">
          <div className="animate-lift max-w-3xl">
            <p className="text-sm font-bold uppercase text-white/75">
              Nanjing ZYS Advisory Co., Ltd.
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Enter China, stay compliant, and grow across borders with one trusted advisory team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              {companyName} helps foreign investors, international SMEs, and
              Chinese companies expanding overseas with company registration,
              accounting, tax advisory, work visas, licensing, audits, and
              long-term compliance.
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-7 text-white/82 sm:grid-cols-3">
              {[
                "English-speaking consultants",
                "One-stop setup and compliance",
                "Transparent pricing and timelines"
              ].map((item) => (
                <p key={item} className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Request Consultation
              </ButtonLink>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                Book Meeting
                <CalendarDays aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                WhatsApp
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Clear value proposition
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Practical market-entry and compliance support from registration to daily operation.
            </h2>
          </div>
          <p className="text-base leading-8 text-graphite">
            Instead of treating company setup, tax, accounting, visas, licenses,
            and audits as separate problems, ZYS connects them into one clear
            action plan. You get realistic timelines, document checklists,
            compliance priorities, and responsive guidance before decisions become
            expensive to fix.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              One advisory partner for China market entry, financial compliance, visas, licensing, and overseas expansion.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Choose focused support for a single requirement or coordinate a
              complete setup covering entity formation, accounting records, tax
              planning, business licenses, work visas, audits, and ongoing
              compliance.
            </p>
          </div>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <CorporateVideo />

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Premium advisory standards for international founders and finance teams.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              ZYS is built for clients who need direct communication, careful
              compliance execution, and commercial judgment across China and
              overseas business requirements.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.title}
                  className="animate-lift rounded-md border border-line p-6 shadow-sm"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-evergreen" />
                  <h3 className="mt-4 font-bold">{strength.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{strength.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              A modern five-step path from first conversation to long-term support.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="relative rounded-md border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  {processDescriptions[index]}
                </p>
                {index < processSteps.length - 1 ? (
                  <ArrowDown
                    aria-hidden="true"
                    className="absolute -bottom-5 left-1/2 h-5 w-5 -translate-x-1/2 text-gold md:-right-4 md:bottom-auto md:left-auto md:top-8 md:rotate-[-90deg]"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              SEO-focused answers for foreign investors and international companies.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
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
