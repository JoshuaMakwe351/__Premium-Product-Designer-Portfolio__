import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé of Makwe Chidubem Joshua — Product Designer. Experience, selected projects, skills and education.",
  alternates: { canonical: "/resume" },
};

const EXPERIENCE_POINTS = [
  "Designed the Paystack request-payment flow for mobile & web, simplifying how users request payments.",
  "Designed the Stripe payment flow across platforms — fast, intuitive and secure.",
  "Collaborated with the CEO and developers to translate requirements into production-ready flows, wireframes and high-fidelity Figma designs.",
  "Delivered designs successfully implemented and currently live in production.",
];
const PROJECTS = [
  ["MP-USDC Gateway — Fintech Wallet", "Secure auth, send/receive, on/off-ramp flows and transaction tracking, built to earn the trust of first-time, non-technical users."],
  ["AI-Powered Shopping Platform", "Smart onboarding, body-measurement capture, AI-chat guided interactions and a fit & style setup system."],
  ["Travel & Visa Assistance App", "Guided onboarding, destination discovery, visa-requirement breakdowns and a document checklist system."],
];
const SKILLS = ["UI & UX Design", "User Flows & Information Architecture", "Wireframing & Prototyping", "Interaction Design & Variants", "Design Systems & Component Libraries", "Usability Testing & Accessibility", "Product Thinking & Problem Framing", "Mobile & Web App Design"];

export default function ResumePage() {
  return (
    <div className="px-5 pb-32 pt-[150px] sm:px-10">
      <div className="mx-auto max-w-content">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Resume</div>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-0.02em]">{site.name}</h1>
            <p className="mt-3 text-[18px] text-fg2">Product Designer · {site.location}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-[15px] font-semibold">View Resume ↗</a>
            <a href={site.resume} download className="inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 text-[15px] font-semibold text-bg">Download ↓</a>
          </div>
        </Reveal>

        <Reveal className="mb-14 rounded-[20px] border border-border bg-bg2 p-[clamp(28px,4vw,44px)]">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">Professional Summary</div>
          <p className="text-[17.5px] leading-relaxed text-fg2">
            UI/UX and Product Designer with hands-on experience designing scalable mobile and web applications across fintech, healthcare, travel and AI-powered platforms. I transform complex workflows into intuitive, accessible experiences through research-driven design, structured information architecture, and high-fidelity prototyping in Figma — building systems that balance user needs with business objectives.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal className="mb-13">
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.1em] text-muted">Experience</div>
              <div className="relative border-l-2 border-border pl-6.5">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap justify-between gap-4">
                  <div className="font-serif text-[19px]">UI/UX &amp; Product Designer — Easyspend</div>
                  <div className="font-mono text-[13px] text-muted">May–Jul 2026</div>
                </div>
                <div className="mb-4 mt-1 text-sm text-muted">Fintech Startup · Contract</div>
                <ul className="flex flex-col gap-3">
                  {EXPERIENCE_POINTS.map((p) => (
                    <li key={p} className="relative pl-5 text-[15.5px] leading-relaxed text-fg2">
                      <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-accent" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.1em] text-muted">Selected Projects</div>
              <div className="flex flex-col gap-6">
                {PROJECTS.map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border p-5.5">
                    <div className="font-serif text-[17px]">{t}</div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-fg2">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal className="mb-11">
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.1em] text-muted">Core Skills</div>
              <div className="flex flex-col gap-2.5 text-[15px] text-fg2">
                {SKILLS.map((s) => <div key={s}>{s}</div>)}
              </div>
            </Reveal>
            <Reveal className="mb-11">
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.1em] text-muted">Tools</div>
              <div className="text-[15px] leading-relaxed text-fg2">Figma — Wireframing, Prototyping, Auto-layout, Components, Variants</div>
            </Reveal>
            <Reveal className="mb-11">
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.1em] text-muted">Education</div>
              <div className="font-serif text-[16px]">B.A. Philosophy</div>
              <div className="mt-1 text-[15px] text-fg2">Nnamdi Azikiwe University</div>
              <div className="mt-1 font-mono text-[13px] text-muted">2021 – 2025</div>
            </Reveal>
            <Reveal>
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.1em] text-muted">Contact</div>
              <div className="flex flex-col gap-2.5 text-[15px]">
                <a href={`mailto:${site.email}`} className="u-link">{site.email}</a>
                <a href={`tel:${site.phone}`} className="u-link">{site.phoneDisplay}</a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="u-link">LinkedIn ↗</a>
                <a href={site.dribbble} target="_blank" rel="noopener noreferrer" className="u-link">Dribbble ↗</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
