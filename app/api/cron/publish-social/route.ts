import { NextResponse } from "next/server";
import {
  assertAuthorizedRequest,
  findPendingFacebookArticles,
  publishSlugToFacebook,
  safeErrorMessage
} from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CronOptions = {
  includeBackfill?: boolean;
  limit?: number;
};

async function readOptions(request: Request): Promise<CronOptions> {
  if (request.method === "GET") {
    const url = new URL(request.url);
    return {
      includeBackfill: url.searchParams.get("includeBackfill") === "true",
      limit: Number(url.searchParams.get("limit") || "5")
    };
  }

  try {
    return (await request.json()) as CronOptions;
  } catch {
    return {};
  }
}

async function handleCron(request: Request) {
  const auth = assertAuthorizedRequest(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const options = await readOptions(request);
  const pending = await findPendingFacebookArticles({
    includeBackfill: options.includeBackfill === true
  });
  const limit = Math.max(1, Math.min(options.limit || 5, 10));
  const selected = pending.slice(0, limit);
  const results = [];

  for (const article of selected) {
    try {
      const result = await publishSlugToFacebook(article.slug);
      results.push({
        slug: article.slug,
        status: result.status,
        facebookPostId: result.status === "published" ? result.record.facebookPostId : undefined,
        canonicalUrl: result.preview.canonicalUrl
      });
    } catch (error) {
      results.push({
        slug: article.slug,
        status: "failed",
        error: safeErrorMessage(error)
      });
    }
  }

  return NextResponse.json({
    ok: true,
    checkedAt: new Date().toISOString(),
    pendingCount: pending.length,
    processedCount: selected.length,
    results
  });
}

export async function GET(request: Request) {
  return handleCron(request);
}

export async function POST(request: Request) {
  return handleCron(request);
}
