import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Plane,
  Scale,
  ShieldCheck
} from "lucide-react";
import { faqSchema, siteUrl, StructuredData } from "@/components/seo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  internationalLocales,
  isInternationalLocale,
  localizedLandingContent
} from "@/lib/localizedLanding";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const serviceIcons = [Building2, Calculator, ShieldCheck, Plane, Scale, Globe2];

const languageAlternates = {
  en: siteUrl,
  "zh-CN": `${siteUrl}/zh`,
  de: `${siteUrl}/de`,
  fr: `${siteUrl}/fr`,
  es: `${siteUrl}/es`,
  pt: `${siteUrl}/pt`,
  ru: `${siteUrl}/ru`,
  vi: `${siteUrl}/vi`,
  th: `${siteUrl}/th`,
  id: `${siteUrl}/id`,
  ar: `${siteUrl}/ar`,
  ja: `${siteUrl}/ja`,
  ko: `${siteUrl}/ko`,
  "x-default": siteUrl
};

export const dynamicParams = false;

export function generateStaticParams() {
  return internationalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isInternationalLocale(locale)) return {};

  const content = localizedLandingContent[locale];
  const canonical = `${siteUrl}/${locale}`;

  return {
    title: content.seoTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: {
      canonical,
      languages: languageAlternates
    },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url: canonical,
      siteName: "ZYS Advisory",
      type: "website",
      locale: content.locale,
      images: [
        {
          url: "/images/global-finance-consulting-hero.png",
          width: 1200,
          height: 630,
          alt: content.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.metaDescription,
      images: ["/images/global-finance-consulting-hero.png"]
    }
  };
}

export default async function InternationalLandingPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isInternationalLocale(locale)) notFound();

  const content = localizedLandingContent[locale];

  return (
    <>
      <StructuredData data={faqSchema(content.faqs)} />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/global-finance-consulting-hero.png"
          alt={content.title}
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/45" />
        <div className="absolute inset-x-0 top-0 h-px bg-gold" />
        <div className="container-shell relative flex min-h-[620px] items-center py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase text-gold md:text-sm">{content.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
              {content.introduction}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                {content.primaryCta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href="#services"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-shell grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {content.trustPoints.map((point) => (
            <div key={point} className="flex gap-3 py-6 md:px-6 first:md:pl-0 last:md:pr-0">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-evergreen" />
              <p className="text-sm font-semibold leading-6 text-ink">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-32 bg-paper py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-evergreen">{content.servicesEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">
                {content.servicesTitle}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-graphite">{content.servicesIntro}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="bg-white p-6 md:p-7">
                  <Icon aria-hidden="true" className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-32 bg-white py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">{content.approachEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">
              {content.approachTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">{content.approachText}</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {content.steps.map((step, index) => (
              <article key={step.title} className="bg-paper p-6">
                <p className="text-xs font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-zys" className="scroll-mt-32 bg-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <ClipboardCheck aria-hidden="true" className="h-8 w-8 text-gold" />
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">{content.whyTitle}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {content.reasons.map((reason) => (
              <p key={reason} className="border-l border-gold pl-4 text-sm font-semibold leading-7 text-white/82">
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-32 bg-white py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <FileCheck2 aria-hidden="true" className="h-7 w-7 text-evergreen" />
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink">{content.faqTitle}</h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {content.faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  {item.question}
                  <span className="text-xl font-normal text-gold group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-14 md:py-18">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-ink">{content.finalTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-graphite">{content.finalText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              {content.contactCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <WhatsAppButton
              source={`localized_home_${locale}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-gold"
            >
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
