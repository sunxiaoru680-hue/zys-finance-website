import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { createPageMetadata, faqSchema, serviceSchema, StructuredData } from "@/components/seo";
import { breadcrumbSchema, getServiceBySlug, serviceFaqs, servicePages } from "@/lib/content";

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
    title: `${service.title} | ${service.keyword}`,
    description: `${service.summary} ZYS provides ${service.keyword} support for foreign investors, international SMEs, and Chinese companies expanding overseas.`,
    keywords: [service.keyword, service.title, "China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"],
    path: `/services/${service.slug}`
  });
}

const sectionTitles = [
  "Strategic context",
  "Documents and preparation",
  "Compliance risks",
  "How ZYS manages delivery",
  "Internal links and next steps"
];

function serviceParagraphs(service: NonNullable<ReturnType<typeof getServiceBySlug>>) {
  return sectionTitles.map((title, index) => ({
    title,
    body: `${service.title} is most effective when it is treated as part of a wider China operating plan rather than a single administrative filing. For ${service.audience}, the practical questions usually involve China Company Registration, China Accounting, China Tax Consultant support, China Business Registration, China Company Formation, Chinese Accounting Firm selection, and Foreign Investment China planning. ZYS reviews the commercial goal, ownership structure, target city, business scope, staffing plan, invoicing needs, licensing exposure, and annual compliance calendar before recommending a route. This reduces rework, clarifies the responsibilities of shareholders and managers, and gives international teams a realistic view of timing, document burden, pricing, and post-approval obligations. Section ${index + 1} focuses on ${title.toLowerCase()} so decision makers can understand both the immediate action and the long-term compliance effect.`
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqs = serviceFaqs(service);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` }
  ];

  return (
    <>
      <StructuredData data={serviceSchema(service.title, service.summary, [service.keyword, "China Company Registration", "China Accounting", "China Tax Consultant", "Foreign Investment China"])} />
      <StructuredData data={faqSchema(faqs)} />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs.map((item) => ({ name: item.name, href: item.path }))} />
      <section className="border-b border-line bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">{service.keyword}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">{service.summary}</p>
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
                <p className="mt-4 text-base leading-8 text-graphite">A strong engagement also connects internal links between <a className="font-semibold text-evergreen" href="/china-company-registration">China company registration</a>, <a className="font-semibold text-evergreen" href="/tax-accounting">tax and accounting</a>, <a className="font-semibold text-evergreen" href="/business-licenses">business licenses</a>, <a className="font-semibold text-evergreen" href="/visa-services">visa services</a>, and <a className="font-semibold text-evergreen" href="/contact">consultation booking</a>. This gives search engines and users a clear understanding of how the service fits into the broader ZYS advisory model.</p>
              </section>
            ))}
          </article>
          <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">What this includes</h2>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-graphite">
              {["Initial consultation", "Document checklist", "Compliance review", "Timeline and pricing", "Implementation support", "Long-term advisory"].map((item) => (
                <p key={item} className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />{item}</p>
              ))}
            </div>
          </aside>
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
