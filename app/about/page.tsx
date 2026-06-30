import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { strengths } from "@/components/siteData";
import { companyName, createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Nanjing ZYS Advisory Co., Ltd. China Business & Tax Advisory",
  description:
    "Learn about Nanjing ZYS Advisory Co., Ltd., a professional China business and tax advisory firm for China company registration, China tax services, accounting services in China, visas, licenses, and audits.",
  keywords: [
    "China business advisory",
    "China tax advisory",
    "China company registration consultant",
    "China tax services",
    "accounting services in China"
  ],
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A professional advisory partner for company formation and financial compliance."
        description={`${companyName} works with foreign investors, international founders, finance leaders, and Chinese entrepreneurs who need reliable support for China company registration, tax compliance, accounting, visas, business licenses, and audits.`}
      />
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              We combine local compliance experience with practical business judgment.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-graphite">
            <p>
              China business and tax advisory begins with practical questions:
              which entity structure is appropriate, how China tax services will
              be managed, whether licenses are required, how foreign staff can
              work legally in China, and what accounting records must be
              maintained after registration.
            </p>
            <p>
              Our role is to turn those questions into a clear action plan and
              coordinate the documentation, filings, and ongoing compliance work
              needed to keep the business operating properly.
            </p>
            <p>
              We serve foreign entrepreneurs entering China and Chinese clients
              establishing companies overseas, with an emphasis on transparent
              requirements, realistic timelines, and dependable communication.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <div key={strength.title} className="rounded-md border border-line p-6">
                <Icon aria-hidden="true" className="h-7 w-7 text-evergreen" />
                <h3 className="mt-4 text-lg font-bold">{strength.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{strength.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
