import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering, mobile, UI/UX, digital transformation, marketing, support, and design — the full lifecycle of building and growing digital products.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient">build and grow</span>
          </>
        }
        subtitle="One senior partner across the entire product lifecycle — from the first prototype to enterprise scale and beyond."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSection />

      <CTASection
        eyebrow="Start a project"
        title={
          <>
            Have something in <span className="text-gradient">mind?</span>
          </>
        }
        subtitle="Whatever stage you're at, we'll help you choose the right service and the right next step."
      />
    </>
  );
}
