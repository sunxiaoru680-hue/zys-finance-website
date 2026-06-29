# Vercel Deployment Guide

This project is a Next.js website for Nanjing ZYS Advisory Co., Ltd.

## 1. Final Local Checks

From the project folder:

```bash
pnpm lint
pnpm build
```

Both commands should pass before deployment.

## 2. Push To GitHub

Create a GitHub repository, then push this project:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_REPO_URL` with the repository URL from GitHub.

## 3. Deploy On Vercel

1. Go to `https://vercel.com/dashboard`.
2. Click `Add New`.
3. Click `Project`.
4. Under `Import Git Repository`, find the GitHub repository.
5. Click `Import`.
6. Keep these settings:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `next build`
   - Install Command: Vercel auto-detects pnpm from `pnpm-lock.yaml`
   - Output Directory: leave blank/default
7. Click `Deploy`.

After deployment, Vercel will provide a temporary `vercel.app` URL.

## 4. Connect A Custom Domain

1. Open the deployed Vercel project.
2. Click `Settings`.
3. Click `Domains`.
4. Click `Add Domain`.
5. Enter your domain, for example `example.com`.
6. Click `Add`.
7. Follow the DNS instructions Vercel shows.

## 5. DNS Records

For an apex/root domain such as `example.com`, add:

```text
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 60 seconds if available
```

For a `www` subdomain such as `www.example.com`, add the CNAME value Vercel shows in the dashboard. It will look similar to:

```text
Type: CNAME
Name: www
Value: cname.vercel-dns-0.com
TTL: Auto or 60 seconds if available
```

If Vercel displays a different CNAME value, use the exact value from Vercel.

## 6. Final Verification

After DNS is verified in Vercel:

1. Visit `https://yourdomain.com`.
2. Visit `https://www.yourdomain.com`.
3. Confirm one version redirects to the primary domain.
4. Confirm HTTPS is active.
5. Check the main SEO pages:
   - `/`
   - `/services`
   - `/china-company-registration`
   - `/tax-accounting`
   - `/visa-services`
   - `/business-licenses`
   - `/contact`

DNS changes may take time to fully propagate.
