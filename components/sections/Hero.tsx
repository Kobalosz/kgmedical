import Image from "next/image";
import { ChevronDown, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { siteContent } from "@/content/site";

export function Hero() {
  const { tagline, hero } = siteContent;

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-white">
      {/*
       * Blurred fleet photo backdrop. Pre-blurred at build time (ImageMagick)
       * instead of CSS blur — far cheaper to paint on low-end phones and the
       * blurred JPEG compresses to a fraction of the sharp original.
       * Photo: Pexels #4620555 (free commercial license, see docs/).
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-backdrop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Wash: keeps AA text contrast and fades into the white About section. */}
        <div className="absolute inset-0 bg-linear-to-b from-teal-50/90 via-white/80 to-white" />
      </div>

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
            <p className="kg-enter inline-flex items-center rounded-full border border-teal-200 bg-teal-100/70 px-3 py-1 text-sm font-medium text-teal-800">
              {tagline}
            </p>

            <h1 className="kg-enter kg-delay-1 mt-6 text-4xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="kg-enter kg-delay-2 mt-6 max-w-xl text-lg text-pretty text-slate-600 sm:text-xl">
              {hero.subhead}
            </p>

            <div className="kg-enter kg-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
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

          {/* Visible on every breakpoint; constrained on small screens. */}
          <HeroIllustration className="kg-enter kg-delay-4 mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </Container>

      {/* Scroll cue into the page (desktop; mobile scrolls naturally). */}
      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-teal-700/70 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:block"
      >
        <ChevronDown className="size-6 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
