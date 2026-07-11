import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Team",
  description: "English-speaking consultants for China registration, accounting, tax, visa, licensing, audit, and overseas expansion.",
  keywords: ["China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
  path: "/our-team"
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Team", href: "/our-team" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Team</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Our Team</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">English-speaking consultants for China registration, accounting, tax, visa, licensing, audit, and overseas expansion.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-md border border-line bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-graphite">ZYS consultants combine local China compliance execution with international client communication. The team supports founders, CFOs, legal teams, and entrepreneurs who need clear advice before committing capital, hiring staff, invoicing customers, or expanding overseas. Clients work with advisors who understand company formation, accounting records, tax calendars, business licenses, work visa coordination, audit preparation, and annual compliance.</p>
            <p className="mt-5 text-base leading-8 text-graphite">ZYS does not publish individual consultant biographies until each profile has been verified and approved. Clients can request consultant background information during the engagement discussion where appropriate.</p>
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
