import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Makwe Chidubem Joshua — hire a Product Designer, collaborate, or discuss ideas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details: [string, string, string?][] = [
    ["Email", site.email, `mailto:${site.email}`],
    ["Phone", site.phoneDisplay, `tel:${site.phone}`],
    ["LinkedIn", "Makwe Joshua ↗", site.linkedin],
    ["Dribbble", "JoshuaMakwe351 ↗", site.dribbble],
    ["Location", site.location],
  ];

  return (
    <div className="px-5 pb-24 pt-[150px] sm:px-10">
      <div className="mx-auto w-full max-w-content">
        <Reveal className="mb-5.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Contact</Reveal>
        <Reveal as="section">
          <h1 className="mb-5 font-serif text-[clamp(2.4rem,6vw,5rem)] leading-none tracking-[-0.02em]">
            Let&apos;s build something meaningful.
          </h1>
        </Reveal>
        <Reveal className="mb-14 max-w-[56ch] text-[18px] leading-relaxed text-fg2">
          Whether you&apos;re hiring a Product Designer, looking for a freelance collaborator, or just want to discuss ideas, I&apos;d love to hear from you.
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <Reveal><ContactForm /></Reveal>
          <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-border bg-border">
            {details.map(([label, value, href]) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-card px-6 py-5.5 transition-transform duration-500 ease-premium hover:-translate-y-0.5"
                >
                  <div className="text-xs text-muted">{label}</div>
                  <div className="mt-1.5 text-[15px] font-semibold">{value}</div>
                </a>
              ) : (
                <div key={label} className="bg-card px-6 py-5.5">
                  <div className="text-xs text-muted">{label}</div>
                  <div className="mt-1.5 text-[15px] font-semibold">{value}</div>
                </div>
              )
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
