---
name: spark-website-project
description: "Spark Business Technology marketing site — Next.js, Stripe-style premium redesign"
metadata: 
  node_type: memory
  type: project
  originSessionId: a599934e-20ca-467d-a20c-fbd5e690219b
---

Spark Business Technology marketing website at `/Users/pankajjajra/project/AI/spark`
(Next.js 15 App Router + TypeScript + Tailwind v4 + Framer Motion).

Design rounds:
1. Dark-dominant "Quiet Power" (navy/electric-blue).
2. Stripe-inspired light-dominant layout: flowing multi-hue gradient hero with floating
   product dashboard + code showcase, angled section edges, soft layered shadows,
   alternating feature rows, "Why Spark" section.
3. **Re-themed to the real Spark brand** (sparkbusinesstechnology.com.au): warm pastel
   canvas (lavender→pink→peach→cream `bg-flow`), **spark-orange accent `#f5901e`**,
   near-black ink `#16130f`, near-black primary buttons, orange active nav link. The site is
   now ALL-LIGHT — the homepage AI spotlight (`components/home/AIServices.tsx`) and the footer
   (`components/layout/Footer.tsx` + `NewsletterForm.tsx`) were converted from dark to light
   (AI section uses `bg-flow` pastel with white cards; footer uses `bg-mist` cream + full-color
   logo, i.e. Logo `onDark` removed). The only remaining dark element is the IDE-style
   `CodeShowcase` code mockup (intentional). IMPORTANT: only token VALUES changed in `app/globals.css` — the token
   NAMES are unchanged, so `blurple`/`electric`-* now render ORANGE, `sky`/`aqua` = peach,
   `mintx` = coral, `iris` = rose, `navy`-* = warm charcoal/black. Layout/structure/
   animations were untouched. Real logo at `public/SparkLogo.svg` (a transparent PNG wrapped
   in SVG) rendered by `components/layout/Logo.tsx` via plain `<img>` (fixed width to avoid a
   flexbox collapse); white on dark via `brightness-0 invert` (footer passes `onDark`). Fonts
   kept (Space Grotesk + Inter + JetBrains Mono).

Real assets migrated from the legacy site into `public/assets/{clients,services,work,about}`
(~1.8MB): 6 real client logos (Kivu Noir, AFRAD, MEDI fellows, Tutify, ZmBIZI, Top Stay Homes)
→ TrustBar marquee; 5 service illustrations → ServiceCard header image + service-detail banner;
5 real project photos → the 5 real case studies (Diversion FMS, Aged Care QMS, RealiSupply/SUMS,
gov. data-security framework, legal B2C app) rendered in CaseStudyCard + work-detail banner; a
team collaboration photo → About hero banner. Images use plain `<img>` (eslint-disabled). Spare
saved-but-unused assets: `public/assets/about/{team-1,team-2,about-1,about-2}.webp`.

Architecture/data/routing/SEO are stable. **Illustrative placeholders to replace before
launch**: case study supporting detail (challenge/approach/**metrics**/quotes are illustrative —
titles, summaries, images & industries are REAL), testimonials, legal copy, AI outcome stats (`aiStats` in
`lib/data/aiServices.ts` — 70%/24-7/10×/99% are placeholders), and the contact form has no
backend yet. Client logos & case-study imagery are now REAL. Design spec:
`docs/superpowers/specs/2026-06-19-spark-website-redesign-design.md`.

AI offering (added): two categories in `lib/data/aiServices.ts` — "Artificial Intelligence
Solutions" (9 capabilities) and "AI Automation" (5) — surfaced as a dark navy spotlight
section on the homepage (`components/home/AIServices.tsx`, inserted after ServicesPreview)
and a dedicated `/ai` page (`app/ai/page.tsx`, PageHero + stat row + per-category card grids
via `components/ai/AICapabilityCard.tsx` + CTA). Wired into nav ("AI" → /ai), footer (AI
column), sitemap (priority 0.9), and `site.description`. Hero subhead mentions AI. Contact
form (`components/forms/ContactForm.tsx`) reads `?intent=ai|ai-automation` (client-side, via
window.location to avoid a Suspense boundary) and preselects the matching service; the two AI
categories were added to its service dropdown. New lucide icons added to `lib/icons.tsx`:
brainCircuit, bot, building, scanText, lineChart, cog, headset, wand, network.

Product catalog: 11 white-label products ported from `/Users/pankajjajra/project/AI/Ecommerce`
(landing/content/products) into `lib/data/products/` — data-driven catalog at `/products`
(search + category/industry filters + featured toggle), detail pages at `/products/[slug]`
(hero + metrics + key benefits + typed section blocks: feature-grid, split-feature, stat-band,
comparison, faq, cta), featured on the homepage, and wired into nav, footer, and sitemap.
Product schema in `lib/data/types.ts`; lucide icons resolved via `components/products/ProductIcon.tsx`.
Industry pages were NOT ported (filter derives tags from product data only).

User (pankaj@iwebwiser.com) favours premium, Stripe/Linear/Vercel-class aesthetics and
gives detailed design briefs.
