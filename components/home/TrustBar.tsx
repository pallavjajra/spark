import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { clients } from "@/lib/data/clients";
import { asset } from "@/lib/basePath";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-white py-12">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          Trusted by ambitious teams around the world
        </p>
      </Container>
      <div className="mt-10">
        <Marquee>
          {clients.map((c) => (
            <span key={c.name} className="mx-10 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(c.logo)}
                alt={c.name}
                className="h-8 w-auto max-w-[160px] object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-9"
                loading="lazy"
              />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
