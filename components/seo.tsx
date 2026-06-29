import type { Metadata } from "next";

export const companyName = "Nanjing ZYS Advisory Co., Ltd.";
export const brandName = "ZYS";
export const phoneNumber = "+86 18055161721";
export const whatsappNumber = "8618055161721";
export const emailAddress = "info@zysadvisory.com";
export const contactChannels = "WhatsApp, WeChat, Facebook";
export const location = "Nanjing, Jiangsu, China";
export const officeAddress = "Nanjing, Jiangsu, China";
export const businessHours = "Monday to Friday, 9:00 AM - 6:00 PM China Standard Time";
export const siteUrl = "https://www.zysadvisory.com";
export const ogImage = "/images/global-finance-consulting-hero.png";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20ZYS%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20about%20China%20company%20registration%2C%20tax%2C%20accounting%2C%20visa%2C%20or%20business%20advisory%20services.`;

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
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = "/"
}: SeoInput): Metadata {
  const allKeywords = Array.from(new Set([...keywords, ...coreKeywords]));
  const canonical = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${title} | ${companyName}`,
      description,
      url: canonical,
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
      title: `${title} | ${companyName}`,
      description,
      images: [ogImage]
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
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    alternateName: brandName,
    url: siteUrl,
    image: `${siteUrl}${ogImage}`,
    email: emailAddress,
    telephone: phoneNumber,
    priceRange: "$$",
    areaServed: ["China", "International"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nanjing",
      addressRegion: "Jiangsu",
      addressCountry: "CN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneNumber,
      email: emailAddress,
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
      "@id": `${siteUrl}/#organization`,
      name: companyName,
      telephone: phoneNumber,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nanjing",
        addressRegion: "Jiangsu",
        addressCountry: "CN"
      }
    },
    areaServed: ["China", "International"],
    keywords
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
