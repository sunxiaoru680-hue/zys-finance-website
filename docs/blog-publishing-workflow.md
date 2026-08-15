# ZYS Advisory Blog Publishing Workflow

This workflow keeps article publishing useful, factual and compatible with RSS-based syndication tools such as Make, Zapier and Buffer.

## First-run articles

The first run upgrades two existing URLs instead of creating duplicate posts:

- `https://www.zysadvisory.com/blog/how-to-register-a-company-in-china`
- `https://www.zysadvisory.com/blog/wfoe-registration-guide`

## Publishing steps

1. Check `lib/content.ts` for an existing slug before creating a new article.
2. Add or update a complete editorial article in `lib/editorialArticles.ts`.
3. Use stable, qualified business guidance only. Do not invent laws, rates, official deadlines, cases, credentials, statistics or guarantees.
4. Keep one canonical URL per topic.
5. Run validation before committing:
   - `pnpm lint`
   - `pnpm build`
   - duplicate title, description and slug check
   - internal link check
   - one H1 check for newly edited article pages
   - public-text scan for placeholders, TODOs and production notes
6. Commit with a clear message and push to `origin/main`.

## Syndication

External automation tools can use:

`https://www.zysadvisory.com/rss.xml`

The RSS feed includes article title, canonical URL, summary, publication date, author, category and featured image. Each article page includes Open Graph and Twitter Card metadata for Facebook, LinkedIn and other preview consumers.

## Facebook post templates

Templates for approved editorial articles are stored in `lib/editorialArticles.ts` under `facebookPost`. The site also includes a secure Facebook Pages API publishing workflow documented in `docs/facebook-auto-publishing.md`. Use dry-run mode to review the exact post before enabling real Page publishing.

### Required publishing order

1. After the public blog URL returns HTTP 200, use the server-side `/api/social/facebook/publish` endpoint as the primary publishing path.
2. Run a dry-run first, then publish the single approved article slug through the endpoint and retain the returned Facebook post ID or permalink.
3. If the first call fails, check the deployed article, Vercel configuration, Page token validity, API permissions, duplicate-publish record and Meta response, then retry safely.
4. Use the logged-in Facebook Page interface only when the backend endpoint remains unavailable or fails after those checks. Browser publishing is a fallback, not the normal workflow.
5. Before using the fallback, verify that the article has not already been published. After publishing by either route, verify the public post URL and record initial performance data.

Page access tokens and cron secrets must remain in server-side configuration. Never place them in the repository, browser post text, task output or logs.
