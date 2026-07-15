"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  LayoutGrid,
  BarChart3,
  FolderKanban,
  Users,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const bars = [44, 60, 52, 72, 58, 86, 68, 80];
const metrics = [
  { label: "Revenue", value: "$1.2M", delta: "+12.4%" },
  { label: "Active users", value: "48.2k", delta: "+8.1%" },
  { label: "Conversion", value: "4.9%", delta: "+2.3%" },
];
const navIcons = [LayoutGrid, BarChart3, FolderKanban, Users, Settings];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };
  const motionProps = reduce
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const child = reduce ? {} : { variants: item };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Flowing gradient banner with angled bottom */}
      <div className="clip-angle-b absolute inset-0 -z-10 bg-flow" aria-hidden>
        <div className="absolute -left-20 top-10 h-96 w-96 animate-drift rounded-full bg-blurple-500/30 blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 animate-drift-2 rounded-full bg-sky-400/30 blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 animate-drift rounded-full bg-coral-400/25 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-light opacity-40" />
      </div>

      <Container className="relative pb-28 pt-32 md:pb-36 md:pt-40">
        <motion.div className="mx-auto max-w-3xl text-center" {...motionProps}>
          <motion.div {...child}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 shadow-soft backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blurple-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blurple-500" />
              </span>
              The technology partner for ambitious teams
            </span>
          </motion.div>

          <motion.h1
            {...child}
            className="mt-7 text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            Ignite innovation.
            <br />
            Empower <span className="text-gradient">growth.</span>
          </motion.h1>

          <motion.p
            {...child}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate"
          >
            Spark is the end-to-end technology partner for startups, SMEs, and
            enterprises — we design, build, and scale the software and AI that
            power your business.
          </motion.p>

          <motion.div
            {...child}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/contact" variant="gradient" size="lg" withArrow>
              Start your project
            </Button>
            <Button href="/services" variant="outlineDark" size="lg">
              Explore services
            </Button>
          </motion.div>

          <motion.div
            {...child}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-slate"
          >
            <span>
              <span className="font-semibold text-ink">{site.stats.clients}</span>{" "}
              clients
            </span>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span>
              <span className="font-semibold text-ink">{site.stats.projects}</span>{" "}
              projects
            </span>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span>
              <span className="font-semibold text-ink">{site.stats.regions}</span>{" "}
              regions
            </span>
          </motion.div>
        </motion.div>

        {/* Product showcase */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.97 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* floating chips */}
          <div className="animate-floaty absolute -left-4 top-16 z-10 hidden rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lift md:block">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mintx-400/15 text-mintx-500">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Deployed</p>
                <p className="font-mono text-[10px] text-slate">production · 2.1s</p>
              </div>
            </div>
          </div>
          <div className="animate-floaty absolute -right-4 bottom-16 z-10 hidden rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lift [animation-delay:1.5s] md:block">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blurple-500/10 text-blurple-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">+63% revenue</p>
                <p className="font-mono text-[10px] text-mintx-500">▲ this quarter</p>
              </div>
            </div>
          </div>

          <BrowserFrame url="app.spark.dev/overview">
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr]">
              {/* sidebar */}
              <div className="hidden flex-col gap-1 border-r border-line bg-mist/60 p-4 sm:flex">
                <div className="mb-4 flex items-center gap-2 px-2">
                  <span className="h-6 w-6 rounded-md bg-gradient-to-br from-blurple-500 to-sky-500" />
                  <span className="font-display text-sm font-semibold text-ink">
                    Spark
                  </span>
                </div>
                {["Dashboard", "Analytics", "Projects", "Team", "Settings"].map(
                  (label, i) => {
                    const Icon = navIcons[i];
                    return (
                      <div
                        key={label}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                          i === 0
                            ? "bg-white font-medium text-ink shadow-soft"
                            : "text-slate"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </div>
                    );
                  },
                )}
              </div>

              {/* main */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">
                      Overview
                    </p>
                    <p className="text-xs text-slate">Last 30 days</p>
                  </div>
                  <span className="rounded-full bg-blurple-500/10 px-3 py-1 text-xs font-medium text-blurple-600">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-line bg-white p-3">
                      <p className="truncate text-[11px] text-slate">{m.label}</p>
                      <p className="mt-1 font-display text-base font-semibold text-ink sm:text-xl">
                        {m.value}
                      </p>
                      <p className="mt-0.5 inline-flex items-center gap-0.5 text-[11px] font-medium text-mintx-500">
                        <ArrowUpRight className="h-3 w-3" />
                        {m.delta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-line bg-white p-4">
                  <div className="flex items-end justify-between">
                    <p className="text-xs font-medium text-slate">Revenue</p>
                    <p className="font-mono text-[11px] text-slate">2025</p>
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-2">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-t ${
                          i === bars.length - 3
                            ? "bg-gradient-to-t from-blurple-500 to-sky-400"
                            : "bg-blurple-500/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </motion.div>
      </Container>
    </section>
  );
}
