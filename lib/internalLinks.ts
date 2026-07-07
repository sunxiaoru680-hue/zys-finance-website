import { cityRegistrationPages } from "@/lib/cityRegistration";
import { blogArticles, servicePages, type BlogArticle, type ServicePage } from "@/lib/content";

type LinkItem = {
  href: string;
  label: string;
  context: string;
};

const serviceTopicMap: Record<string, string[]> = {
  "company-registration-in-china": ["registration", "wfoe", "business license", "foreign investment", "registered capital"],
  "accounting-services": ["accounting", "bookkeeping", "audit", "tax filing", "financial"],
  bookkeeping: ["bookkeeping", "document retention", "accounting", "monthly", "fapiao"],
  "tax-consulting": ["tax", "vat", "withholding", "cross-border", "deduction"],
  "tax-planning": ["tax planning", "profit repatriation", "transfer pricing", "cross-border", "sme"],
  "foreign-investment": ["foreign investment", "market entry", "negative list", "board approval", "compliance"],
  "wfoe-registration": ["wfoe", "foreign invested", "representative office", "joint venture", "requirements"],
  "china-company-formation": ["company formation", "startup", "subsidiary", "market entry", "checklist"],
  "business-license": ["business license", "license", "scope", "restaurant", "medical device"],
  "china-visa-service": ["visa", "work permit", "residence permit", "foreign employee", "families"],
  "trademark-registration": ["trademark", "brand", "registration"],
  "audit-services": ["audit", "audit trail", "annual audit", "preparation"],
  "annual-compliance": ["annual", "compliance", "calendar", "renewal", "filing"],
  "china-payroll-service": ["payroll", "social insurance", "housing fund", "employee"],
  "company-deregistration": ["deregistration", "tax clearance", "closure"],
  "cfo-advisory-china": ["cfo", "cash flow", "reporting pack", "finance team", "internal control"],
  "hong-kong-company-registration": ["hong kong", "cross-border", "holding company", "trading"],
  "singapore-company-registration": ["singapore", "cross-border", "market entry", "holding company"],
  "us-company-registration": ["us company", "us llc", "chinese entrepreneurs", "cross-border"],
  "dubai-company-registration": ["dubai", "cross-border", "trade", "tax issues"]
};

function scoreArticle(article: BlogArticle, terms: string[]) {
  const haystack = `${article.title} ${article.keyword} ${article.category}`.toLowerCase();
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0);
}

function scoreService(service: ServicePage, terms: string[]) {
  const haystack = `${service.title} ${service.keyword} ${service.summary}`.toLowerCase();
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0);
}

function articleTerms(article: BlogArticle) {
  return article.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 3);
}

export function relatedBlogLinksForService(service: ServicePage, limit = 5): LinkItem[] {
  const terms = serviceTopicMap[service.slug] ?? [service.keyword.toLowerCase(), service.title.toLowerCase()];

  return blogArticles
    .map((article) => ({ article, score: scoreArticle(article, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .slice(0, limit)
    .map(({ article }) => ({
      href: `/blog/${article.slug}`,
      label: article.title,
      context: article.category
    }));
}

export function relatedServiceLinksForService(service: ServicePage, limit = 4): LinkItem[] {
  const terms = serviceTopicMap[service.slug] ?? [service.keyword.toLowerCase(), service.title.toLowerCase()];

  return servicePages
    .filter((candidate) => candidate.slug !== service.slug)
    .map((candidate) => ({ service: candidate, score: scoreService(candidate, terms) }))
    .sort((a, b) => b.score - a.score || a.service.title.localeCompare(b.service.title))
    .slice(0, limit)
    .map(({ service: candidate }) => ({
      href: `/services/${candidate.slug}`,
      label: candidate.title,
      context: candidate.summary
    }));
}

export function relatedCityLinksForService(service: ServicePage, limit = 3): LinkItem[] {
  const preferredCities = service.slug.includes("visa")
    ? ["shanghai", "beijing", "shenzhen"]
    : service.slug.includes("tax") || service.slug.includes("accounting") || service.slug.includes("audit")
      ? ["shanghai", "nanjing", "suzhou"]
      : service.slug.includes("hong-kong") || service.slug.includes("singapore") || service.slug.includes("dubai")
        ? ["shenzhen", "guangzhou", "shanghai"]
        : ["shanghai", "beijing", "shenzhen"];

  return preferredCities
    .map((key) => cityRegistrationPages.find((page) => page.key === key))
    .filter((page): page is NonNullable<typeof page> => Boolean(page))
    .slice(0, limit)
    .map((page) => ({
      href: page.path,
      label: `Register a company in ${page.city}`,
      context: page.localAdvantages
    }));
}

export function relatedServiceLinksForArticle(article: BlogArticle, limit = 3): LinkItem[] {
  const terms = articleTerms(article);

  return servicePages
    .map((service) => ({ service, score: scoreService(service, terms) }))
    .sort((a, b) => b.score - a.score || a.service.title.localeCompare(b.service.title))
    .slice(0, limit)
    .map(({ service }) => ({
      href: `/services/${service.slug}`,
      label: service.title,
      context: service.summary
    }));
}

export function cityLinkForArticle(article: BlogArticle): LinkItem {
  const title = article.title.toLowerCase();
  const city =
    cityRegistrationPages.find((page) => title.includes(page.city.toLowerCase())) ??
    (title.includes("import") || title.includes("export") || title.includes("trading")
      ? cityRegistrationPages.find((page) => page.key === "shenzhen")
      : title.includes("manufacturing")
        ? cityRegistrationPages.find((page) => page.key === "suzhou")
        : title.includes("visa") || title.includes("payroll")
          ? cityRegistrationPages.find((page) => page.key === "shanghai")
          : cityRegistrationPages.find((page) => page.key === "nanjing")) ??
    cityRegistrationPages[0];

  return {
    href: city.path,
    label: `${city.city} company registration guidance`,
    context: city.localPosition
  };
}

export function relatedBlogLinksForArticle(article: BlogArticle, limit = 2): LinkItem[] {
  const relatedByCategory = blogArticles.filter(
    (candidate) => candidate.slug !== article.slug && candidate.category === article.category
  );
  const fallback = blogArticles.filter((candidate) => candidate.slug !== article.slug && candidate.category !== article.category);

  return [...relatedByCategory, ...fallback].slice(0, limit).map((candidate) => ({
    href: `/blog/${candidate.slug}`,
    label: candidate.title,
    context: candidate.category
  }));
}
