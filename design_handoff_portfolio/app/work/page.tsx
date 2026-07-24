import type { Metadata } from "next";
import Link from "next/link";
import { WorkList } from "@/components/work-list";
import { Reveal } from "@/components/reveal";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in AI, fintech and enterprise software by Makwe Chidubem Joshua.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const projects = getAllProjects();
  return (
    <div className="px-5 pb-32 pt-[150px] sm:px-10">
      <div className="mx-auto max-w-site">
        <Reveal className="mb-11">
          <div className="mb-4.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Work</div>
          <h1 className="max-w-[16ch] font-serif text-[clamp(2.6rem,6vw,5rem)] leading-none tracking-[-0.02em]">
            Case studies in AI, fintech &amp; enterprise software.
          </h1>
        </Reveal>
        <WorkList projects={projects} />
        <Reveal className="mt-16 flex justify-center">
          <Link href="/process" className="u-link text-[15px] font-semibold text-muted">See how I work — Design Process →</Link>
        </Reveal>
      </div>
    </div>
  );
}
