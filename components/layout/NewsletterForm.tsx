"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setDone(true);
        setEmail("");
        window.setTimeout(() => setDone(false), 3500);
      }}
      className="mt-4"
    >
      <div className="flex items-center gap-2 rounded-full border border-line bg-white p-1.5 pl-4 shadow-soft transition-colors focus-within:border-blurple-400">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="w-full bg-transparent text-sm text-ink placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-500 text-white transition-all hover:bg-electric-600"
        >
          {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
      <p className="mt-2.5 h-4 text-xs text-slate-400">
        {done ? "Thanks — you're on the list." : "Monthly insights. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}
