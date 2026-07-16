import { NextResponse } from "next/server";
import { getFacebookPublishConfig, safeErrorMessage } from "@/lib/facebook-publishing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const confirmationPhrase = "verify-and-publish-zys-test-post";

type GraphError = {
  message?: string;
  code?: number;
  error_subcode?: number;
  type?: string;
  fbtrace_id?: string;
};

type GraphResponse<T> = T & {
  error?: GraphError;
};

function graphErrorMessage(error: GraphError | undefined, fallback: string) {
  if (!error) {
    return fallback;
  }

  return `${error.message || fallback}${error.code ? ` (code ${error.code})` : ""}`;
}

async function readGraph<T>(endpoint: URL) {
  const response = await fetch(endpoint, { cache: "no-store" });
  const data = (await response.json()) as GraphResponse<T>;

  if (!response.ok || data.error) {
    throw new Error(graphErrorMessage(data.error, `Meta Graph API request failed with status ${response.status}`));
  }

  return data;
}

export async function POST(request: Request) {
  const url = new URL(request.url);

  if (url.searchParams.get("confirm") !== confirmationPhrase) {
    return NextResponse.json({ ok: false, error: "Unauthorized request." }, { status: 401 });
  }

  const config = getFacebookPublishConfig();

  if (!config.pageId) {
    return NextResponse.json({ ok: false, error: "FACEBOOK_PAGE_ID is not configured." }, { status: 500 });
  }

  if (!config.pageAccessToken) {
    return NextResponse.json({ ok: false, error: "FACEBOOK_PAGE_ACCESS_TOKEN is not configured." }, { status: 500 });
  }

  try {
    const pageEndpoint = new URL(
      `https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(config.pageId)}`
    );
    pageEndpoint.searchParams.set("fields", "id,name,link");
    pageEndpoint.searchParams.set("access_token", config.pageAccessToken);

    const page = await readGraph<{ id?: string; name?: string; link?: string }>(pageEndpoint);

    const message = `ZYS Advisory Facebook publishing test

This is a one-time test post to verify the official website publishing integration.

Website: https://www.zysadvisory.com/

#ZYSAdvisory #ChinaBusiness`;

    const publishEndpoint = `https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(config.pageId)}/feed`;
    const publishResponse = await fetch(publishEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        link: "https://www.zysadvisory.com/",
        access_token: config.pageAccessToken
      })
    });
    const publishData = (await publishResponse.json()) as GraphResponse<{ id?: string }>;

    if (!publishResponse.ok || publishData.error || !publishData.id) {
      throw new Error(graphErrorMessage(publishData.error, `Meta publish request failed with status ${publishResponse.status}`));
    }

    const postEndpoint = new URL(
      `https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(publishData.id)}`
    );
    postEndpoint.searchParams.set("fields", "id,permalink_url,created_time");
    postEndpoint.searchParams.set("access_token", config.pageAccessToken);

    const post = await readGraph<{ id?: string; permalink_url?: string; created_time?: string }>(postEndpoint);

    return NextResponse.json({
      ok: true,
      tokenVerified: true,
      page: {
        id: page.id,
        name: page.name,
        link: page.link
      },
      post: {
        id: post.id || publishData.id,
        url: post.permalink_url,
        createdTime: post.created_time
      }
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
