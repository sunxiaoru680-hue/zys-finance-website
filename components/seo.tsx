import type { Metadata } from "next";

export const companyName = "Nanjing ZYS Advisory Co., Ltd.";
export const brandName = "ZYS";
export const brandSubtitle = "China Business & Tax Advisory";
export const phoneNumber = "+86 18055161721";
export const whatsappNumber = "8618055161721";
export const emailAddress = "info@zysconsulting.com";
export const contactChannels = "WhatsApp, WeChat, Facebook";
export const location = "Nanjing, Jiangsu, China";
export const officeAddress = "Nanjing, Jiangsu, China";
export const businessHours = "Monday to Friday, 9:00 AM - 6:00 PM China Standard Time";
export const siteUrl = "https://www.zysadvisory.com";
export const ogImage = "/images/global-finance-consulting-hero.png";
export const whatsappQrImage = "/images/whatsapp-business-qr.webp";
export const whatsappQrAlt = "WhatsApp Business QR code for Nanjing ZYS Advisory Co., Ltd. China business and tax advisory consultation";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20ZYS%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20about%20China%20company%20registration%2C%20tax%2C%20accounting%2C%20visa%2C%20or%20business%20advisory%20services.`;
export const calendlyUrl = "https://calendly.com/zysconsulting/consultation";
export const liveChatUrl = whatsappUrl;
export const gtmId = "GTM-XXXXXXX";
export const gaId = "G-XXXXXXXXXX";

export const coreKeywords = [
  "China company registration",
  "China tax services",
  "accounting services in China",
  "visa services in China",
  "China business advisory",
  "China tax advisory",
  "China company registration for foreigners",
  "China tax agency",
  "bookkeeping services in China",
  "business licenses in China",
  "overseas company registration",
  "China WFOE registration",
  "China business license",
  "China bookkeeping",
  "China tax filing",
  "China VAT",
  "China payroll service",
  "China work permit",
  "China CFO service",
  "China audit",
  "Hong Kong company registration",
  "Singapore company registration",
  "US company registration",
  "Dubai company registration",
  "cross-border tax",
  "foreign investment China"
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
      canonical,
      languages: {
        en: canonical
      }
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
          alt: `${companyName} ${brandSubtitle}`
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
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    alternateName: brandName,
    url: siteUrl,
    image: `${siteUrl}${ogImage}`,
    email: emailAddress,
    telephone: phoneNumber,
    priceRange: "$",
    slogan: brandSubtitle,
    foundingLocation: location,
    areaServed: ["China", "Hong Kong", "Singapore", "United States", "Dubai", "International"],
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
      areaServed: ["China", "Hong Kong", "Singapore", "United States", "Dubai", "International"]
    },
    sameAs: [siteUrl],
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
    areaServed: ["China", "Hong Kong", "Singapore", "United States", "Dubai", "International"],
    serviceType: keywords,
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


export function localBusinessSchema() {
  return {
    ...organizationSchema(),
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: companyName
  };
}

export function articleSchema(article: { title: string; description: string; published: string; updated: string; author: string; slug: string; keyword: string; category: string; imageAlt: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    articleSection: article.category,
    keywords: [article.keyword, ...coreKeywords],
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${ogImage}`,
      caption: article.imageAlt
    },
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: companyName,
      telephone: phoneNumber,
      email: emailAddress,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${ogImage}`
      }
    },
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`
  };
}
