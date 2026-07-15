import { cn } from "@/lib/utils";

export function Marquee({
  children,
  slow,
  reverse,
  className,
}: {
  children: React.ReactNode;
  slow?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mask-fade-edges flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          slow ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
