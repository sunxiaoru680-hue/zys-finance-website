import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Choose Us",
  description: "Why international clients choose ZYS for China business registration, accounting, tax consulting, and compliance.",
  keywords: ["China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
  path: "/why-choose-us"
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Why Choose Us", href: "/why-choose-us" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Why ZYS</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Why Choose Us</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">Why international clients choose ZYS for China business registration, accounting, tax consulting, and compliance.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-md border border-line bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-graphite">Clients choose ZYS because they need English-speaking consultants, one-stop business services, compliance discipline, fast response, and transparent pricing. The advisory model connects registration, tax, accounting, visas, business licenses, audit services, and annual maintenance into a single operating plan so decision makers can avoid fragmented advice.</p>
            <p className="mt-5 text-base leading-8 text-graphite">ZYS focuses on practical planning, document clarity, and long-term compliance so clients understand what must happen before and after registration, tax setup, visa coordination, license applications, or overseas company formation.</p>
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
