import { NextResponse } from "next/server";
import { getFacebookPublishConfig } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const pageId = "1206558919211825";
const confirmationPhrase = "verify-zys-facebook-token-only";

type MetaResponse = {
  id?: string;
  name?: string;
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
};

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const serverTime = new Date().toISOString();

  if (requestUrl.searchParams.get("confirm") !== confirmationPhrase) {
    return NextResponse.json({ ok: false, serverTime, error: "Unauthorized request." }, { status: 401 });
  }

  const config = getFacebookPublishConfig();

  if (!config.pageAccessToken) {
    return NextResponse.json(
      {
        ok: false,
        serverTime,
        verificationResult: "invalid",
        metaResponse: {
          error: {
            message: "FACEBOOK_PAGE_ACCESS_TOKEN is not configured."
          }
        }
      },
      { status: 500 }
    );
  }

  const endpoint = new URL(`https://graph.facebook.com/${config.graphApiVersion}/${pageId}`);
  endpoint.searchParams.set("fields", "id,name");
  endpoint.searchParams.set("access_token", config.pageAccessToken);

  const metaResponse = await fetch(endpoint, { cache: "no-store" });
  const metaJson = (await metaResponse.json()) as MetaResponse;

  return NextResponse.json(
    {
      ok: metaResponse.ok && !metaJson.error,
      serverTime,
      verificationResult: metaResponse.ok && !metaJson.error ? "valid" : "invalid",
      metaResponse: metaJson
    },
    { status: metaResponse.ok && !metaJson.error ? 200 : 500 }
  );
}
