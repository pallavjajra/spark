import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies — how Spark Business Technology turns ambitious briefs into measurable business outcomes across retail, logistics, and fintech.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Work that moved the <span className="text-gradient">needle</span>
          </>
        }
        subtitle="A selection of projects where design, engineering, and strategy came together to deliver real, measurable impact."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08} className="h-full">
                <CaseStudyCard study={study} variant="light" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your project next"
        title={
          <>
            Let&apos;s write your <span className="text-gradient">success story</span>
          </>
        }
      />
    </>
  );
}
