import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { siteContent } from "@/content/site";

export function Footer() {
  const { nav, footer, contact, name } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-slate-600">{footer.blurb}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-slate-900">Explore</h2>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-teal-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <h2 className="text-sm font-semibold text-slate-900">Contact</h2>
            <a href={contact.phoneHref} className="hover:text-teal-700">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-teal-700">
              {contact.email}
            </a>
            <address className="not-italic">{contact.addressLines.join(", ")}</address>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-slate-500">
          © {year} {name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
