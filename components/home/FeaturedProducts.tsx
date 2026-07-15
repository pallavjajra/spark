import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  const items = featuredProducts().slice(0, 6);

  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Product ecosystem"
            title={
              <>
                Platforms ready to <span className="text-gradient">deploy</span>
              </>
            }
            description="Enterprise-grade, white-label products — each built on the same secure backbone and ready to launch under your brand."
          />
          <Button href="/products" variant="outlineDark" withArrow className="shrink-0">
            All products
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
