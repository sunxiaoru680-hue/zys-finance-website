import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { articleCanonicalUrl, articleFeaturedImageUrl, blogArticles, getArticleBySlug, type BlogArticle } from "@/lib/content";

export type FacebookPublishStatus = "published" | "failed" | "skipped";

export type FacebookPublishRecord = {
  slug: string;
  canonicalUrl: string;
  publicationDate: string;
  facebookPostId?: string;
  facebookPublishedAt?: string;
  status: FacebookPublishStatus;
  errorMessage?: string;
  updatedAt: string;
};

type PublishStore = {
  get(slug: string): Promise<FacebookPublishRecord | null>;
  set(record: FacebookPublishRecord): Promise<void>;
  list(): Promise<FacebookPublishRecord[]>;
  mode: "kv" | "file";
};

export type FacebookPostPreview = {
  slug: string;
  title: string;
  description: string;
  canonicalUrl: string;
  featuredImage: string;
  message: string;
};

type FacebookApiResponse = {
  id?: string;
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
};

const defaultAutoPublishAfter = "2026-07-13";
const defaultGraphApiVersion = "v20.0";
const publishStoreKey = "zys:facebook:published-articles";
export const morningFacebookArticleSlugs = [
  "how-to-register-a-company-in-china",
  "wfoe-registration-guide"
];

export function getFacebookPublishConfig() {
  return {
    pageId: process.env.FACEBOOK_PAGE_ID || "",
    pageAccessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN || "",
    graphApiVersion: process.env.FACEBOOK_GRAPH_API_VERSION || defaultGraphApiVersion,
    cronSecret: process.env.CRON_SECRET || "",
    autoPublishAfter: process.env.SOCIAL_AUTO_PUBLISH_AFTER || defaultAutoPublishAfter,
    kvRestApiUrl: process.env.KV_REST_API_URL || "",
    kvRestApiToken: process.env.KV_REST_API_TOKEN || "",
    fileStorePath:
      process.env.FACEBOOK_PUBLISH_LOG_PATH ||
      path.join(process.cwd(), "data", "facebook-published-articles.json")
  };
}

export function isAuthorizedRequest(request: Request) {
  const configuredSecret = getFacebookPublishConfig().cronSecret;
  const authHeader = request.headers.get("authorization") || "";
  const providedBearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const providedHeader = request.headers.get("x-cron-secret") || "";
  const provided = providedBearer || providedHeader;

  return Boolean(configuredSecret && provided && provided === configuredSecret);
}

export function assertAuthorizedRequest(request: Request) {
  if (!getFacebookPublishConfig().cronSecret) {
    return {
      ok: false,
      status: 500,
      error: "CRON_SECRET is not configured."
    };
  }

  if (!isAuthorizedRequest(request)) {
    return {
      ok: false,
      status: 401,
      error: "Unauthorized request."
    };
  }

  return { ok: true, status: 200, error: "" };
}

export function isPublishedArticle(article: BlogArticle, now = new Date()) {
  const publishedAt = new Date(`${article.published}T00:00:00.000Z`);
  return Number.isFinite(publishedAt.getTime()) && publishedAt.getTime() <= now.getTime();
}

export function isEligibleForCron(article: BlogArticle, includeBackfill = false, now = new Date()) {
  if (!isPublishedArticle(article, now)) {
    return false;
  }

  if (includeBackfill) {
    return true;
  }

  const cutoff = new Date(`${getFacebookPublishConfig().autoPublishAfter}T00:00:00.000Z`);
  if (!Number.isFinite(cutoff.getTime())) {
    return false;
  }

  return new Date(`${article.published}T00:00:00.000Z`).getTime() >= cutoff.getTime();
}

export function buildFacebookPost(article: BlogArticle): FacebookPostPreview {
  const canonicalUrl = articleCanonicalUrl(article);
  const featuredImage = articleFeaturedImageUrl(article);
  const summary = article.summary || article.description;
  const message = `${article.title}

${summary}

Read the full guide:
${canonicalUrl}

#ChinaBusiness #CompanyRegistration #ChinaTax #WFOE #ZYSAdvisory`;

  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    canonicalUrl,
    featuredImage,
    message
  };
}

function redactSecret(value: string) {
  return value.replace(/[A-Za-z0-9_-]{20,}/g, "[redacted]");
}

export function safeErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return redactSecret(error.message);
  }
  return "Unknown error";
}

