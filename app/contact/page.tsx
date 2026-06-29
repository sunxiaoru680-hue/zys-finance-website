import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import {
  companyName,
  contactChannels,
  createPageMetadata,
  location,
  phoneNumber,
  StructuredData
} from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact ZYS for China Company Registration & Tax Services",
  description:
    "Contact Nanjing ZYS Financial Consulting Co., Ltd. for China company registration, China tax services, accounting services in China, visa services in China, business licenses, and international business consulting.",
  keywords: [
    "contact China company registration consultant",
    "China tax services consultation",
    "accounting services in China consultation",
    "visa services in China consultation"
  ]
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${companyName}`,
          description:
            "Book a consultation for China company registration, China tax services, accounting services in China, visa services in China, and international business consulting.",
          mainEntity: {
            "@type": "ProfessionalService",
            name: companyName,
            telephone: phoneNumber,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nanjing",
              addressCountry: "CN"
            }
          }
        }}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Book a consultation for your China or overseas business setup."
        description="Tell ZYS about your target market, business activity, ownership structure, timing, and service needs. We will help you identify the practical next steps."
        secondaryCta="View Services"
      />
      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold">Contact details</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-graphite">
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 text-evergreen" />
                {phoneNumber}
              </p>
              <p className="flex gap-3">
                <MessageCircle aria-hidden="true" className="mt-1 h-5 w-5 text-evergreen" />
                Available on {contactChannels}.
              </p>
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 text-evergreen" />
                {location}. Serving international clients remotely and across
                major business centers.
              </p>
            </div>
            <p className="mt-6 rounded-md border border-line bg-white p-5 text-sm leading-7 text-graphite">
              For urgent company registration, tax filing, visa, license, or audit
              deadlines, include your target date, current document status, and
              preferred contact channel in the message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
