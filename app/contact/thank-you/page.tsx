import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata, siteUrl } from "@/components/seo";

const baseMetadata = createPageMetadata({
  title: "Thank You | ZYS Advisory",
  description:
    "Thank you for contacting ZYS Advisory. Our team will review your inquiry and respond about company registration, accounting, tax, visa, licensing or global corporate services.",
  path: "/contact/thank-you"
});

export const metadata: Metadata = {
  ...baseMetadata,
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: `${siteUrl}/contact/thank-you`
  }
};

export default function ContactThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Inquiry Received"
        title="Thank you for contacting ZYS Advisory."
        description="Your inquiry has been received. Our team will review your company registration, tax, accounting, visa, licensing, audit or overseas setup request and respond through your preferred contact channel."
        primaryCta="View Services"
        secondaryCta="Back to Home"
      />
      <section className="py-16 md:py-20">
        <div className="container-shell max-w-3xl rounded-md border border-line bg-white p-7 shadow-sm md:p-9">
          <CheckCircle aria-hidden="true" className="h-10 w-10 text-evergreen" />
          <h2 className="mt-5 text-2xl font-bold text-ink">Next steps</h2>
          <p className="mt-4 text-base leading-8 text-graphite">
            A ZYS Advisory consultant will review your message and follow up with
            practical next steps. For urgent matters, you may contact us directly
            on WhatsApp and mention that you submitted the website form.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton source="contact_thank_you" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Contact on WhatsApp
            </WhatsAppButton>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
