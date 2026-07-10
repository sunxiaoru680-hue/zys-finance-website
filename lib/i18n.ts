export type Locale = "en" | "zh";

export const locales = [
  { code: "en", label: "English", shortLabel: "EN", pathPrefix: "" },
  { code: "zh", label: "中文", shortLabel: "中文", pathPrefix: "/zh" }
] as const;

export const localizedRoutes = ["/", "/company-profile", "/contact"] as const;

export function getLocalizedPath(pathname: string, locale: Locale) {
  const cleanPath = pathname === "" ? "/" : pathname;
  const withoutLocale = cleanPath.startsWith("/zh")
    ? cleanPath.replace(/^\/zh/, "") || "/"
    : cleanPath;
  const route = localizedRoutes.includes(withoutLocale as (typeof localizedRoutes)[number])
    ? withoutLocale
    : "/";

  if (locale === "zh") {
    return route === "/" ? "/zh" : `/zh${route}`;
  }

  return route;
}

export const zhNavItems = [
  { href: "/zh", label: "首页" },
  { href: "/zh/company-profile", label: "公司资料" },
  { href: "/services", label: "英文服务" },
  { href: "/zh/contact", label: "联系我们" }
];
