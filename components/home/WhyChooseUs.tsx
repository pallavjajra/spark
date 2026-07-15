import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { iconMap, type IconName } from "@/lib/icons";

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "award",
    title: "Senior by default",
    description: "Experienced people who've shipped at scale — on your project from day one.",
  },
  {
    icon: "target",
    title: "On time, on budget",
    description: "Flexible delivery and clear milestones. Hundreds of projects delivered as promised.",
  },
  {
    icon: "globe",
    title: "Global delivery",
    description: "Distributed teams across five regions for round-the-clock momentum.",
  },
  {
    icon: "shield",
    title: "Built to last",
    description: "Secure, maintainable systems your team can own long after launch.",
  },
];

export function WhyChooseUs() {
  return (
    <Section tone="mist">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Spark"
          title={
            <>
              A partner you can <span className="text-gradient">rely on</span>
            </>
          }
          description="We combine the craft of a boutique studio with the reliability of an enterprise delivery partner."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = iconMap[r.icon];
            return (
              <Reveal key={r.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blurple-500 to-sky-500 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
