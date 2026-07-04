import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

/**
 * Mobile-only sticky quick-action bar: keeps the two conversion actions
 * (call / email) one thumb-tap away while scrolling. Display-only links —
 * still no forms. Hidden at md+ where the header CTA takes over.
 */
export function MobileCtaBar() {
  const { contact } = siteContent;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <Button asChild size="lg" className="h-12 text-base">
          <a href={contact.phoneHref}>
            <Phone aria-hidden="true" />
            Call us
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 text-base">
          <a href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" />
            Email us
          </a>
        </Button>
      </div>
    </div>
  );
}
