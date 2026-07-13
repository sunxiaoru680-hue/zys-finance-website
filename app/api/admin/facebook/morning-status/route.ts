import { NextResponse } from "next/server";
import { getFacebookPublishRecords, morningFacebookArticleSlugs, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      checkedAt: new Date().toISOString(),
      records: await getFacebookPublishRecords(morningFacebookArticleSlugs)
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: safeErrorMessage(error)
      },
      { status: 500 }
    );
  }
}
