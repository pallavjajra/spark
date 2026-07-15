import { iconMap } from "@/lib/icons";
import type { AICapability } from "@/lib/data/aiServices";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/basePath";

export function AICapabilityCard({
  capability,
  accent,
}: {
  capability: AICapability;
  accent: string;
}) {
  const Icon = iconMap[capability.icon];
  return (
    <div className="group relative overflow-hidden flex h-full flex-col rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift">
      {capability.imgAI ? (
        <img className="w-full" src={asset(capability.imgAI)} alt={capability.title} />
      ) : (
        <div className="px-6 pt-6">
          <span
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br text-white",
              accent,
            )}
          >
            <Icon className="h-5 w-5" />
          </span>

        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          {capability.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
          {capability.description}
        </p>

      </div>
    </div>
  );
}
