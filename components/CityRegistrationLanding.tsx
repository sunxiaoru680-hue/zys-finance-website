import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import {
  brandName,
  companyName,
  createPageMetadata,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
  StructuredData
} from "@/components/seo";
import { cityRegistrationPages, getCityRegistrationPage } from "@/lib/cityRegistration";
import { breadcrumbSchema } from "@/lib/content";

type CityRegistrationLandingProps = {
  cityKey: string;
};

const serviceLinks = [
  { href: "/china-company-registration", label: "China Registration" },
  { href: "/services/company-registration-in-china", label: "Company Registration Service" },
  { href: "/services/wfoe-registration", label: "WFOE Registration" },
  { href: "/tax-accounting", label: "Tax & Accounting" },
  { href: "/services/accounting-services", label: "Accounting Services" },
  { href: "/services/tax-consulting", label: "Tax Consulting" },
  { href: "/visa-services", label: "Visa Services" },
  { href: "/business-licenses", label: "Business Licenses" },
  { href: "/services/annual-compliance", label: "Annual Compliance" },
  { href: "/contact", label: "Contact" }
];

const processSteps = [
  {
    title: "1. Confirm the city fit and entity structure",
    text: "The first step is to confirm whether the city supports the commercial goal, shareholder structure, revenue model, staffing plan, and target customers. Most foreign investors choose a limited liability company, often called a WFOE in market-entry discussions, but the practical setup still depends on ownership, registered capital, business scope, licensing, and tax needs."
  },
  {
    title: "2. Draft the business scope and registration profile",
    text: "The business scope should be broad enough for the planned activity, but not so broad that it triggers avoidable review, licensing questions, or tax bureau concern. The company name, registered capital, director, supervisor, legal representative, financial contact, and address details should be checked together before filing."
  },
  {
    title: "3. Prepare shareholder and officer documents",
    text: "Foreign shareholders usually need identity or corporate documents, and overseas corporate shareholders often need notarization, legalization, translation, and consistency checks. Director, supervisor, legal representative, and finance contact documents must also match the local application forms and post-registration tax records."
  },
  {
    title: "4. Submit the registration and business license application",
    text: "Once the application file is ready, the registration is submitted to the market regulation authority. The review focuses on company name, shareholder information, registered address, legal representative, business scope, articles of association, and whether the filing matches local rules."
  },
  {
    title: "5. Complete chops, tax registration, bank setup, and accounting handover",
    text: "After the business license is issued, the company still needs practical operating steps. These usually include company chops, tax registration, bank account preparation, bookkeeping setup, VAT and fapiao planning, payroll registration where relevant, and internal controls for contracts, invoices, and expenses."
  },
  {
    title: "6. Review licenses, visas, reporting, and annual compliance",
    text: "Some activities require permits or additional filings after or before the license is issued. Foreign founders and employees may need work permits and residence permits. The company must also maintain monthly or quarterly tax filings, annual reporting, accounting records, and compliance documents."
  }
];

const documentGroups = [
  {
    title: "Shareholder documents",
    text: "Individual shareholders usually prepare passports, contact details, and signature materials. Corporate shareholders may need a certificate of incorporation, register excerpt, board authorization, legal representative identity documents, notarization, legalization, and Chinese translation depending on the jurisdiction and current local practice."
  },
  {
    title: "Management and officer documents",
    text: "The registration file normally identifies the legal representative, executive director or directors, supervisor, manager, finance contact, and tax handler. Names, passport numbers, phone numbers, email addresses, and signed forms should be consistent across the application, bank file, and tax registration."
  },
  {
    title: "Registered address materials",
    text: "The address file may include a lease, ownership certificate, landlord documents, address use commitment, or district-provided registration materials. The address should be suitable for the business scope, future invoice needs, bank onboarding, tax bureau records, and possible inspections."
  },
  {
    title: "Business model and scope evidence",
    text: "Investors should prepare a plain-language explanation of services or products, customer type, supplier flow, online activity, import-export needs, hiring plan, and expected invoices. This helps avoid a mismatch between the intended operation and the company scope submitted for approval."
  },
  {
    title: "Post-registration operating records",
    text: "After approval, the company should keep business license records, chops, bank materials, tax login details, invoice device or digital invoice access, accounting vouchers, contracts, payroll records, and filing confirmations in an organized compliance file."
  }
];

const timelineSteps = [
  "Initial consultation, city fit review, business model discussion, and document checklist confirmation.",
  "Name, scope, registered address, officer information, shareholder document, and articles of association preparation.",
  "Business license application, authority review, approval follow-up, and company chop coordination after license issuance.",
  "Tax registration, accounting setup, bank account preparation, VAT and fapiao planning, payroll review, and license or visa follow-up."
];

