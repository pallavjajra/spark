import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techGroups } from "@/lib/data/techStack";

export function TechStackSection() {
  return (
    <Section tone="mist">
      <Container>
        <SectionHeading
          eyebrow="Our toolkit"
          title={
            <>
              Built on technology <span className="text-gradient">you can trust</span>
            </>
          }
          description="We're pragmatic about tools — choosing the right stack for your goals, not the trendiest one. Here's where we go deep."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-mist px-3 py-1.5 text-sm font-medium text-ink/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
