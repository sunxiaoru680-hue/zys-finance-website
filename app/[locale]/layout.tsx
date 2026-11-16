import { isInternationalLocale, localizedLandingContent } from "@/lib/localizedLanding";

export default async function InternationalLocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = isInternationalLocale(locale)
    ? localizedLandingContent[locale].htmlLang
    : "en";
  const direction = isInternationalLocale(locale)
    ? localizedLandingContent[locale].direction || "ltr"
    : "ltr";

  return <div lang={lang} dir={direction}>{children}</div>;
}
