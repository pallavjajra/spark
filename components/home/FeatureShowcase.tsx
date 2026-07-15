import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CodeShowcase } from "@/components/ui/CodeShowcase";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

function DesignSystemMock() {
  return (
    <BrowserFrame url="spark.design/system">
      <div className="space-y-6 p-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
            Brand palette
          </p>
          <div className="mt-3 flex gap-2">
            {[
              "bg-blurple-500",
              "bg-sky-400",
              "bg-mintx-400",
              "bg-coral-400",
              "bg-peach-400",
            ].map((c) => (
              <span key={c} className={`h-10 flex-1 rounded-lg ${c}`} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
            Typography
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-ink">
            Aa Bb Cc
          </p>
          <p className="text-sm text-slate">
            Space Grotesk · Inter · JetBrains Mono
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
            Components
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-blurple-500 to-sky-500 px-4 py-2 text-sm font-medium text-white">
              Primary
            </span>
            <span className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink">
              Secondary
            </span>
            <span className="flex-1 rounded-lg border border-line px-3 py-2 text-sm text-slate">
              Input field
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FeatureShowcase() {
  return (
    <Section tone="light">
      <Container className="space-y-20 md:space-y-28">
        <Reveal>
          <FeatureRow
            eyebrow="Engineering"
            title="Engineering that scales with you"
            description="From architecture to deployment, our teams ship production-grade software in tight, transparent iterations — so you see working product every sprint."
            bullets={[
              "Senior engineers — no juniors learning on your budget",
              "Automated testing and CI/CD baked in",
              "Cloud-native, secure, and built to scale",
            ]}
            href="/services/digital-transformation"
            visual={<CodeShowcase />}
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            reverse
            eyebrow="Design & product"
            title="Experiences your customers love"
            description="We turn complex workflows into interfaces people love, backed by a scalable design system that keeps every screen consistent and on-brand."
            bullets={[
              "Research-led UX that lifts conversion",
              "Design systems your team can run",
              "Accessible (WCAG 2.2) by default",
            ]}
            href="/services/ui-ux-design"
            visual={<DesignSystemMock />}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
