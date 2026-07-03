import { cn } from "@/lib/utils";

/**
 * Brand logo: the mark (inline SVG, teal→emerald gradient) plus the wordmark
 * as real HTML text in Inter. Using live text (not an image) keeps the logo
 * crisp at any size and gives it a proper accessible name for free.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 64" className="size-8 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="kgeeLogoMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0D9488" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#kgeeLogoMark)" />
        <rect x="27" y="15" width="10" height="34" rx="2.5" fill="#fff" />
        <rect x="15" y="27" width="34" height="10" rx="2.5" fill="#fff" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-teal-700">KGee</span>
        <span className="text-slate-800">MediWorld</span>
      </span>
    </span>
  );
}
