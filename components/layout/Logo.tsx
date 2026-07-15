import Link from "next/link";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/basePath";

export function Logo({
  className,
  idSuffix,
  showSub = true,
  onDark = false,
}: {
  className?: string;
  /** retained for backward compatibility (no longer used) */
  idSuffix?: string;
  /** retained for backward compatibility (no longer used) */
  showSub?: boolean;
  onDark?: boolean;
}) {
  void idSuffix;
  void showSub;
  return (
    <Link
      href="/"
      aria-label="Spark Business Technology — home"
      className={cn("group inline-flex items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/SparkLogo.svg")}
        alt="Spark Business Technology"
        width={131}
        height={62}
        className={cn(
          "h-10 w-[85px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-[93px]",
          onDark && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
