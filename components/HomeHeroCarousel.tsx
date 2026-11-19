"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";

const slides = [
  {
    eyebrow: "China market entry",
    title: "China Company Registration, Tax and Accounting Services.",
    text: "Build and operate your China business with coordinated support for company formation, tax compliance, accounting, licensing and work permits.",
    image: "/images/global-finance-consulting-hero.png",
    alt: "International business advisors reviewing China market entry and financial planning",
    primary: { label: "Plan Your China Entry", href: "/contact" },
    secondary: { label: "Explore Services", href: "/services" },
    position: "object-center"
  },
  {
    eyebrow: "Tax, accounting and compliance",
    title: "One advisory team for the obligations behind your China operation.",
    text: "Maintain reliable books, tax calendars, management reporting and compliance processes as your business grows.",
    image: "/images/corporate-video/zys-meeting-room.jpg",
    alt: "ZYS Advisory meeting room for tax, accounting and compliance consultations",
    primary: { label: "Discuss Your Compliance Needs", href: "/contact" },
    secondary: { label: "Tax & Accounting", href: "/tax-accounting" },
    position: "object-center"
  },
  {
    eyebrow: "Cross-border expansion",
    title: "Connect China operations with your wider international strategy.",
    text: "Practical support for Chinese and international businesses comparing Hong Kong, Singapore, the United States and Dubai structures.",
    image: "/images/corporate-video/zys-office-lobby.jpg",
    alt: "ZYS Advisory office lobby for international corporate expansion consultations",
    primary: { label: "Speak With ZYS", href: "/contact" },
    secondary: { label: "View Company Profile", href: "/company-profile" },
    position: "object-center"
  }
] as const;

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="ZYS Advisory services"
      className="relative overflow-hidden border-b border-line bg-[#eef3f1]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[620px] md:min-h-[650px]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            aria-hidden={active !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover ${slide.position}`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/82 md:hidden" />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(247,250,249,0.98) 0%, rgba(247,250,249,0.94) 34%, rgba(247,250,249,0.78) 56%, rgba(247,250,249,0.28) 76%, rgba(247,250,249,0.06) 100%)"
              }}
            />
            <div className="container-shell relative flex min-h-[620px] items-center pb-24 pt-16 md:min-h-[650px] md:pb-28 md:pt-20">
              <div className="min-w-0 max-w-[680px]">
                <p className="text-xs font-bold uppercase text-evergreen md:text-sm">
                  {slide.eyebrow}
                </p>
                {index === 0 ? (
                  <h1 className="mt-5 break-words text-[34px] font-bold leading-[1.1] text-ink sm:text-4xl md:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p role="heading" aria-level={2} className="mt-5 break-words text-[34px] font-bold leading-[1.1] text-ink sm:text-4xl md:text-6xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-6 max-w-xl break-words text-base font-medium leading-7 text-[#34423f] md:text-lg md:leading-8">
                  {slide.text}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink
                    href={slide.primary.href}
                    source={`home_hero_slide_${index + 1}`}
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
                  >
                    {slide.primary.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </TrackedLink>
                  <Link
                    href={slide.secondary.href}
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-ink/25 bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:bg-white"
                  >
                    {slide.secondary.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-ink/10 bg-white/88 backdrop-blur">
        <div className="container-shell flex min-h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-label="Choose banner slide">
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  active === index ? "w-10 bg-gold" : "w-5 bg-line hover:bg-graphite/40"
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs font-semibold text-graphite sm:inline">
              0{active + 1} / 0{slides.length}
            </span>
            <button
              type="button"
              aria-label="Previous banner"
              className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-line bg-white text-ink transition hover:border-gold"
              onClick={() => goTo(active - 1)}
            >
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next banner"
              className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-line bg-white text-ink transition hover:border-gold"
              onClick={() => goTo(active + 1)}
            >
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
