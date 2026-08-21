import { NextResponse } from "next/server";
import { findFacebookPostByCanonicalUrl, getArticlePreviewBySlug, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ ok: false, error: "Missing article slug." }, { status: 400 });
  }

  try {
    const { preview } = await getArticlePreviewBySlug(slug);
    const post = await findFacebookPostByCanonicalUrl(preview.canonicalUrl);
    return NextResponse.json({
      ok: true,
      published: Boolean(post?.id),
      postId: post?.id,
      permalinkUrl: post?.permalink_url,
      canonicalUrl: preview.canonicalUrl,
      createdTime: post?.created_time
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 500 });
  }
}
