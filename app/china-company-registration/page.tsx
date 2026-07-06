import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, serviceSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "China Company Registration for Foreign Investors & Global Businesses",
  description:
    "China company registration services for foreign investors and global businesses, including WFOE setup, business scope review, business license application, tax registration, bookkeeping, visa planning, and post-registration compliance.",
  keywords: [
    "China company registration",
    "China company registration for foreigners",
    "WFOE registration China",
    "China business license application",
    "foreign-invested company China",
    "China company setup for foreign investors",
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
  path: "/china-company-registration"
});

const items = [
  "Foreign-invested enterprise structure review",
  "Company name and business scope review",
  "Shareholder, director, supervisor, and legal representative documentation",
  "Registered address and application material coordination",
  "Business license application and company chop coordination",
  "Tax registration, bookkeeping setup, and compliance handover"
];

const cityServices = [
  "Register Company in Shanghai",
  "Register Company in Beijing",
  "Register Company in Shenzhen",
  "Register Company in Guangzhou",
  "Register Company in Suzhou",
  "Register Company in Hangzhou",
  "Register Company in Nanjing",
  "Register Company in Chengdu",
  "Register Company in Tianjin"
];

export default function ChinaRegistrationPage() {
  return (
    <>
      <StructuredData
        data={serviceSchema(
          "China Company Registration",
          "China company registration for foreign investors, including structure review, business scope planning, business license application, tax registration, and compliance setup.",
          [
            "China company registration",
            "China company registration for foreigners",
            "WFOE registration China",
            "China business license application",
            "Register Company in Shanghai",
            "Register Company in Beijing",
            "Register Company in Shenzhen",
            "Register Company in Guangzhou",
            "Register Company in Suzhou",
            "Register Company in Hangzhou",
            "Register Company in Nanjing",
            "Register Company in Chengdu",
            "Register Company in Tianjin"
          ]
        )}
      />
      <PageHero
        eyebrow="China Company Registration"
        title="China company registration for foreign investors and international entrepreneurs."
        description="ZYS guides foreign founders through China company registration, entity structure, business scope review, documentation, government filings, tax registration, and the operational steps required after a China business license is issued."
      />
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Build a compliant foundation before starting operations in China.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              A China company registration project should consider more than the
              license application itself. Business scope, registered capital, tax
              category, invoicing requirements, hiring plans, foreign staff visa
              needs, and sector qualifications can all affect how the company
              operates after approval.
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              We support foreign entrepreneurs with practical planning and
              coordination from initial assessment through post-registration tax,
              bookkeeping, accounting, and compliance setup.
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              Our China company registration service is designed for international
              clients who need a clear pathway from market-entry planning to
              compliant daily operations in China.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Registration support includes</h3>
            <div className="mt-5 grid gap-3">
              {items.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-graphite">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">
              China City Registration Support
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Register a company in major China business cities.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              ZYS supports foreign investors planning company registration in
              leading commercial hubs across China. City-level requirements can
              differ by business scope, registered address, documentation,
              industry licensing, and tax administration, so we review the target
              location before preparing the application.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityServices.map((city) => (
              <div key={city} className="rounded-md border border-line bg-paper p-5">
                <h3 className="font-bold text-ink">{city}</h3>
                <p className="mt-2 text-sm leading-7 text-graphite">
                  Company setup guidance, document coordination, tax registration,
                  and post-registration compliance planning.
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
