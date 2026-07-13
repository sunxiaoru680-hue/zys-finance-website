# Facebook Auto Publishing

This site includes a secure server-side Facebook Pages API integration for publishing newly published blog articles to the ZYS Advisory Facebook Page.

## What is implemented

- Manual endpoint: `POST /api/social/facebook/publish`
- Daily cron endpoint: `GET /api/cron/publish-social`
- Vercel Cron schedule: once daily at `0 2 * * *`
- Dry-run mode for reviewing the exact Facebook post before publishing
- Duplicate prevention using a persistent publish record
- Open Graph and Twitter Card metadata already provided by article pages

The website does not expose Facebook tokens to the browser. Tokens are read only from server-side environment variables.

## Required environment variables

Configure these in Vercel Project Settings > Environment Variables:

- `FACEBOOK_PAGE_ID`
- `FACEBOOK_PAGE_ACCESS_TOKEN`
- `FACEBOOK_GRAPH_API_VERSION`, for example `v20.0`
- `CRON_SECRET`
- `SOCIAL_AUTO_PUBLISH_AFTER`, optional, for example `2026-07-13`

For persistent duplicate prevention on Vercel, also configure a durable store. The implementation supports Vercel KV or Upstash Redis REST variables:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Local development can use the file fallback at `data/facebook-published-articles.json`. Do not rely on local file storage in production serverless deployments.

## Meta Developer App setup

1. Go to Meta for Developers and create an app for business use.
2. Add Facebook Login for Business or the relevant Facebook permissions flow for Page publishing.
3. Connect the official Page: `https://www.facebook.com/zysadvisory/`.
4. Request or grant Page publishing permissions required by the current Meta platform, commonly including:
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `pages_show_list`
5. Generate a Page Access Token for the ZYS Advisory Page.
6. Confirm the token can publish to the Page through Meta Graph API Explorer or Meta's token debugger.
7. Store the Page ID and token in Vercel environment variables. Never commit them to the repository.

Meta permission names and review requirements can change. Confirm the required permissions in the current Meta developer console before production use.

## Finding the Facebook Page ID

Use one of these methods:

- In Meta Business Suite, open Page settings and locate the Page ID.
- In Graph API Explorer, query `/me/accounts` with a user token that can manage the Page, then copy the Page ID for ZYS Advisory.
- Confirm the Page URL is `https://www.facebook.com/zysadvisory/`.

## Dry-run test

Dry-run returns the exact post text, canonical URL and featured image without publishing.

```bash
curl -X POST https://www.zysadvisory.com/api/social/facebook/publish \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $CRON_SECRET" \
  -d '{"slug":"wfoe-registration-guide","dryRun":true}'
```

Expected response includes:

- `status: "dry-run"`
- `preview.message`
- `preview.canonicalUrl`
- `preview.featuredImage`

## Real one-article test

Run this only after the dry-run output is approved and Meta credentials are configured:

```bash
curl -X POST https://www.zysadvisory.com/api/social/facebook/publish \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $CRON_SECRET" \
  -d '{"slug":"wfoe-registration-guide"}'
```

If the article was already posted, the endpoint returns `status: "skipped"` and the existing record.

## Daily cron behavior

The cron route:

1. Reads all published blog articles.
2. Ignores future-dated articles.
3. Uses `SOCIAL_AUTO_PUBLISH_AFTER` to avoid reposting older inventory.
4. Processes pending articles in publication-date order.
5. Publishes each article to the Facebook Page feed.
6. Records success or failure in the publish store.
7. Returns structured JSON with processed article slugs and statuses.

Vercel Cron calls:

```text
GET /api/cron/publish-social
```

Use Vercel Cron logs to confirm the daily run, response status and JSON result.

## Duplicate prevention

Each publish attempt records:

- article slug
- canonical URL
- publication date
- Facebook post ID, when successful
- Facebook published timestamp
- status
- error message, when failed

Articles with a stored `published` status are skipped by future cron runs. Failed records can be retried after the underlying issue is fixed.

## Error handling

The API returns safe error messages for:

- expired Page Access Token
- missing permissions
- invalid Page ID
- duplicate post attempts
- Facebook API rate limits
- missing or invalid article slug
- unpublished or future-dated articles
- network errors
- missing production storage on Vercel

Secrets are not included in API responses.

## Token renewal

If Meta reports an expired or invalid token:

1. Generate or refresh the Page Access Token in Meta Business Suite or Graph API Explorer.
2. Confirm the token has Page publishing permissions.
3. Replace `FACEBOOK_PAGE_ACCESS_TOKEN` in Vercel.
4. Redeploy or wait for Vercel to apply the new environment variable.
5. Run a dry-run first, then a one-article real test.

## Facebook post format

Each post contains:

```text
Article title

Short article summary

Read the full guide:
[canonical article URL]

#ChinaBusiness #CompanyRegistration #ChinaTax #WFOE #ZYSAdvisory
```

The canonical article URL is included so Facebook can generate the Open Graph preview with the article image, title, description and `zysadvisory.com` domain.
