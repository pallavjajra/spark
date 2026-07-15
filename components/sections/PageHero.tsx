import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="clip-angle-b absolute inset-0 -z-10 bg-flow" aria-hidden>
        <div className="absolute -left-20 top-10 h-80 w-80 animate-drift rounded-full bg-blurple-500/25 blur-[120px]" />
        <div className="absolute right-0 top-0 h-80 w-80 animate-drift-2 rounded-full bg-sky-400/25 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-light opacity-30" />
      </div>
      <Container className="relative pb-24 pt-36 md:pb-32 md:pt-44">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-[2.5rem] font-semibold leading-[1.04] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
