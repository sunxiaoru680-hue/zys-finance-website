import { facebookUrl, linkedInUrl } from "@/components/seo";

type SocialIconsProps = {
  className?: string;
  tone?: "dark" | "light";
  showLabel?: boolean;
};

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M14.2 8.1V6.6c0-.7.5-.9.9-.9h2.2V2.1L14.2 2c-3.4 0-4.1 2.5-4.1 4.1v2H7.4v3.8h2.7V22h4.1V11.9h3.1l.4-3.8h-3.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M5.2 8.9H2V22h3.2V8.9ZM3.6 2C2.6 2 1.8 2.8 1.8 3.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S4.6 2 3.6 2Zm7.3 6.9H7.8V22h3.2v-6.5c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V22h3.2v-7.2c0-3.5-.8-6.2-4.8-6.2-1.9 0-3.2 1-3.7 2h-.1V8.9Z" />
    </svg>
  );
}

export function SocialIcons({ className = "", tone = "dark", showLabel = false }: SocialIconsProps) {
  const baseClass =
    tone === "light"
      ? "border-white/20 text-white/78 hover:border-gold hover:text-white"
      : "border-line text-graphite hover:border-gold hover:text-ink";

  const links = [
    { href: facebookUrl, label: "Facebook", icon: <FacebookIcon /> },
    { href: linkedInUrl, label: "LinkedIn", icon: <LinkedInIcon /> }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ZYS Advisory on ${link.label}`}
          className={`focus-ring inline-flex min-h-9 items-center justify-center gap-2 rounded-sm border px-2.5 text-sm font-semibold transition ${baseClass}`}
        >
          {link.icon}
          {showLabel ? <span>{link.label}</span> : null}
        </a>
      ))}
    </div>
  );
}
