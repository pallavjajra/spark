import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductIcon } from "./ProductIcon";
import type { Product } from "@/lib/data/types";

export function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === "live";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div
        className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br from-blurple-500/10 to-sky-400/10 blur-2xl"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blurple-500 to-sky-500 text-white">
          <ProductIcon name={product.icon} className="h-5 w-5" />
        </span>
        {isLive && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mintx-400/12 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-mintx-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mintx-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mintx-500" />
            </span>
            Live
          </span>
        )}
      </div>

      <span className="relative mt-6 inline-flex w-fit items-center rounded-full bg-blurple-500/8 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-blurple-600">
        {product.category}
      </span>

      <h3 className="relative mt-3 font-display text-xl font-semibold text-ink">
        {product.name}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-slate">
        {product.shortDescription}
      </p>

      {product.keyBenefits.length > 0 && (
        <ul className="relative mt-5 space-y-2.5">
          {product.keyBenefits.slice(0, 3).map((b) => (
            <li
              key={b.title}
              className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink/75"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blurple-500/10 text-blurple-600">
                <ProductIcon name={b.icon} className="h-3.5 w-3.5" />
              </span>
              {b.title}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blurple-600">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
