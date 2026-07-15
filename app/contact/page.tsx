import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Spark Business Technology. Tell us about your project and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a <span className="text-gradient">conversation</span>
          </>
        }
        subtitle="Tell us where you want to go. We'll bring the team, the craft, and the technology to help you get there — usually with a reply within one business day."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Reach us directly
                </h2>
                <div className="mt-5 space-y-4">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-electric-600"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{site.email}</span>
                  </a>
                  <a
                    href={`tel:${site.phone.au.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-electric-600"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">
                      {site.phone.au}{" "}
                      <span className="text-slate-400">· Australia</span>
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Our offices
                </h2>
                <div className="mt-5 grid gap-4">
                  {site.offices.map((o) => (
                    <div
                      key={o.label}
                      className="rounded-2xl border border-line bg-mist p-5"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-electric-500" />
                        <p className="font-display font-semibold text-ink">
                          {o.label}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{o.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-line bg-mist p-5 text-sm text-slate-600">
                <Clock className="h-4 w-4 shrink-0 text-electric-500" />
                We typically reply within one business day.
              </div>

              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Follow along
                </h2>
                <div className="mt-5 flex items-center gap-3">
                  {[
                    { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
                    { Icon: Twitter, href: site.social.twitter, label: "Twitter / X" },
                    { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink/70 transition-all hover:border-electric-500/40 hover:bg-electric-500/5 hover:text-electric-600"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
