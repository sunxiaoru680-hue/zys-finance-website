import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCapture } from "@/components/LeadCapture";
import { articleSchema, companyName, createPageMetadata, emailAddress, faqSchema, phoneNumber, siteUrl, StructuredData } from "@/components/seo";
import { articleCanonicalUrl, articleFaqs, articleFeaturedImageUrl, blogArticles, breadcrumbSchema, getArticleBySlug, servicePages } from "@/lib/content";
import type { EditorialSection } from "@/lib/editorialArticles";
import { cityLinkForArticle, relatedBlogLinksForArticle, relatedServiceLinksForArticle } from "@/lib/internalLinks";

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

  const baseMetadata = createPageMetadata({
    title: article.metaTitle || `${article.title} | ${article.category}`,
    description: article.description,
    keywords: article.longTailKeywords?.length
      ? [article.keyword, ...article.longTailKeywords]
      : [article.keyword, article.category, "China Company Registration", "China WFOE Registration", "China Accounting Service", "China Tax Filing", "China VAT", "China Payroll Service", "China Tax Advisory", "Foreign Investment China"],
    path: `/blog/${article.slug}`
  });
  const canonical = articleCanonicalUrl(article);
  const featuredImage = articleFeaturedImageUrl(article);

  return {
    ...baseMetadata,
    authors: [{ name: article.author }],
    publisher: companyName,
    alternates: {
      canonical,
      types: {
        "application/rss+xml": `${siteUrl}/rss.xml`
      }
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      siteName: companyName,
      type: "article",
      locale: "en_US",
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [article.author],
      section: article.category,
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: article.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [featuredImage]
    },
    other: {
      "article:author": article.author,
      "article:published_time": article.published,
      "article:modified_time": article.updated,
      "article:section": article.category
    }
  };
}

const pillars = [
  "Business context",
  "Information to prepare",
  "Compliance considerations",
  "Practical next steps"
];

function articleSections(article: NonNullable<ReturnType<typeof getArticleBySlug>>): EditorialSection[] {
  if (article.sections?.length) {
    return article.sections;
  }

  return pillars.map((pillar, index) => ({
    heading: `${index + 1}. ${pillar}`,
    paragraphs: [
      `${article.title} should be reviewed in the context of the company's commercial purpose, target city, ownership chain, contract model, hiring plan, invoicing needs, overseas payment requirements, and filing calendar. Requirements may differ by city, business activity, and document readiness, so ZYS recommends confirming assumptions before submitting filings or making tax, accounting, visa, or licensing decisions.`
    ]
  }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const faqs = articleFaqs(article);
  const curatedServices = article.relatedServiceHrefs
    ?.map((href) => {
      const slug = href.replace("/services/", "");
      const service = servicePages.find((item) => item.slug === slug);
      return service ? { href, label: service.title } : null;
    })
    .filter((item): item is { href: string; label: string } => Boolean(item));
  const relatedServices = curatedServices?.length ? curatedServices : relatedServiceLinksForArticle(article, 3);
  const cityLink = cityLinkForArticle(article);
  const curatedRelated = article.relatedArticleSlugs
    ?.map((relatedSlug) => {
      const relatedArticle = getArticleBySlug(relatedSlug);
      return relatedArticle ? { href: `/blog/${relatedArticle.slug}`, label: relatedArticle.title } : null;
    })
    .filter((item): item is { href: string; label: string } => Boolean(item));
  const related = curatedRelated?.length ? curatedRelated : relatedBlogLinksForArticle(article, 2);
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
            <p className="text-sm font-bold uppercase text-evergreen">{article.category}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-8 text-graphite">{article.description}</p>
            {article.summary ? (
              <p className="mt-5 rounded-md border border-line bg-paper p-5 text-base leading-8 text-graphite">
                {article.summary}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-graphite">
              <span>By {article.author}</span>
              <span>Reviewed by {article.reviewedBy}</span>
              <span>Published {article.published}</span>
              <span>Last updated {article.updated}</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </header>
        <section className="py-16 md:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="space-y-8">
              <figure className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <Image
                  src={article.featuredImage}
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
                This guide is written by {companyName} for founders, finance teams, legal teams, and investors who need an executive-level explanation of {article.title}. It is general business information and should not be treated as formal legal, tax, accounting, immigration, or investment advice.
              </p>
              <section className="rounded-md border border-line bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-ink">Related planning resources</h2>
                <div className="mt-5 grid gap-3 text-sm font-semibold text-evergreen sm:grid-cols-2">
                  <Link href="/">Homepage</Link>
                  <Link href="/services">All advisory services</Link>
                  <Link href="/case-studies">Case studies</Link>
                  <Link href={cityLink.href}>{cityLink.label}</Link>
                  {related.map((item) => (
                    <Link key={item.href} href={item.href}>{item.label}</Link>
                  ))}
                  <Link href="/contact">Request a consultation</Link>
                </div>
              </section>
              {articleSections(article).map((section) => (
                <section key={section.heading} className="rounded-md border border-line bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-graphite">
                      {paragraph}
                    </p>
                  ))}
                  {section.links?.map((link) => (
                    <p key={link.href} className="mt-4 text-sm font-semibold text-evergreen">
                      <Link href={link.href} className="underline underline-offset-4">{link.label}</Link>
                    </p>
                  ))}
                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="mt-6">
                      <h3 className="text-xl font-bold text-ink">{subsection.heading}</h3>
                      {subsection.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-base leading-8 text-graphite">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </section>
              ))}
            </div>
            <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Article details</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-graphite">
                <p><strong className="text-ink">Author:</strong> {article.author}</p>
                <p><strong className="text-ink">Reviewed by:</strong> {article.reviewedBy}</p>
                <p><strong className="text-ink">Category:</strong> {article.category}</p>
                <p><strong className="text-ink">Reading time:</strong> {article.readingTime}</p>
                <p><strong className="text-ink">Company:</strong> {companyName}</p>
                <p><strong className="text-ink">Contact:</strong> {phoneNumber} | {emailAddress}</p>
                <p>ZYS supports international clients with China company registration, accounting, tax filing, payroll, work permits, audit preparation, business licenses, and cross-border planning.</p>
                <Link href="/contact" className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-evergreen px-4 py-2 font-bold text-white">Book consultation</Link>
              </div>
              <h2 className="mt-8 text-xl font-bold">Related articles</h2>
              <div className="mt-5 grid gap-4">
                {related.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.label}
                  </Link>
                ))}
              </div>
              <h2 className="mt-8 text-xl font-bold">Related services</h2>
              <div className="mt-5 grid gap-4">
                {relatedServices.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                    {item.label}
                  </Link>
                ))}
                <Link href={cityLink.href} className="text-sm font-semibold leading-6 text-evergreen hover:text-ink">
                  {cityLink.label}
                </Link>
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
