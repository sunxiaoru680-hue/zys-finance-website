import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/seo";
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
  "/china-company-registration",
  "/tax-accounting",
  "/visa-services",
  "/business-licenses",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-03T00:00:00.000Z");
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);
  const blogRoutes = blogArticles.map((article) => ({ route: `/blog/${article.slug}`, updated: article.updated }));

  return [
    ...staticRoutes.map((route) => ({ route, updated: "2026-07-03" })),
    ...serviceRoutes.map((route) => ({ route, updated: "2026-07-03" })),
    ...blogRoutes
  ].map(({ route, updated }) => ({
    url: `${siteUrl}${route}`,
    lastModified: route.startsWith("/blog/") ? new Date(`${updated}T00:00:00.000Z`) : lastModified,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog/") ? "weekly" : "weekly",
    priority: route === "" ? 1 : route === "/contact" ? 0.95 : route.startsWith("/services/") ? 0.92 : route.startsWith("/blog/") ? 0.72 : 0.8
  }));
}
