import { Check, X, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProductIcon } from "./ProductIcon";
import { ProductFaq } from "./ProductFaq";
import type { ProductSection } from "@/lib/data/types";
import { cn } from "@/lib/utils";

export function ProductSectionRenderer({
  section,
  index,
}: {
  section: ProductSection;
  index: number;
}) {
  const tone = index % 2 === 0 ? "light" : "mist";

  switch (section.type) {
    case "feature-grid":
      return (
        <Section tone={tone}>
          <Container>
            <SectionHeading
              align="center"
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-line bg-white p-6 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blurple-500/10 text-blurple-600">
                    <ProductIcon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      );

    case "split-feature":
      return (
        <Section tone={tone}>
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn(section.reverse && "lg:order-2")}>
                {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
                <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  {section.description}
                </p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mintx-400/15 text-mintx-500">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-slate">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={cn(section.reverse && "lg:order-1")}>
                <div className="ring-gradient relative overflow-hidden rounded-2xl bg-mist p-6 shadow-card">
                  <div
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blurple-500/15 blur-3xl"
                    aria-hidden
                  />
                  {section.metrics && section.metrics.length > 0 ? (
                    <div className="relative grid grid-cols-2 gap-3">
                      {section.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-line bg-white p-5"
                        >
                          <p className="text-gradient font-display text-3xl font-bold tracking-tight">
                            {m.value}
                          </p>
                          <p className="mt-1 text-sm leading-snug text-slate">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative flex h-48 items-center justify-center">
                      <span className="font-display text-2xl font-semibold text-gradient">
                        {section.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      );

    case "stat-band":
      return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blurple-600 to-sky-500 py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />
          <Container className="relative">
            {section.title && (
              <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold sm:text-4xl">
                {section.title}
              </h2>
            )}
            <div
              className={cn(
                "grid grid-cols-2 gap-8 md:grid-cols-4",
                section.title && "mt-12",
              )}
            >
              {section.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-white/75">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      );

    case "comparison":
      return (
        <Section tone={tone}>
          <Container>
            <SectionHeading
              align="center"
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="mx-auto mt-10 max-w-4xl overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse overflow-hidden rounded-2xl border border-line bg-white text-left">
                <thead>
                  <tr className="bg-mist">
                    <th className="px-5 py-4 text-sm font-semibold text-ink" />
                    {section.columns.map((c, i) => (
                      <th
                        key={c}
                        className={cn(
                          "px-5 py-4 text-center text-sm font-semibold",
                          i === section.columns.length - 1
                            ? "text-blurple-700"
                            : "text-slate",
                        )}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="border-t border-line">
                      <td className="px-5 py-4 text-sm font-medium text-ink">
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td
                          key={i}
                          className={cn(
                            "px-5 py-4 text-center text-sm",
                            i === section.columns.length - 1 && "bg-blurple-500/[0.04]",
                          )}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <Check className="mx-auto h-5 w-5 text-mintx-500" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-slate/40" />
                            )
                          ) : (
                            <span className="text-slate">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>
      );

    case "faq":
      return (
        <Section tone={tone}>
          <Container>
            <SectionHeading
              align="center"
              eyebrow={section.eyebrow}
              title={section.title ?? "Frequently asked questions"}
            />
            <ProductFaq items={section.items} />
          </Container>
        </Section>
      );

    case "cta":
      return (
        <section className="relative isolate overflow-hidden">
          <div className="clip-angle-t absolute inset-0 -z-10 bg-flow" aria-hidden>
            <div className="absolute -left-20 bottom-0 h-72 w-72 animate-drift rounded-full bg-blurple-500/25 blur-[120px]" />
            <div className="absolute -right-16 top-0 h-72 w-72 animate-drift-2 rounded-full bg-sky-400/25 blur-[120px]" />
          </div>
          <Container className="relative py-24 text-center md:py-28">
            <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              {section.title}
            </h2>
            {section.description && (
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate">
                {section.description}
              </p>
            )}
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={section.primary.href} variant="gradient" size="lg" withArrow>
                {section.primary.label}
              </Button>
              {section.secondary && (
                <Button href={section.secondary.href} variant="outlineDark" size="lg">
                  {section.secondary.label}
                </Button>
              )}
            </div>
          </Container>
        </section>
      );

    default:
      return null;
  }
}
