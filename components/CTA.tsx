import { ButtonLink } from "@/components/ButtonLink";

export function CTA() {
  return (
    <section className="bg-evergreen text-white">
      <div className="container-shell grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-white/70">
            Start with clarity
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Plan your China or overseas company setup with a compliance-focused advisory team.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
            Share your target market, ownership structure, visa needs, and expected
            timeline. ZYS will outline practical registration, tax, accounting,
            and licensing steps for your situation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <ButtonLink href="/contact" variant="light">
            Book a Consultation
          </ButtonLink>
          <ButtonLink href="/services" variant="light">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
