import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import type { Project } from "@/types/project";

/**
 * Large alternating "Selected Work" card used on the home page.
 * Even index = image left; odd index = image right.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal
      className={`mb-[120px] grid grid-cols-1 items-center gap-14 md:grid-cols-2 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group overflow-hidden rounded-[20px] border border-border shadow-soft dark:shadow-soft-dark"
        style={{ background: project.coverBg }}
      >
        <Image
          src={project.cover}
          alt={project.title}
          width={1400}
          height={1000}
          className="w-full transition-transform duration-700 ease-premium group-hover:-translate-y-2"
        />
      </Link>
      <div>
        <div className="mb-4 flex gap-3.5 font-mono text-[12.5px] text-muted">
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.category}</span>
        </div>
        <h3 className="mb-4 font-serif text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.05] tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="mb-7 max-w-[46ch] text-[16.5px] leading-relaxed text-fg2">
          {project.description}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-[14.5px] font-semibold transition-transform duration-300 ease-premium hover:-translate-y-0.5"
        >
          View Case Study →
        </Link>
      </div>
    </Reveal>
  );
}
