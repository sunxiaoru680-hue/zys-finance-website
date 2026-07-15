import { NextResponse } from "next/server";
import { publishSlugToFacebook, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const currentSlug = "how-to-register-foreign-owned-company-in-china-2026";
const confirmationPhrase = "publish-zys-current-article";

export async function POST(request: Request) {
  const url = new URL(request.url);

  if (url.searchParams.get("confirm") !== confirmationPhrase) {
    return NextResponse.json({ ok: false, error: "Unauthorized request." }, { status: 401 });
  }

  try {
    const result = await publishSlugToFacebook(currentSlug);

    return NextResponse.json({
      ok: true,
      slug: currentSlug,
      status: result.status,
      facebookPostId: result.status === "published" ? result.record.facebookPostId : result.existing?.facebookPostId,
      canonicalUrl: result.preview.canonicalUrl,
      storeMode: result.storeMode,
      reason: result.status === "skipped" ? result.reason : undefined
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        slug: currentSlug,
        status: "failed",
        error: safeErrorMessage(error)
      },
      { status: 500 }
    );
  }
}
