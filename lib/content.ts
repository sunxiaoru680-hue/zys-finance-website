import { siteUrl } from "@/components/seo";
import { editorialArticles, type EditorialFaq, type EditorialSection } from "@/lib/editorialArticles";

export type ServicePage = {
  slug: string;
  title: string;
  keyword: string;
  summary: string;
  audience: string;
};

export const servicePages: ServicePage[] = [
  { slug: "company-registration-in-china", title: "Company Registration in China", keyword: "China Company Registration", summary: "Register a compliant China company with practical guidance on structure, shareholder documents, registered address, business scope, tax setup, chops, banking preparation, and post-registration filings.", audience: "foreign investors entering China" },
  { slug: "accounting-services", title: "Accounting Services", keyword: "China Accounting", summary: "Maintain accurate China accounting records, management reports, statutory financial statements, filing calendars, and audit-ready books for foreign-invested companies and international SMEs.", audience: "finance teams needing reliable China records" },
  { slug: "bookkeeping", title: "Bookkeeping", keyword: "China Bookkeeping", summary: "Organize vouchers, bank statements, invoices, expense records, payroll information, and monthly ledgers so your China entity stays compliant and decision-ready.", audience: "operators who need clean monthly records" },
  { slug: "tax-consulting", title: "Tax Consulting", keyword: "China Tax Consultant", summary: "Get practical advice on VAT, corporate income tax, withholding tax, individual income tax, cross-border payments, deductible expenses, invoicing, and tax authority communication.", audience: "companies facing China tax questions" },
  { slug: "tax-planning", title: "Tax Planning", keyword: "China Tax Planning", summary: "Plan tax-efficient China operations around entity structure, pricing model, founder compensation, profit repatriation, overseas payments, and future expansion.", audience: "founders planning sustainable tax structures" },
  { slug: "foreign-investment", title: "Foreign Investment", keyword: "Foreign Investment China", summary: "Assess China market-entry options, business scope limitations, licensing exposure, capital planning, tax registration, employment plans, and long-term compliance before investing.", audience: "foreign investors and global boards" },
  { slug: "wfoe-registration", title: "WFOE Registration", keyword: "WFOE Registration China", summary: "Establish a wholly foreign-owned enterprise with support for name approval, articles, shareholder documentation, business license, tax setup, and compliance handover.", audience: "foreign shareholders seeking control in China" },
  { slug: "china-company-formation", title: "China Company Formation", keyword: "China Company Formation", summary: "Move from market-entry strategy to operating company with coordinated formation, business license, tax registration, accounting setup, visa planning, and compliance support.", audience: "international SMEs entering China" },
  { slug: "business-license", title: "Business License", keyword: "China Business License", summary: "Prepare business license applications, scope wording, permit assessments, renewals, amendments, and documentation for regulated activities in China.", audience: "companies applying for China licenses" },
  { slug: "china-visa-service", title: "China Visa Service", keyword: "China Visa Service", summary: "Support foreign founders, executives, employees, and families with work permit planning, residence permit coordination, sponsor requirements, and document preparation.", audience: "foreign staff and founders" },
  { slug: "trademark-registration", title: "Trademark Registration", keyword: "China Trademark Registration", summary: "Protect your China market entry with trademark filing coordination, class planning, document preparation, monitoring reminders, and brand protection guidance.", audience: "brands expanding into China" },
  { slug: "audit-services", title: "Audit Services", keyword: "China Audit Services", summary: "Coordinate annual audit preparation, statutory reporting support, due diligence materials, shareholder reporting, and audit-ready accounting records.", audience: "companies preparing audits" },
  { slug: "annual-compliance", title: "Annual Compliance", keyword: "China Annual Compliance", summary: "Manage recurring China compliance duties including annual reporting, tax calendars, audit preparation, accounting reviews, license checks, and corporate maintenance.", audience: "established China entities" },
  { slug: "china-payroll-service", title: "China Payroll Service", keyword: "China Payroll Service", summary: "Run compliant China payroll with support for salary calculations, IIT withholding, social insurance, housing fund coordination, payslips, onboarding records, and monthly payroll reporting.", audience: "foreign-invested companies hiring employees in China" },
  { slug: "company-deregistration", title: "Company Deregistration", keyword: "China Company Deregistration", summary: "Close a China company in an orderly way with tax clearance planning, accounting cleanup, creditor notices, license cancellation, bank closure, and document archiving support.", audience: "shareholders preparing to close or restructure a China entity" },
  { slug: "cfo-advisory-china", title: "CFO Advisory China", keyword: "China CFO Service", summary: "Strengthen finance management with China CFO advisory covering reporting packs, budget controls, cash-flow planning, tax risk review, internal controls, and board-ready financial visibility.", audience: "founders and overseas finance leaders managing China operations" },
  { slug: "hong-kong-company-registration", title: "Hong Kong Company Registration", keyword: "Hong Kong Company Registration", summary: "Plan Hong Kong company registration for trading, holding, regional sales, or cross-border structures with attention to ownership, banking readiness, maintenance duties, and tax touchpoints.", audience: "entrepreneurs comparing Hong Kong with mainland China structures" },
  { slug: "singapore-company-registration", title: "Singapore Company Registration", keyword: "Singapore Company Registration", summary: "Assess Singapore company registration for regional operations, investment holding, trading, and cross-border expansion while coordinating China tax, banking, and compliance considerations.", audience: "international founders and Chinese companies expanding through Singapore" },
  { slug: "us-company-registration", title: "US Company Registration", keyword: "US Company Registration", summary: "Coordinate US company registration planning for market entry, supplier relationships, overseas sales, and cross-border tax questions connected with China or Asia operations.", audience: "Chinese and international entrepreneurs entering the US market" },
  { slug: "dubai-company-registration", title: "Dubai Company Registration", keyword: "Dubai Company Registration", summary: "Evaluate Dubai company registration options for trading, consulting, holding, and Middle East expansion with attention to licensing, banking preparation, and international tax coordination.", audience: "business owners considering UAE or Middle East expansion" },
];

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle?: string;
  keyword: string;
  longTailKeywords?: string[];
  description: string;
  summary?: string;
  published: string;
  author: string;
  reviewedBy: string;
  updated: string;
  category: string;
  imageAlt: string;
  featuredImage: string;
  readingTime: string;
  sections?: EditorialSection[];
  faqs?: EditorialFaq[];
  relatedServiceHrefs?: string[];
  relatedArticleSlugs?: string[];
  facebookPost?: string;
};

