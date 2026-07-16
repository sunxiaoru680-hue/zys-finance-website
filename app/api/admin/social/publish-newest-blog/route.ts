import { NextResponse } from "next/server";
import { getFacebookPublishConfig } from "@/lib/facebook-publishing";
import { articleCanonicalUrl, blogArticles, type BlogArticle } from "@/lib/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const confirmationPhrase = "publish-zys-newest-blog-to-facebook";

type MetaError = {
  message?: string;
  type?: string;
  code?: number;
  error_subcode?: number;
  fbtrace_id?: string;
};

type MetaResponse<T> = T & {
  error?: MetaError;
};

function newestPublishedArticle(now = new Date()) {
  return blogArticles.find((article) => new Date(`${article.published}T00:00:00.000Z`).getTime() <= now.getTime());
}

function facebookCaption(article: BlogArticle) {
  const canonicalUrl = articleCanonicalUrl(article);
  const summary = article.summary || article.description;

  return `${article.title}

${summary}

Read the full article:
${canonicalUrl}

#ChinaBusiness #CompanyRegistration #WFOE #ChinaTax #ZYSAdvisory`;
}

async function publishToFacebook(article: BlogArticle) {
  const config = getFacebookPublishConfig();
  const canonicalUrl = articleCanonicalUrl(article);
  const endpoint = `https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(config.pageId)}/feed`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: facebookCaption(article),
      link: canonicalUrl,
      access_token: config.pageAccessToken
    })
  });

  const data = (await response.json()) as MetaResponse<{ id?: string }>;

  return {
    ok: response.ok && !data.error && Boolean(data.id),
    status: response.status,
    data
  };
}

async function fetchPostPermalink(postId: string) {
  const config = getFacebookPublishConfig();
  const endpoint = new URL(`https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(postId)}`);
  endpoint.searchParams.set("fields", "id,permalink_url,created_time");
  endpoint.searchParams.set("access_token", config.pageAccessToken);

  const response = await fetch(endpoint, { cache: "no-store" });
  const data = (await response.json()) as MetaResponse<{
    id?: string;
    permalink_url?: string;
    created_time?: string;
  }>;

  return {
    ok: response.ok && !data.error,
    status: response.status,
    data
  };
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const serverTime = new Date().toISOString();

  if (requestUrl.searchParams.get("confirm") !== confirmationPhrase) {
    return NextResponse.json({ ok: false, serverTime, error: "Unauthorized request." }, { status: 401 });
  }

  const config = getFacebookPublishConfig();

  if (!config.pageId || !config.pageAccessToken) {
    return NextResponse.json(
      {
        ok: false,
        serverTime,
        error: {
          message: !config.pageId ? "FACEBOOK_PAGE_ID is not configured." : "FACEBOOK_PAGE_ACCESS_TOKEN is not configured."
        }
      },
      { status: 500 }
    );
  }

  const article = newestPublishedArticle();

  if (!article) {
    return NextResponse.json({ ok: false, serverTime, error: { message: "No published blog article found." } }, { status: 404 });
  }

  const canonicalUrl = articleCanonicalUrl(article);
  const firstAttempt = await publishToFacebook(article);
  const publishResult = firstAttempt.ok ? firstAttempt : await publishToFacebook(article);

  if (!publishResult.ok || !publishResult.data.id) {
    return NextResponse.json(
      {
        ok: false,
        serverTime,
        article: {
          title: article.title,
          slug: article.slug,
          canonicalUrl
        },
        attempts: firstAttempt.ok ? 1 : 2,
        graphApiError: publishResult.data.error || publishResult.data
      },
      { status: 500 }
    );
  }

  const permalink = await fetchPostPermalink(publishResult.data.id);

  return NextResponse.json({
    ok: true,
    serverTime,
    article: {
      title: article.title,
      slug: article.slug,
      canonicalUrl
    },
    caption: facebookCaption(article),
    facebookPostId: publishResult.data.id,
    facebookPostUrl: permalink.ok ? permalink.data.permalink_url : undefined,
    permalinkLookup: permalink.ok ? undefined : permalink.data.error || permalink.data
  });
}
