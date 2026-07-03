import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteContent } from "@/content/site";

export function Contact() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={contact.heading} description={contact.intro} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href={contact.phoneHref}>
                  <Phone />
                  Call {contact.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail />
                  Email us
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <dl className="space-y-6">
              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Phone</dt>
                  <dd>
                    <a
                      href={contact.phoneHref}
                      className="text-slate-600 hover:text-teal-700"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-slate-600 hover:text-teal-700"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Address</dt>
                  <dd>
                    <address className="not-italic text-slate-600">
                      {contact.addressLines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Hours</dt>
                  <dd className="text-slate-600">{contact.hours}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
