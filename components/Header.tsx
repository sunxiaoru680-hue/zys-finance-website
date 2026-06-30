import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/components/siteData";
import { ButtonLink } from "@/components/ButtonLink";
import { brandSubtitle, companyName } from "@/components/seo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-evergreen text-white">
            <span className="text-sm font-black">ZYS</span>
          </span>
          <span className="min-w-0 max-w-[13.75rem] leading-tight sm:max-w-none">
            <span className="block text-[13px] font-bold tracking-normal text-ink sm:text-sm md:text-base">
              {companyName}
            </span>
            <span className="block text-[11px] font-semibold uppercase text-graphite sm:text-xs">
              {brandSubtitle}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-graphite transition hover:bg-paper hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Book a Free Consultation</ButtonLink>
        </div>

        <details className="group lg:hidden">
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-line bg-white">
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-0 right-0 top-20 border-b border-line bg-white p-4 shadow-soft">
            <nav aria-label="Mobile navigation" className="container-shell grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-paper"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <ButtonLink href="/contact">Book a Free Consultation</ButtonLink>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
