import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImpactStats } from "@/components/home/ImpactStats";
import { CTASection } from "@/components/sections/CTASection";
import { iconMap, type IconName } from "@/lib/icons";
import { site } from "@/lib/site";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spark Business Technology is a global software and digital transformation partner — headquartered in Australia with delivery in India, serving clients across five regions since 2018.",
};

const values: { icon: IconName; title: string; description: string }[] = [
  { icon: "sparkles", title: "Craft over shortcuts", description: "We sweat the details others skip. Quality is a habit, not a phase." },
  { icon: "award", title: "Senior by default", description: "You work with experienced people who've shipped real products at scale." },
  { icon: "handshake", title: "Partners, not vendors", description: "We act like it's our business too — invested in the outcome, not the hours." },
  { icon: "target", title: "Outcomes obsessed", description: "We measure success by your results, on time and on budget." },
  { icon: "globe", title: "Global & remote-first", description: "Distributed teams across five regions, working as one." },
  { icon: "shield", title: "Built to last", description: "Secure, maintainable systems your team can own long after launch." },
];

const regions = ["Australia", "Middle East", "Asia", "Europe", "United States"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A global technology partner,{" "}
            <span className="text-gradient">built on trust</span>
          </>
        }
        subtitle="We help startups, SMEs, and enterprises design, build, and scale the technology that moves their business forward."
      />

      <Container className="relative z-10 -mt-10 md:-mt-16">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-mist p-3 shadow-xl sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/about/collaboration.webp")}
            alt="The Spark Business Technology team collaborating"
            className="mx-auto block w-full rounded-xl object-contain"
          />
        </div>
      </Container>

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Igniting innovation since{" "}
                    <span className="text-gradient">2018</span>
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
                <p>
                  Spark Business Technology began with a simple belief: that
                  great technology should be accessible to ambitious businesses
                  of every size. Headquartered in Australia with a dedicated
                  delivery centre in India, we&apos;ve grown into a worldwide
                  partner trusted across five regions.
                </p>
                <p>
                  We inject innovation into every facet of a project — breaking
                  away from conventional norms and adopting fresh ideas. Our
                  flexible delivery methods and skilled consultants have
                  delivered hundreds of projects on time and within budget,
                  making us the technology partner of choice for organisations
                  around the world.
                </p>
              </div>
            </div>

            <Reveal>
              <div className="rounded-2xl border border-line bg-mist p-8">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-electric-500">
                  At a glance
                </h3>
                <dl className="mt-6 space-y-5">
                  {[
                    { k: "Founded", v: "2018" },
                    { k: "Headquarters", v: "Sydney, Australia" },
                    { k: "Delivery centre", v: "Pune, India" },
                    { k: "Global reach", v: "5 regions" },
                    { k: "Focus", v: "Software · Design · Transformation" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-baseline justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-slate-500">{row.k}</dt>
                      <dd className="text-right font-medium text-ink">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ImpactStats />

      <Section tone="mist">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What we value"
            title={
              <>
                Principles that <span className="text-gradient">guide us</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon];
              return (
                <Reveal key={v.title} delay={(i % 3) * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-white p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-72 w-[34rem] -translate-y-1/2 rounded-full bg-blurple-500/10 blur-[130px]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Global presence"
                title={
                  <>
                    One team, <span className="text-gradient">five regions</span>
                  </>
                }
                description="A distributed model that pairs local partnership with around-the-clock delivery."
              />
              <ul className="mt-8 flex flex-wrap gap-3">
                {regions.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {site.offices.map((o) => (
                <div
                  key={o.city}
                  className="rounded-2xl border border-line bg-white p-6 shadow-soft"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blurple-600">
                    {o.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    {o.city}
                  </p>
                  <p className="mt-1 text-sm text-slate">{o.region}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Join the journey"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great</span>
          </>
        }
      />
    </>
  );
}
