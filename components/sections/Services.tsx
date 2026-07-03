import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { iconMap } from "@/components/sections/icon-map";
import { siteContent } from "@/content/site";

export function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={services.heading}
          description={services.intro}
          className="max-w-2xl"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
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
