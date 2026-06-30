"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappQrAlt, whatsappQrImage, whatsappUrl } from "@/components/seo";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <details className="group">
        <summary
          aria-label="Open WhatsApp Business QR code"
          className="focus-ring grid h-14 w-14 cursor-pointer list-none place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:h-16 sm:w-16 [&::-webkit-details-marker]:hidden"
        >
          <MessageCircle aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max max-w-[220px] rounded-md bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 group-focus:opacity-100">
            WhatsApp Business QR
          </span>
        </summary>
        <div className="absolute bottom-20 right-0 w-[min(82vw,18rem)] rounded-md border border-line bg-white p-4 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
          <p className="text-sm font-bold">Scan WhatsApp Business</p>
          <p className="mt-1 text-xs leading-5 text-graphite">
            Connect with ZYS for China business and tax advisory support.
          </p>
          <Image
            src={whatsappQrImage}
            alt={whatsappQrAlt}
            width={480}
            height={852}
            className="mt-3 h-auto w-full rounded-md border border-line"
            sizes="288px"
          />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-3 flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-bold text-white"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Open WhatsApp
          </a>
        </div>
      </details>
    </div>
  );
}
