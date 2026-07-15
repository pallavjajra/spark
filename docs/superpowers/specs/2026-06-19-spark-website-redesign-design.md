# Spark Business Technology — Website Redesign Design Spec

Date: 2026-06-19
Status: Approved → Revised to Stripe-inspired direction

## Revision (2026-06-19) — Stripe-inspired redesign

Per client feedback, the visual language was shifted from the dark-dominant
"Quiet Power" direction to a **light-dominant, Stripe-inspired** aesthetic
(reference: stripe.com), competing with Stripe / Linear / Vercel / Notion:

- **Light-dominant** surfaces (white + `#f6f9fc` cloud); dark navy `#0a2540`
  text; deep navy footer as the single dark anchor.
- **Blurple `#635bff`** brand primary; signature **flowing multi-hue gradient**
  (blurple → sky → mint → coral) used in hero, CTA, and page heroes.
- **Angled section edges** (diagonal clip-paths) à la Stripe.
- **Soft layered shadows** and a floating **product/dashboard + code showcase**
  in the hero; alternating **feature rows** and a **Why Spark** section added.
- Architecture, routing, data, content, and SEO from the original build retained.

## 1. Overview & goals

Complete redesign of sparkbusinesstechnology.com.au, repositioning Spark as a
**premium technology partner** for startups, SMEs, and enterprises — comparable in
polish to Accenture, Deloitte Digital, Thoughtworks, Netguru, BairesDev, ELEKS.

Goals:
- Premium, enterprise-SaaS aesthetic; conversion-focused.
- Preserve core offerings & brand identity; dramatically improve UX, hierarchy, copy.
- Production-ready, responsive, accessible, SEO-ready.

## 2. Company facts (scraped, reconciled)

- Software development & digital services company. HQ Australia, offices in India. Founded 2018.
- Global delivery: Australia, Middle East, Asia, Europe, US (5 regions).
- Services: UI/UX, Mobile App Development, Digital Marketing, Digital Transformation,
  Support & Maintenance, Graphic Design.
- Tech: TypeScript, Angular, Node.js, React, Java, Shopify.
- Tagline: "Ignite Innovation, Empower Growth."
- Reconciled proof set: **since 2018 · 150+ clients · 500+ projects · 5 regions**
  (drop inconsistent "10+ years"; correct email domain typo `bussiness`).

## 3. Art direction — "Quiet Power"

Editorial whitespace + oversized type (Accenture/Deloitte), on a disciplined grid
(Thoughtworks/BairesDev), with gradient/glow used **surgically** as accent (Netguru/ELEKS).
Dark↔light section rhythm: dark hero → light services → dark impact band → light case
studies → dark CTA finale.

## 4. Color system

| Token | Hex | Role |
|---|---|---|
| Navy 950 | `#060914` | Darkest sections, hero base |
| Navy 900 | `#0A0E27` | Primary dark surface |
| Navy 800 | `#121735` | Dark cards |
| Electric Blue 500 | `#2D6BFF` | Primary brand / CTAs / links |
| Electric Blue 400 | `#4F8BFF` | Hover, highlights |
| Cyan 400 | `#22D3EE` | Gradient terminator, accent |
| Violet 500 | `#7C5CFF` | Gradient mid, secondary accent |
| White | `#FFFFFF` | Light surface base |
| Soft Gray 50 | `#F6F8FC` | Light section background |
| Soft Gray 200 | `#E4E9F2` | Borders, dividers |
| Slate 500 | `#64748B` | Muted body text |
| Ink 900 | `#0B1220` | Body text on light |

Signature gradient: `linear-gradient(120deg, #2D6BFF, #7C5CFF, #22D3EE)` — headline text
clip, button fills, animated hero mesh.

## 5. Typography (next/font, self-hosted)

- Display/headings → **Space Grotesk**
- Body/UI → **Inter**
- Technical labels/eyebrows/stats → **JetBrains Mono**

## 6. Tech stack

Next.js 15 (App Router) + TypeScript · Tailwind CSS v4 (CSS-first `@theme`) ·
Framer Motion · next/font · lucide-react. Responsive, accessible (semantic, keyboard,
prefers-reduced-motion), per-page SEO metadata, sitemap/robots, clean `npm run build`.

## 7. Sitemap

```
/                  Home (showcase)
/services          Services overview
/services/[slug]   6 service detail pages (shared template)
/work              Case studies index
/work/[slug]       3 illustrative case studies (shared template)
/about             About
/contact           Contact (form + offices)
```
Shared sticky Header (Services mega-dropdown) + rich Footer.

## 8. Home sections

1. Hero — gradient-mesh navy, oversized gradient-clip headline, dual CTA, floating motifs
2. Trust bar — animated logo marquee
3. Services — interactive 6-card grid, hover gradient reveal
4. Impact stats — dark band, count-up
5. Process — 4-step, mono numbering
6. Featured case studies — 2–3 cards
7. Tech stack — elegant strip
8. Testimonials — carousel (placeholder)
9. CTA finale — full-bleed gradient
10. Footer

## 9. Components

UI primitives: Button, Container, Section, Eyebrow, GradientText, Reveal (scroll),
CountUp, Marquee, Badge, Card, IconBadge. Layout: Header (mega menu, scroll state,
mobile drawer), Footer. Data-driven via `lib/` data files (nav, services, caseStudies,
testimonials, process, stats, techStack, clients).

## 10. Content plan (illustrative placeholders, clearly swappable)

- 3 realistic case studies: retail Shopify replatform, logistics mobile app, fintech
  digital transformation — challenge/solution/results + metrics.
- Placeholder testimonials + client logos (obvious, easy to replace).
- Contact: placeholder AU HQ + India office + `hello@sparkbusinesstechnology.com.au`.

## 11. Accessibility & motion

Semantic landmarks, focus-visible rings, alt text, color contrast AA, keyboard-navigable
menus, `prefers-reduced-motion` disables non-essential animation.

## 12. Build plan (phases)

1. Scaffold (Next.js, TS, Tailwind v4, deps, globals/tokens, layout/fonts, metadata)
2. Design system + primitives + Header/Footer
3. Home page + section components
4. Services overview + [slug] template + data
5. Work index + [slug] template + data
6. About page
7. Contact page + form
8. SEO (sitemap/robots), responsive + reduced-motion polish, `npm run build` verify
