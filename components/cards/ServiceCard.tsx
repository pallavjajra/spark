import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconMap } from "@/lib/icons";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/basePath";

export function ServiceCard({ service, index, }: {
  service: Service;
  index?: number;
}) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift"
    >
      {/* Soft accent glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-linear-to-br opacity-[0.12] blur-2xl transition-opacity duration-300 group-hover:opacity-25",
          service.accent,
        )}
        aria-hidden
      />
      {/* Top accent bar reveals on hover */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r transition-transform duration-500 group-hover:scale-x-100",
          service.accent,
        )}
        aria-hidden
      />

      {/* {index != null && (
        <span className="absolute right-6 top-6 font-mono text-xs text-slate-300">
          0{index + 1}
        </span>
      )} */}

      <div

      >
        <img className="w-full" src={service.imgNew ? asset(service.imgNew) : undefined} alt={service.title} />
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
          {service.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-600">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>

      </div>
    </Link>
  );
}
