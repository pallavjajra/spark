import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies, getCaseStudy } from "@/lib/data/caseStudies";
import { asset } from "@/lib/basePath";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} — ${study.title}`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={
          <Link href="/work" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80">
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>
        }
        title={study.title}
        subtitle={study.summary}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-slate">
          <span className="font-semibold text-ink">{study.client}</span>
          <span>{study.industry}</span>
          <span>{study.year}</span>
        </div>
      </PageHero>

      <Container className="relative z-10 -mt-10 md:-mt-16">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-mist p-3 shadow-xl sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(study.image)}
            alt={study.title}
            className="mx-auto block w-full rounded-xl object-contain"
          />
        </div>
      </Container>

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-electric-500">
                  The challenge
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-electric-500">
                  Our approach
                </h2>
                <ol className="mt-6 space-y-4">
                  {study.approach.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-mono text-sm font-medium text-electric-500">
                        0{i + 1}
                      </span>
                      <span className="text-ink/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-electric-500">
                  The solution
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {study.solution}
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-line bg-mist p-7">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Client
                    </dt>
                    <dd className="mt-1 font-medium text-ink">{study.client}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Industry
                    </dt>
                    <dd className="mt-1 font-medium text-ink">{study.industry}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Services
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {study.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink/75"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Tech
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {study.tech.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink/75"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blurple-500/10 blur-[120px]"
          aria-hidden
        />
        <Container className="relative">
          <h2 className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-blurple-600">
            The results
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {study.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-gradient font-display text-5xl font-bold tracking-tight sm:text-6xl">
                  {r.value}
                </p>
                <p className="mt-3 text-sm text-slate">{r.label}</p>
              </div>
            ))}
          </div>

          <figure className="mx-auto mt-16 max-w-3xl text-center">
            <Quote className="mx-auto h-10 w-10 text-blurple-500/25" aria-hidden />
            <blockquote className="mt-4 text-balance font-display text-2xl font-medium leading-snug text-ink">
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-slate">
              <span className="font-semibold text-ink">{study.quote.author}</span>
              {" — "}
              {study.quote.role}
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            More work
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((c) => (
              <CaseStudyCard key={c.slug} study={c} variant="light" />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
