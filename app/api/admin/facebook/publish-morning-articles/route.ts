import { NextResponse } from "next/server";
import {
  assertAuthorizedRequest,
  morningFacebookArticleSlugs,
  publishSlugToFacebook,
  safeErrorMessage
} from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function publishMorningArticles(request: Request) {
  const auth = assertAuthorizedRequest(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const results = [];

  for (const slug of morningFacebookArticleSlugs) {
    try {
      const result = await publishSlugToFacebook(slug);
      results.push({
        slug,
        status: result.status,
        canonicalUrl: result.preview.canonicalUrl,
        facebookPostId: result.status === "published" ? result.record.facebookPostId : result.existing?.facebookPostId,
        facebookPublishedAt: result.status === "published" ? result.record.facebookPublishedAt : result.existing?.facebookPublishedAt
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

export async function GET(request: Request) {
  return publishMorningArticles(request);
}

export async function POST(request: Request) {
  return publishMorningArticles(request);
}
