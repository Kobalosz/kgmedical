# Handoff: KGeeMediWorld hero illustration + brand graphics

## Overview

Branded flat-vector graphics for the KGeeMediWorld marketing site (repo: `Kobalosz/kgmedical`, Next.js 15 App Router + Tailwind v4). The set contains an animated **hero illustration** (delivery van driving a dashed route toward a pharmacy, with floating medical supplies), a **fleet lineup** (box truck, delivery van, car — all with the KGeeMediWorld livery), and **branded shipping boxes**. The primary task is to place the hero illustration in `components/sections/Hero.tsx` and animate it; the other assets are secondary decoration for other sections.

## About the Design Files

The files in `assets/` are **design references created in HTML/SVG** — they show intended look and behavior, not production code to copy verbatim. Recreate them inside the existing codebase using its established patterns (React server components, Tailwind utility classes, `content/site.ts` for copy). The SVGs are clean, hand-authored vector files and **can** be used directly as source material (see Implementation below).

## Fidelity

**High-fidelity.** Colors, geometry, typography, and animation timings are final. Match them exactly. All colors are stock Tailwind teal/emerald/slate values already consistent with `app/globals.css` (`--primary` = teal-700).

## Assets (in `assets/`)

Each asset ships as standalone SVG (source of truth) + 2× transparent PNG (fallback / quick use):

| Asset                             | SVG viewBox | Contents                                                               |
| --------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `kgeemediworld-hero-illustration` | 960×420     | Full hero scene: route, van, pharmacy, floating supplies, location pin |
| `kgeemediworld-fleet-truck`       | 560×240     | Box truck with logo livery                                             |
| `kgeemediworld-fleet-van`         | 460×220     | Delivery van with logo livery                                          |
| `kgeemediworld-fleet-car`         | 380×180     | Courier car with logo livery                                           |
| `kgeemediworld-shipping-boxes`    | 420×260     | Two branded cartons, teal tape band, cross stamp                       |

⚠️ The SVGs contain `<text>` elements set in **Inter** (weights 600/700/800) and inherit the page font. The site already loads Inter via `next/font` — as long as the SVG is **inlined** (not loaded via `<img>`), the wordmark renders correctly. If any asset must be used via `<img>`/`next/image`, use the PNG instead (fonts don't load inside SVG-as-image).

## Implementation

### 1. Copy assets

Put the SVGs + PNGs in `public/graphics/`.

### 2. Hero illustration → inline React component (required for animation)

Create `components/sections/HeroIllustration.tsx`. Convert `kgeemediworld-hero-illustration.svg` to JSX (kebab-case attrs → camelCase: `stroke-width` → `strokeWidth`, `stroke-dasharray` → `strokeDasharray`, etc.). It's a server component — no hooks needed; animation is pure CSS. Add `aria-hidden="true"` and `role="presentation"` (it's decorative; the headline carries the message).

Structure of the SVG, in paint order (already grouped this way in the file):

1. Background rounded rect `fill #F0FDFA rx 24` — **optional to keep**; the hero section already has a teal-50→white gradient, so you may delete this rect and the two soft blob circles for a transparent composition that sits directly on the section background. Keep everything else.
2. Ground line (`#CBD5E1`)
3. Dashed route path (`stroke #0D9488, width 5, dasharray 16 14`) → animate **dash flow**
4. Three floating supplies groups (first-aid kit, medicine bottle, capsule + tablet) → animate **float**
5. Location pin group → animate **float** (slower)
6. Pharmacy building (static)
7. Van group → animate **bob**

### 3. Animations

Add keyframes to `app/globals.css` (Tailwind v4 — plain CSS is fine):

```css
@keyframes kg-dash {
  to {
    stroke-dashoffset: -60;
  }
}
@keyframes kg-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes kg-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
```

Apply (className or style) to the corresponding SVG nodes:

| Target                                                            | Animation                               |
| ----------------------------------------------------------------- | --------------------------------------- |
| Route `<path>`                                                    | `kg-dash 1.6s linear infinite`          |
| Supplies group 1 (first-aid kit, `translate(118,60)`)             | `kg-float 4s ease-in-out infinite`      |
| Supplies group 2 (medicine bottle, `translate(216,118)`)          | `kg-float 4s ease-in-out 0.7s infinite` |
| Supplies group 3 (capsule, `translate(64,152)`)                   | `kg-float 4s ease-in-out 1.4s infinite` |
| Location pin group                                                | `kg-float 3.2s ease-in-out infinite`    |
| Van group (outer `<g>` wrapping `translate(150,143) scale(0.86)`) | `kg-bob 2.2s ease-in-out infinite`      |

Notes:

- Animate the **outer** wrapper `<g>` of the van/supplies (a group with no transform of its own), not the inner translated group — CSS `transform` would overwrite the SVG `transform` attribute. Wrap each animated group in a plain `<g>` if converting flattens them.
- Respect reduced motion (the site already does this for scroll behavior):

```css
@media (prefers-reduced-motion: reduce) {
  .kg-animate * {
    animation: none !important;
  }
}
```

(or gate each animation class individually).

### 4. Hero layout change (`components/sections/Hero.tsx`)

Current hero is a single `max-w-3xl` text column. Change the Container content to a two-column grid:

- Wrapper: `grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center`
- Left column: existing badge / h1 / subhead / CTA buttons — **unchanged**
- Right column: `<HeroIllustration className="hidden w-full lg:block" />` (hide below `lg` so mobile stays text-first; optionally show a smaller version under the CTAs on mobile)
- Keep the existing decorative blur divs and section gradient untouched.

### 5. Secondary assets (optional, ask the client before adding)

- **Fleet lineup**: a strip under About or Why-Us — three inline SVGs bottom-aligned (`flex items-end gap-6`), truck ≈ 420px, van ≈ 330px, car ≈ 260px wide.
- **Shipping boxes**: beside the Services heading or in the "Bulk supply delivery" card region, ≈ 340px wide.
- These can be inlined the same way, or used as PNG via `next/image` if text fidelity via `<img>` is a concern (PNGs already have Inter baked in).

## Design Tokens

- Teal: `#F0FDFA` (bg), `#CCFBF1`, `#99F6E4` (glass/windows), `#14B8A6`, `#0D9488`, `#0F766E` (wordmark "KGee"), `#115E59`, `#134E4A`
- Emerald: `#D1FAE5`, `#A7F3D0`, `#10B981`
- Slate: `#F8FAFC`, `#F1F5F9`, `#E2E8F0`, `#CBD5E1` (outlines), `#94A3B8`, `#64748B` (tagline text), `#475569`, `#1E293B` (wordmark "MediWorld", tires), `#0F172A`
- Brand gradient (logo mark, stripes, pharmacy sign): linear 0,0→1,1 `#0D9488 → #10B981`
- Typography inside SVGs: Inter — wordmark 800, tagline 600 with wide letter-spacing; exact sizes are in the SVG files
- Radius: vehicles use rounded bodies (rx 10–14), logo mark rx ≈ 25% of its size

## Interactions & Behavior

- Animations are ambient, infinite, CSS-only — no JS, no intersection observers needed
- No hover/click behavior on the illustration
- Container hides on `<lg` viewports (or scales down below the text)
- Print/SSR safe: everything is static SVG markup

## Files

- `assets/*.svg` — vector sources (inline these)
- `assets/*.png` — 2× transparent raster fallbacks with fonts baked in
- Design exploration canvas (not needed for implementation): `Brand Graphics.dc.html` in the design project; option **1a** is the approved direction
