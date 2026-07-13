import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress, emailMailto } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Data Deletion Request | ZYS Advisory",
  description: "Submit a data deletion request to ZYS Advisory for website inquiries, consultation records, social media leads, marketing data and client contact information.",
  keywords: ["ZYS Advisory data deletion", "data deletion request", "privacy request", "delete personal data"],
  path: "/data-deletion"
});

const sections = [
  {
    title: "1. Purpose of this page",
    text: `This page explains how individuals may request deletion of personal information held by ${companyName} in connection with website inquiries, consultation requests, marketing communications, social media leads, WhatsApp messages, email correspondence and related business communications.`
  },
  {
    title: "2. Information covered",
    text: "A deletion request may cover contact details, inquiry messages, marketing preferences, website form submissions, consultation scheduling information, social media lead data and related correspondence. If you are an active or former client, some project records may need to be retained for legal, compliance, accounting, tax, dispute-prevention or legitimate business purposes."
  },
  {
    title: "3. How to submit a request",
    text: `Send an email to ${emailAddress} with the subject line "Data Deletion Request". Please include your full name, email address, phone number or WhatsApp number used to contact ZYS, the relevant company name if applicable, the approximate date of communication, and a short description of the data you want deleted.`
  },
  {
    title: "4. Identity verification",
    text: "Before processing a deletion request, ZYS may ask for reasonable information to verify that the request is made by the data subject or an authorized representative. This helps prevent unauthorized deletion or disclosure of information."
  },
  {
    title: "5. Processing and response time",
    text: "We will review deletion requests within a reasonable period after receiving sufficient information to identify the relevant records. If a request is complex, incomplete or relates to records that must be retained, we may ask follow-up questions or explain what can and cannot be deleted."
  },
  {
    title: "6. Records we may retain",
    text: "ZYS may retain limited records where necessary to comply with legal, tax, accounting, regulatory, contractual, security, audit, dispute-resolution or legitimate business requirements. We may also retain a minimal suppression record to avoid contacting you again after deletion."
  },
  {
    title: "7. Third-party platforms",
    text: "If you contacted ZYS through Facebook, LinkedIn, WhatsApp, Calendly, email providers or other third-party platforms, you may also need to manage or delete data directly through those platforms. ZYS can only process information that it controls or can reasonably access."
  },
  {
    title: "8. Contact",
    text: `For data deletion or privacy requests, contact ${companyName} at ${emailAddress}.`
  }
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Data Deletion", href: "/data-deletion" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Data Deletion Request</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Use this page to request deletion of personal information submitted to ZYS Advisory through website, consultation or communication channels.
          </p>
          <p className="mt-4 text-sm font-semibold text-graphite">Effective date: July 13, 2026</p>
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
          <article className="rounded-md border border-gold bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Request by email</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              Email <a className="font-semibold text-evergreen underline" href={`${emailMailto}?subject=Data%20Deletion%20Request`}>{emailAddress}</a> with your request details. Please do not send identity documents unless ZYS specifically asks for verification.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