const blogTitles = [
  "How to Register a Company in China",
  "China Tax Guide 2026",
  "China VAT Guide",
  "China Payroll Guide",
  "China Accounting Guide",
  "WFOE Registration Guide",
  "China Company Registration Cost",
  "China Business Visa Guide",
  "How Foreigners Open Companies in China",
  "China Company Formation Checklist",
  "China Bookkeeping Requirements",
  "China Corporate Income Tax Guide",
  "China Withholding Tax for Foreign Companies",
  "China Individual Income Tax for Expats",
  "China Business License Application Guide",
  "China Trademark Registration Guide",
  "China Annual Compliance Calendar",
  "China Audit Requirements",
  "China Registered Capital Guide",
  "China Legal Representative Guide",
  "China Company Name Approval",
  "China Business Scope Planning",
  "China Tax Registration After Incorporation",
  "China Fapiao System Explained",
  "China Bank Account Setup for Foreign Companies",
  "China Work Permit Requirements",
  "China Residence Permit for Foreign Employees",
  "China Payroll Tax Compliance",
  "China Social Insurance Guide",
  "China Housing Fund Guide",
  "Foreign Investment China Guide",
  "Foreign Invested Enterprise Setup",
  "China Representative Office vs WFOE",
  "China Joint Venture vs WFOE",
  "China Subsidiary Setup Guide",
  "China Trading Company Registration",
  "China Consulting Company Registration",
  "China Manufacturing Company Setup",
  "China Import Export License Guide",
  "China E-commerce Company Registration",
  "China Tax Planning for SMEs",
  "China Transfer Pricing Basics",
  "China Cross-border Payments Guide",
  "China Profit Repatriation Guide",
  "China VAT Invoice Compliance",
  "China Expense Deduction Guide",
  "China Tax Audit Preparation",
  "China Accounting Standards Overview",
  "China Monthly Tax Filing Guide",
  "China Quarterly Tax Filing Guide",
  "China Annual Report Filing",
  "China Company Deregistration Guide",
  "China Company Address Requirements",
  "China Virtual Office Risks",
  "China Company Chop Guide",
  "China Shareholder Document Guide",
  "China Director and Supervisor Requirements",
  "China Articles of Association Guide",
  "China Registered Address Guide",
  "China Company Renewal Checklist",
  "China Business Expansion Guide",
  "China Market Entry Strategy",
  "China Compliance Risks for Foreign Investors",
  "China Hiring Compliance Guide",
  "China Contractor vs Employee Guide",
  "China HR Compliance for Foreign Companies",
  "China Foreign Exchange Basics",
  "China SAFE Registration Guide",
  "China Customs Registration Guide",
  "China Export Tax Rebate Guide",
  "China Service Company Tax Guide",
  "China Technology Company Registration",
  "China Restaurant Business License Guide",
  "China Education Business License Guide",
  "China Medical Device Business License Guide",
  "China Consulting Tax Guide",
  "China SaaS Business Compliance",
  "China Import Business Setup",
  "China Export Business Setup",
  "China Holding Company Structure",
  "China Due Diligence Checklist",
  "China M&A Tax Considerations",
  "China Company Secretarial Services",
  "China Compliance Outsourcing Guide",
  "China Finance Team Setup",
  "China CFO Advisory for SMEs",
  "China Internal Control Basics",
  "China Statutory Books Guide",
  "China Audit Trail Requirements",
  "China Document Retention Guide",
  "China Business Meeting Preparation",
  "China Investor Document Checklist",
  "China Startup Registration Guide",
  "China SME Tax Mistakes",
  "China Accounting Mistakes to Avoid",
  "China Visa Mistakes to Avoid",
  "China License Mistakes to Avoid",
  "China Compliance Checklist for 2026",
  "China Company Registration Timeline",
  "China Consulting Firm Selection Guide",
  "China WFOE Registration Requirements for Foreign Investors",
  "China Business License for Consulting Companies",
  "China Accounting Service for Foreign Invested Enterprises",
  "China Bookkeeping Checklist for International SMEs",
  "China Tax Filing Calendar for Foreign Companies",
  "China VAT Filing and Fapiao Compliance",
  "China Payroll Service Setup for Foreign Employees",
  "China Work Permit Process for Company Founders",
  "China Visa Planning After Company Registration",
  "China CFO Service for Growing Foreign Companies",
  "China Tax Advisory for Cross-border Payments",
  "China Audit Preparation for WFOEs",
  "Hong Kong Company Registration for China Trading Businesses",
  "Singapore Company Registration for China Market Entry",
  "US Company Registration for Chinese Entrepreneurs",
  "Dubai Company Registration for Cross-border Trade",
  "Cross-border Tax Planning for China and Hong Kong",
  "Foreign Investment China Compliance Checklist",
  "US Company Entering China Case Study",
  "Singapore Investor Registering a China Company Case Study",
  "Hong Kong Trading Company Setup Case Study",
  "Restaurant Business License China Case Study",
  "Foreign Employee Work Visa China Case Study",
  "Manufacturing Company Registration China Case Study",
  "China vs Hong Kong Company Registration",
  "China vs Singapore Company Registration",
  "WFOE vs Representative Office in China",
  "China VAT vs GST for International Businesses",
  "WFOE vs Joint Venture in China",
  "China Company Registration for SaaS Businesses",
  "China Import Export License for Trading Companies",
  "China Payroll Outsourcing vs In-house Payroll",
  "China Tax Advisory Before Profit Repatriation",
  "China Business License Renewal and Amendments",
  "China Company Deregistration Tax Clearance Guide",
  "CFO Advisory China Reporting Pack Guide",
  "China Bookkeeping for E-commerce Companies",
  "China VAT Special Invoice Risk Checklist",
  "China Work Permit for Foreign General Managers",
  "China Visa and Residence Permit Compliance",
  "Hong Kong vs Singapore Holding Company for China",
  "Dubai Company Registration and China Tax Issues",
  "US LLC vs Corporation for Chinese Founders",
  "Cross-border Tax Risk for Service Fees from China",
  "Foreign Investment China Negative List Overview",
  "China Manufacturing WFOE Registration Checklist",
  "China Restaurant Company Registration and Licensing",
  "China CFO Service for Cash Flow Forecasting",
  "China Annual Audit vs Tax Filing",
  "China VAT for Consulting and Service Companies",
  "China Payroll Social Insurance and Housing Fund",
  "China Company Registration for Amazon Sellers",
  "China Business License Scope Examples",
  "China Tax Filing Mistakes Foreign Companies Make",
  "China Accounting Service Selection Checklist",
  "China Bookkeeping Document Retention Rules",
  "China Work Permit Renewal Checklist",
  "China Visa Support for Foreign Families",
  "China Audit Trail for Management Reporting",
  "Foreign Investment China Board Approval Checklist",
];

