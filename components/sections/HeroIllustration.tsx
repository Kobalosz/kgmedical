import { cn } from "@/lib/utils";

/**
 * Decorative hero scene: a KGeeMediWorld van driving a dashed route toward a
 * pharmacy, with floating medical supplies. Inlined (not via <img>) so the
 * wordmark inherits the page's Inter font and the CSS-only ambient animations
 * run. Purely decorative — the headline carries the message, so it's hidden
 * from assistive tech. No font-family attribute here on purpose: it lets the
 * <text> inherit the next/font Inter instead of a literal "Inter" that misses.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 420"
      role="presentation"
      aria-hidden="true"
      className={cn("kg-animate", className)}
    >
      <defs>
        <linearGradient id="kgHeroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0D9488" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {/* ground line */}
      <line x1="40" y1="310" x2="920" y2="310" stroke="#CBD5E1" strokeWidth="2" />

      {/* dashed delivery route */}
      <path
        className="kg-route"
        d="M-10,332 C180,332 230,206 420,206 C560,206 600,300 782,300"
        fill="none"
        stroke="#0D9488"
        strokeWidth="5"
        strokeDasharray="16 14"
        strokeLinecap="round"
      />

      {/* floating supply 1 — first-aid kit */}
      <g className="kg-supply-1">
        <g transform="translate(118,60)">
          <path
            d="M22,8 L22,4 Q22,0 26,0 L34,0 Q38,0 38,4 L38,8"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="2" y="8" width="56" height="38" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="26" y="15" width="8" height="24" rx="2" fill="#0D9488" />
          <rect x="18" y="23" width="24" height="8" rx="2" fill="#0D9488" />
        </g>
      </g>

      {/* floating supply 2 — medicine bottle */}
      <g className="kg-supply-2">
        <g transform="translate(216,118)">
          <rect x="7" y="0" width="26" height="12" rx="3" fill="#0F766E" />
          <rect x="2" y="12" width="36" height="46" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="4" y="26" width="32" height="18" fill="#0D9488" />
          <rect x="17.5" y="29" width="5" height="12" rx="1" fill="#FFFFFF" />
          <rect x="14" y="32.5" width="12" height="5" rx="1" fill="#FFFFFF" />
        </g>
      </g>

      {/* floating supply 3 — capsule + tablet */}
      <g className="kg-supply-3">
        <g transform="translate(64,152)">
          <g transform="rotate(-18 23 10)">
            <rect x="0" y="0" width="46" height="20" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M23,0 L23,20 L10,20 A10,10 0 0 1 10,0 Z" fill="#10B981" />
          </g>
          <circle cx="56" cy="34" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="50" y1="34" x2="62" y2="34" stroke="#CBD5E1" strokeWidth="2" />
        </g>
      </g>

      {/* location pin */}
      <g className="kg-pin">
        <path d="M845,134 L831,110 L859,110 Z" fill="#0D9488" />
        <circle cx="845" cy="94" r="22" fill="url(#kgHeroGrad)" />
        <rect x="841" y="84" width="8" height="20" rx="2" fill="#FFFFFF" />
        <rect x="835" y="90" width="20" height="8" rx="2" fill="#FFFFFF" />
      </g>

      {/* pharmacy building (static) */}
      <g>
        <rect x="770" y="170" width="150" height="140" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="770" y="170" width="150" height="32" fill="url(#kgHeroGrad)" />
        <text x="845" y="191" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="2" fill="#FFFFFF">
          PHARMACY
        </text>
        <rect x="786" y="216" width="28" height="24" rx="3" fill="#99F6E4" />
        <rect x="826" y="216" width="28" height="24" rx="3" fill="#99F6E4" />
        <rect x="866" y="216" width="28" height="24" rx="3" fill="#99F6E4" />
        <rect x="786" y="252" width="28" height="24" rx="3" fill="#99F6E4" />
        <rect x="866" y="252" width="28" height="24" rx="3" fill="#99F6E4" />
        <rect x="826" y="252" width="28" height="58" rx="3" fill="#0F766E" />
        <rect x="847" y="278" width="4" height="8" rx="2" fill="#FFFFFF" />
      </g>

      {/* van (bobbing) */}
      <g className="kg-van">
        <g transform="translate(150,143) scale(0.86)">
          <ellipse cx="180" cy="196" rx="172" ry="8" fill="#CBD5E1" opacity="0.6" />
          <path
            d="M18,158 L18,84 C18,71 28,62 40,62 L246,62 C270,62 291,73 305,93 L330,129 C336,138 339,147 339,156 L339,162 C339,169 333,174 326,174 L31,174 C24,174 18,169 18,162 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="2"
          />
          <path d="M256,76 L272,76 C287,76 299,84 307,97 L321,118 L256,118 Z" fill="#99F6E4" />
          <line x1="236" y1="130" x2="236" y2="166" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="26" y="140" width="288" height="11" rx="5.5" fill="url(#kgHeroGrad)" />
          <rect x="30" y="80" width="40" height="40" rx="10" fill="url(#kgHeroGrad)" />
          <rect x="46" y="88" width="8" height="24" rx="2" fill="#FFFFFF" />
          <rect x="38" y="96" width="24" height="8" rx="2" fill="#FFFFFF" />
          <text x="80" y="102" fontSize="20" fontWeight="800" fill="#0F766E">
            KGee<tspan fill="#1E293B">MediWorld</tspan>
          </text>
          <text x="81" y="120" fontSize="7" fontWeight="600" letterSpacing="1.5" fill="#64748B">
            MEDICAL SUPPLY DELIVERY
          </text>
          <circle cx="84" cy="170" r="24" fill="#1E293B" />
          <circle cx="84" cy="170" r="11" fill="#CBD5E1" />
          <circle cx="84" cy="170" r="4" fill="#64748B" />
          <circle cx="272" cy="170" r="24" fill="#1E293B" />
          <circle cx="272" cy="170" r="11" fill="#CBD5E1" />
          <circle cx="272" cy="170" r="4" fill="#64748B" />
          <rect x="332" y="132" width="8" height="13" rx="3" fill="#CBD5E1" />
        </g>
      </g>
    </svg>
  );
}
