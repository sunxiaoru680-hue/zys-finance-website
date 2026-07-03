import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, StructuredData } from "@/components/seo";
import { blogArticles, breadcrumbSchema } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "China Business, Tax, Accounting and Company Registration Blog",
  description: "Read 160 professional ZYS insights on China company registration, WFOE registration, business licenses, accounting, bookkeeping, tax filing, VAT, payroll, work permits, visas, CFO advisory, audit, and cross-border company setup.",
  keywords: ["China Company Registration blog", "China WFOE registration", "China Accounting guide", "China tax filing", "China VAT", "China payroll service", "China Tax Consultant insights", "Foreign Investment China", "Hong Kong company registration", "Singapore company registration"],
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <p className="text-sm font-bold uppercase text-evergreen">SEO Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">China business advisory insights for international decision makers.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">Original weekly guidance on China company registration, WFOE registration, business licenses, accounting services, bookkeeping, tax filing, VAT, payroll, work permits, visas, CFO advisory, audit, cross-border tax, Hong Kong company registration, Singapore company registration, US company registration, Dubai company registration, and foreign investment in China.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="focus-ring rounded-md border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-bold uppercase text-gold">{article.category} | {article.published}</p>
              <h2 className="mt-3 text-xl font-bold text-ink">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-graphite">{article.description}</p>
              <p className="mt-5 text-sm font-bold text-evergreen">Read article</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
