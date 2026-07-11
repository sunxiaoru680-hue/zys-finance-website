"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath, locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center whitespace-nowrap text-xs font-semibold text-graphite">
      {locales.map((locale, index) => {
        const active =
          locale.code === "zh" ? pathname.startsWith("/zh") : !pathname.startsWith("/zh");
        return (
          <span key={locale.code} className="flex items-center">
            {index > 0 ? <span className="px-1.5 text-line">|</span> : null}
            <Link
              href={getLocalizedPath(pathname, locale.code)}
              className={`focus-ring rounded-sm px-1 py-1 transition ${
                active ? "text-ink" : "hover:text-ink"
              }`}
              hrefLang={locale.code === "zh" ? "zh-CN" : "en"}
            >
              {locale.shortLabel}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