function weeklyPublished(index: number) {
  const first = new Date(Date.UTC(2023, 5, 16));
  first.setUTCDate(first.getUTCDate() + index * 7);
  return first.toISOString().slice(0, 10);
}

function articleCategory(title: string) {
  if (title.includes("Case Study")) return "Case Study";
  if (title.includes(" vs ") || title.includes("WFOE vs")) return "Comparison";
  if (title.includes("Hong Kong") || title.includes("Singapore") || title.includes("US ") || title.includes("Dubai") || title.includes("Cross-border")) return "Cross-border Expansion";
  if (title.includes("Tax") || title.includes("VAT") || title.includes("Audit")) return "Tax and Audit";
  if (title.includes("Payroll") || title.includes("Visa") || title.includes("Work Permit")) return "Payroll and Visa";
  return "China Market Entry";
}

function articleImageAlt(title: string, keyword: string) {
  return `ZYS Advisory guide image for ${title} covering ${keyword} and China business compliance`;
}

function articleDescription(title: string, category: string) {
  if (category === "Case Study") {
    return `${title}: an anonymized client scenario showing how scope, documents, timing, compliance risks, and ongoing support can be coordinated without disclosing confidential client information.`;
  }
  if (category === "Comparison") {
    return `${title}: a practical comparison for management teams weighing structure, compliance obligations, operating flexibility, and implementation tradeoffs.`;
  }
  if (category === "Cross-border Expansion") {
    return `${title}: guidance for evaluating overseas company formation, banking readiness, maintenance duties, and China-related tax or operating touchpoints.`;
  }
  if (category === "Tax and Audit") {
    return `${title}: key considerations for tax filing, VAT, audit preparation, documentation quality, and management review in China operations.`;
  }
  if (category === "Payroll and Visa") {
    return `${title}: planning notes for employment, payroll, work permit, residence permit, and visa coordination for foreign-invested companies.`;
  }
  return `${title}: a practical overview for foreign investors planning China market entry, company setup, licensing, tax registration, and operating compliance.`;
}

