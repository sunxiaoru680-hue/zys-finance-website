import { siteUrl } from "@/components/seo";

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
];

export type BlogArticle = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  published: string;
  author: string;
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
];

export const blogArticles: BlogArticle[] = blogTitles.map((title, index) => ({
  slug: title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  keyword: title.includes("China") ? title : `${title} China`,
  description: `${title}: practical guidance for foreign investors, international SMEs, and Chinese companies expanding overseas, with compliance, tax, accounting, registration, visa, and operating considerations.`,
  published: `2026-${String(Math.floor(index / 28) + 1).padStart(2, "0")}-${String((index % 28) + 1).padStart(2, "0")}`,
  author: "ZYS Advisory Editorial Team"
}));

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
      answer: `${service.title} is designed for ${service.audience}, especially when China Company Registration, China Accounting, China Tax Consultant, China Business Registration, China Company Formation, Chinese Accounting Firm, and Foreign Investment China requirements overlap.`
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
  return [
    { question: `Is ${article.title} relevant for foreign investors?`, answer: `Yes. ${article.title} is written for foreign investors and international SMEs that need practical China market-entry, accounting, tax, visa, and compliance guidance.` },
    { question: `Does ZYS provide advisory support for ${article.keyword}?`, answer: `Yes. ZYS supports China Company Registration, China Accounting, China Tax Consultant, China Business Registration, China Company Formation, Chinese Accounting Firm, and Foreign Investment China matters connected with this topic.` },
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
