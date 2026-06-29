import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Business Licenses in China & Qualification Consulting",
  description:
    "Business license and qualification consulting in China, including regulated industry assessment, permit planning, business scope review, application support, and compliance preparation.",
  keywords: [
    "business licenses in China",
    "China business license",
    "China business qualifications",
    "regulated business China",
    "China company registration"
  ]
});

export default function BusinessLicensesPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "Business Licenses in China",
          "Business license and qualification consulting for regulated activities in China.",
          [
            "business licenses in China",
            "China business license",
            "China business qualifications",
            "regulated business China"
          ]
        )}
      />
      <PageHero
        eyebrow="Business Licenses"
        title="China business licenses and qualifications for regulated activities."
        description="Certain industries require permits, filings, approvals, or professional qualifications before a company can legally operate. ZYS helps assess requirements and coordinate application preparation."
      />
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Align business scope, permits, and actual business operations.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              In China, the registered business scope and sector-specific license
              requirements should be reviewed early. This helps avoid delays after
              incorporation and reduces the risk of operating outside permitted
              activities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "License requirement assessment",
              "Business scope wording review",
              "Application document coordination",
              "Authority communication support",
              "Renewal and amendment planning",
              "Post-approval compliance checklist"
            ].map((item) => (
              <div key={item} className="rounded-md border border-line bg-white p-5 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
