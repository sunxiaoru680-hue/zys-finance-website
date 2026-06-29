import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/components/siteData";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.title}
            href={service.href}
            className="focus-ring group rounded-md border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="grid h-12 w-12 place-items-center rounded-md bg-paper text-evergreen">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-graphite">
              {service.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-evergreen">
              Learn more
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