function faqItems(page: NonNullable<ReturnType<typeof getCityRegistrationPage>>) {
  return [
    {
      question: `Can a foreign investor register a company in ${page.city}?`,
      answer: `Yes. Foreign investors can register a company in ${page.city} when the ownership documents, business scope, registered address, officer information, and compliance plan meet China registration requirements and local review expectations.`
    },
    {
      question: `How long does it take to register a company in ${page.city}?`,
      answer: page.timeline
    },
    {
      question: `What documents are required for ${page.city} company registration?`,
      answer: `Common documents include shareholder identity or corporate registration documents, officer information, registered address materials, articles of association, business scope details, signatures, translations, and post-registration tax and bank materials.`
    },
    {
      question: `Does a ${page.city} company need tax and accounting setup after registration?`,
      answer: `Yes. A company registered in ${page.city} needs tax registration, bookkeeping, filing calendar control, VAT and fapiao planning, corporate income tax compliance, payroll withholding where relevant, and organized accounting records after the business license is issued.`
    },
    {
      question: `Can the company sponsor foreign staff after setup in ${page.city}?`,
      answer: page.hiringNote
    },
    {
      question: `What affects the cost of registering a company in ${page.city}?`,
      answer: `Cost depends on factors such as ${page.costFactors.join(", ")}, document legalization, translation, accounting setup, licensing review, and the level of advisory support needed before and after registration.`
    },
    {
      question: `Does ${page.city} company registration require a local business license or permit?`,
      answer: page.licenseNote
    },
    {
      question: `How does ${brandName} support ${page.city} company registration?`,
      answer: `${brandName} reviews the registration plan, confirms documents, coordinates business scope and address issues, supports the filing process, and connects registration with tax, accounting, license, visa, and compliance steps.`
    },
    {
      question: `What local tax issues should a ${page.city} company review first?`,
      answer: page.localTaxPolicies
    },
    {
      question: `What kind of office address works for company registration in ${page.city}?`,
      answer: page.officeRentalInfo
    }
  ];
}

export function createCityRegistrationMetadata(cityKey: string): Metadata {
  const page = getCityRegistrationPage(cityKey);

  if (!page) {
    return {};
  }

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    keywords: [
      `register company in ${page.city}`,
      `${page.city} company registration`,
      `${page.city} WFOE registration`,
      `China company registration ${page.city}`,
      `${page.city} business license`,
      `${page.city} tax accounting`
    ],
    path: page.path
  });
}

export function generateCityRegistrationStaticParams() {
  return cityRegistrationPages.map((page) => ({ city: page.key }));
}

