import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SocialIcons } from "@/components/SocialIcons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  businessHours,
  companyName,
  createPageMetadata,
  emailAddress,
  officeAddress,
  phoneNumber,
  siteUrl,
  StructuredData,
  whatsappQrAlt,
  whatsappQrImage
} from "@/components/seo";

const baseMetadata = createPageMetadata({
  title: "Contact ZYS for China Company Registration & Tax Advisory",
  description:
    "Contact Nanjing ZYS Advisory Co., Ltd. by WhatsApp or email for China company registration, accounting, tax advisory, work visas, business license applications, audit services, and overseas company registration.",
  keywords: [
    "contact China company registration consultant",
    "China tax advisory consultation",
    "accounting services in China consultation",
    "work visa China consultation",
    "Nanjing ZYS Advisory contact"
  ],
  path: "/contact"
});

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: `${siteUrl}/contact`,
    languages: {
      en: `${siteUrl}/contact`,
      "zh-CN": `${siteUrl}/zh/contact`
    }
  }
};

const contactDetails = [
  {
    label: "WhatsApp",
    value: phoneNumber,
    icon: MessageCircle
  },
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: phoneNumber,
    href: `tel:${phoneNumber.replace(/\s/g, "")}`,
    icon: Phone
  },
  {
    label: "Office Address",
    value: officeAddress,
    icon: MapPin
  },
  {
    label: "Business Hours",
    value: businessHours,
    icon: Clock
  }
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${companyName}`,
          description:
            "Book a consultation for China company registration, accounting, China tax advisory, work visas, business license applications, audit services, and China business advisory.",
          mainEntity: {
            "@type": "ProfessionalService",
            name: companyName,
            telephone: phoneNumber,
            email: emailAddress,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nanjing",
              addressRegion: "Jiangsu",
              addressCountry: "CN"
            }
          }
        }}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Book a free consultation for your China or overseas business plan."
        description="Tell ZYS about your target market, business activity, ownership structure, timing, and service needs. We will identify the practical next steps for registration, tax, accounting, visas, licensing, audits, or overseas setup."
        primaryCta="Book a Free Consultation"
        secondaryCta="View Services"
      />
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              Contact details
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Speak with an English-speaking consultant before you start.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Share your business activity, preferred location, ownership
              structure, visa needs, and expected timeline. For urgent deadlines,
              include your target date and current document status.
            </p>
            <div className="mt-8 grid gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <span className="flex gap-4 rounded-md border border-line bg-white p-5 text-sm leading-7 text-graphite shadow-sm transition hover:shadow-soft">
                    <Icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
                    <span>
                      <span className="block font-bold text-ink">{detail.label}</span>
                      <span>{detail.value}</span>
                    </span>
                  </span>
                );

                if (detail.label === "WhatsApp") {
                  return (
                    <WhatsAppButton
                      key={detail.label}
                      source="contact_details"
                      className="focus-ring block text-left"
                      iconClassName="hidden"
                    >
                      {content}
                    </WhatsAppButton>
                  );
                }

                return detail.href ? (
                  <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">
              WhatsApp Business
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Scan the WhatsApp QR code to contact ZYS directly.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Use WhatsApp Business for consultation requests, document
              coordination, and follow-up questions about China company
              registration, accounting, tax advisory, visas, licenses, audits,
              or overseas setup.
            </p>
            <WhatsAppButton source="contact_page" className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white">
              Open WhatsApp
            </WhatsAppButton>
          </div>
          <div className="max-w-sm rounded-md border border-line bg-paper p-4 shadow-sm">
            <Image
              src={whatsappQrImage}
              alt={whatsappQrAlt}
              width={480}
              height={852}
              className="h-auto w-full rounded-md border border-line bg-white"
              sizes="(min-width: 1024px) 384px, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-shell rounded-md border border-line bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase text-evergreen">
            Follow ZYS Advisory
          </p>
          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-ink">
                Follow our social channels for business and tax updates.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-graphite">
                Connect with ZYS Advisory on Facebook and LinkedIn for updates
                on China company registration, tax, accounting, visas and
                cross-border corporate services.
              </p>
            </div>
            <SocialIcons showLabel />
          </div>
        </div>
      </section>
    </>
  );
}
