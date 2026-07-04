import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { siteContent } from "@/content/site";

export function Hero() {
  const { tagline, hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-linear-to-b from-teal-50 via-white to-white"
    >
      {/* Decorative, non-interactive background glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-96 rounded-full bg-teal-200/40 blur-3xl"
      />

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-teal-200 bg-teal-100/70 px-3 py-1 text-sm font-medium text-teal-800">
              {tagline}
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-pretty text-slate-600 sm:text-xl">
              {hero.subhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href={hero.primaryCta.href}>
                  <Phone aria-hidden="true" />
                  {hero.primaryCta.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <a href={hero.secondaryCta.href}>
                  <Mail aria-hidden="true" />
                  {hero.secondaryCta.label}
                </a>
              </Button>
            </div>
          </div>

          <HeroIllustration className="hidden w-full lg:block" />
        </div>
      </Container>
    </section>
  );
}
