import Link from "next/link";

type Breadcrumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <ol className="container-shell flex flex-wrap gap-2 py-3 text-sm text-graphite">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className="font-semibold text-ink">{item.name}</span>
            ) : (
              <Link className="hover:text-evergreen" href={item.href}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
