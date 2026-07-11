import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { brandSubtitle } from "@/components/seo";
import { TrackedLink } from "@/components/TrackedLink";

const headerBrandName = "ZYS Advisory";

const aboutItems = [
  { href: "/about", label: "About ZYS" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/our-team", label: "Our Team" },
  { href: "/experience", label: "Experience" },
  { href: "/why-choose-us", label: "Why Choose Us" }
];

const serviceItems = [
  { href: "/services", label: "All Services" },
  { href: "/services/company-registration-in-china", label: "China Registration" },
  { href: "/tax-accounting", label: "Tax & Accounting" },
  { href: "/services/china-visa-service", label: "Visa Services" },
  { href: "/services/business-license", label: "Business Licenses" }
];

const mainItems = [
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-[0_8px_24px_rgba(15,36,31,0.04)] backdrop-blur">
      <div className="container-shell flex min-h-[92px] items-center justify-between gap-5 xl:gap-7">
        <Link href="/" className="focus-ring flex min-w-[240px] flex-none items-center gap-3 rounded-md lg:basis-[300px] xl:basis-[340px]">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-sm bg-ink text-white">
            <span className="text-sm font-black tracking-normal">ZYS</span>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap text-[18px] font-bold tracking-normal text-ink">
              {headerBrandName}
            </span>
            <span className="mt-1 block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em] text-graphite">
              {brandSubtitle}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-5 xl:gap-7 2xl:gap-9 lg:flex">
          <Link
            href="/"
            className="focus-ring whitespace-nowrap rounded-sm py-2 text-sm font-semibold text-graphite transition hover:text-ink"
          >
            Home
          </Link>

          <div className="group relative">
            <Link
              href="/about"
              className="focus-ring flex items-center gap-1 whitespace-nowrap rounded-sm py-2 text-sm font-semibold text-graphite transition hover:text-ink"
            >
              About
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-sm border border-line bg-white py-2 shadow-[0_18px_45px_rgba(15,36,31,0.14)]">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="focus-ring block whitespace-nowrap px-4 py-2.5 text-sm font-medium text-graphite transition hover:bg-paper hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/services"
              className="focus-ring flex items-center gap-1 whitespace-nowrap rounded-sm py-2 text-sm font-semibold text-graphite transition hover:text-ink"
            >
              Services
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-sm border border-line bg-white py-2 shadow-[0_18px_45px_rgba(15,36,31,0.14)]">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="focus-ring block whitespace-nowrap px-4 py-2.5 text-sm font-medium text-graphite transition hover:bg-paper hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring whitespace-nowrap rounded-sm py-2 text-sm font-semibold text-graphite transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <TrackedLink
            href="/contact"
            source="header_consultation"
            className="focus-ring inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-sm border border-ink bg-ink px-3.5 py-2 text-xs font-semibold tracking-normal text-white transition hover:border-gold hover:bg-gold hover:text-ink"
          >
            Book a Consultation
          </TrackedLink>
        </div>

        <details className="group lg:hidden">
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-line bg-white">
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-0 right-0 top-[92px] hidden border-b border-line bg-white p-4 shadow-soft group-open:block">
            <nav aria-label="Mobile navigation" className="container-shell grid gap-1">
              {[{ href: "/", label: "Home" }, ...aboutItems, ...serviceItems, ...mainItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-sm px-3 py-3 text-sm font-semibold text-ink hover:bg-paper"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <div className="pt-3">
                <TrackedLink
                  href="/contact"
                  source="mobile_header_consultation"
                  className="focus-ring inline-flex min-h-9 items-center justify-center rounded-sm border border-ink bg-ink px-3.5 py-2 text-xs font-semibold text-white"
                >
                  Book a Consultation
                </TrackedLink>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
