import { NextResponse } from "next/server";
import { assertAuthorizedRequest, publishSlugToFacebook, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function GET(request: Request, { params }: Props) {
  const auth = assertAuthorizedRequest(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  try {
    const { slug } = await params;
    const result = await publishSlugToFacebook(slug);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 500 });
  }
}
