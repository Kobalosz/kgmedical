import {
  Truck,
  CalendarClock,
  Siren,
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
  Headset,
  Building2,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/content/site";

/**
 * Maps the string icon names stored in content/site.ts to real lucide icons.
 * Typed as Record<IconName, ...> so adding a new IconName without a matching
 * icon here is a compile error.
 */
export const iconMap: Record<IconName, LucideIcon> = {
  Truck,
  CalendarClock,
  Siren,
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
  Headset,
  Building2,
};
