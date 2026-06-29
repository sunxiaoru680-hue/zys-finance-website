import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { companyName, coreKeywords, organizationSchema, StructuredData } from "@/components/seo";

export const metadata: Metadata = {
  title: {
    default: `${companyName} | ZYS`,
    template: `%s | ${companyName}`
  },
  description:
    "Nanjing ZYS Advisory Co., Ltd. provides China company registration, China tax services, accounting services in China, visa services in China, and international business consulting.",
  keywords: coreKeywords,
  openGraph: {
    title: `${companyName} | ZYS`,
    description:
      "Professional China company registration, tax, accounting, visa, licensing, and international business consulting for foreign investors and Chinese companies expanding overseas.",
    type: "website"
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
      </body>
    </html>
  );
}
