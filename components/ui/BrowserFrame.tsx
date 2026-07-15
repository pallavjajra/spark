import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  url = "app.spark.dev",
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-white shadow-xl",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-line" />
          <span className="h-3 w-3 rounded-full bg-line" />
          <span className="h-3 w-3 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1 font-mono text-[11px] text-slate ring-1 ring-line">
            <Lock className="h-3 w-3 text-mintx-500" />
            {url}
          </span>
        </div>
        <div className="w-12" aria-hidden />
      </div>
      {children}
    </div>
  );
}
