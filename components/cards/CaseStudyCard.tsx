import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data/caseStudies";
import { asset } from "@/lib/basePath";

export function CaseStudyCard({
  study,
}: {
  study: CaseStudy;
  /** retained for backward compatibility (no longer used) */
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      {/* Image — shown in full (contain), never cropped or stretched */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(study.image)}
          alt={study.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 rounded-full border border-line bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink shadow-soft backdrop-blur">
          {study.results[0].value} {study.results[0].label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
          <span className="font-semibold text-ink">{study.client}</span>
          <span aria-hidden>·</span>
          <span>{study.industry}</span>
          <span aria-hidden>·</span>
          <span>{study.year}</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
          {study.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {study.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-600">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
