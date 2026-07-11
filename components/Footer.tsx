import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems } from "@/components/siteData";
import { businessHours, companyName, contactChannels, emailAddress, location, phoneNumber, whatsappQrAlt, whatsappQrImage, whatsappUrl } from "@/components/seo";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/professional-disclaimer", label: "Professional Disclaimer" }
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.15fr_0.7fr_0.7fr_0.9fr]">
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
              WhatsApp Business: {phoneNumber}
            </a>
            <div className="mt-2 flex items-center gap-3">
              <Image
                src={whatsappQrImage}
                alt={whatsappQrAlt}
                width={96}
                height={170}
                className="h-auto w-20 rounded-md border border-white/15 bg-white"
                sizes="80px"
              />
              <p className="leading-6">
                Scan the WhatsApp Business QR code for China business and tax advisory support.
              </p>
            </div>
            <p>Other channels: {contactChannels.replace("WhatsApp, ", "")}</p>
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
        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-4 grid gap-2">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
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
