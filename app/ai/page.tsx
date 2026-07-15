import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { AICapabilityCard } from "@/components/ai/AICapabilityCard";
import { iconMap } from "@/lib/icons";
import { aiCategories, aiStats } from "@/lib/data/aiServices";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Solutions & Automation",
  description:
    "Spark's AI practice: AI strategy and consulting, custom AI applications, generative AI, intelligent automation, chatbots, document processing, predictive analytics, and end-to-end AI automation built on the latest models.",
  alternates: { canonical: "/ai" },
};

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="Artificial Intelligence"
        title={
          <>
            AI solutions and automation,{" "}
            <span className="text-gradient">built to ship</span>
          </>
        }
        subtitle="From strategy and custom development to generative AI and autonomous agents — we help you put intelligence at the core of your products and operations."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/contact?intent=ai" variant="gradient" size="lg" withArrow>
            Talk to an AI expert
          </Button>
          <Button href="#ai-solutions" variant="outlineDark" size="lg">
            Explore capabilities
          </Button>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {aiStats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {aiCategories.map((cat, idx) => {
        const CatIcon = iconMap[cat.icon];
        return (
          <Section key={cat.slug} id={cat.slug} tone={idx % 2 === 0 ? "light" : "mist"}>
            <Container>
              <div className="max-w-2xl">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow",
                      cat.accent,
                    )}
                  >
                    <CatIcon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blurple-600">
                    {cat.tagline}
                  </span>
                </div>
                <h2 className="mt-6 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl">
                  {cat.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate">
                  {cat.description}
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.capabilities.map((capability, i) => (
                  <Reveal key={capability.title} delay={i * 0.05} className="h-full">
                    <AICapabilityCard capability={capability} accent={cat.accent} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CTASection
        eyebrow="Let's build with AI"
        title={
          <>
            Ready to make your business{" "}
            <span className="text-gradient">intelligent?</span>
          </>
        }
        subtitle="Tell us where AI could move the needle. We'll bring the strategy, the engineers, and the models to make it real."
      />
    </>
  );
}
