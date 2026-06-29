import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  companyName,
  coreKeywords,
  ogImage,
  organizationSchema,
  siteUrl,
  StructuredData
} from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | China Company Registration, Tax & Business Advisory`,
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
    canonical: siteUrl
  },
  openGraph: {
    title: `${companyName} | China Company Registration & International Advisory`,
    description:
      "Professional China company registration, accounting, tax advisory, visa, licensing, audit, and international business consulting for foreign investors and global businesses.",
    url: siteUrl,
    siteName: companyName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${companyName} international business advisory`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | China Company Registration & Tax Advisory`,
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
