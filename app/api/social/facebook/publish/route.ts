import { NextResponse } from "next/server";
import { assertAuthorizedRequest, publishSlugToFacebook, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PublishBody = {
  slug?: string;
  dryRun?: boolean;
  force?: boolean;
};

export async function POST(request: Request) {
  const auth = assertAuthorizedRequest(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  let body: PublishBody;
  try {
    body = (await request.json()) as PublishBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!body.slug) {
    return NextResponse.json({ ok: false, error: "Missing article slug." }, { status: 400 });
  }

  try {
    const result = await publishSlugToFacebook(body.slug, {
      dryRun: body.dryRun === true,
      force: body.force === true
    });

    return NextResponse.json({
      ok: true,
      ...result
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
