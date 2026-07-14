import { NextResponse } from "next/server";
import { getFacebookPublishConfig, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const todayArticleSlugs = [
  "representative-office-vs-wfoe-in-china",
  "china-company-registration-documents-checklist"
];

export async function POST(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("confirm") !== "publish-zys-today") {
    return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  }

  const { cronSecret } = getFacebookPublishConfig();
  if (!cronSecret) {
    return NextResponse.json({ ok: false, error: "CRON_SECRET is not configured." }, { status: 500 });
  }

  const results = [];

  for (const slug of todayArticleSlugs) {
    try {
      const response = await fetch(new URL("/api/social/facebook/publish", request.url), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cronSecret}`
        },
        body: JSON.stringify({ slug }),
        cache: "no-store"
      });
      const data = await response.json();
      results.push({
        slug,
        httpStatus: response.status,
        status: data.status || "failed",
        canonicalUrl: data.preview?.canonicalUrl || data.record?.canonicalUrl || data.existing?.canonicalUrl,
        facebookPostId: data.record?.facebookPostId || data.existing?.facebookPostId,
        facebookPublishedAt: data.record?.facebookPublishedAt || data.existing?.facebookPublishedAt,
        error: data.ok === false ? data.error : undefined
      });
    } catch (error) {
      results.push({
        slug,
        status: "failed",
        error: safeErrorMessage(error)
      });
    }
  }

  return NextResponse.json({
    ok: results.every((result) => result.status === "published" || result.status === "skipped"),
    processedAt: new Date().toISOString(),
    results
  });
}
