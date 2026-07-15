import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTASection } from "@/components/sections/CTASection";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Spark product ecosystem — enterprise-grade, white-label platforms built on one secure backbone. Filter by category and industry to find your fit.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalog"
        title={
          <>
            Explore the <span className="text-gradient">product ecosystem</span>
          </>
        }
        subtitle="Every product runs on the same secure, enterprise-grade backbone — one operating model, one set of controls, one source of truth. Filter by category or industry to find the right fit for your operation."
      />

      <Section tone="light">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </Section>

      <CTASection
        eyebrow="Let's talk"
        title={
          <>
            Find the right platform for your{" "}
            <span className="text-gradient">operation</span>
          </>
        }
        subtitle="Tell us how you run today and we'll map the products that fit — with a walkthrough tailored to your industry and scale."
      />
    </>
  );
}