function articleReadingTime(title: string) {
  return title.length > 42 ? "7 min read" : "5 min read";
}

function byPublishedDateDesc(a: BlogArticle, b: BlogArticle) {
  return new Date(b.published).getTime() - new Date(a.published).getTime();
}

const generatedBlogArticles: BlogArticle[] = blogTitles.map((title, index) => ({
  slug: title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  keyword: title.includes("China") ? title : `${title} China`,
  description: articleDescription(title, articleCategory(title)),
  published: weeklyPublished(index),
  author: "ZYS Advisory Editorial Team",
  reviewedBy: "ZYS Advisory Compliance Review",
  updated: "2026-07-03",
  category: articleCategory(title),
  imageAlt: articleImageAlt(title, title.includes("China") ? title : `${title} China`),
  featuredImage: `/blog/${title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}/opengraph-image`,
  readingTime: articleReadingTime(title)
}));

const editorialBySlug = new Map(editorialArticles.map((article) => [article.slug, article]));
const generatedSlugs = new Set(generatedBlogArticles.map((article) => article.slug));

const generatedWithEditorialArticles: BlogArticle[] = generatedBlogArticles.map((article) => {
  const editorial = editorialBySlug.get(article.slug);

  if (!editorial) {
    return article;
  }

  return {
    ...article,
    ...editorial,
    author: "ZYS Advisory Editorial Team",
    reviewedBy: "ZYS Advisory Compliance Review",
    featuredImage: `/blog/${editorial.slug}/opengraph-image`
  };
});

