"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { aiCategories } from "@/lib/data/aiServices";
import { iconMap } from "@/lib/icons";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type MenuKey = "services" | "ai";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (key: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpenKey(key);
  };
  const closeMenu = () => {
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 120);
  };

  const solid = scrolled || mobileOpen;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLink = (active: boolean) =>
    cn(
      "relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
      active ? "text-blurple-600" : "text-slate hover:text-ink",
    );

  const menuKeyFor = (label: string): MenuKey | null =>
    label === "Services" ? "services" : label === "AI" ? "ai" : null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-line bg-white/90 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo className="text-ink" />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {mainNav.map((item) => {
              const key = menuKeyFor(item.label);
              if (key) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => openMenu(key)}
                    onMouseLeave={closeMenu}
                  >
                    <Link
                      href={item.href}
                      className={navLink(isActive(item.href))}
                      aria-expanded={openKey === key}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          openKey === key && "rotate-180",
                        )}
                      />
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLink(isActive(item.href))}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/contact" variant="primary" size="md" withArrow>
              Start your project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Desktop mega menu — Services */}
      <div className="pointer-events-none absolute inset-x-0 top-full hidden justify-center px-6 lg:flex">
        <div
          onMouseEnter={() => openMenu("services")}
          onMouseLeave={closeMenu}
          className={cn(
            "pointer-events-auto mt-2 w-full max-w-[60rem] overflow-hidden rounded-2xl border border-line bg-white shadow-lift transition-all duration-300",
            openKey === "services"
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr]">
            <div className="grid grid-cols-2 gap-1 p-3">
              {services.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist"
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                        s.accent,
                      )}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">
                        {s.title}
                      </span>
                      <span className="block truncate text-xs text-slate">
                        {s.tagline}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="relative flex flex-col justify-between gap-4 bg-gradient-to-br from-blurple-600 to-sky-500 p-6 text-white">
              <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                  Not sure where to start?
                </p>
                <p className="mt-3 font-display text-lg font-semibold leading-snug">
                  Book a free consultation and we&apos;ll map the path.
                </p>
              </div>
              <Button
                href="/contact"
                variant="light"
                size="md"
                withArrow
                className="relative w-full"
              >
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop mega menu — AI */}
      <div className="pointer-events-none absolute inset-x-0 top-full hidden justify-center px-6 lg:flex">
        <div
          onMouseEnter={() => openMenu("ai")}
          onMouseLeave={closeMenu}
          className={cn(
            "pointer-events-auto mt-2 w-full max-w-[60rem] overflow-hidden rounded-2xl border border-line bg-white shadow-lift transition-all duration-300",
            openKey === "ai"
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr]">
            <div className="grid grid-cols-2 gap-2 p-3">
              {aiCategories.map((cat) => {
                const CatIcon = iconMap[cat.icon];
                return (
                  <div key={cat.slug} className="p-1">
                    <div className="mb-1 flex items-center gap-2 px-2">
                      <span
                        className={cn(
                          "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                          cat.accent,
                        )}
                      >
                        <CatIcon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-slate-400">
                        {cat.name}
                      </span>
                    </div>
                    <div className="grid">
                      {cat.capabilities.map((cap) => {
                        const Icon = iconMap[cap.icon];
                        return (
                          <Link
                            key={cap.title}
                            href={`/ai#${cat.slug}`}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] text-slate transition-colors hover:bg-mist hover:text-ink"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-blurple-500" />
                            <span className="truncate">{cap.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative flex flex-col justify-between gap-4 bg-gradient-to-br from-blurple-600 to-sky-500 p-6 text-white">
              <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                  Artificial Intelligence
                </p>
                <p className="mt-3 font-display text-lg font-semibold leading-snug">
                  Put AI at the core of how you operate.
                </p>
              </div>
              <Button
                href="/ai"
                variant="light"
                size="md"
                withArrow
                className="relative w-full"
              >
                Explore AI services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white transition-all duration-300 lg:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <Container className="py-6">
          <nav className="flex flex-col" aria-label="Mobile">
            {/* Services accordion */}
            <button
              type="button"
              onClick={() =>
                setMobileSection((v) => (v === "services" ? null : "services"))
              }
              className="flex items-center justify-between border-b border-line py-4 text-left text-lg font-medium text-ink"
              aria-expanded={mobileSection === "services"}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-slate transition-transform duration-300",
                  mobileSection === "services" && "rotate-180",
                )}
              />
            </button>
            {mobileSection === "services" && (
              <div className="grid gap-1 border-b border-line py-3">
                {services.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl px-2 py-3 text-ink hover:bg-mist"
                    >
                      <span
                        className={cn(
                          "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                          s.accent,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* AI accordion */}
            <button
              type="button"
              onClick={() => setMobileSection((v) => (v === "ai" ? null : "ai"))}
              className="flex items-center justify-between border-b border-line py-4 text-left text-lg font-medium text-ink"
              aria-expanded={mobileSection === "ai"}
            >
              AI
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-slate transition-transform duration-300",
                  mobileSection === "ai" && "rotate-180",
                )}
              />
            </button>
            {mobileSection === "ai" && (
              <div className="grid gap-1 border-b border-line py-3">
                {aiCategories.map((cat) => (
                  <div key={cat.slug} className="mb-1">
                    <p className="px-2 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      {cat.name}
                    </p>
                    {cat.capabilities.map((cap) => {
                      const Icon = iconMap[cap.icon];
                      return (
                        <Link
                          key={cap.title}
                          href={`/ai#${cat.slug}`}
                          className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-ink hover:bg-mist"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-blurple-500" />
                          <span className="text-sm">{cap.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {mainNav
              .filter((i) => i.label !== "Services" && i.label !== "AI")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line py-4 text-lg font-medium text-ink"
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <Button
            href="/contact"
            variant="gradient"
            size="lg"
            withArrow
            className="mt-6 w-full"
          >
            Start your project
          </Button>
        </Container>
      </div>
    </header>
  );
}
