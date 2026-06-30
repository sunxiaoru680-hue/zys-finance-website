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
  const lastModified = new Date();
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);
  const blogRoutes = blogArticles.map((article) => `/blog/${article.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/contact" ? 0.95 : route.startsWith("/services/") ? 0.9 : route.startsWith("/blog/") ? 0.7 : 0.8
  }));
}
