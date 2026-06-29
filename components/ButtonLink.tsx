import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-evergreen text-white hover:bg-ink border-evergreen shadow-sm",
    secondary:
      "bg-transparent text-ink hover:bg-white border-line",
    light:
      "bg-white text-ink hover:bg-paper border-white"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
