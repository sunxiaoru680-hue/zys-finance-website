"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { getLocalizedPath } from "@/lib/i18n";

const storageKey = "zys-language-prompt-dismissed";

export function LanguagePrompt() {
  const pathname = usePathname() || "/";
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/zh")) return;
    if (window.localStorage.getItem(storageKey) === "true") return;

    const timer = window.setTimeout(() => {
      const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
      const prefersChinese = languages.some((language) => language.toLowerCase().startsWith("zh"));
      setShowPrompt(prefersChinese);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!showPrompt) return null;

  return (
    <div className="border-b border-gold/30 bg-ink text-white">
      <div className="container-shell flex flex-col gap-3 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          检测到你的浏览器语言可能是中文。是否切换到 ZYS Advisory 中文版本？
        </p>
        <div className="flex items-center gap-2">
          <Link
            href={getLocalizedPath(pathname, "zh")}
            className="focus-ring inline-flex min-h-9 items-center justify-center rounded-md bg-gold px-3 text-xs font-bold text-ink"
            hrefLang="zh-CN"
          >
            查看中文
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30"
            aria-label="Dismiss language recommendation"
            onClick={() => {
              window.localStorage.setItem(storageKey, "true");
              setShowPrompt(false);
            }}
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
