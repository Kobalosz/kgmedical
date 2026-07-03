import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { iconMap } from "@/components/sections/icon-map";
import { siteContent } from "@/content/site";

export function WhyUs() {
  const { whyUs } = siteContent;

  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={whyUs.heading}
          description={whyUs.intro}
          className="max-w-2xl"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whyUs.items.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={value.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-pretty text-slate-600">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
