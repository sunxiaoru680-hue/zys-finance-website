import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { calendlyUrl, emailAddress, whatsappUrl } from "@/components/seo";

export function LeadCapture({ title = "Request a consultation", text = "Share your China business objective, ownership structure, tax questions, visa needs, and target timeline. ZYS will outline practical next steps." }) {
  return (
    <section className="bg-evergreen py-14 text-white md:py-18">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-white/70">Lead generation</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <ButtonLink href="/contact" variant="light">Request Consultation</ButtonLink>
          <a className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Book Meeting
          </a>
          <a className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
          <a className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" href={`mailto:${emailAddress}`}>
            <Mail aria-hidden="true" className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
