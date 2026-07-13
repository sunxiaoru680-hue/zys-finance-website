import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/seo";
import { cityRegistrationPages } from "@/lib/cityRegistration";
import { blogArticles, servicePages } from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/our-team",
  "/experience",
  "/why-choose-us",
  "/case-studies",
  "/testimonials",
  "/timeline",
  "/services",
  "/company-profile",
  "/china-company-registration",
  "/tax-accounting",
  "/visa-services",
  "/business-licenses",
  "/blog",
  "/rss.xml",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
  "/professional-disclaimer",
  "/terms"
];

const zhRoutes = ["/zh", "/zh/company-profile", "/zh/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-03T00:00:00.000Z");
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);
  const cityRoutes = cityRegistrationPages.map((page) => page.path);
  const blogRoutes = blogArticles.map((article) => ({ route: `/blog/${article.slug}`, updated: article.updated }));

  return [
    ...staticRoutes.map((route) => ({ route, updated: "2026-07-03" })),
    ...zhRoutes.map((route) => ({ route, updated: "2026-07-10" })),
    ...serviceRoutes.map((route) => ({ route, updated: "2026-07-03" })),
    ...cityRoutes.map((route) => ({ route, updated: "2026-07-07" })),
    ...blogRoutes
  ].map(({ route, updated }) => ({
    url: `${siteUrl}${route}`,
    lastModified: route.startsWith("/blog/") ? new Date(`${updated}T00:00:00.000Z`) : lastModified,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog/") ? "weekly" : "weekly",
    priority: route === "" ? 1 : route === "/contact" ? 0.95 : route.startsWith("/services/") ? 0.92 : route.startsWith("/blog/") ? 0.72 : 0.8
  }));
}
