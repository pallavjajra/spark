# Spark Business Technology — Website

A modern, premium marketing website for **Spark Business Technology**, a global
software engineering and digital transformation partner. Built to position Spark
alongside leading agencies, with an enterprise-SaaS aesthetic: large typography,
strong whitespace, surgical gradients, and subtle motion.

> Design direction: **"Quiet Power"** — editorial whitespace + a disciplined grid
> + gradient/glow used as accent, not wallpaper. Dark ↔ light section rhythm.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** (scroll reveals, count-ups, carousel)
- **next/font** — Space Grotesk (display) · Inter (body) · JetBrains Mono (labels)
- **lucide-react** icons · **tailwind-merge** for class composition

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (static-generates every route)
npm run start    # serve the production build
npm run lint     # next lint
```

Requires Node.js 18.18+ (Node 20+ recommended).

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, Header/Footer
  page.tsx              Home
  services/             Services overview + [slug] detail template
  work/                 Case studies index + [slug] detail template
  about/  contact/      About, Contact
  privacy/  terms/      Legal templates
  sitemap.ts robots.ts  SEO
  not-found.tsx         Custom 404
components/
  ui/                   Primitives (Button, Section, Reveal, CountUp, Marquee…)
  layout/               Header (mega-menu + drawer), Footer, Logo
  home/                 Home page sections
  cards/                ServiceCard, CaseStudyCard
  sections/             PageHero, CTASection (reusable)
  forms/                ContactForm
lib/
  site.ts               Global site config (name, contact, social, stats)
  icons.tsx             String → lucide icon map
  data/                 services, caseStudies, testimonials, process, techStack…
docs/                   Design spec
```

## Editing content

- **Company details** (name, email, phone, offices, social, headline stats):
  `lib/site.ts`
- **Services**: `lib/data/services.ts`
- **Case studies**: `lib/data/caseStudies.ts`
- **Testimonials / clients / process / tech stack / stats**: `lib/data/*`
- **Navigation**: `lib/data/nav.ts`

## Design system

- Color + typography tokens live in `app/globals.css` under `@theme`
  (navy / electric blue / iris / aqua + neutrals), plus custom utilities
  (`.text-gradient`, `.bg-grid-dark`, `.glass-dark`, `.ring-gradient`, marquee
  and glow keyframes).
- All motion respects `prefers-reduced-motion`.

## ⚠️ Placeholder content to replace before launch

The following are **illustrative** and clearly marked in code — swap them for real,
approved content:

- Case studies & their metrics (`lib/data/caseStudies.ts`)
- Testimonials & client logos (`lib/data/testimonials.ts`, `lib/data/clients.ts`)
- Leadership team (`app/about/page.tsx`)
- Phone numbers & office addresses (`lib/site.ts`)
- Privacy / Terms copy (`app/privacy`, `app/terms`) — review with legal counsel
- The contact form is a front-end demo (no backend submission yet)

## Deployment

Optimised for **Vercel** (zero-config). Any Node host works via `npm run build`
then `npm run start`. Update `site.url` in `lib/site.ts` to your production domain
so metadata, sitemap, and robots resolve correctly.
