import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Makwe Chidubem Joshua — a Product Designer creating modern, intuitive, visually engaging digital experiences.",
  alternates: { canonical: "/about" },
};

const DISCIPLINES = ["Enterprise SaaS", "Fintech", "AI Products", "Dashboards", "Mobile Apps", "Design Systems", "Web Applications"];

export default function AboutPage() {
  return (
    <div className="px-5 pb-32 pt-[150px] sm:px-10">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <div className="mb-4.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">About Me</div>
          <h1 className="max-w-[20ch] font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.06] tracking-[-0.02em]">
            Creating modern, intuitive, visually engaging digital experiences.
          </h1>
        </Reveal>
        <Reveal className="mt-14 grid max-w-[66ch] grid-cols-1 gap-6.5 text-[18px] leading-[1.75] text-fg2">
          <p>
            I&apos;m <span className="font-medium text-fg">Makwe Chidubem Joshua</span>, a Product Designer passionate about creating modern, intuitive, and visually engaging digital experiences.
          </p>
          <p>
            I enjoy transforming complex ideas into simple, user-centered interfaces that are functional, scalable, and enjoyable to use. Using Figma as my primary design tool, I design AI-powered products, fintech platforms, enterprise SaaS solutions, mobile applications, and web experiences with a strong focus on usability and product thinking.
          </p>
        </Reveal>
        <Reveal className="mt-[70px]">
          <div className="mb-5.5 font-mono text-xs uppercase tracking-[0.1em] text-muted">What I design</div>
          <div className="flex flex-wrap gap-3">
            {DISCIPLINES.map((d) => (
              <span key={d} className="rounded-full border border-border px-5 py-2.5 text-[15px] font-medium">{d}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-[70px] rounded-[22px] border border-border bg-bg2 p-[clamp(32px,5vw,56px)]">
          <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.1em] text-muted">My Philosophy</div>
          <p className="font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.35] tracking-[-0.01em]">
            Great design should solve real problems — not just look beautiful. Every design decision should balance user needs, business goals, accessibility, and long-term scalability.
          </p>
        </Reveal>
        <Reveal className="mt-11 flex flex-wrap gap-3.5">
          <Link href="/process" className="inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 text-[15px] font-semibold text-bg">My design process →</Link>
          <Link href="/resume" className="inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-[15px] font-semibold">View resume</Link>
        </Reveal>
      </div>
    </div>
  );
}
