"use client";

import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { calendlyUrl, emailAddress, whatsappUrl } from "@/components/seo";
import { trackConsultationRequest, trackWhatsAppClick } from "@/components/analytics";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white/95 p-3 shadow-soft backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 text-xs font-bold">
        <a className="focus-ring flex min-h-11 items-center justify-center gap-1 rounded-md bg-evergreen px-2 text-white" href={calendlyUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackConsultationRequest("mobile_sticky_meeting")}>
          <CalendarDays aria-hidden="true" className="h-4 w-4" />
          Meeting
        </a>
        <a className="focus-ring flex min-h-11 items-center justify-center gap-1 rounded-md bg-[#25D366] px-2 text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("mobile_sticky")}>
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </a>
        <a className="focus-ring flex min-h-11 items-center justify-center gap-1 rounded-md border border-line px-2 text-ink" href={`mailto:${emailAddress}`}>
          <Mail aria-hidden="true" className="h-4 w-4" />
          Email
        </a>
      </div>
    </div>
  );
}