function createKvStore(): PublishStore {
  const { kvRestApiUrl, kvRestApiToken } = getFacebookPublishConfig();

  async function kvFetch(command: string[]) {
    const response = await fetch(`${kvRestApiUrl}/${command.map(encodeURIComponent).join("/")}`, {
      headers: {
        Authorization: `Bearer ${kvRestApiToken}`
      },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Publish store request failed with status ${response.status}`);
    }

    return response.json() as Promise<{ result?: string | null }>;
  }

  async function readAll() {
    const data = await kvFetch(["get", publishStoreKey]);
    if (!data.result) {
      return [] as FacebookPublishRecord[];
    }
    return JSON.parse(data.result) as FacebookPublishRecord[];
  }

  async function writeAll(records: FacebookPublishRecord[]) {
    await kvFetch(["set", publishStoreKey, JSON.stringify(records)]);
  }

  return {
    mode: "kv",
    async get(slug) {
      return (await readAll()).find((record) => record.slug === slug) || null;
    },
    async set(record) {
      const records = await readAll();
      const next = records.filter((existing) => existing.slug !== record.slug);
      next.push(record);
      await writeAll(next);
    },
    list: readAll
  };
}

function createFileStore(): PublishStore {
  const { fileStorePath } = getFacebookPublishConfig();

  async function readAll() {
    try {
      const raw = await readFile(fileStorePath, "utf8");
      return JSON.parse(raw) as FacebookPublishRecord[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        return [] as FacebookPublishRecord[];
      }
      throw error;
    }
  }

  async function writeAll(records: FacebookPublishRecord[]) {
    await mkdir(path.dirname(fileStorePath), { recursive: true });
    await writeFile(fileStorePath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
  }

  return {
    mode: "file",
    async get(slug) {
      return (await readAll()).find((record) => record.slug === slug) || null;
    },
    async set(record) {
      const records = await readAll();
      const next = records.filter((existing) => existing.slug !== record.slug);
      next.push(record);
      await writeAll(next);
    },
    list: readAll
  };
}

export function createPublishStore() {
  const { kvRestApiUrl, kvRestApiToken } = getFacebookPublishConfig();

  if (kvRestApiUrl && kvRestApiToken) {
    return createKvStore();
  }

  return createFileStore();
}

export function assertProductionStoreConfigured() {
  const { kvRestApiUrl, kvRestApiToken } = getFacebookPublishConfig();
  if (process.env.VERCEL === "1" && (!kvRestApiUrl || !kvRestApiToken)) {
    throw new Error("Configure KV_REST_API_URL and KV_REST_API_TOKEN for persistent duplicate prevention on Vercel.");
  }
}

export async function publishArticleToFacebook(article: BlogArticle) {
  const config = getFacebookPublishConfig();

  if (!config.pageId) {
    throw new Error("FACEBOOK_PAGE_ID is not configured.");
  }

  if (!config.pageAccessToken) {
    throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN is not configured.");
  }

  const preview = buildFacebookPost(article);
  const endpoint = `https://graph.facebook.com/${config.graphApiVersion}/${encodeURIComponent(config.pageId)}/feed`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: preview.message,
      link: preview.canonicalUrl,
      access_token: config.pageAccessToken
    })
  });

  const data = (await response.json()) as FacebookApiResponse;

  if (!response.ok || data.error || !data.id) {
    const details = data.error
      ? `${data.error.message || "Facebook API error"}${data.error.code ? ` (code ${data.error.code})` : ""}`
      : `Facebook API request failed with status ${response.status}`;
    throw new Error(redactSecret(details));
  }

  return {
    facebookPostId: data.id,
    preview
  };
}

export async function getArticlePreviewBySlug(slug: string) {
  const article = getArticleBySlug(slug);

  if (!article) {
    throw new Error("Invalid article slug.");
  }

  if (!isPublishedArticle(article)) {
    throw new Error("Article is not published yet.");
  }

  return {
    article,
    preview: buildFacebookPost(article)
  };
}

export async function publishSlugToFacebook(slug: string, options: { dryRun?: boolean; force?: boolean } = {}) {
  const { article, preview } = await getArticlePreviewBySlug(slug);
  const store = createPublishStore();
  const existing = await store.get(article.slug);

  if (existing?.status === "published" && !options.force) {
    return {
      status: "skipped" as const,
      reason: "Article was already published to Facebook.",
      existing,
      preview,
      storeMode: store.mode
    };
  }

  if (options.dryRun) {
    return {
      status: "dry-run" as const,
      preview,
      existing,
      storeMode: store.mode
    };
  }

  assertProductionStoreConfigured();

  try {
    const result = await publishArticleToFacebook(article);
    const record: FacebookPublishRecord = {
      slug: article.slug,
      canonicalUrl: preview.canonicalUrl,
      publicationDate: article.published,
      facebookPostId: result.facebookPostId,
      facebookPublishedAt: new Date().toISOString(),
      status: "published",
      updatedAt: new Date().toISOString()
    };
    await store.set(record);

    return {
      status: "published" as const,
      record,
      preview,
      storeMode: store.mode
    };
  } catch (error) {
    const record: FacebookPublishRecord = {
      slug: article.slug,
      canonicalUrl: preview.canonicalUrl,
      publicationDate: article.published,
      status: "failed",
      errorMessage: safeErrorMessage(error),
      updatedAt: new Date().toISOString()
    };
    await store.set(record);
    throw error;
  }
}

export async function findPendingFacebookArticles(options: { includeBackfill?: boolean } = {}) {
  const store = createPublishStore();
  const published = await store.list();
  const postedSlugs = new Set(
    published
      .filter((record) => record.status === "published")
      .map((record) => record.slug)
  );

  return blogArticles
    .filter((article) => isEligibleForCron(article, options.includeBackfill))
    .filter((article) => !postedSlugs.has(article.slug))
    .sort((a, b) => new Date(a.published).getTime() - new Date(b.published).getTime());
}

export async function getFacebookPublishRecords(slugs: string[]) {
  const store = createPublishStore();
  const records = await store.list();

  return slugs.map((slug) => {
    const article = getArticleBySlug(slug);
    const record = records.find((entry) => entry.slug === slug) || null;

    return {
      slug,
      canonicalUrl: article ? articleCanonicalUrl(article) : "",
      status: record?.status || "not-recorded",
      facebookPostId: record?.facebookPostId,
      facebookPublishedAt: record?.facebookPublishedAt,
      errorMessage: record?.errorMessage
    };
  });
}
