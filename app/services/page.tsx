import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { processSteps } from "@/components/siteData";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services for China Company Registration, Tax, Accounting & Visas",
  description:
    "Explore ZYS services for China company registration, China tax services, accounting services in China, visa services in China, business licenses, tax planning, audit services, and international business consulting.",
  keywords: [
    "China company registration services",
    "China tax services",
    "accounting services in China",
    "visa services in China",
    "international business consulting services"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "China Business Consulting Services",
          "Company registration, tax, accounting, visas, business licenses, audit support, and international business consulting for China and overseas expansion.",
          [
            "China company registration services",
            "China tax services",
            "accounting services in China",
            "visa services in China"
          ]
        )}
      />
      <PageHero
        eyebrow="Services"
        title="Company formation, finance, tax, visa, licensing, and audit services."
        description="ZYS supports international clients that need coordinated execution across China company registration, China tax services, accounting services in China, business qualifications, visa services in China, and long-term corporate maintenance."
      />
      <section className="py-16 md:py-20">
        <div className="container-shell">
          <ServiceGrid />
        </div>
      </section>
      <section id="overseas-registration" className="bg-white py-16 md:py-20">
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
      <section className="py-16 md:py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold">How we work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-line bg-white p-5">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
