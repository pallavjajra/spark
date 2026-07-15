"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((p) => (p + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setIndex((p) => (p + 1) % count), 6500);
    return () => window.clearInterval(t);
  }, [count, reduce]);

  const t = testimonials[index];

  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Client voices"
          title={
            <>
              Don&apos;t just take <span className="text-gradient">our word for it</span>
            </>
          }
        />

        <div className="relative mx-auto mt-12 max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-electric-500/15" aria-hidden />

          <div className="relative mt-2 min-h-[13rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center justify-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-iris text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-ink">
                      {t.author}
                    </span>
                    <span className="block text-sm text-slate-500">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-6 bg-electric-500"
                      : "w-2 bg-line hover:bg-slate-300",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
