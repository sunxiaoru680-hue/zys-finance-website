import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Visa Services in China, Work Permit & Residence Permit Support",
  description:
    "Visa services in China for foreign founders, executives, employees, and families, including business visa guidance, China work permit support, residence permit coordination, company sponsor planning, and document preparation.",
  keywords: [
    "visa services in China",
    "China work permit service",
    "China residence permit support",
    "business visa China",
    "visa services for foreigners in China",
    "China company sponsor work permit"
  ],
  path: "/visa-services"
});

export default function VisaServicesPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "Visa Services in China",
          "Visa and permit support for foreign founders, executives, employees, and families in China.",
          [
            "visa services in China",
            "China work permit service",
            "China residence permit support",
            "business visa China"
          ]
        )}
      />
      <PageHero
        eyebrow="Visa Services"
        title="Visa and permit support for foreign founders, executives, and employees in China."
        description="ZYS provides visa services in China and helps foreign entrepreneurs and companies understand visa routes, company sponsor requirements, document preparation, and the connection between China company registration and legal work or residence status."
      />
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Founder & Executive Visas",
              text: "Guidance for foreign founders, directors, and executives who need a practical visa plan connected to China company formation and ongoing operations."
            },
            {
              title: "Work & Residence Support",
              text: "Document checklist coordination and process support for employment-based work permit and residence permit matters where company sponsorship is required."
            },
            {
              title: "Family & Business Travel",
              text: "Support for related visa questions involving family members, business travel, renewal timing, and document consistency."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-base leading-8 text-graphite">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
