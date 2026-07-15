import { cn } from "@/lib/utils";

type Tone = "light" | "mist" | "navy" | "dark";
type Angle = "none" | "top" | "bottom" | "both";

const tones: Record<Tone, string> = {
  light: "bg-white text-slate",
  mist: "bg-mist text-slate",
  navy: "bg-navy-900 text-white",
  dark: "bg-navy-900 text-white",
};

const angles: Record<Angle, string> = {
  none: "py-20 md:py-28",
  top: "clip-angle-t pt-28 pb-20 md:pt-36 md:pb-28",
  bottom: "clip-angle-b py-20 pb-28 md:py-28 md:pb-36",
  both: "clip-angle-tb py-28 md:py-36",
};

export function Section({
  id,
  tone = "light",
  angle = "none",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  angle?: Angle;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", tones[tone], angles[angle], className)}
    >
      {children}
    </section>
  );
}
