import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Download,
  FileCheck2,
  Globe2,
  HelpCircle,
  Plane,
  ShieldCheck
} from "lucide-react";
import {
  companyProfileFaqs,
  companyProfilePdfPath,
  companyProfilePricing,
  companyProfileServices,
  registrationProcess,
  requiredDocuments,
  visaPricing
} from "@/lib/companyProfile";
import {
  companyName,
  createPageMetadata,
  emailAddress,
  faqSchema,
  phoneNumber,
  serviceSchema,
  siteUrl,
  StructuredData
} from "@/components/seo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const baseMetadata = createPageMetadata({
  title: "ZYS Advisory Company Profile | China Company Registration & Tax Services",
  description:
    "Download ZYS Advisory company profile for China company registration, accounting, tax, visa, work permit, Hong Kong, USA, Singapore and Dubai company formation services.",
  keywords: [
    "China company registration",
    "WFOE registration China",
    "China accounting services",
    "China tax services",
    "China visa service",
    "China work permit",
    "Hong Kong company registration",
    "USA company formation",
    "Singapore company registration",
    "Dubai company registration"
  ],
  path: "/company-profile"
});

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: `${siteUrl}/company-profile`,
    languages: {
      en: `${siteUrl}/company-profile`,
      "zh-CN": `${siteUrl}/zh/company-profile`
    }
  }
};

const highlights = [
  "Global Business Expansion Partner",
  "China market-entry and compliance execution",
  "Hong Kong, USA, Singapore, and Dubai formation support"
];

const iconMap = [Building2, Globe2, Globe2, Globe2, Globe2, ShieldCheck, Plane, FileCheck2];

export default function CompanyProfilePage() {
  return (
    <>
      <StructuredData data={faqSchema(companyProfileFaqs)} />
      <StructuredData
        data={serviceSchema(
          "ZYS Advisory Company Profile and Service Guide",
          "Downloadable company profile covering China company registration, WFOE registration, accounting, tax, audit, visas, work permits, Hong Kong, USA, Singapore, and Dubai company formation.",
          [
            "China company registration",
            "WFOE registration China",
            "China accounting services",
            "China tax services",
            "China visa service",
            "China work permit",
            "Hong Kong company registration",
            "USA company formation",
            "Singapore company registration",
            "Dubai company registration"
          ]
        )}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#06172c_0%,#0b2744_52%,#17211f_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gold/70" />
        <div className="container-shell relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="text-sm font-bold uppercase text-gold">
              Company Profile
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              ZYS Advisory company profile and international service guide.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              {companyName} helps foreign investors and international SMEs
              register companies, manage tax and accounting, secure work visas,
              and expand across China, Hong Kong, the United States, Singapore,
              and Dubai.
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-7 text-white/82 sm:grid-cols-3">
              {highlights.map((item) => (
                <p key={item} className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={companyProfilePdfPath}
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Download PDF
                <Download aria-hidden="true" className="h-4 w-4" />
              </a>
              <WhatsAppButton
                source="company_profile_hero"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp CTA
              </WhatsAppButton>
            </div>
          </div>
          <div className="rounded-md border border-white/12 bg-white/8 p-6 shadow-soft backdrop-blur">
            <div className="border-b border-white/15 pb-6">
              <p className="text-sm font-bold uppercase text-gold">Positioning</p>
              <h2 className="mt-3 text-2xl font-bold">Global Business Expansion Partner</h2>
              <p className="mt-4 text-sm leading-7 text-white/76">
                A concise overview of ZYS services, pricing guide, document
                checklist, registration process, and contact channels for
                international decision makers.
              </p>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {["China", "Hong Kong", "Global"].map((item) => (
                <div key={item} className="rounded-md border border-white/12 p-4">
                  <p className="text-2xl font-bold text-gold">{item}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/58">
                    Advisory Coverage
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">About ZYS Advisory</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Practical cross-border advisory for setup, compliance, and growth.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-graphite">
            <p>
              ZYS Advisory works with foreign investors, founders, finance teams,
              and Chinese companies expanding internationally. We turn company
              formation, tax, accounting, visa, licensing, and audit requirements
              into a clear operating plan.
            </p>
            <p>
              Our model is one-stop and execution-focused: define the right
              structure, prepare the required documents, coordinate filings, and
              keep the business compliant after registration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">Service Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              One-stop corporate services for China and international expansion.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {companyProfileServices.map((service, index) => {
              const Icon = iconMap[index];
              return (
                <article key={service.title} className="rounded-md border border-line bg-white p-6 shadow-sm">
                  <Icon aria-hidden="true" className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-evergreen">Pricing Guide</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight">
                Transparent starting prices for planning and budgeting.
              </h2>
              <p className="mt-5 text-sm leading-7 text-graphite">
                Prices are indicative and exclude government fees, third-party
                fees, translation, notarization, address, bank, and special
                license costs unless expressly included in a quotation.
              </p>
            </div>
            <div className="overflow-hidden rounded-md border border-line">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-ink text-white">
                  <tr>
                    <th className="p-4 font-semibold">Service</th>
                    <th className="p-4 font-semibold">Guide Price</th>
                    <th className="hidden p-4 font-semibold md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {companyProfilePricing.map(([service, price, note]) => (
                    <tr key={service} className="border-t border-line align-top">
                      <td className="p-4 font-semibold text-ink">{service}</td>
                      <td className="p-4 text-gold">{price}</td>
                      <td className="hidden p-4 text-graphite md:table-cell">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">Visa Fees</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              China visa, work permit, and residence permit support.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {visaPricing.map(([service, price, note]) => (
                <div key={service} className="rounded-md border border-line bg-white p-5 shadow-sm">
                  <BadgeDollarSign aria-hidden="true" className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-bold text-ink">{service}</h3>
                  <p className="mt-2 text-lg font-bold text-evergreen">{price}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-ink p-6 text-white">
            <p className="text-sm font-bold uppercase text-gold">Required Documents</p>
            <h2 className="mt-3 text-2xl font-bold">Typical document checklist</h2>
            <div className="mt-6 space-y-4">
              {requiredDocuments.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-white/82">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">Registration Process</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              A structured path from first consultation to compliant operation.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {registrationProcess.map((step, index) => (
              <div key={step} className="relative rounded-md border border-line bg-paper p-5">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-base font-bold text-ink">{step}</h3>
                {index < registrationProcess.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -bottom-5 left-1/2 h-5 w-5 -translate-x-1/2 rotate-90 text-gold md:-right-4 md:bottom-auto md:left-auto md:top-8 md:rotate-0"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Common questions before downloading the company profile.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {companyProfileFaqs.map((item) => (
              <details key={item.question} className="rounded-md border border-line bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center gap-3 text-lg font-bold text-ink">
                  <HelpCircle aria-hidden="true" className="h-5 w-5 flex-none text-gold" />
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-gold">Download & Contact</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Download the ZYS Advisory company profile or speak with our team.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Website: www.zysadvisory.com | WhatsApp: {phoneNumber} | Email: {emailAddress}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={companyProfilePdfPath}
              download
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Download PDF
              <Download aria-hidden="true" className="h-4 w-4" />
            </a>
            <WhatsAppButton
              source="company_profile_final"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
