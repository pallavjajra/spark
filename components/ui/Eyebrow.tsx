import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-blurple-600",
        className,
      )}
    >
      <span className="h-px w-6 bg-current opacity-50" aria-hidden />
      {children}
    </span>
  );
}
