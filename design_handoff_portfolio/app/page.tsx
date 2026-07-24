import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SkillGrid } from "@/components/skill-grid";
import { FeatureVideo } from "@/components/feature-video";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { getFeaturedProjects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";

const MARQUEE = ["Enterprise SaaS", "Fintech", "AI Products", "Dashboards", "Mobile Apps", "Design Systems", "Web Applications"];

export default function HomePage() {
  const featured = getFeaturedProjects();
  const titan = getProject("titan-industries");

  return (
    <>
      <Hero />

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border bg-bg2 py-6">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-14 whitespace-nowrap pr-14 font-serif text-xl text-muted">
              {MARQUEE.map((m) => (
                <span key={m} className="flex items-center gap-14"><span>{m}</span><span>·</span></span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Featured cinematic — Titan Industries */}
      {titan && (
        <section className="px-5 py-32 sm:px-10">
          <div className="mx-auto max-w-site">
            <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="mb-3.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Featured · {titan.year}</div>
                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-tight tracking-[-0.02em]">Titan Industries — AI Defense Concept</h2>
              </div>
              <Link href={`/work/${titan.slug}`} className="u-link whitespace-nowrap text-[15px] font-semibold">View case study →</Link>
            </Reveal>
            <Reveal className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-black shadow-soft dark:shadow-soft-dark">
              {titan.video && <FeatureVideo src={titan.video} className="h-full w-full object-cover" />}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-5 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                <p className="max-w-[52ch] text-base leading-snug opacity-90">
                  A concept landing page for an AI-powered defense company — brutalist typography, a cinematic product hero, and a confident editorial grid built to command attention.
                </p>
                <div className="flex gap-5 font-mono text-[13px] opacity-85"><span>Web</span><span>Landing page</span><span>Branding</span></div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Selected Work */}
      <section className="px-5 pb-32 sm:px-10">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-16 flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-muted">02</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.02em]">Selected Work</h2>
          </Reveal>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
          <Reveal className="flex justify-center">
            <Link href="/work" className="u-link text-[15px] font-semibold text-muted">See all work →</Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-bg2 px-5 py-32 sm:px-10">
        <div className="mx-auto max-w-[1000px]">
          <Reveal className="mb-8 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Design Philosophy</Reveal>
          <Reveal>
            <p className="font-serif text-[clamp(1.7rem,3.4vw,3rem)] leading-[1.22] tracking-[-0.01em]">
              Great design should solve real problems — not just look beautiful. Every decision should balance{" "}
              <span className="text-muted">user needs, business goals, accessibility</span> and{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-[6px]">long-term scalability</span>.
            </p>
          </Reveal>
          <Reveal className="mt-10 text-[15px] text-fg2">— {site.name}</Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="px-5 py-32 sm:px-10">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-14 flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-muted">03</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.02em]">Featured Skills</h2>
          </Reveal>
          <SkillGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-36 pt-14 sm:px-10">
        <Reveal className="relative mx-auto max-w-site overflow-hidden rounded-[28px] bg-fg p-[clamp(48px,7vw,96px)] text-bg">
          <div className="absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full opacity-50 blur-[40px]" style={{ background: "radial-gradient(circle, var(--accent2), transparent 70%)" }} />
          <div className="relative">
            <h2 className="max-w-[16ch] font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight tracking-[-0.02em]">Have a product worth designing well?</h2>
            <p className="mt-5.5 max-w-[48ch] text-[17px] leading-relaxed opacity-75">
              I&apos;m open to select product design engagements across AI, fintech and enterprise SaaS.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <Magnetic href="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-bg px-7 py-4 text-[15px] font-semibold text-fg">Start a conversation →</Magnetic>
              <a href={site.resume} download className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold">Download Resume ↓</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
