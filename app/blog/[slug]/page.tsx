import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { articleSchema, companyName, createPageMetadata, emailAddress, faqSchema, phoneNumber, StructuredData } from "@/components/seo";
import { articleFaqs, blogArticles, breadcrumbSchema, getArticleBySlug, relatedArticles } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createPageMetadata({
    title: `${article.title} | ${article.category}`,
    description: article.description,
    keywords: [article.keyword, article.category, "China Company Registration", "China WFOE Registration", "China Accounting Service", "China Tax Filing", "China VAT", "China Payroll Service", "China Tax Advisory", "Foreign Investment China"],
    path: `/blog/${article.slug}`
  });
}

const pillars = [
  "market-entry objective",
  "entity structure",
  "tax registration",
  "accounting records",
  "invoicing and VAT",
  "payroll and visas",
  "business license exposure",
  "annual compliance",
  "audit readiness",
  "management reporting"
];

function articleSections(article: NonNullable<ReturnType<typeof getArticleBySlug>>) {
  return pillars.map((pillar, index) => ({
    heading: `${index + 1}. ${article.title}: ${pillar}`,
    body: `${article.title} should be evaluated through the lens of ${pillar}, because foreign investors rarely face a single isolated filing in China. A practical plan connects China Company Registration, China WFOE Registration, China Accounting Service, China Bookkeeping, China Tax Filing, China VAT, China Payroll Service, China Work Permit, China Tax Advisory, China Audit, and Foreign Investment China decisions. For international SMEs, the most common issue is not only understanding the rule, but sequencing documents, approvals, reporting, banking, invoices, employment, and shareholder expectations in a way that management can actually execute. ZYS recommends documenting the commercial purpose, target city, ownership chain, contract model, hiring plan, expected revenue flow, overseas payment needs, and filing calendar before choosing the final implementation route. This reduces avoidable delays and creates a cleaner audit trail for tax, accounting, visa, business license, and annual compliance work.`
  }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const faqs = articleFaqs(article);
  const related = relatedArticles(article.slug);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: article.title, path: `/blog/${article.slug}` }
  ];

  return (
    <>
      <StructuredData data={articleSchema(article)} />
      <StructuredData data={faqSchema(faqs)} />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs.map((item) => ({ name: item.name, href: item.path }))} />
      <article>
        <header className="bg-white py-16 md:py-24">
          <div className="container-shell max-w-4xl">
            <p className="text-sm font-bold uppercase text-evergreen">{article.category} | {article.keyword}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-8 text-graphite">{article.description}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-graphite">
              <span>By {article.author}</span>
              <span>Published {article.published}</span>
              <span>Last updated {article.updated}</span>
            </div>
          </div>
        </header>
        <section className="py-16 md:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="space-y-8">
              <figure className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <Image
                  src="/images/global-finance-consulting-hero.png"
                  alt={article.imageAlt}
                  width={1200}
                  height={630}
                  className="h-auto w-full"
                  priority={false}
                />
                <figcaption className="px-5 py-3 text-sm leading-6 text-graphite">
                  {article.imageAlt}
                </figcaption>
              </figure>
              <p className="rounded-md border border-line bg-white p-7 text-base leading-8 text-graphite shadow-sm">
                This guide is written by {companyName} for founders, CFOs, legal teams, and investors who need an executive-level explanation of {article.title}. It is not a substitute for formal legal or tax advice, but it gives decision makers a structured framework for discussing China registration, accounting, tax, visa, licensing, audit, and annual compliance questions with a professional advisor.
              </p>
              <section className="rounded-md border border-line bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-ink">Internal links for this topic</h2>
                <div className="mt-5 grid gap-3 text-sm font-semibold text-evergreen sm:grid-cols-2">
                  <Link href="/">Homepage</Link>
                  <Link href="/services">All advisory services</Link>
                  <Link href="/services/company-registration-in-china">China company registration</Link>
                  <Link href="/services/wfoe-registration">WFOE registration China</Link>
                  <Link href="/services/accounting-services">China accounting service</Link>
                  <Link href="/services/tax-consulting">China tax advisory</Link>
                  <Link href="/services/china-payroll-service">China payroll service</Link>
                  <Link href="/contact">Request a consultation</Link>
                </div>
              </section>
              {articleSections(article).map((section) => (
                <section key={section.heading} className="rounded-md border border-line bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                  <p className="mt-4 text-base leading-8 text-graphite">{section.body}</p>
                  <h3 className="mt-5 text-lg font-bold text-ink">What decision makers should verify</h3>
                  <p className="mt-3 text-base leading-8 text-graphite">Before acting on {article.keyword}, confirm the business scope, licensing exposure, tax filing calendar, invoice model, payroll obligations, banking path, and responsible contact person. These details determine whether the right solution is company registration, WFOE setup, accounting cleanup, tax advisory, payroll outsourcing, work permit support, audit preparation, or cross-border tax planning.</p>
                  <p className="mt-4 text-base leading-8 text-graphite">For deeper planning, review ZYS pages on <Link className="font-semibold text-evergreen" href="/services/company-registration-in-china">Company Registration in China</Link>, <Link className="font-semibold text-evergreen" href="/services/accounting-services">Accounting Services</Link>, <Link className="font-semibold text-evergreen" href="/services/tax-consulting">Tax Consulting</Link>, <Link className="font-semibold text-evergreen" href="/services/china-visa-service">China Visa Service</Link>, and <Link className="font-semibold text-evergreen" href="/services/annual-compliance">Annual Compliance</Link>.</p>
                </section>
              ))}
            </div>
            <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">EEAT and next steps</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-graphite">
                <p><strong className="text-ink">Author:</strong> {article.author}</p>
                <p><strong className="text-ink">Company:</strong> {companyName}</p>
                <p><strong className="text-ink">Contact:</strong> {phoneNumber} | {emailAddress}</p>
                <p>ZYS supports international clients with China company registration, WFOE registration, accounting, tax filing, VAT, payroll, work permits, audit preparation, business licenses, and cross-border tax planning.</p>
                <Link href="/contact" className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-evergreen px-4 py-2 font-bold text-white">Book consultation</Link>
              </div>
              <h2 className="mt-8 text-xl font-bold">Related articles</h2>
              <div className="mt-5 grid gap-4">
                {related.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.title}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-white py-16 md:py-24">
          <div className="container-shell">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-md border border-line bg-paper p-6">
                  <summary className="cursor-pointer text-lg font-bold text-ink">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-graphite">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </article>
      <LeadCapture title={`Discuss ${article.title}`} />
    </>
  );
}
