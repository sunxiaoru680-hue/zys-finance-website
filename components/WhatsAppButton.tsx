"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { whatsappQrAlt, whatsappQrImage, whatsappUrl } from "@/components/seo";
import { trackWhatsAppClick } from "@/components/analytics";

type WhatsAppButtonProps = {
  source: string;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  modalTitle?: string;
};

export function WhatsAppButton({
  source,
  children = "WhatsApp",
  className = "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95",
  iconClassName = "h-4 w-4",
  modalTitle = "Scan WhatsApp Business"
}: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={(event) => {
          trackWhatsAppClick(source);

          if (window.matchMedia("(min-width: 768px)").matches) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <MessageCircle aria-hidden="true" className={iconClassName} />
        {children}
      </a>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 px-4 py-8 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-md border border-line bg-white p-5 text-ink shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close WhatsApp QR code"
              className="focus-ring absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-sm border border-line text-graphite transition hover:bg-paper hover:text-ink"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
            <p id="whatsapp-modal-title" className="pr-10 text-lg font-bold">
              {modalTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Use WhatsApp as the primary channel for consultation requests,
              document coordination and follow-up questions.
            </p>
            <Image
              src={whatsappQrImage}
              alt={whatsappQrAlt}
              width={480}
              height={852}
              className="mt-4 h-auto w-full rounded-md border border-line bg-white"
              sizes="384px"
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
              onClick={() => trackWhatsAppClick(`${source}_modal_open`)}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Open WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
