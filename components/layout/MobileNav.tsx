"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CtaLink, NavLink } from "@/content/site";

/**
 * Client island: the only interactive piece of the header. Keeping this
 * separate means the rest of the header ships zero JavaScript.
 */
export function MobileNav({ nav, cta }: { nav: NavLink[]; cta: CtaLink }) {
  const [open, setOpen] = useState(false);

  // Close the menu when the user presses Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="size-11"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-border bg-background shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-muted hover:text-teal-700"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-2 h-11 text-base">
              <a href={cta.href} onClick={() => setOpen(false)}>
                {cta.label}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
