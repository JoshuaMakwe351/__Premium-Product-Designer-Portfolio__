"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "./magnetic";
import { site } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const, delay },
        };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-10">
      {/* Animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-floatA absolute left-[8%] top-[8%] h-[520px] w-[520px] rounded-full opacity-30 blur-[80px]" style={{ background: "radial-gradient(circle at 30% 30%, var(--accent2), transparent 70%)" }} />
        <div className="animate-floatB absolute bottom-[2%] right-[6%] h-[600px] w-[600px] rounded-full opacity-25 blur-[90px]" style={{ background: "radial-gradient(circle at 60% 40%, var(--accent), transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-site">
        <motion.div {...rise(0)} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-[var(--glass)] px-3.5 py-1.5 text-[12.5px] font-medium text-muted backdrop-blur">
          <span className="h-[7px] w-[7px] rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,.18)]" />
          Available for select product design work
        </motion.div>
        <motion.h1 {...rise(0.08)} className="max-w-[16ch] font-serif text-[clamp(3rem,7.2vw,7.4rem)] leading-[0.98] tracking-[-0.02em]">
          Product designer crafting <span className="text-muted">AI, Fintech &amp; SaaS</span> experiences.
        </motion.h1>
        <motion.p {...rise(0.16)} className="mt-7 max-w-[60ch] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-relaxed text-fg2">
          {site.description.split("—")[1]?.trim() ?? site.tagline}
        </motion.p>
        <motion.div {...rise(0.24)} className="mt-11 flex flex-wrap gap-3.5">
          <Magnetic href="/work" className="inline-flex items-center gap-2.5 rounded-full bg-fg px-7 py-4 text-[15px] font-semibold text-bg">
            View My Work →
          </Magnetic>
          <a href={site.resume} download className="inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-4 text-[15px] font-semibold">
            Download Resume ↓
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-muted">
        SCROLL
        <span className="h-9 w-px" style={{ background: "linear-gradient(var(--muted), transparent)" }} />
      </div>
    </section>
  );
}
