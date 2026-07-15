"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { aiCategories } from "@/lib/data/aiServices";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const budgets = ["< $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Not sure yet"];

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-slate-400 focus:border-electric-500 focus:outline-none focus:ring-4 focus:ring-electric-500/10";
const labelBase = "mb-2 block text-sm font-medium text-ink";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  // Preselect a service when arriving from a targeted CTA (e.g. /contact?intent=ai).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const intent = new URLSearchParams(window.location.search).get("intent");
    if (!intent) return;
    const map: Record<string, string> = {
      ai: "Artificial Intelligence Solutions",
      "ai-solutions": "Artificial Intelligence Solutions",
      "ai-automation": "AI Automation",
      automation: "AI Automation",
    };
    const preset = map[intent.toLowerCase()];
    if (preset) setFields((f) => ({ ...f, service: preset }));
  }, []);

  const set = (k: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.email.trim()) next.email = "An email helps us reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "That email doesn't look right.";
    if (!fields.message.trim()) next.message = "A few words about your project, please.";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-mist px-8 py-16 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-aqua text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          Thanks, {fields.name.split(" ")[0] || "there"}!
        </h3>
        <p className="mt-3 max-w-sm text-slate-500">
          Your message is on its way. We&apos;ll get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-8 text-sm font-medium text-electric-600 hover:text-electric-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name
          </label>
          <input
            id="name"
            type="text"
            value={fields.name}
            onChange={set("name")}
            placeholder="Jane Smith"
            className={cn(inputBase, errors.name && "border-red-400 focus:border-red-400 focus:ring-red-400/10")}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="jane@company.com"
            className={cn(inputBase, errors.email && "border-red-400 focus:border-red-400 focus:ring-red-400/10")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelBase}>
            Company <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={fields.company}
            onChange={set("company")}
            placeholder="Acme Inc."
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelBase}>
            Service <span className="text-slate-400">(optional)</span>
          </label>
          <select
            id="service"
            value={fields.service}
            onChange={set("service")}
            className={cn(inputBase, "appearance-none bg-[length:1rem] pr-10")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            {aiCategories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="budget" className={labelBase}>
          Budget <span className="text-slate-400">(optional)</span>
        </label>
        <select
          id="budget"
          value={fields.budget}
          onChange={set("budget")}
          className={cn(inputBase, "appearance-none pr-10")}
        >
          <option value="">Select a range…</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelBase}>
          Project details
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={set("message")}
          placeholder="Tell us what you're building and what success looks like…"
          className={cn(inputBase, "resize-none", errors.message && "border-red-400 focus:border-red-400 focus:ring-red-400/10")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-500 via-iris to-aqua px-7 py-3.5 text-[15px] font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
      >
        Send message
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        This is a demo form — submissions aren&apos;t sent anywhere yet.
      </p>
    </form>
  );
}
