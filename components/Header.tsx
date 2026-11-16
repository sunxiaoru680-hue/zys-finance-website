"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { brandSubtitle, emailAddress, emailMailto, phoneNumber, whatsappUrl } from "@/components/seo";
import { TrackedLink } from "@/components/TrackedLink";
import { getLocaleFromPathname } from "@/lib/i18n";

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
  { href: "/services/business-license", label: "Business Licenses" },
  { href: "/services/corporate-legal-advisory", label: "Legal Advisory" }
];

const mainItems = [
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" }
];

const localizedHeader = {
  zh: {
    items: [
      { href: "/zh", label: "首页" },
      { href: "/zh/company-profile", label: "公司资料" },
      { href: "/services", label: "专业服务" },
      { href: "/blog", label: "专业洞察" },
      { href: "/zh/contact", label: "联系我们" }
    ],
    cta: "预约咨询",
    contactHref: "/zh/contact"
  },
  de: {
    items: [
      { href: "/de", label: "Startseite" },
      { href: "/de#services", label: "Leistungen" },
      { href: "/de#approach", label: "Vorgehen" },
      { href: "/de#why-zys", label: "Warum ZYS" },
      { href: "/de#faq", label: "FAQ" },
      { href: "/contact", label: "Kontakt" }
    ],
    cta: "Beratung anfragen",
    contactHref: "/contact"
  },
  fr: {
    items: [
      { href: "/fr", label: "Accueil" },
      { href: "/fr#services", label: "Services" },
      { href: "/fr#approach", label: "Méthode" },
      { href: "/fr#why-zys", label: "Pourquoi ZYS" },
      { href: "/fr#faq", label: "FAQ" },
      { href: "/contact", label: "Contact" }
    ],
    cta: "Demander une consultation",
    contactHref: "/contact"
  },
  es: {
    items: [
      { href: "/es", label: "Inicio" },
      { href: "/es#services", label: "Servicios" },
      { href: "/es#approach", label: "Proceso" },
      { href: "/es#why-zys", label: "Por qué ZYS" },
      { href: "/es#faq", label: "FAQ" },
      { href: "/contact", label: "Contacto" }
    ],
    cta: "Solicitar consulta",
    contactHref: "/contact"
  },
  pt: {
    items: [
      { href: "/pt", label: "Início" },
      { href: "/pt#services", label: "Serviços" },
      { href: "/pt#approach", label: "Processo" },
      { href: "/pt#why-zys", label: "Por que a ZYS" },
      { href: "/pt#faq", label: "FAQ" },
      { href: "/contact", label: "Contato" }
    ],
    cta: "Solicitar consulta",
    contactHref: "/contact"
  },
  ru: {
    items: [
      { href: "/ru", label: "Главная" },
      { href: "/ru#services", label: "Услуги" },
      { href: "/ru#approach", label: "Процесс" },
      { href: "/ru#why-zys", label: "Почему ZYS" },
      { href: "/ru#faq", label: "Вопросы" },
      { href: "/contact", label: "Контакты" }
    ],
    cta: "Запросить консультацию",
    contactHref: "/contact"
  },
  vi: {
    items: [
      { href: "/vi", label: "Trang chủ" },
      { href: "/vi#services", label: "Dịch vụ" },
      { href: "/vi#approach", label: "Quy trình" },
      { href: "/vi#why-zys", label: "Vì sao chọn ZYS" },
      { href: "/vi#faq", label: "Hỏi đáp" },
      { href: "/contact", label: "Liên hệ" }
    ],
    cta: "Yêu cầu tư vấn",
    contactHref: "/contact"
  },
  th: {
    items: [
      { href: "/th", label: "หน้าหลัก" },
      { href: "/th#services", label: "บริการ" },
      { href: "/th#approach", label: "ขั้นตอน" },
      { href: "/th#why-zys", label: "ทำไมต้อง ZYS" },
      { href: "/th#faq", label: "คำถาม" },
      { href: "/contact", label: "ติดต่อ" }
    ],
    cta: "ขอคำปรึกษา",
    contactHref: "/contact"
  },
  id: {
    items: [
      { href: "/id", label: "Beranda" },
      { href: "/id#services", label: "Layanan" },
      { href: "/id#approach", label: "Proses" },
      { href: "/id#why-zys", label: "Mengapa ZYS" },
      { href: "/id#faq", label: "Tanya Jawab" },
      { href: "/contact", label: "Kontak" }
    ],
    cta: "Minta konsultasi",
    contactHref: "/contact"
  },
  ar: {
    items: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar#services", label: "الخدمات" },
      { href: "/ar#approach", label: "آلية العمل" },
      { href: "/ar#why-zys", label: "لماذا ZYS" },
      { href: "/ar#faq", label: "الأسئلة" },
      { href: "/contact", label: "اتصل بنا" }
    ],
    cta: "اطلب استشارة",
    contactHref: "/contact"
  },
  ja: {
    items: [
      { href: "/ja", label: "ホーム" },
      { href: "/ja#services", label: "サービス" },
      { href: "/ja#approach", label: "支援の流れ" },
      { href: "/ja#why-zys", label: "選ばれる理由" },
      { href: "/ja#faq", label: "よくある質問" },
      { href: "/contact", label: "お問い合わせ" }
    ],
    cta: "相談を申し込む",
    contactHref: "/contact"
  },
  ko: {
    items: [
      { href: "/ko", label: "홈" },
      { href: "/ko#services", label: "서비스" },
      { href: "/ko#approach", label: "업무 절차" },
      { href: "/ko#why-zys", label: "ZYS의 강점" },
      { href: "/ko#faq", label: "자주 묻는 질문" },
      { href: "/contact", label: "문의" }
    ],
    cta: "상담 신청",
    contactHref: "/contact"
  }
} as const;

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const localNavigation = locale === "en" ? null : localizedHeader[locale];
  const homeHref = locale === "en" ? "/" : `/${locale}`;

  return (
    <header dir={locale === "ar" ? "rtl" : "ltr"} className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-[0_8px_24px_rgba(15,36,31,0.04)] backdrop-blur">
      <div className="bg-ink text-white">
        <div className="mx-auto flex min-h-9 w-full max-w-[1520px] items-center justify-start px-5 text-[11px] font-semibold leading-none text-white/85 sm:justify-end sm:text-xs xl:px-8">
          <div className="flex min-w-0 items-center gap-2 whitespace-nowrap sm:gap-3">
            <a className="transition hover:text-gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp: {phoneNumber}
            </a>
            <span className="hidden text-white/35 sm:inline">|</span>
            <span className="hidden sm:inline">WeChat: {phoneNumber}</span>
            <span className="hidden text-white/35 md:inline">|</span>
            <a className="hidden transition hover:text-gold md:inline" href={emailMailto}>
              Email: {emailAddress}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex min-h-[92px] w-full max-w-[1520px] items-center justify-between gap-4 px-5 xl:gap-6 xl:px-8">
        <Link href={homeHref} className="focus-ring flex min-w-0 flex-none basis-[260px] items-center gap-3 rounded-md xl:basis-[320px] 2xl:basis-[340px]">
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

        <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:gap-6 2xl:gap-8 lg:flex">
          {localNavigation ? (
            localNavigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring whitespace-nowrap rounded-sm py-2 text-sm font-semibold text-graphite transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))
          ) : (
            <>
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
            </>
          )}
        </nav>

        <div className="hidden flex-none items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <TrackedLink
            href={localNavigation?.contactHref || "/contact"}
            source="header_consultation"
            className="focus-ring inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-sm border border-ink bg-ink px-3 py-2 text-xs font-semibold tracking-normal text-white transition hover:border-gold hover:bg-gold hover:text-ink xl:px-3.5"
          >
            {localNavigation?.cta || "Book a Consultation"}
          </TrackedLink>
        </div>

        <details className="group lg:hidden">
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-line bg-white">
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-0 right-0 top-[128px] hidden border-b border-line bg-white p-4 shadow-soft group-open:block">
            <nav aria-label="Mobile navigation" className="container-shell grid gap-1">
              {(localNavigation?.items || [{ href: "/", label: "Home" }, ...aboutItems, ...serviceItems, ...mainItems]).map((item) => (
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
                  href={localNavigation?.contactHref || "/contact"}
                  source="mobile_header_consultation"
                  className="focus-ring inline-flex min-h-9 items-center justify-center rounded-sm border border-ink bg-ink px-3.5 py-2 text-xs font-semibold text-white"
                >
                  {localNavigation?.cta || "Book a Consultation"}
                </TrackedLink>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
