export type Locale = "en" | "zh" | "de" | "fr" | "es" | "pt" | "ru" | "vi" | "th" | "id" | "ar" | "ja" | "ko";

export const locales = [
  { code: "en", label: "English", shortLabel: "EN", pathPrefix: "" },
  { code: "zh", label: "简体中文", shortLabel: "中文", pathPrefix: "/zh" },
  { code: "de", label: "Deutsch", shortLabel: "DE", pathPrefix: "/de" },
  { code: "fr", label: "Français", shortLabel: "FR", pathPrefix: "/fr" },
  { code: "es", label: "Español", shortLabel: "ES", pathPrefix: "/es" },
  { code: "pt", label: "Português", shortLabel: "PT", pathPrefix: "/pt" },
  { code: "ru", label: "Русский", shortLabel: "RU", pathPrefix: "/ru" },
  { code: "vi", label: "Tiếng Việt", shortLabel: "VI", pathPrefix: "/vi" },
  { code: "th", label: "ไทย", shortLabel: "ไทย", pathPrefix: "/th" },
  { code: "id", label: "Bahasa Indonesia", shortLabel: "ID", pathPrefix: "/id" },
  { code: "ar", label: "العربية", shortLabel: "AR", pathPrefix: "/ar" },
  { code: "ja", label: "日本語", shortLabel: "日本語", pathPrefix: "/ja" },
  { code: "ko", label: "한국어", shortLabel: "한국어", pathPrefix: "/ko" }
] as const;

export const localizedRoutes = ["/", "/company-profile", "/contact"] as const;

export function getLocalizedPath(pathname: string, locale: Locale) {
  const cleanPath = pathname === "" ? "/" : pathname;
  const localePattern = /^\/(zh|de|fr|es|pt|ru|vi|th|id|ar|ja|ko)(?=\/|$)/;
  const withoutLocale = cleanPath.replace(localePattern, "") || "/";
  const route = localizedRoutes.includes(withoutLocale as (typeof localizedRoutes)[number])
    ? withoutLocale
    : "/";

  if (locale === "zh") {
    return route === "/" ? "/zh" : `/zh${route}`;
  }

  if (locale !== "en") {
    return `/${locale}`;
  }

  return route;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const match = pathname.match(/^\/(zh|de|fr|es|pt|ru|vi|th|id|ar|ja|ko)(?=\/|$)/);
  return (match?.[1] as Locale | undefined) || "en";
}

export const zhNavItems = [
  { href: "/zh", label: "首页" },
  { href: "/zh/company-profile", label: "公司资料" },
  { href: "/services", label: "英文服务" },
  { href: "/zh/contact", label: "联系我们" }
];
