import { cn } from "@/lib/utils";

export function CodeShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-navy-900 shadow-xl ring-1 ring-white/10",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-coral-500/80" />
        <span className="h-3 w-3 rounded-full bg-peach-400/80" />
        <span className="h-3 w-3 rounded-full bg-mintx-400/80" />
        <span className="ml-2 font-mono text-xs text-white/40">deploy.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
        <code>
          <span className="text-[#6b7c93]">{"// Ship products faster with Spark"}</span>
          {"\n"}
          <span className="text-blurple-300">import</span>
          <span className="text-white/80">{" { "}</span>
          <span className="text-sky-400">Spark</span>
          <span className="text-white/80">{" } "}</span>
          <span className="text-blurple-300">from</span>{" "}
          <span className="text-mintx-400">&quot;@spark/sdk&quot;</span>
          <span className="text-white/40">;</span>
          {"\n\n"}
          <span className="text-blurple-300">const</span>{" "}
          <span className="text-white">app</span>{" "}
          <span className="text-white/40">=</span>{" "}
          <span className="text-sky-400">Spark</span>
          <span className="text-white/40">.</span>
          <span className="text-sky-400">create</span>
          <span className="text-white/40">({"{"}</span>
          {"\n  "}
          <span className="text-coral-400">project</span>
          <span className="text-white/40">:</span>{" "}
          <span className="text-mintx-400">&quot;acme-commerce&quot;</span>
          <span className="text-white/40">,</span>
          {"\n  "}
          <span className="text-coral-400">region</span>
          <span className="text-white/40">:</span>{" "}
          <span className="text-mintx-400">&quot;ap-southeast&quot;</span>
          <span className="text-white/40">,</span>
          {"\n"}
          <span className="text-white/40">{"});"}</span>
          {"\n\n"}
          <span className="text-blurple-300">await</span>{" "}
          <span className="text-white">app</span>
          <span className="text-white/40">.</span>
          <span className="text-sky-400">deploy</span>
          <span className="text-white/40">({"{"}</span>{" "}
          <span className="text-coral-400">scale</span>
          <span className="text-white/40">:</span>{" "}
          <span className="text-mintx-400">&quot;auto&quot;</span>{" "}
          <span className="text-white/40">{"});"}</span>
          {"\n"}
          <span className="text-[#3ecf8e]">{"// ✓ deployed in 2.1s"}</span>
        </code>
      </pre>
    </div>
  );
}
