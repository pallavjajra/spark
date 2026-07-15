import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { impactStats } from "@/lib/data/stats";

export function ImpactStats() {
  return (
    <Section tone="mist">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-blurple-500/10 blur-[120px]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="By the numbers"
          title="A track record you can build on"
          description="Seven years, five regions, and a delivery model tuned for outcomes — on time and on budget."
        />

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {impactStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="text-gradient font-display text-5xl font-bold tracking-tight sm:text-6xl"
              />
              <p className="mt-3 text-sm text-slate">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
