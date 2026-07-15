import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies } from "@/lib/data/caseStudies";

export function FeaturedWork() {
  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Outcomes we&apos;re <span className="text-gradient">proud of</span>
              </>
            }
            description="A look at how we turn ambitious briefs into measurable business results."
          />
          <Button href="/work" variant="outlineDark" withArrow className="shrink-0">
            View all work
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08} className="h-full">
              <CaseStudyCard study={study} variant="light" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
