import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

export function FeatureRow({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  reverse,
  href,
  linkLabel = "Learn more",
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  bullets?: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reverse && "lg:order-2")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-slate">{description}</p>
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mintx-400/15 text-mintx-500">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-slate">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {href && (
          <Link
            href={href}
            className="group mt-7 inline-flex items-center gap-1.5 font-medium text-blurple-600 transition-colors hover:text-blurple-500"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
      <div className={cn(reverse && "lg:order-1")}>{visual}</div>
    </div>
  );
}
