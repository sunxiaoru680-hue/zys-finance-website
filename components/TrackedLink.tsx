"use client";

import Link from "next/link";
import { trackContact, trackConsultationRequest } from "@/components/analytics";

type TrackedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  event?: "contact" | "consultation";
  source: string;
};

export function TrackedLink({
  href,
  children,
  className,
  event = "consultation",
  source
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (event === "contact") {
          trackContact(source);
          return;
        }

        trackConsultationRequest(source);
      }}
    >
      {children}
    </Link>
  );
}
