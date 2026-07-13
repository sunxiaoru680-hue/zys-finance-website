import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | ZYS Advisory",
  description: "Privacy Policy for ZYS Advisory covering business inquiries, consultation data, client documents, analytics, international transfers, retention and data rights.",
  keywords: ["ZYS Advisory privacy policy", "business consultation privacy", "client document privacy", "international consulting privacy policy"],
  path: "/privacy-policy"
});

const sections = [
  {
    title: "1. Scope of this policy",
    text: `This Privacy Policy explains how ${companyName} ("ZYS Advisory", "ZYS", "we", "our" or "us") collects, uses, stores and protects information received through this website, consultation requests, email, WhatsApp, social media, online forms, meetings and related business communications. It applies to prospective clients, clients, business partners, website visitors and other people who contact us about company registration, accounting, tax, visa, licensing, audit, immigration coordination or cross-border corporate services.`
  },
  {
    title: "2. Information we may collect",
    text: "We may collect contact details, company names, job titles, jurisdiction information, business activity descriptions, shareholder or director information, proposed company structures, registration documents, tax and accounting materials, visa-related documents, license information, correspondence, meeting notes, website analytics, device data, IP address, referral source and records of communication with ZYS. We ask clients to provide only information that is relevant to the inquiry or agreed service scope."
  },
  {
    title: "3. How we use information",
    text: "We use information to respond to inquiries, assess project feasibility, prepare service proposals, identify required documents, coordinate business registration or advisory work, provide accounting and tax support, assist with visa or license coordination, manage client communications, maintain business records, improve website performance, comply with applicable obligations and protect the legitimate interests of ZYS and its clients."
  },
  {
    title: "4. Legal and business basis",
    text: "Depending on the context, we process information to take steps requested by a prospective client, perform an agreed service, comply with legal or regulatory requirements, maintain business records, protect legitimate business interests, prevent misuse of our website or communication channels, and communicate with clients about relevant services. Where consent is required, we will rely on consent and allow withdrawal where applicable."
  },
  {
    title: "5. Client documents and sensitive materials",
    text: "Some projects may require identity documents, corporate records, tax materials, accounting vouchers, payroll information, visa documents, banking-related evidence, license materials or other sensitive business documents. Clients should avoid sending unnecessary sensitive materials until the communication channel and service scope are confirmed. ZYS handles such materials for the stated project purpose and limits access to people who need the information for service delivery, compliance or administration."
  },
  {
    title: "6. Sharing with service providers and authorities",
    text: "Where necessary for an agreed service, ZYS may share relevant information with filing agents, accountants, tax advisers, translators, notaries, banks, payment providers, technology vendors, professional advisers, government authorities or other parties involved in the project. We share information on a need-to-know basis and do not sell personal information."
  },
  {
    title: "7. International transfers",
    text: "Because ZYS supports international clients, information may be processed in China or transferred across borders when clients, shareholders, group companies, service providers or professional partners are located in different jurisdictions. We take reasonable steps to protect information during cross-border communication and expect clients to confirm whether their internal policies require special handling before sending documents."
  },
  {
    title: "8. Cookies, analytics and marketing pixels",
    text: "Our website may use cookies, analytics tools, Meta Pixel, conversion tracking or similar technologies to understand website performance, improve user experience and measure inquiry activity. These tools may collect technical information such as device data, pages viewed, referral source and approximate location. You can manage cookies through your browser settings."
  },
  {
    title: "9. Retention",
    text: "We retain information for as long as reasonably necessary for inquiry handling, service delivery, recordkeeping, compliance, dispute prevention, accounting administration and legitimate business purposes. Retention periods may differ depending on the type of document, project, jurisdiction and applicable legal or professional requirements."
  },
  {
    title: "10. Security",
    text: "ZYS uses reasonable organizational, technical and administrative measures designed to protect information against unauthorized access, loss, misuse or alteration. No online transmission or storage system is completely secure, and clients should use appropriate care when sending confidential documents through email, messaging platforms or third-party services."
  },
  {
    title: "11. Your rights and requests",
    text: "Subject to applicable law, you may request access, correction, deletion, restriction or withdrawal of consent relating to personal information we hold about you. We may need to verify your identity and may retain certain records where required for legitimate business, legal, compliance or dispute-resolution purposes. Data deletion requests can be submitted through the Data Deletion page."
  },
  {
    title: "12. Third-party websites and platforms",
    text: "This website may link to WhatsApp, Facebook, LinkedIn, Calendly, payment providers or other third-party platforms. Those services operate under their own privacy policies and terms. ZYS is not responsible for the privacy practices of third-party websites or applications."
  },
  {
    title: "13. Updates to this policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, legal requirements or business operations. The updated version will be posted on this page with the effective date shown below."
  },
  {
    title: "14. Contact",
    text: `For privacy questions or data requests, contact ${companyName} at ${emailAddress}.`
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
            This policy explains how ZYS Advisory handles business inquiries, client documents, consultation data and website information.
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
        </div>
      </section>
    </>
  );
}
