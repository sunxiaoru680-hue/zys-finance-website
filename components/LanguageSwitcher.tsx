"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe2 } from "lucide-react";
import { getLocaleFromPathname, getLocalizedPath, locales } from "@/lib/i18n";

const hrefLangByLocale = {
  en: "en",
  zh: "zh-CN",
  de: "de",
  fr: "fr",
  es: "es",
  pt: "pt",
  ru: "ru",
  vi: "vi",
  th: "th",
  id: "id",
  ar: "ar",
  ja: "ja",
  ko: "ko"
} as const;

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const currentLocale = getLocaleFromPathname(pathname);
  const current = locales.find((locale) => locale.code === currentLocale) || locales[0];

  return (
    <details className="group/language relative">
      <summary className="focus-ring flex min-h-9 cursor-pointer list-none items-center gap-1.5 rounded-sm border border-line bg-white px-2.5 text-xs font-semibold text-graphite transition hover:border-gold hover:text-ink">
        <Globe2 aria-hidden="true" className="h-3.5 w-3.5" />
        <span>{current.shortLabel}</span>
        <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 text-gold transition group-open/language:rotate-180" />
        <span className="sr-only">Choose language</span>
      </summary>
      <div className="absolute right-0 top-full z-[70] w-44 pt-2">
        <div className="grid max-h-[min(70vh,420px)] overflow-y-auto rounded-sm border border-line bg-white py-1.5 shadow-[0_18px_45px_rgba(15,36,31,0.16)]">
          {locales.map((locale) => {
            const active = locale.code === currentLocale;
            return (
            <Link
              key={locale.code}
              href={getLocalizedPath(pathname, locale.code)}
              className={`focus-ring flex items-center justify-between px-3 py-2 text-xs font-semibold transition ${
                active ? "bg-paper text-ink" : "text-graphite hover:bg-paper hover:text-ink"
              }`}
              hrefLang={hrefLangByLocale[locale.code]}
            >
              <span>{locale.label}</span>
              <span className="text-[10px] text-gold">{locale.shortLabel}</span>
            </Link>
            );
          })}
        </div>
      </div>
    </details>
  );
}
