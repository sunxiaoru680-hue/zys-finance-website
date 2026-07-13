import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguagePrompt } from "@/components/LanguagePrompt";
import { MetaPixel } from "@/components/MetaPixel";
import {
  companyName,
  brandSubtitle,
  coreKeywords,
  ogImage,
  gaId,
  gtmId,
  localBusinessSchema,
  organizationSchema,
  siteUrl,
  StructuredData
} from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | ${brandSubtitle}`,
    template: `%s | ${companyName}`
  },
  description:
    "Nanjing ZYS Advisory Co., Ltd. helps foreign investors, international SMEs, and Chinese companies expanding overseas with China company registration, accounting, tax advisory, work visas, business licenses, audit services, and overseas company registration.",
  keywords: [
    ...coreKeywords,
    "Nanjing ZYS Advisory",
    "China WFOE registration",
    "foreign investor company registration China",
    "China work permit services",
    "audit services China",
    "foreign investment consulting China"
  ],
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`
    }
  },
  openGraph: {
    title: `${companyName} | ${brandSubtitle}`,
    description:
      "Professional China company registration, accounting, tax advisory, visa, licensing, audit, and China business advisory for foreign investors and global businesses.",
    url: siteUrl,
    siteName: companyName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${companyName} ${brandSubtitle}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | ${brandSubtitle}`,
    description:
      "China company registration, accounting, tax advisory, work visa, business license, audit, and overseas registration support for international clients.",
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={organizationSchema()} />
        <StructuredData data={localBusinessSchema()} />
        <Script id="gtm-ready" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "zys_site_ready", gtmId: "${gtmId}", gaId: "${gaId}" });`}</Script>
        <MetaPixel />
        <Header />
        <LanguagePrompt />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </body>
    </html>
  );
}
