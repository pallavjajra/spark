import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ProductIcon } from "./ProductIcon";
import { ProductSectionRenderer } from "./ProductSectionRenderer";
import type { Product } from "@/lib/data/types";
import { asset } from "@/lib/basePath";

export function ProductDetailTemplate({ product }: { product: Product }) {
  const hero = product.hero;
  const sections = product.sections ?? [];
  const endsWithCta =
    sections.length > 0 && sections[sections.length - 1].type === "cta";

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="clip-angle-b absolute inset-0 -z-10 bg-flow" aria-hidden>
          <div className="absolute -left-20 top-10 h-80 w-80 animate-drift rounded-full bg-blurple-500/25 blur-[120px]" />
          <div className="absolute right-0 top-0 h-80 w-80 animate-drift-2 rounded-full bg-sky-400/25 blur-[120px]" />
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>

        <Container className="relative pb-20 pt-32 md:pb-28 md:pt-40">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-blurple-600 transition-colors hover:text-blurple-500"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All products
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blurple-500 to-sky-500 text-white shadow-glow">
                  <ProductIcon name={product.icon} className="h-6 w-6" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-blurple-600">
                  {product.category}
                </span>
              </div>

              <h1 className="mt-6 text-balance font-display text-[2.25rem] font-semibold leading-[1.05] text-ink sm:text-5xl">
                {hero?.headline ?? product.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
                {hero?.subheadline ?? product.tagline}
              </p>

              {hero?.highlights && hero.highlights.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {hero.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink shadow-soft backdrop-blur"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href={hero?.primaryCta.href ?? "/contact"}
                  variant="gradient"
                  size="lg"
                  withArrow
                >
                  {hero?.primaryCta.label ?? "Book a demo"}
                </Button>
                {hero?.secondaryCta && (
                  <Button href={hero.secondaryCta.href} variant="outlineDark" size="lg">
                    {hero.secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {product.metrics && product.metrics.length > 0 && (
              <div className="">
                {product?.productImg ? (<img src={product?.productImg ? asset(product?.productImg) : undefined} alt={product?.name} />) : (
                  <div className="ring-gradient relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur">
                    <div className="grid grid-cols-2 gap-3">
                      {product.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-line bg-white p-5">
                          <p className="text-gradient font-display text-3xl font-bold tracking-tight">
                            {m.value}
                          </p>
                          <p className="mt-1 text-sm leading-snug text-slate">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Key benefits */}
      {product.keyBenefits.length > 0 && (
        <Section tone="mist">
          <Container>
            <SectionHeading
              align="center"
              eyebrow="Key benefits"
              title={
                <>
                  Why teams choose{" "}
                  <span className="text-gradient">{product.name}</span>
                </>
              }
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {product.keyBenefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-line bg-white p-6 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blurple-500/10 text-blurple-600">
                    <ProductIcon name={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Data-driven sections */}
      {sections.map((s, i) => (
        <ProductSectionRenderer key={i} section={s} index={i} product={product} />
      ))}

      {/* Closing CTA (only if the product didn't end with its own) */}
      {!endsWithCta && (
        <CTASection
          eyebrow="Get started"
          title={
            <>
              See {product.name} in <span className="text-gradient">action</span>
            </>
          }
          subtitle="Book a tailored walkthrough and we'll map it to your operation, industry, and scale."
        />
      )}
    </>
  );
}
