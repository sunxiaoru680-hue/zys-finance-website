import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { processDescriptions, processSteps } from "@/components/siteData";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "China Company Registration, Accounting, Tax, Visa & Audit Services",
  description:
    "Explore ZYS services for China company registration, accounting and bookkeeping, tax advisory, tax planning, audit services, business license applications, work visas, foreign investment consulting, and overseas company registration.",
  keywords: [
    "China company registration services",
    "accounting and bookkeeping China",
    "China tax advisory",
    "tax planning China",
    "audit services China",
    "work visa China",
    "foreign investment consulting China",
    "overseas company registration"
  ],
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "China Business Consulting Services",
          "Company registration, accounting, bookkeeping, tax advisory, tax planning, audit services, work visas, business licenses, foreign investment consulting, and overseas company registration.",
          [
            "China company registration services",
            "accounting and bookkeeping China",
            "China tax advisory",
            "work visa China",
            "overseas company registration"
          ]
        )}
      />
      <PageHero
        eyebrow="Services"
        title="Company formation, accounting, tax, visa, licensing, audit, and overseas setup services."
        description="ZYS supports international clients that need coordinated execution across China company registration, accounting and bookkeeping, tax advisory, tax planning, work visa support, business license applications, audit services, foreign investment consulting, overseas company registration, and long-term compliance."
      />
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <ServiceGrid />
        </div>
      </section>
      <section id="foreign-investment-consulting" className="bg-white py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Foreign Investment Consulting
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Plan your China market entry before documents are filed.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-graphite">
            <p>
              We help foreign investors assess entity structure, business scope,
              registered capital, tax category, invoicing needs, licensing
              exposure, payroll plans, and visa requirements before company
              registration begins.
            </p>
            <p>
              This planning helps international SMEs avoid common post-registration
              problems and gives management a realistic view of timeline,
              documentation, compliance obligations, and operating costs.
            </p>
          </div>
        </div>
      </section>
      <section id="overseas-registration" className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Overseas Company Registration
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Professional support for Chinese clients establishing companies overseas.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-graphite">
            <p>
              We help Chinese entrepreneurs and business owners plan overseas
              entity setup with attention to commercial purpose, ownership,
              banking readiness, maintenance obligations, tax touchpoints, and
              document preparation.
            </p>
            <p>
              Typical scenarios include international trading companies, holding
              structures, market-entry subsidiaries, regional sales offices, and
              overseas entities used for supplier, customer, or investment purposes.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <p className="text-sm font-bold uppercase text-evergreen">Process</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">How we work</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-line bg-paper p-5">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-base font-bold">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  {processDescriptions[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
