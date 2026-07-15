import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { iconMap } from "@/lib/icons";
import { aiCategories, aiStats } from "@/lib/data/aiServices";
import { cn } from "@/lib/utils";

export function AIServices() {
  return (
    <section
      id="ai"
      className="clip-angle-tb relative isolate overflow-hidden bg-flow"
    >
      {/* Light atmospheric background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-light opacity-40" />
        <div className="absolute -left-24 top-16 h-96 w-96 animate-drift rounded-full bg-blurple-500/15 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-drift-2 rounded-full bg-sky-400/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-drift rounded-full bg-coral-400/15 blur-[130px]" />
      </div>

      <Container className="relative py-28 md:py-36">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-blurple-500" />
            Artificial Intelligence
          </span>
          <h2 className="mt-6 text-balance font-display text-[2rem] font-semibold leading-[1.06] text-ink sm:text-4xl md:text-[2.9rem]">
            Put <span className="text-gradient">AI</span> at the core of how you
            operate
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            From strategy to autonomous agents, we help you design, build, and
            scale AI that ships real outcomes — not demos.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/ai" variant="gradient" size="lg" withArrow>
              Explore AI services
            </Button>
            <Button href="/contact?intent=ai" variant="outlineDark" size="lg">
              Talk to an AI expert
            </Button>
          </div>
        </div>

        {/* Category pillars */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {aiCategories.map((cat, ci) => {
            const CatIcon = iconMap[cat.icon];
            return (
              <Reveal key={cat.slug} delay={ci * 0.08} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-card md:p-8">
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-glow",
                        cat.accent,
                      )}
                    >
                      <CatIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {cat.capabilities.length} capabilities
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    {cat.description}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {cat.capabilities.map((item) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <li key={item.title}>
                          <Link
                            href={`/ai#${cat.slug}`}
                            className="group flex items-center gap-3 rounded-xl border border-line bg-mist px-3.5 py-3 transition-all hover:border-ink/15 hover:bg-white hover:shadow-soft"
                          >
                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blurple-500/10 text-blurple-600 transition-colors group-hover:bg-blurple-500 group-hover:text-white">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium leading-snug text-ink/80 group-hover:text-ink">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Outcome stats */}
        <div className="mt-14 grid grid-cols-2 gap-y-8 rounded-2xl border border-line bg-white py-9 shadow-soft sm:grid-cols-4">
          {aiStats.map((s) => (
            <div key={s.label} className="px-6 text-center">
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-slate">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
