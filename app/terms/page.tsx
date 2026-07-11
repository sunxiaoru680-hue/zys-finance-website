import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Website terms for using ZYS Advisory information and requesting business advisory services.",
  keywords: ["ZYS Advisory terms of use", "business advisory terms"],
  path: "/terms"
});

const sections = [
  {
    title: "Website information",
    text: "The information on this website is provided for general business education and initial orientation. It should not be treated as formal legal, tax, accounting, immigration, investment, or regulatory advice."
  },
  {
    title: "No engagement without written confirmation",
    text: "Submitting an inquiry, using WhatsApp, booking a meeting, or reading website content does not create a client engagement. Service scope, fees, timeline, deliverables, and responsibilities must be confirmed in writing."
  },
  {
    title: "Service assumptions",
    text: "Registration, tax, accounting, visa, license, and overseas company formation timelines depend on jurisdiction, document readiness, authority review, third-party providers, and the client's circumstances."
  },
  {
    title: "No guaranteed approvals",
    text: "ZYS does not guarantee government approvals, bank account opening, visa results, tax outcomes, or third-party decisions. We provide practical coordination and advisory support based on available information."
  },
  {
    title: "Contact",
    text: `Questions about these terms may be sent to ${companyName} at ${emailAddress}.`
  }
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Terms of Use</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            These terms apply to the use of ZYS website information and consultation request channels.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
