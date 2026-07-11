import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <WhatsAppButton
        source="floating_whatsapp"
        className="focus-ring group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:h-16 sm:w-16"
        iconClassName="h-7 w-7 sm:h-8 sm:w-8"
      >
        <span className="sr-only">WhatsApp Business</span>
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max max-w-[220px] rounded-md bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 group-focus:opacity-100">
          WhatsApp Business QR
        </span>
      </WhatsAppButton>
    </div>
  );
}
