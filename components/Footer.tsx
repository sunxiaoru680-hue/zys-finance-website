import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems } from "@/components/siteData";
import { businessHours, companyName, contactChannels, emailAddress, location, phoneNumber, whatsappUrl } from "@/components/seo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-bold">{companyName}</p>
          <p className="mt-1 text-sm font-semibold text-white/75">Logo: ZYS</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Professional China company registration, accounting, tax advisory,
            work visa, business license, audit, and overseas registration support
            for international clients.
          </p>
        </div>
        <div>
          <p className="font-semibold">Company</p>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p className="flex items-center gap-2">
              <Phone aria-hidden="true" className="h-4 w-4" />
              {phoneNumber}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp: {contactChannels}
            </a>
            <a href={`mailto:${emailAddress}`} className="flex items-center gap-2 hover:text-white">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {emailAddress}
            </a>
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {location}
            </p>
            <p>{businessHours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p>Company formation, tax, accounting, visa, licensing, and audit support.</p>
        </div>
      </div>
    </footer>
  );
}
