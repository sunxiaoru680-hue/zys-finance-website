import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { emailAddress } from "@/components/seo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CTA() {
  return (
    <section className="bg-evergreen text-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
        <div>
          <p className="text-sm font-bold uppercase text-white/70">
            Start with clarity
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Get practical guidance before you register, hire, invoice, or expand.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80">
            Share your target market, ownership structure, visa needs, and expected
            timeline. ZYS will outline the registration, tax, accounting,
            licensing, and compliance steps that fit your situation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <ButtonLink href="/contact" variant="light">
            Book a Free Consultation
          </ButtonLink>
          <WhatsAppButton
            source="cta"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
          >
            WhatsApp Us
          </WhatsAppButton>
          <a
            href={`mailto:${emailAddress}`}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/60 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email Us
            <Mail aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
