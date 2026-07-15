import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Spark Business Technology collects, uses, and protects your information.",
};

const sections = [
  {
    h: "1. Introduction",
    p: "This Privacy Policy explains how Spark Business Technology collects, uses, and safeguards information when you visit our website or engage our services.",
  },
  {
    h: "2. Information we collect",
    p: "We may collect contact details you provide (such as your name, email, and company), along with standard analytics data about how you use our site.",
  },
  {
    h: "3. How we use your information",
    p: "We use your information to respond to enquiries, deliver and improve our services, and communicate updates you have opted in to receive.",
  },
  {
    h: "4. Cookies & analytics",
    p: "Our website may use cookies and similar technologies to understand usage and improve your experience. You can control cookies through your browser settings.",
  },
  {
    h: "5. Data security",
    p: "We apply appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse.",
  },
  {
    h: "6. Your rights",
    p: "You may request access to, correction of, or deletion of your personal data at any time by contacting us using the details below.",
  },
  {
    h: "7. Contact us",
    p: "Questions about this policy? Email hello@sparkbusinesstechnology.com.au and we'll be glad to help.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: June 2026"
      />
      <Section tone="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="rounded-xl border border-line bg-mist px-5 py-4 text-sm text-slate-500">
              This is a template policy provided for layout purposes. Please review
              and adapt it with qualified legal counsel before publishing.
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
