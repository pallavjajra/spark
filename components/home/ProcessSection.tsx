import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/data/process";
import { iconMap } from "@/lib/icons";

export function ProcessSection() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A proven path from <span className="text-gradient">idea to impact</span>
            </>
          }
          description="No black boxes. A transparent, senior-led process that keeps you in the loop and de-risks every step."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
            aria-hidden
          />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <Reveal key={step.num} delay={i * 0.1} className="relative">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-electric-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-6 block font-mono text-sm text-electric-500">
                    {step.num}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
