"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import { getLocalizedPath, locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center gap-1 rounded-md border border-line bg-white p-1 text-xs font-bold text-graphite">
      <Globe2 aria-hidden="true" className="ml-2 h-4 w-4 text-evergreen" />
      {locales.map((locale) => {
        const active =
          locale.code === "zh" ? pathname.startsWith("/zh") : !pathname.startsWith("/zh");
        return (
          <Link
            key={locale.code}
            href={getLocalizedPath(pathname, locale.code)}
            className={`focus-ring rounded px-2 py-1.5 transition ${
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
