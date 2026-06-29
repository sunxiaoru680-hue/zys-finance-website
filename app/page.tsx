import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { ServiceGrid } from "@/components/ServiceGrid";
import { processSteps, strengths } from "@/components/siteData";
import {
  companyName,
  createPageMetadata,
  serviceSchema,
  StructuredData
} from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "China Company Registration & International Business Consulting",
  description:
    "ZYS provides China company registration, China tax services, accounting services in China, visa services in China, and international business consulting for foreign investors and Chinese clients expanding overseas.",
  keywords: [
    "China company registration",
    "China tax services",
    "accounting services in China",
    "visa services in China",
    "international business consulting"
  ]
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "China Company Registration and International Business Consulting",
          "China company registration, China tax services, accounting services in China, visa services in China, business licenses, and overseas company registration support.",
          [
            "China company registration",
            "China tax services",
            "accounting services in China",
            "visa services in China",
            "international business consulting"
          ]
        )}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/global-finance-consulting-hero.png"
          alt="International finance consultants reviewing cross-border business documents"
          fill
          priority
          className="object-cover object-center opacity-[0.42]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/20" />
        <div className="container-shell relative grid min-h-[680px] items-center py-20 md:min-h-[720px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-white/75">
              ZYS International Finance & Business Consulting
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              China company registration, tax, accounting, visa, and licensing
              support for international business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              {companyName} helps foreign investors establish compliant companies
              in China and assists Chinese clients with overseas company
              registration, China tax services, accounting services in China, and
              ongoing business administration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="light">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            "China company registration for foreign investors",
            "Overseas company setup for Chinese entrepreneurs",
            "Tax, accounting, audit, visa, and licensing support"
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md border border-line p-5">
              <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
              <p className="font-semibold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              SEO-Focused Core Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Structured support for China company registration, China tax
              services, and international business consulting.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              A successful market-entry plan requires more than a business
              license. ZYS connects China company registration with tax
              registration, bookkeeping, accounting services in China, visa
              planning, industry qualifications, annual audit, and long-term
              compliance administration.
            </p>
          </div>
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Why Clients Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Trusted advisory support for founders, finance teams, and
              international decision makers.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              We provide clear requirements, reliable execution, and practical
              guidance for clients navigating China market entry and overseas
              corporate administration.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div key={strength.title} className="rounded-md border border-line p-5">
                  <Icon aria-hidden="true" className="h-6 w-6 text-evergreen" />
                  <h3 className="mt-4 font-bold">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-graphite">{strength.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              Engagement Process
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              A clear process from first consultation to compliant operation.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-line bg-white p-5">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          {[
            {
              title: "China Company Registration",
              text: "Entity setup guidance for foreign investors, including business scope review, registered address coordination, business license application, and post-registration compliance."
            },
            {
              title: "China Tax Services",
              text: "Tax agency, tax consulting, VAT, corporate income tax, bookkeeping, accounting services in China, and audit-ready records for compliant operations."
            },
            {
              title: "Visa Services in China",
              text: "Practical visa and permit support for foreign founders, executives, employees, and family members connected to China business setup."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-md border border-line p-6">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
