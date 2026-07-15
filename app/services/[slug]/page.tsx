import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services, getService } from "@/lib/data/services";
import { asset } from "@/lib/basePath";
import { iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={
          <Link href="/services" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80">
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>
        }
        title={service.title}
        subtitle={service.tagline}
      >
        <div
          className={cn(
            "mt-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-glow",
            service.accent,
          )}
        >
          <Icon className="h-8 w-8" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {service.outcomes.map((o) => (
            <div
              key={o.label}
              className="rounded-xl border border-line bg-white px-4 py-3 shadow-soft"
            >
              <span className="font-display text-xl font-semibold text-ink">
                {o.value}
              </span>{" "}
              <span className="text-sm text-slate">{o.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {service.image && (
        <Container className="relative z-10 -mt-8 md:-mt-12">
          <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-mist p-3 shadow-xl sm:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(service.image)}
              alt={service.title}
              className="mx-auto block w-full rounded-xl object-contain"
            />
          </div>
        </Container>
      )}

      <Section tone="light">
        <Container>
          <p className="max-w-3xl text-balance text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]">
            {service.description}
          </p>

          <div className="mt-16">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              What we deliver
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {service.capabilities.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.08} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                        service.accent,
                      )}
                    >
                      <Check className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                        {c.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                What you&apos;ll <span className="text-gradient">get</span>
              </h2>
              <p className="mt-4 max-w-md text-slate">
                Clear deliverables, no surprises. Every engagement ends with
                assets your team can own and run.
              </p>
              <Button href="/contact" variant="gradient" size="lg" withArrow className="mt-8">
                Discuss your project
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-soft"
                >
                  <Check className="h-5 w-5 shrink-0 text-mintx-500" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Explore other services
            </h2>
            <Button href="/services" variant="outlineDark" withArrow className="shrink-0">
              View all
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
