"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import type { Project } from "@/types/project";
import { FILTER_LABELS } from "@/lib/site";

/** Client-side filter + instant search over the project list. */
export function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inFilter =
        filter === "All" ||
        p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()) ||
        (filter === "Admin Dashboard" && p.tags.includes("Admin Dashboard"));
      if (!inFilter) return false;
      if (!q) return true;
      const hay = `${p.title} ${p.category} ${p.subtitle} ${p.tags.join(" ")} ${p.tools}`.toLowerCase();
      return hay.includes(q);
    });
  }, [projects, filter, query]);

  return (
    <>
      <div className="mb-5 flex flex-col gap-5">
        <div className="relative max-w-[520px]">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="search"
            className="field !rounded-full !pl-11"
            placeholder="Search by title, category, tag or tool…"
            aria-label="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {FILTER_LABELS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="rounded-full border border-border px-4 py-2 text-[13.5px] font-medium transition-colors"
              style={{
                background: filter === f ? "var(--fg)" : "transparent",
                color: filter === f ? "var(--bg)" : "var(--fg)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {results.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-8 border-t border-border py-6 transition-transform duration-500 ease-premium hover:-translate-y-0.5 sm:grid-cols-[120px_1fr_auto]"
              >
                <div className="font-mono text-[13px] text-muted">
                  {String(i + 1).padStart(2, "0")} / {p.year}
                </div>
                <div>
                  <div className="font-serif text-[clamp(1.3rem,2.4vw,2rem)] tracking-[-0.01em]">{p.title}</div>
                  <div className="mt-1 hidden text-[14.5px] text-muted sm:block">
                    {p.category} · {p.subtitle}
                  </div>
                </div>
                <div className="text-[22px] text-muted">→</div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
        {results.length === 0 && (
          <div className="border-t border-border py-16 text-[16px] text-muted">
            No projects match that search yet.
          </div>
        )}
      </div>
    </>
  );
}