export function CityRegistrationLanding({ cityKey }: CityRegistrationLandingProps) {
  const page = getCityRegistrationPage(cityKey);

  if (!page) {
    notFound();
  }

  const faqs = faqItems(page);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "China Registration", path: "/china-company-registration" },
    { name: `Register Company in ${page.city}`, path: page.path }
  ];

  return (
    <>
      <StructuredData
        data={serviceSchema(
          `Register Company in ${page.city}`,
          page.metaDescription,
          [
            `register company in ${page.city}`,
            `${page.city} company registration`,
            `${page.city} WFOE registration`,
            "China company registration",
            "China business license",
            "China tax accounting"
          ]
        )}
      />
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={faqSchema(faqs)} />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs.map((item) => ({ name: item.name, href: item.path }))} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-5xl">
          <p className="text-sm font-bold uppercase text-evergreen">
            China Company Registration in {page.city}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            {page.intro} {page.localPosition}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-md border border-line bg-paper px-4 py-2 text-sm font-bold text-evergreen">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.66fr_0.34fr]">
          <div className="space-y-6 text-base leading-8 text-graphite">
            <h2 className="text-3xl font-bold leading-tight text-ink">
              Local guidance for registering a company in {page.city}
            </h2>
            <p>
              Registering a company in {page.city}, {page.province}, should start with a commercial plan rather than a form-filling exercise. The company must be able to explain what it sells, who it serves, where contracts are signed, how invoices are issued, whether goods are imported or exported, whether staff will be hired, and how management will maintain accounting records after approval.
            </p>
            <p>
              {page.addressNote} This matters because the registered address appears in government records and is used by market regulation, tax, banking, and sometimes license authorities. A mismatch between the address and the intended activity can slow registration, complicate bank review, or create questions during tax onboarding.
            </p>
            <p>
              The business scope should be drafted with enough room for near-term operations while staying aligned with the real activity. In {page.city}, common investor questions involve {page.industries.join(", ")}. Each model can create different requirements for VAT invoices, accounting records, contracts, licenses, customs, data, staffing, or foreign exchange.
            </p>
            <p>
              {companyName} helps investors compare the registration route with the practical work that follows. That includes confirming documents, identifying local issues, planning tax and accounting, checking business license exposure, and preparing the company for bank account opening, fapiao use, payroll, visa support, and annual compliance.
            </p>

            <h3 className="text-2xl font-bold leading-tight text-ink">
              District and address considerations
            </h3>
            <p>
              Investors often compare districts such as {page.districts.join(", ")}. The right district is not always the one with the lowest initial address cost. A better choice is the district that fits customer location, staff hiring, tax administration, license expectations, logistics, bank access, and future operating needs.
            </p>
            <p>
              A service company may prioritize a flexible office and a smooth tax registration path. A trading company may care more about import-export registrations, supplier invoices, customs records, and VAT treatment. A technology company may need to consider online services, data activity, software revenue, intellectual property, and whether any filings apply before contracts begin.
            </p>
            <p>
              {page.localAdvantages}
            </p>
          </div>

          <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-ink">{page.city} setup snapshot</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-graphite">
              <p><strong className="text-ink">Province or municipality:</strong> {page.province}</p>
              <p><strong className="text-ink">Common districts:</strong> {page.districts.join(", ")}</p>
              <p><strong className="text-ink">Typical activities:</strong> {page.industries.join(", ")}</p>
              <p><strong className="text-ink">Timeline:</strong> {page.timeline}</p>
              <Link href="/contact" className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-evergreen px-4 py-2 font-bold text-white">
                Discuss your setup
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight">
              City-specific {page.city} company registration process
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              The registration process should be managed in sequence because each decision affects the next step. In {page.city}, the strongest filing strategy is the one that connects district selection, registered address, business scope, VAT registration, bank account opening, accounting setup, license review, and annual compliance before the application is submitted.
            </p>
          </div>
          <div className="mt-10 grid gap-5">
            {page.localProcess.map((step, index) => (
              <article key={step} className="rounded-md border border-line bg-paper p-6">
                <h3 className="text-xl font-bold text-ink">Step {index + 1}: {step.split(".")[0]}</h3>
                <p className="mt-3 text-base leading-8 text-graphite">
                  {step} {processSteps[index]?.text} For {page.city}, this step should also consider {page.faqFocus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold leading-tight">
            Required documents for registering a company in {page.city}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-graphite">
            The exact document list depends on shareholder type, nationality, business scope, address, officer structure, and whether special licenses are involved. The following categories are a practical planning baseline for foreign investors preparing a {page.city} company registration file.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {documentGroups.map((group) => (
              <article key={group.title} className="rounded-md border border-line bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-ink">{group.title}</h3>
                <p className="mt-3 text-base leading-8 text-graphite">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Estimated timeline and approval path
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              {page.timeline} The most common timeline risk is not the online filing itself. Delays usually come from incomplete shareholder documents, inconsistent names, address issues, unclear business scope, licensing questions, bank review, or missing tax registration materials after approval.
            </p>
            <div className="mt-6 space-y-4">
              {timelineSteps.map((item, index) => (
                <p key={item} className="flex gap-3 text-base leading-8 text-graphite">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
                  <span><strong className="text-ink">Phase {index + 1}:</strong> {item}</span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Cost factors for {page.city} company registration
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              There is no responsible single price for every investor because the workload depends on the operating model. A simple consulting company with individual shareholders and a clear address is different from a trading company with overseas corporate shareholders, import-export needs, special licensing, foreign staff, and complex tax planning.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.costFactors.map((factor) => (
                <p key={factor} className="rounded-md border border-line bg-paper p-4 text-sm font-semibold leading-6 text-graphite">
                  {factor}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight">
              {page.city} company setup comparison table
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              A comparison table helps foreign investors avoid treating every China city as interchangeable. The best registration decision depends on industry, office needs, tax administration, banking, staffing, license exposure, and how the company will generate revenue after the business license is issued.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-md border border-line bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-paper text-ink">
                <tr>
                  <th className="border-b border-line p-4 font-bold">Decision area</th>
                  <th className="border-b border-line p-4 font-bold">Recommended approach in {page.city}</th>
                  <th className="border-b border-line p-4 font-bold">Common caution</th>
                </tr>
              </thead>
              <tbody>
                {page.comparisonRows.map((row) => (
                  <tr key={row.factor} className="align-top">
                    <td className="border-b border-line p-4 font-bold text-ink">{row.factor}</td>
                    <td className="border-b border-line p-4 leading-7 text-graphite">{row.recommended}</td>
                    <td className="border-b border-line p-4 leading-7 text-graphite">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="space-y-5 text-base leading-8 text-graphite">
            <h2 className="text-3xl font-bold leading-tight text-ink">
              Tax, accounting, VAT, payroll, and compliance notes
            </h2>
            <p>
              {page.taxNote} A newly registered company should not wait until revenue begins before organizing accounting. China companies generally need regular bookkeeping and tax filings even during low-activity periods, and late filings can create penalties or complicate future bank, license, or visa matters.
            </p>
            <p>
              VAT planning is especially important when the company will issue fapiao, buy from domestic suppliers, sell services to overseas clients, import goods, export goods, or apply for general taxpayer status. The invoice model should match the business scope, contracts, accounting records, and customer expectations.
            </p>
            <p>
              Payroll and individual income tax should be considered before hiring. Employment contracts, salary structure, social insurance, housing fund, withholding obligations, and work permit support should be coordinated so that HR records match tax and accounting records.
            </p>
            <p>
              {page.licenseNote} License review should happen before registration whenever possible, because some permits affect address choice, registered capital expectation, personnel qualifications, site inspection, or the exact wording of the business scope.
            </p>
            <h3 className="text-2xl font-bold leading-tight text-ink">
              Local tax policies and VAT registration in {page.city}
            </h3>
            <p>
              {page.localTaxPolicies}
            </p>
            <p>
              {page.vatRegistration}
            </p>
            <h3 className="text-2xl font-bold leading-tight text-ink">
              Accounting requirements and annual compliance
            </h3>
            <p>
              {page.accountingRequirements}
            </p>
            <p>
              {page.annualCompliance}
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-ink">Internal planning links</h3>
            <div className="mt-5 grid gap-3">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold leading-7 text-evergreen hover:text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-graphite">
              Use these pages to connect the {page.city} registration plan with business license review, tax and accounting setup, visa support, and a consultation before documents are prepared.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-3">
          <article className="rounded-md border border-line bg-paper p-6">
            <h2 className="text-2xl font-bold text-ink">Office rental and registered address</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              {page.officeRentalInfo}
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              The address should be reviewed before signing a lease because registration, tax bureau records, bank account opening, fapiao setup, license inspections, and future change filings all depend on the address file being usable and consistent.
            </p>
          </article>
          <article className="rounded-md border border-line bg-paper p-6">
            <h2 className="text-2xl font-bold text-ink">Bank account opening</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              {page.bankAccountOpening}
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              Bank onboarding is easier when the company can explain its customers, suppliers, source of funds, expected currencies, foreign shareholder relationship, and why the selected city is commercially logical.
            </p>
          </article>
          <article className="rounded-md border border-line bg-paper p-6">
            <h2 className="text-2xl font-bold text-ink">Recommended industries</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              {page.industryRecommendations}
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              Industry choice affects scope wording, licenses, invoice categories, accounting controls, address suitability, staffing, and the advisory work needed before the application is filed.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight">
              E-E-A-T notes for foreign investors comparing {page.city}
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              This page is written for founders, CFOs, legal teams, and overseas shareholders who need practical registration guidance before committing to a China entity. It reflects recurring issues seen in company setup projects: address mismatch, overly broad scope wording, late tax onboarding, weak invoice controls, bank questions, undocumented shareholder payments, and license assumptions that should have been checked earlier.
            </p>
            <p className="mt-4 text-base leading-8 text-graphite">
              {companyName} approaches {page.city} company registration as a connected compliance project. The registration filing, business license, tax registration, bank account, VAT invoice setup, accounting records, payroll plan, visa support, annual reporting, and later changes should tell one consistent story. That is the standard investors should use when comparing service providers and choosing where to register.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold">FAQ: Register company in {page.city}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-line bg-paper p-6">
                <summary className="cursor-pointer text-lg font-bold text-ink">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-graphite">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell rounded-md border border-line bg-evergreen p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase text-gold">Start with a clean registration plan</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Discuss your {page.city} company registration before documents are filed.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-white/85">
            Share your shareholder structure, business activity, target district, hiring plan, invoice needs, license questions, and timeline. {companyName} can review the registration route and explain how the company setup connects with tax, accounting, business licenses, visa services, and long-term compliance.
          </p>
          <Link href="/contact" className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-bold text-ink">
            Contact ZYS
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
