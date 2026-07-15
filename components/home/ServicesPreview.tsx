import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  return (
    <Section tone="mist">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Technology services, <span className="text-gradient">end to end</span>
              </>
            }
            description="From first prototype to enterprise scale, we cover the full lifecycle of building, launching, and growing digital products."
          />
          <Button
            href="/services"
            variant="outlineDark"
            withArrow
            className="shrink-0"
          >
            All services
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} className="h-full">
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
