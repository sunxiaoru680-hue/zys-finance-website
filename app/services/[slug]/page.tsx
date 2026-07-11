import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { companyName, createPageMetadata, emailAddress, faqSchema, phoneNumber, serviceSchema, StructuredData } from "@/components/seo";
import { breadcrumbSchema, getServiceBySlug, serviceFaqs, servicePages } from "@/lib/content";
import { relatedBlogLinksForService, relatedCityLinksForService, relatedServiceLinksForService } from "@/lib/internalLinks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.title === service.keyword ? `${service.title} | China Business & Tax Advisory` : `${service.title} | ${service.keyword}`,
    description: `${service.summary} ZYS provides ${service.keyword} support for foreign investors, international SMEs, and Chinese companies expanding overseas.`,
    keywords: [service.keyword, service.title, "China Company Registration", "China WFOE Registration", "China Business License", "China Accounting Service", "China Bookkeeping", "China Tax Filing", "China VAT", "China Payroll Service", "China Work Permit", "China Tax Advisory", "China Audit", "Foreign Investment China"],
    path: `/services/${service.slug}`
  });
}

function serviceParagraphs(service: NonNullable<ReturnType<typeof getServiceBySlug>>) {
  return [
    {
      title: "Clear introduction",
      body: `${service.title} helps ${service.audience} plan and execute a specific China or cross-border business requirement with attention to commercial purpose, document readiness, timeline, and ongoing obligations.`
    },
    {
      title: "Who this service is for",
      body: `This service is typically relevant when founders, shareholders, finance teams, HR teams, or overseas management need a practical implementation path and want to avoid treating registration, tax, accounting, licensing, visa, or maintenance issues in isolation.`
    },
    {
      title: "Scope of service",
      body: `ZYS may assist with initial consultation, requirement mapping, document checklist preparation, filing or advisory coordination, authority communication support where applicable, and post-project handover for related accounting, tax, visa, license, or reporting tasks.`
    },
    {
      title: "Required information or documents",
      body: `Typical information includes business activity, target city or jurisdiction, shareholder and director details, ownership chain, registered address or operating location, contract model, expected invoices, staffing plan, and any existing registration, tax, license, or visa documents.`
    },
    {
      title: "Process",
      body: `The usual process is consultation, scope confirmation, document preparation, implementation, authority or provider follow-up, and compliance handover. Timing depends on the city, jurisdiction, document completeness, and whether additional licenses or reviews are required.`
    },
    {
      title: "Typical considerations",
      body: `Decision makers should consider business scope, tax category, invoice requirements, payroll obligations, banking readiness, document translations, annual maintenance, and the internal person responsible for future filings and records.`
    },
    {
      title: "Compliance risks",
      body: `Risks may include incomplete shareholder documents, business scope mismatch, late filings, inconsistent accounting records, unsupported invoices, missed renewals, unclear employment arrangements, or assumptions that differ from local authority practice.`
    },
    {
      title: "Deliverables",
      body: `Deliverables usually include a service plan, document checklist, filing or advisory status updates, practical next steps, and handover notes for related registration, tax, accounting, license, visa, or maintenance work.`
    }
  ];
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqs = serviceFaqs(service);
  const relatedArticles = relatedBlogLinksForService(service, 5);
  const relatedCities = relatedCityLinksForService(service, 3);
  const relatedServices = relatedServiceLinksForService(service, 4);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` }
  ];

  return (
    <>
      <StructuredData data={serviceSchema(service.title, service.summary, [service.keyword, "China Company Registration", "China WFOE Registration", "China Business License", "China Accounting Service", "China Bookkeeping", "China Tax Filing", "China VAT", "China Payroll Service", "China Work Permit", "China Tax Advisory", "China Audit", "Hong Kong Company Registration", "Singapore Company Registration", "US Company Registration", "Dubai Company Registration", "Cross-border Tax", "Foreign Investment China"])} />
      <StructuredData data={faqSchema(faqs)} />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs.map((item) => ({ name: item.name, href: item.path }))} />
      <section className="border-b border-line bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">{service.keyword}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">{service.summary}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-graphite">
            <span>By {companyName}</span>
            <span>Last updated 2026-07-03</span>
            <span>{phoneNumber}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="focus-ring rounded-md bg-evergreen px-5 py-3 text-sm font-bold text-white" href="/contact">Request Consultation</a>
            <Link className="focus-ring rounded-md border border-line px-5 py-3 text-sm font-bold text-ink" href="/blog">Read Insights</Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="space-y-10">
            {serviceParagraphs(service).map((section) => (
              <section key={section.title} className="rounded-md border border-line bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-graphite">{section.body}</p>
                <h3 className="mt-5 text-lg font-bold text-ink">Related planning points</h3>
                <p className="mt-3 text-base leading-8 text-graphite">For {service.keyword}, ZYS documents the responsible parties, likely timeline, expected evidence, authority touchpoints where applicable, tax and accounting impact, and follow-up obligations so overseas management can approve the work with fewer surprises.</p>
                <p className="mt-4 text-base leading-8 text-graphite">A strong engagement may connect <a className="font-semibold text-evergreen" href="/china-company-registration">China company registration</a>, <a className="font-semibold text-evergreen" href="/tax-accounting">tax and accounting</a>, <a className="font-semibold text-evergreen" href="/business-licenses">business licenses</a>, <a className="font-semibold text-evergreen" href="/visa-services">visa services</a>, and <a className="font-semibold text-evergreen" href="/contact">consultation booking</a>, depending on the client's circumstances.</p>
              </section>
            ))}
          </article>
          <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Why choose ZYS</h2>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-graphite">
              {["English and Chinese communication", "China tax and accounting context", "Company registration and license coordination", "Payroll, visa, and annual compliance links", "Clear timelines and document lists", "Long-term advisory support"].map((item) => (
                <p key={item} className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />{item}</p>
              ))}
            </div>
            <div className="mt-7 rounded-md bg-paper p-4 text-sm leading-7 text-graphite">
              <p className="font-bold text-ink">Company contact information</p>
              <p>{companyName}</p>
              <p>{phoneNumber}</p>
              <p>{emailAddress}</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-evergreen">Related Services and Resources</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">Related resources for {service.title}</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              These internal resources connect {service.keyword} with practical registration, tax, accounting, city selection, licensing, and long-term compliance decisions.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <section className="rounded-md border border-line bg-paper p-6">
              <h3 className="text-xl font-bold text-ink">Related Articles</h3>
              <div className="mt-5 grid gap-4">
                {relatedArticles.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.label}
                    <span className="mt-1 block text-xs font-normal uppercase text-graphite">{item.context}</span>
                  </Link>
                ))}
              </div>
            </section>
            <section className="rounded-md border border-line bg-paper p-6">
              <h3 className="text-xl font-bold text-ink">Related Services</h3>
              <div className="mt-5 grid gap-4">
                {relatedServices.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.label}
                    <span className="mt-1 block text-xs font-normal text-graphite">{item.context}</span>
                  </Link>
                ))}
              </div>
            </section>
            <section className="rounded-md border border-line bg-paper p-6">
              <h3 className="text-xl font-bold text-ink">City Landing Pages</h3>
              <div className="mt-5 grid gap-4">
                {relatedCities.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.label}
                    <span className="mt-1 block text-xs font-normal text-graphite">{item.context}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <h2 className="text-3xl font-bold">Frequently asked questions</h2>
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
      <LeadCapture title={`Request ${service.title} support`} />
    </>
  );
}
