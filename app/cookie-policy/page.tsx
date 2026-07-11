import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, companyName, emailAddress } from "@/components/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "How ZYS Advisory may use cookies and similar technologies on its website.",
  keywords: ["ZYS Advisory cookie policy"],
  path: "/cookie-policy"
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cookie Policy", href: "/cookie-policy" }]} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-evergreen">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Cookie Policy</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            This page explains how cookies and similar technologies may be used on the ZYS website.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-5">
          {[
            ["Essential cookies", "Some cookies or local storage may be used to support basic website functionality, language preferences, security, and form usability."],
            ["Analytics and performance", "ZYS may use analytics or tag-management tools to understand website performance and improve content. These tools should not be used to collect unnecessary sensitive business information."],
            ["Third-party links", "The website may link to WhatsApp, meeting tools, email clients, or other third-party services. Their cookie practices are controlled by those providers."],
            ["Managing cookies", "Visitors can manage cookies through browser settings. Disabling some browser features may affect website functionality."],
            ["Contact", `Questions about cookies may be sent to ${companyName} at ${emailAddress}.`]
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