const editorialOnlyArticles: BlogArticle[] = editorialArticles
  .filter((article) => !generatedSlugs.has(article.slug))
  .map((article) => ({
    ...article,
    author: "ZYS Advisory Editorial Team",
    reviewedBy: "ZYS Advisory Compliance Review",
    featuredImage: `/blog/${article.slug}/opengraph-image`
  }));

export const blogArticles: BlogArticle[] = [...generatedWithEditorialArticles, ...editorialOnlyArticles].sort(byPublishedDateDesc);

export function articleCanonicalUrl(article: BlogArticle) {
  return `${siteUrl}/blog/${article.slug}`;
}

export function articleFeaturedImageUrl(article: BlogArticle) {
  return `${siteUrl}${article.featuredImage}`;
}

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function relatedArticles(slug: string) {
  const index = blogArticles.findIndex((article) => article.slug === slug);
  return blogArticles.filter((article) => article.slug !== slug).slice(Math.max(index - 1, 0), Math.max(index - 1, 0) + 3);
}

export function serviceFaqs(service: ServicePage) {
  return [
    {
      question: `Who needs ${service.title}?`,
      answer: `${service.title} is designed for ${service.audience}, especially when setup, accounting, tax, licensing, payroll, visa, or annual compliance requirements need to be coordinated.`
    },
    {
      question: `How does ZYS deliver ${service.keyword}?`,
      answer: `ZYS starts with a consultation, confirms the documents and compliance risks, prepares a clear timeline, coordinates filings or advisory work, and supports long-term reporting after the initial project is complete.`
    },
    {
      question: `Can ${service.title} connect with accounting, tax, visa, and annual compliance?`,
      answer: `Yes. ZYS treats setup and compliance as one operating system, so accounting, bookkeeping, tax planning, audit preparation, business licenses, work visas, and annual compliance are coordinated instead of handled in isolation.`
    },
    {
      question: `How do I request a consultation for ${service.title}?`,
      answer: `Use the contact form, WhatsApp, email, or meeting link. Share your business activity, ownership structure, target city, timeline, and any urgent licensing, tax, or visa deadline.`
    }
  ];
}

export function articleFaqs(article: BlogArticle) {
  if (article.faqs?.length) {
    return article.faqs;
  }

  return [
    { question: `Is ${article.title} relevant for foreign investors?`, answer: `Yes. ${article.title} is written for foreign investors and international SMEs that need practical China market-entry, accounting, tax, visa, and compliance guidance.` },
    { question: `Does ZYS provide advisory support for ${article.keyword}?`, answer: `Yes. ZYS supports registration, accounting, tax, licensing, payroll, visa, audit preparation, and cross-border planning matters connected with this topic.` },
    { question: `What should I prepare before discussing ${article.title}?`, answer: `Prepare your shareholder information, target business activity, expected city, operating model, staffing plan, invoicing needs, and any current documents or deadlines.` }
  ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}
