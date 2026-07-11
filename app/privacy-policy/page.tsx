import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How ZYS Advisory handles inquiry information, business documents, and consultation data.",
  keywords: ["ZYS Advisory privacy policy", "business consultation privacy"],
  path: "/privacy-policy"
});

const sections = [
  {
    title: "Information we may collect",
    text: "ZYS may receive contact details, company information, business activity descriptions, shareholder or director details, document copies, and messages submitted through forms, email, WhatsApp, meeting requests, or other communication channels."
  },
  {
    title: "How information is used",
    text: "Information is used to respond to inquiries, assess service scope, prepare document checklists, coordinate advisory work, communicate with clients, and maintain reasonable business records."
  },
  {
    title: "Sensitive information",
    text: "Clients should avoid sending unnecessary sensitive information until the service scope and communication channel are confirmed. Some projects may require identity, company, tax, accounting, visa, license, or banking-related documents."
  },
  {
    title: "Sharing and service providers",
    text: "Where a project requires third-party coordination, ZYS may share relevant information with professional providers, filing agents, translators, or other parties involved in the agreed service scope."
  },
  {
    title: "Contact",
    text: `For privacy questions, contact ${companyName} at ${emailAddress}.`
  }
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            This policy explains how ZYS handles inquiry information and business consultation data.
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
