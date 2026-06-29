import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "China Tax Services & Accounting Services in China",
  description:
    "China tax services and accounting services in China, including tax agency, bookkeeping, VAT, corporate income tax, tax consulting, tax planning, audit preparation, and financial compliance.",
  keywords: [
    "China tax services",
    "accounting services in China",
    "China tax agency",
    "bookkeeping services in China",
    "tax consulting China",
    "audit services China"
  ]
});

const sections = [
  {
    id: "tax-agency",
    title: "Tax Agency Services",
    text: "We support periodic tax declarations, filing calendars, tax authority communication, VAT and corporate income tax matters, and routine compliance administration."
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    text: "Monthly accounting services include voucher review, bookkeeping, financial statements, management reporting, and organized records for audit and tax inspection readiness."
  },
  {
    id: "tax-consulting",
    title: "Tax Consulting",
    text: "We advise on China tax obligations, cross-border payments, withholding tax, individual income tax, VAT treatment, deductible expenses, and common compliance risk areas."
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    text: "Tax planning is aligned with commercial reality, including entity structure, pricing models, founder compensation, profit repatriation, and expansion plans."
  },
  {
    id: "audit",
    title: "Audit Services",
    text: "We coordinate annual audit preparation, statutory reporting support, due diligence materials, and audit-ready financial records for shareholders, banks, and regulators."
  }
];

export default function TaxAccountingPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "China Tax Services and Accounting Services in China",
          "Tax agency, bookkeeping, accounting, tax consulting, tax planning, and audit preparation for companies operating in China.",
          [
            "China tax services",
            "accounting services in China",
            "China tax agency",
            "bookkeeping services in China",
            "tax consulting China"
          ]
        )}
      />
      <PageHero
        eyebrow="Tax & Accounting"
        title="China tax services, bookkeeping, accounting, tax planning, and audit support."
        description="Keep your company compliant and decision-ready with structured China tax services, reliable accounting services in China, practical tax advice, and audit preparation support from ZYS."
      />
      <section className="bg-white py-12">
        <div className="container-shell">
          <h2 className="text-2xl font-bold">Financial compliance for companies operating in China</h2>
          <p className="mt-3 max-w-4xl text-base leading-8 text-graphite">
            ZYS provides China tax services and accounting services in China for
            foreign-invested companies, trading businesses, consulting companies,
            and international teams that need organized records, timely filings,
            and practical financial guidance.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-graphite">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
