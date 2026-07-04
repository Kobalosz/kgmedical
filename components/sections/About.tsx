import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteContent } from "@/content/site";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-100 bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="kg-reveal grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading title={about.heading} />
            <p className="mt-4 text-xl font-medium text-pretty text-slate-800">
              {about.lead}
            </p>
          </div>
          <div className="space-y-5">
            {about.body.map((paragraph, i) => (
              <p key={i} className="text-lg text-pretty text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="kg-reveal mt-14 border-t border-slate-100 pt-10">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Our delivery fleet
          </p>
          <div className="mt-6 flex items-end gap-4 sm:gap-8">
            <Image
              src="/graphics/kgeemediworld-fleet-truck.png"
              alt="KGeeMediWorld box truck"
              width={1120}
              height={480}
              sizes="(min-width: 640px) 420px, 42vw"
              className="h-auto w-[42%] max-w-105"
            />
            <Image
              src="/graphics/kgeemediworld-fleet-van.png"
              alt="KGeeMediWorld delivery van"
              width={920}
              height={440}
              sizes="(min-width: 640px) 330px, 33vw"
              className="h-auto w-[33%] max-w-82.5"
            />
            <Image
              src="/graphics/kgeemediworld-fleet-car.png"
              alt="KGeeMediWorld courier car"
              width={760}
              height={360}
              sizes="(min-width: 640px) 260px, 25vw"
              className="h-auto w-[25%] max-w-65"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
