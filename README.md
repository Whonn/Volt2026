# VOLT Athletic Club

A dark, high-conversion marketing site for a strength & conditioning gym,
built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer
Motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design concept

The gym is named **VOLT** and the whole site leans into an "energy output"
metaphor — voltage, charge, current — instead of generic gym imagery:

- **Signature element** — `components/PulseLine.tsx` is an animated
  EKG/voltage waveform (an SVG path that draws itself on scroll) used in the
  hero and as section dividers. It's the one visual thread that ties every
  section together.
- **Palette** — near-black (`#0A0A0A`) with an electric lime accent
  (`#D4FF3D`) and a muted orange-red (`#FF4620`) held in reserve, on a warm
  off-white text color (`#F4F4EF`) rather than pure white.
- **Type** — Anton (condensed, ultra-bold) for display headlines, Inter for
  body copy, and JetBrains Mono for "readout" labels and stats — reinforcing
  the idea of a system displaying live output.
- **Motion** — a staggered word-by-word hero reveal, scroll-triggered card
  reveals, animated stat counters, a marquee ticker, and hover glow states.
  All motion respects `prefers-reduced-motion`.

## Structure

```
app/
  layout.tsx      – fonts + metadata
  page.tsx         – assembles all sections
  globals.css      – design tokens, signature CSS classes
components/
  Nav.tsx
  Hero.tsx
  PulseLine.tsx    – signature animated waveform
  AnimatedCounter.tsx
  StatsBar.tsx
  Programs.tsx
  Transformations.tsx  – results/testimonials + marquee
  Coaches.tsx
  Pricing.tsx
  CTASection.tsx
  Footer.tsx
```

## Customizing

- Swap the gym name in `components/Nav.tsx`, `components/Hero.tsx`, and
  `components/Footer.tsx` (search for `VOLT`).
- Update copy arrays at the top of `Programs.tsx`, `Transformations.tsx`,
  `Coaches.tsx`, and `Pricing.tsx` — all content is data-driven.
- Colors and fonts live in `tailwind.config.ts`.
# Volt2026
