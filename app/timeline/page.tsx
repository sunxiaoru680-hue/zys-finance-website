import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Company Timeline",
  description: "A professional timeline for ZYS advisory services and long-term client support.",
  keywords: ["China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
  path: "/timeline"
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Company Timeline", href: "/timeline" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">EEAT</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Company Timeline</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">A professional timeline for ZYS advisory services and long-term client support.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-md border border-line bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-graphite">The ZYS timeline starts with consultation, then planning, registration or advisory execution, compliance setup, and long-term support. This process helps clients understand each milestone, prepare documents in the right order, and continue with accounting, tax filing, audit preparation, visa coordination, license renewals, and annual reporting after the initial project.</p>
            <p className="mt-5 text-base leading-8 text-graphite">This page supports Google EEAT by making the company context, advisory experience, service boundaries, and trust signals easier for users and search engines to understand. It connects naturally to service pages, blog articles, contact options, and long-term compliance resources.</p>
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
