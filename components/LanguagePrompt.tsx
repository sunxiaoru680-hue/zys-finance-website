"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { getLocaleFromPathname, getLocalizedPath, type Locale } from "@/lib/i18n";

const storageKey = "zys-language-prompt-dismissed";

const languagePrompts: Partial<Record<Locale, { text: string; action: string; hrefLang: string }>> = {
  zh: { text: "检测到你的浏览器语言是中文。是否切换到 ZYS Advisory 中文版本？", action: "查看中文", hrefLang: "zh-CN" },
  de: { text: "Ihre Browsersprache ist Deutsch. Möchten Sie die deutsche Version öffnen?", action: "Deutsch öffnen", hrefLang: "de" },
  fr: { text: "Votre navigateur est configuré en français. Ouvrir la version française ?", action: "Voir en français", hrefLang: "fr" },
  es: { text: "El idioma de su navegador es español. ¿Desea abrir la versión en español?", action: "Ver en español", hrefLang: "es" },
  pt: { text: "O idioma do seu navegador é português. Deseja abrir a versão em português?", action: "Ver em português", hrefLang: "pt" },
  ru: { text: "Язык вашего браузера — русский. Открыть русскую версию сайта?", action: "Открыть на русском", hrefLang: "ru" },
  vi: { text: "Trình duyệt của bạn đang dùng tiếng Việt. Bạn có muốn mở phiên bản tiếng Việt?", action: "Xem tiếng Việt", hrefLang: "vi" },
  th: { text: "ภาษาของเบราว์เซอร์เป็นภาษาไทย ต้องการเปิดเว็บไซต์ภาษาไทยหรือไม่", action: "ดูภาษาไทย", hrefLang: "th" },
  id: { text: "Bahasa browser Anda adalah Bahasa Indonesia. Buka versi Bahasa Indonesia?", action: "Lihat Bahasa Indonesia", hrefLang: "id" },
  ar: { text: "لغة متصفحك هي العربية. هل ترغب في فتح النسخة العربية؟", action: "عرض العربية", hrefLang: "ar" },
  ja: { text: "ブラウザの言語は日本語です。日本語版を表示しますか？", action: "日本語で見る", hrefLang: "ja" },
  ko: { text: "브라우저 언어가 한국어로 설정되어 있습니다. 한국어 페이지를 여시겠습니까?", action: "한국어로 보기", hrefLang: "ko" }
};

export function LanguagePrompt() {
  const pathname = usePathname() || "/";
  const currentLocale = getLocaleFromPathname(pathname);
  const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey) === "true") return;

    const timer = window.setTimeout(() => {
      const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
      const supported = Object.keys(languagePrompts) as Locale[];
      const preferred = languages
        .map((language) => language.toLowerCase().split("-")[0] as Locale)
        .find((language) => supported.includes(language));

      if (preferred && preferred !== currentLocale) {
        setSuggestedLocale(preferred);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [currentLocale]);

  if (!suggestedLocale) return null;

  const prompt = languagePrompts[suggestedLocale];
  if (!prompt) return null;

  return (
    <div className="border-b border-gold/30 bg-ink text-white">
      <div className="container-shell flex flex-col gap-3 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{prompt.text}</p>
        <div className="flex items-center gap-2">
          <Link
            href={getLocalizedPath(pathname, suggestedLocale)}
            className="focus-ring inline-flex min-h-9 items-center justify-center rounded-md bg-gold px-3 text-xs font-bold text-ink"
            hrefLang={prompt.hrefLang}
          >
            {prompt.action}
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30"
            aria-label="Dismiss language recommendation"
            onClick={() => {
              window.localStorage.setItem(storageKey, "true");
              setSuggestedLocale(null);
            }}
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
