import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-flow">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-1/4 h-80 w-80 animate-drift rounded-full bg-blurple-500/25 blur-[120px]" />
        <div className="absolute -right-16 bottom-1/4 h-80 w-80 animate-drift-2 rounded-full bg-sky-400/25 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-light opacity-30" />
      </div>
      <Container className="relative text-center">
        <p className="text-gradient font-display text-[6rem] font-bold leading-none sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          This page took a different path
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gradient" size="lg" withArrow>
            Back home
          </Button>
          <Button href="/contact" variant="outlineDark" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
