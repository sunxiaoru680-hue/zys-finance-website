import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use | ZYS Advisory",
  description: "Terms of Use for ZYS Advisory website content, consultation requests, professional disclaimers, service engagement, intellectual property and limitation of liability.",
  keywords: ["ZYS Advisory terms of use", "business advisory terms", "consulting website terms", "China business advisory terms"],
  path: "/terms"
});

const sections = [
  {
    title: "1. Acceptance of these terms",
    text: `These Terms of Use apply to the website operated by ${companyName} ("ZYS Advisory", "ZYS", "we", "our" or "us"). By accessing this website, reading our materials, submitting an inquiry or using our online contact channels, you agree to use the website in accordance with these terms. If you do not agree, you should not use this website.`
  },
  {
    title: "2. General information only",
    text: "Website content is provided for general business education and initial orientation. It may discuss company registration, accounting, tax, visa, work permits, licenses, audit preparation, overseas company formation and related business topics. It is not formal legal, tax, accounting, immigration, investment, financial or regulatory advice for any specific situation."
  },
  {
    title: "3. No client engagement without written confirmation",
    text: "Submitting a form, contacting us by WhatsApp, email or social media, booking a meeting or reading website content does not create a client relationship or professional engagement. Any service engagement must be confirmed in writing, including scope, fees, assumptions, responsibilities, deliverables, timelines and payment terms."
  },
  {
    title: "4. Service assumptions and client responsibility",
    text: "Registration, tax, accounting, visa, license, audit and overseas formation projects depend on jurisdiction, document readiness, authority review, third-party providers, bank procedures, client circumstances and changes in law or local practice. Clients are responsible for providing accurate, complete and timely information and for reviewing deliverables before use."
  },
  {
    title: "5. No guaranteed approvals or outcomes",
    text: "ZYS does not guarantee government approvals, license issuance, bank account opening, visa or work permit results, tax outcomes, audit conclusions, financing, commercial success or third-party decisions. We provide practical advisory and coordination support based on information available at the time."
  },
  {
    title: "6. Third-party services and authorities",
    text: "Some matters may involve government authorities, banks, accountants, auditors, translators, notaries, filing agents, technology providers, payment providers or other third parties. ZYS is not responsible for delays, decisions, errors, platform availability, policy changes or actions of third parties outside our control."
  },
  {
    title: "7. Website availability and accuracy",
    text: "We aim to keep website information useful and current, but we do not warrant that all content is complete, accurate, uninterrupted or free from errors. Laws, policies, fees, document requirements and local practice may change. You should obtain case-specific advice before acting on website content."
  },
  {
    title: "8. Intellectual property",
    text: "The website design, text, graphics, logos, downloads, articles, service descriptions and other materials are owned by or licensed to ZYS unless otherwise stated. You may view and download materials for internal reference, but you may not copy, republish, sell, scrape, misrepresent or commercially exploit website content without written permission."
  },
  {
    title: "9. Acceptable use",
    text: "You must not use this website to transmit unlawful, misleading, harmful, infringing, confidential or malicious materials; attempt unauthorized access; interfere with website operation; harvest data; impersonate others; or misuse contact forms, tracking features or communication channels."
  },
  {
    title: "10. Limitation of liability",
    text: "To the maximum extent permitted by applicable law, ZYS and its directors, employees, contractors and service providers are not liable for indirect, incidental, consequential, special or punitive damages, lost profits, lost data, business interruption or reliance on general website information. Nothing in these terms excludes liability that cannot be excluded by law."
  },
  {
    title: "11. Privacy",
    text: "Personal information and business documents submitted through this website or related communication channels are handled in accordance with our Privacy Policy. You should not submit unnecessary sensitive information before the communication channel and service scope are confirmed."
  },
  {
    title: "12. Governing context",
    text: "These terms are intended to govern use of the ZYS website and online inquiry channels. Any signed service agreement, proposal, engagement letter or invoice terms agreed with a client will control the specific services covered by that written agreement."
  },
  {
    title: "13. Changes to these terms",
    text: "We may update these Terms of Use from time to time. The current version will be posted on this page with the effective date shown below. Continued use of the website after updates means you accept the revised terms."
  },
  {
    title: "14. Contact",
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
            These terms apply to the use of ZYS Advisory website information, downloads and consultation request channels.
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
