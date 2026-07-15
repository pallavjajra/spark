import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/lib/site";

export function CTASection({
  eyebrow = "Let's build together",
  title,
  subtitle = "Tell us where you want to go. We'll bring the team, the craft, and the technology to get you there.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="clip-angle-t absolute inset-0 -z-10 bg-flow" aria-hidden>
        <div className="absolute -left-20 bottom-0 h-80 w-80 animate-drift rounded-full bg-blurple-500/25 blur-[120px]" />
        <div className="absolute -right-16 top-0 h-80 w-80 animate-drift-2 rounded-full bg-sky-400/25 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-light opacity-30" />
      </div>

      <Container className="relative py-28 text-center md:py-36">
        <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          {title ?? (
            <>
              Ready to build what&apos;s <span className="text-gradient">next?</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="gradient" size="lg" withArrow>
            Start your project
          </Button>
          <Button href={`mailto:${site.email}`} external variant="outlineDark" size="lg">
            Email us
          </Button>
        </div>
      </Container>
    </section>
  );
}
