import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Book a Consultation",
  secondaryCta = "Contact Us"
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-shell py-16 md:py-20">
        <p className="text-sm font-bold uppercase text-evergreen">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">{primaryCta}</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            {secondaryCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
