import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { iconMap } from "@/components/sections/icon-map";
import { siteContent } from "@/content/site";

export function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            title={services.heading}
            description={services.intro}
            className="max-w-2xl"
          />
          <Image
            src="/graphics/kgeemediworld-shipping-boxes.png"
            alt="Branded KGeeMediWorld shipping cartons"
            width={840}
            height={520}
            sizes="(min-width: 768px) 288px, 55vw"
            className="h-auto w-44 shrink-0 sm:w-56 md:w-72"
          />
        </div>
        <div className="kg-reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
