import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "gradient"
  | "light"
  | "outlineLight"
  | "outlineDark"
  | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  gradient:
    "bg-gradient-to-r from-blurple-500 to-sky-500 text-white shadow-glow hover:-translate-y-0.5",
  light:
    "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  outlineLight:
    "border border-white/30 text-white hover:border-white/55 hover:bg-white/10",
  outlineDark:
    "border border-line bg-white text-ink hover:border-ink/20 hover:bg-mist",
  ghost: "px-0 text-blurple-600 hover:gap-3 hover:text-blurple-500",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  href,
  external,
  type,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {inner}
    </button>
  );
}
