import { NextResponse } from "next/server";
import { companyName, emailAddress, siteUrl } from "@/components/seo";
import { articleCanonicalUrl, articleFeaturedImageUrl, blogArticles } from "@/lib/content";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822Date(value: string) {
  return new Date(`${value}T00:00:00.000Z`).toUTCString();
}

export function GET() {
  const latestUpdated = blogArticles
    .map((article) => article.updated || article.published)
    .sort()
    .at(-1) || "2026-07-03";

  const items = blogArticles
    .map((article) => {
      const canonical = articleCanonicalUrl(article);
      const featuredImage = articleFeaturedImageUrl(article);

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <description>${escapeXml(article.description)}</description>
      <link>${escapeXml(canonical)}</link>
      <guid isPermaLink="true">${escapeXml(canonical)}</guid>
      <pubDate>${rfc822Date(article.published)}</pubDate>
      <author>${escapeXml(emailAddress)} (${escapeXml(article.author)})</author>
      <category>${escapeXml(article.category)}</category>
      <media:content url="${escapeXml(featuredImage)}" medium="image" width="1200" height="630" />
      <media:thumbnail url="${escapeXml(featuredImage)}" width="1200" height="630" />
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(companyName)} Insights</title>
    <description>${escapeXml("China company registration, accounting, tax, visa, licensing, audit and cross-border business advisory insights from ZYS Advisory.")}</description>
    <link>${escapeXml(`${siteUrl}/blog`)}</link>
    <atom:link href="${escapeXml(`${siteUrl}/rss.xml`)}" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${rfc822Date(latestUpdated)}</lastBuildDate>
    <ttl>60</ttl>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
