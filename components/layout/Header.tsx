import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { siteContent } from "@/content/site";

export function Header() {
  const { nav, hero, name } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={`${name}, back to top`}
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-teal-600 after:transition-transform after:duration-200 hover:text-teal-700 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="h-10 px-5 text-sm">
            <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
          </Button>
        </div>

        <MobileNav nav={nav} cta={hero.primaryCta} />
      </Container>
    </header>
  );
}
