"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath, locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center gap-0.5 text-xs font-semibold text-graphite">
      {locales.map((locale) => {
        const active =
          locale.code === "zh" ? pathname.startsWith("/zh") : !pathname.startsWith("/zh");
        return (
          <Link
            key={locale.code}
            href={getLocalizedPath(pathname, locale.code)}
            className={`focus-ring rounded-sm px-2 py-1.5 transition ${
              active ? "bg-ink text-white" : "hover:bg-paper hover:text-ink"
            }`}
            hrefLang={locale.code === "zh" ? "zh-CN" : "en"}
          >
            {locale.shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
