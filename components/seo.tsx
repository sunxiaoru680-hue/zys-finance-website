import type { Metadata } from "next";

export const companyName = "Nanjing ZYS Financial Consulting Co., Ltd.";
export const brandName = "ZYS";
export const phoneNumber = "+86 18055161721";
export const contactChannels = "WhatsApp, WeChat, Facebook";
export const location = "Nanjing, China";

export const coreKeywords = [
  "China company registration",
  "China tax services",
  "accounting services in China",
  "visa services in China",
  "international business consulting",
  "China company registration for foreigners",
  "China tax agency",
  "bookkeeping services in China",
  "business licenses in China",
  "overseas company registration"
];

type SeoInput = {
  title: string;
  description: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  keywords = []
}: SeoInput): Metadata {
  const allKeywords = Array.from(new Set([...keywords, ...coreKeywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title: `${title} | ${companyName}`,
      description,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${title} | ${companyName}`,
      description
    }
  };
}

type StructuredDataProps = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: companyName,
    alternateName: brandName,
    telephone: phoneNumber,
    areaServed: ["China", "International"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nanjing",
      addressCountry: "CN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneNumber,
      contactType: "customer service",
      availableLanguage: ["English", "Chinese"],
      areaServed: ["China", "International"]
    },
    knowsAbout: coreKeywords
  };
}

export function serviceSchema(name: string, description: string, keywords: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: companyName,
      telephone: phoneNumber,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nanjing",
        addressCountry: "CN"
      }
    },
    areaServed: ["China", "International"],
    keywords
  };
}
