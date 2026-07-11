import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Experience",
  description: "Practical experience across China company registration, tax, accounting, licenses, visas, audits, and foreign investment projects.",
  keywords: ["China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
  path: "/experience"
});

const points = [
  "China Company Registration",
  "China Accounting",
  "China Tax Consultant",
  "China Business Registration",
  "China Company Formation",
  "Chinese Accounting Firm",
  "Foreign Investment China"
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Experience", href: "/experience" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Experience</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Our Experience</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">Practical experience across China company registration, tax, accounting, licenses, visas, audits, and foreign investment projects.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-md border border-line bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-graphite">ZYS experience is built around real operating questions: how to form a company, how to maintain books, how to file taxes, how to sponsor foreign employees, how to apply for licenses, how to prepare for audit, and how to keep annual compliance on schedule. The firm supports foreign investors entering China, international SMEs managing China subsidiaries, and Chinese companies planning overseas registration.</p>
            <p className="mt-5 text-base leading-8 text-graphite">Specific years, client counts, awards, or project results should be published only after factual confirmation. This page therefore describes service experience by advisory area rather than using unverified statistics.</p>
          </article>
          <aside className="rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Core focus</h2>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-evergreen">
              {points.map((point) => <Link key={point} href="/services" className="hover:text-ink">{point}</Link>)}
            </div>
          </aside>
        </div>
      </section>
      <LeadCapture />
    </>
  );
}
