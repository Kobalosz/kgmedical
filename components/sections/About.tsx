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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
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
      </Container>
    </section>
  );
}
