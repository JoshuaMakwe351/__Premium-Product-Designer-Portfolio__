import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Design Process",
  description: "How Makwe Chidubem Joshua moves from a fuzzy problem to a shipped product — an eight-stage, evidence-led design process.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="px-5 pb-32 pt-[150px] sm:px-10">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <div className="mb-4.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-accent">Design Process</div>
          <h1 className="max-w-[18ch] font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.04] tracking-[-0.02em]">
            How I move from a fuzzy problem to a shipped product.
          </h1>
          <p className="mt-5.5 max-w-[60ch] text-[18px] leading-relaxed text-fg2">
            A repeatable, evidence-led process — flexible in the details, consistent in the discipline.
          </p>
        </Reveal>
        <Timeline />
        <Reveal className="mt-5 flex flex-wrap gap-3.5">
          <Link href="/work" className="inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 text-[15px] font-semibold text-bg">See the work →</Link>
          <Link href="/contact" className="inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-[15px] font-semibold">Work with me</Link>
        </Reveal>
      </div>
    </div>
  );
}
