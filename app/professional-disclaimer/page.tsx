import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Professional Disclaimer",
  description: "Important disclaimer for ZYS Advisory website content and business consultation information.",
  keywords: ["ZYS Advisory disclaimer", "business advisory disclaimer"],
  path: "/professional-disclaimer"
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Professional Disclaimer", href: "/professional-disclaimer" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Professional Disclaimer</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            This disclaimer explains the limits of website information and consultation content.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-5">
          {[
            ["General information only", "Website content is provided for general business orientation. It should not be relied on as legal, tax, accounting, immigration, investment, or regulatory advice."],
            ["Circumstances matter", "China registration, tax, accounting, visa, license, audit, and overseas formation requirements may depend on city, jurisdiction, business activity, document readiness, and authority practice."],
            ["Professional engagement", "A formal engagement starts only after ZYS confirms scope, responsibilities, fees, and deliverables in writing."],
            ["No guaranteed result", "ZYS does not guarantee approval, tax treatment, visa outcome, bank account opening, license issuance, or third-party decision."],
            ["Contact", `For project-specific advice, contact ${companyName} at ${emailAddress}.`]
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
