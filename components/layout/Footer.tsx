import Link from "next/link";
import { Linkedin, Twitter, Facebook, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { products } from "@/lib/data/products";

const aiLinks = [
  { label: "AI Strategy & Consulting", href: "/ai#ai-solutions" },
  { label: "Generative AI", href: "/ai#ai-solutions" },
  { label: "AI Chatbots & Assistants", href: "/ai#ai-solutions" },
  { label: "Predictive Analytics", href: "/ai#ai-solutions" },
  { label: "AI Automation", href: "/ai#ai-automation" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "Get a quote", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const footerProducts = products.slice(0, 5);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist text-slate">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blurple-500/10 blur-[120px]"
        aria-hidden
      />

      <Container className="relative py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          {/* Brand + contact + newsletter */}
          <div className="col-span-2 md:col-span-4">
            <Logo idSuffix="footer" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-slate transition-all hover:border-ink/20 hover:bg-white hover:text-ink hover:shadow-soft"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4 text-blurple-600" />
              {site.email}
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm text-slate">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blurple-600" />
              <span>{site.offices.map((o) => o.city).join(" · ")}</span>
            </p>
            <NewsletterForm />
          </div>

          {/* AI */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              AI
            </h3>
            <ul className="mt-5 space-y-3">
              {aiLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ai"
                  className="text-sm font-medium text-blurple-600 transition-colors hover:text-blurple-700"
                >
                  All AI services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {footerProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm font-medium text-blurple-600 transition-colors hover:text-blurple-700"
                >
                  All products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-slate-400 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms of use
            </Link>
            <a
              href="https://sparkbusinesstechnology.com.au"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              Original site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
