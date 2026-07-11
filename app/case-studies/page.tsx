import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Scenarios",
  description: "Anonymized China registration, accounting, tax, visa, license, and cross-border business advisory scenarios.",
  keywords: ["China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
  path: "/case-studies"
});

const scenarios = [
  {
    profile: "Foreign founder preparing a China consulting company",
    challenge: "The founder needed to align business scope, registered address, tax setup, and future work permit planning before filing.",
    scope: "Company registration planning, document checklist, business scope review, post-registration accounting and tax handover.",
    approach: "ZYS reviewed the commercial plan, confirmed likely document requirements, mapped implementation stages, and identified post-approval compliance tasks.",
    considerations: "Timing depended on document readiness, local filing practice, address suitability, and whether the founder would later need work authorization.",
    outcome: "The client received a clearer filing sequence and a practical first-year compliance plan.",
    support: "Monthly bookkeeping, tax filing coordination, and work permit planning were available as follow-up services."
  },
  {
    profile: "International SME improving China accounting records",
    challenge: "Management needed cleaner records before annual reporting and wanted better visibility around invoices, vouchers, and tax filing status.",
    scope: "Bookkeeping review, missing-document list, accounting workflow recommendations, and audit preparation support.",
    approach: "ZYS reviewed available records, organized follow-up items, clarified management reporting needs, and prepared a practical accounting cleanup plan.",
    considerations: "The scope depended on transaction volume, record quality, invoice availability, bank statement completeness, and prior filing history.",
    outcome: "The finance team received a structured path for improving monthly records and preparing for future review.",
    support: "Ongoing bookkeeping, tax filing support, and annual audit coordination were discussed as appropriate next steps."
  },
  {
    profile: "Chinese entrepreneur comparing overseas company options",
    challenge: "The owner wanted to compare Hong Kong, Singapore, US, and Dubai company structures for trading and cross-border contracting.",
    scope: "Jurisdiction comparison, document planning, maintenance considerations, banking readiness, and China-related tax touchpoints.",
    approach: "ZYS discussed commercial purpose, ownership, customer and supplier locations, reporting needs, and future operating costs.",
    considerations: "Final choice depended on business purpose, banking pathway, tax advice, maintenance duties, and required documents.",
    outcome: "The client could compare options using operating and compliance criteria rather than registration cost alone.",
    support: "Entity setup coordination and annual maintenance planning were available after the preferred jurisdiction was selected."
  }
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Client Scenarios", href: "/case-studies" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Client Scenarios</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Representative advisory scenarios</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            These anonymized examples describe common China registration,
            accounting, tax, visa, license, and cross-border planning situations.
            They are not testimonials and do not disclose client identities.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-6">
          {scenarios.map((scenario) => (
            <article key={scenario.profile} className="rounded-md border border-line bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">{scenario.profile}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {[
                  ["Client profile", scenario.profile],
                  ["Challenge", scenario.challenge],
                  ["Scope", scenario.scope],
                  ["ZYS approach", scenario.approach],
                  ["Key considerations", scenario.considerations],
                  ["Outcome", scenario.outcome],
                  ["Ongoing support", scenario.support],
                  ["Confidentiality note", "This scenario is anonymized. No client name, financial result, approval outcome, testimonial, or confidential detail is published."]
                ].map(([label, text]) => (
                  <div key={label} className="rounded-md bg-paper p-5">
                    <h3 className="text-sm font-bold uppercase text-evergreen">{label}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">Related Services</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">Discuss a scenario similar to your business.</h2>
          </div>
          <Link href="/services" className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-bold text-ink">
            View Services
          </Link>
        </div>
      </section>
      <LeadCapture />
    </>
  );
}
