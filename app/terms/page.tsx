import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Spark Business Technology website.",
};

const sections = [
  {
    h: "1. Acceptance of terms",
    p: "By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.",
  },
  {
    h: "2. Use of the website",
    p: "You may use this site for lawful purposes only. You agree not to misuse the site or interfere with its normal operation.",
  },
  {
    h: "3. Intellectual property",
    p: "All content, branding, and design on this website are the property of Spark Business Technology unless otherwise stated, and may not be reused without permission.",
  },
  {
    h: "4. Disclaimers",
    p: "The website and its content are provided 'as is' without warranties of any kind, express or implied.",
  },
  {
    h: "5. Limitation of liability",
    p: "Spark Business Technology will not be liable for any damages arising from the use of, or inability to use, this website.",
  },
  {
    h: "6. Changes to these terms",
    p: "We may update these terms from time to time. Continued use of the website constitutes acceptance of the revised terms.",
  },
  {
    h: "7. Contact",
    p: "For questions about these terms, contact hello@sparkbusinesstechnology.com.au.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Last updated: June 2026"
      />
      <Section tone="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="rounded-xl border border-line bg-mist px-5 py-4 text-sm text-slate-500">
              This is a template provided for layout purposes. Please review and
              adapt it with qualified legal counsel before publishing.
            </p>
            {sections.map((s) => (
              <div key={s.h} className="mt-10">
                <h2 className="font-display text-xl font-semibold text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink/75">{s.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
