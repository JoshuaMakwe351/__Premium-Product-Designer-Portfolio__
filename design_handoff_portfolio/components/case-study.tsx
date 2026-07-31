import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { Gallery } from "./gallery";
import { FeatureVideo } from "./feature-video";
import type { Project } from "@/types/project";

function StoryRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid grid-cols-1 gap-5 border-t border-border py-14 md:grid-cols-[0.5fr_1fr] md:gap-13">
      <h2 className="font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] tracking-[-0.01em]">{title}</h2>
      <div>{children}</div>
    </Reveal>
  );
}

function Chips({ items = [] }: { items?: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {(items ?? []).map((t) => (
        <span key={t} className="rounded-full border border-border px-4 py-2 text-sm">{t}</span>
      ))}
    </div>
  );
}

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  return (
    <article className="px-5 pb-10 pt-[140px] sm:px-10">
      <div className="mx-auto max-w-content">
        <Link href="/work" className="u-link text-sm text-muted">← All work</Link>

        <Reveal className="mb-11 mt-8">
          <div className="mb-4.5 font-mono text-[12.5px] uppercase tracking-[0.1em] text-accent">
            {project.category} · {project.year}
          </div>
          <h1 className="font-serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.02em]">{project.title}</h1>
          <p className="mt-6 max-w-[60ch] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-snug text-fg2">{project.subtitle}</p>
        </Reveal>

        <Reveal className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Duration", project.duration],
            ["Platform", project.platform],
            ["Tools", project.tools],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <div className="text-xs text-muted">{k}</div>
              <div className="mt-1.5 text-[15px] font-semibold">{v}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mb-5">
          <div className="overflow-hidden rounded-[22px] border border-border shadow-soft dark:shadow-soft-dark" style={{ background: project.coverBg }}>
            <Image src={project.hero} alt={`${project.title} hero`} width={2000} height={1400} priority className="w-full" />
          </div>
        </Reveal>

        {project.video && (
          <Reveal className="mb-5 overflow-hidden rounded-[22px] border border-border bg-black shadow-soft dark:shadow-soft-dark">
            <FeatureVideo src={project.video} className="w-full" />
          </Reveal>
        )}

        <StoryRow title="Overview"><p className="text-[17px] leading-relaxed text-fg2">{project.overview}</p></StoryRow>
        <StoryRow title="Problem"><p className="text-[17px] leading-relaxed text-fg2">{project.problem}</p></StoryRow>

        <StoryRow title="Goals">
          <ul className="flex flex-col gap-3.5">
            {(project.goals ?? []).map((g) => (
              <li key={g} className="relative pl-5.5 text-[17px] leading-snug text-fg2">
                <span className="absolute left-0 top-[9px] h-[7px] w-[7px] rounded-full bg-accent" />
                {g}
              </li>
            ))}
          </ul>
        </StoryRow>

        {project.research?.length ? (
          <StoryRow title="Research">
            {project.researchIntro && <p className="mb-5.5 text-[17px] leading-relaxed text-fg2">{project.researchIntro}</p>}
            <Chips items={project.research} />
          </StoryRow>
        ) : null}

        <StoryRow title="Process">
          <p className="text-[17px] leading-relaxed text-fg2">
            {project.process}{" "}
            <Link href="/process" className="u-link text-accent">See my full process →</Link>
          </p>
        </StoryRow>

        {project.features?.length ? (
          <StoryRow title="Key Features">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
              {project.features.map((f) => (
                <div key={f} className="rounded-[14px] border border-border px-4 py-4.5 text-[15px] font-semibold">{f}</div>
              ))}
            </div>
          </StoryRow>
        ) : null}

        {project.decisions?.length ? (
  <StoryRow title="Design Decisions">
  <div className="flex flex-col gap-5.5">
    {project.decisions?.map((d, i) => (
      <div key={i}>
        <strong>{d.h}</strong>
        <p>{d.p}</p>
      </div>
    ))}
  </div>
</StoryRow>
) : null}

        {project.gallery?.length ? (
          <>
            <Reveal className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              High-Fidelity Gallery
            </Reveal>
            <Gallery rows={project.gallery} />
          </>
        ) : null}

        {project.designSystem?.length ? (
          <StoryRow title="Design System"><Chips items={project.designSystem} /></StoryRow>
        ) : null}

        <StoryRow title="Outcome"><p className="text-[17px] leading-relaxed text-fg2">{project.outcome}</p></StoryRow>
        <StoryRow title="Lessons Learned"><p className="text-[17px] leading-relaxed text-fg2">{project.lessons}</p></StoryRow>

        <Reveal className="flex flex-wrap items-center justify-between gap-5 border-t border-border pt-10">
          <Link href={`/work/${prev.slug}`} className="u-link text-sm text-muted">← {prev.title}</Link>
          <Link href={`/work/${next.slug}`} className="u-link font-serif text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.01em]">
            {next.title} →
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
