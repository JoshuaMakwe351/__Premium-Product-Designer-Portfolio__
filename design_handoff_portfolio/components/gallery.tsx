"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";
import type { GalleryRow } from "@/types/project";

const GRID: Record<GalleryRow["layout"], string> = {
  single: "grid-cols-1",
  two: "grid-cols-1 md:grid-cols-2",
  three: "grid-cols-1 md:grid-cols-3",
  phone: "grid-cols-1 max-w-[460px] mx-auto",
};

/**
 * High-fidelity gallery with a keyboard-navigable lightbox
 * (← / → to step, Esc to close, click backdrop to dismiss).
 */
export function Gallery({ rows }: { rows: GalleryRow[] }) {
  const flat = rows.flatMap((r) => r.items);
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + flat.length) % flat.length)),
    [flat.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  let counter = -1;
  return (
    <>
      {rows.map((row, ri) => (
        <div key={ri} className={`mb-5 grid gap-5 ${GRID[row.layout]}`}>
          {row.items.map((it) => {
            counter += 1;
            const idx = counter;
            return (
              <Reveal
                key={it.src}
                as="article"
                className="overflow-hidden rounded-[18px] border border-border shadow-soft dark:shadow-soft-dark"
              >
                <button type="button" onClick={() => setIndex(idx)} className="block w-full" style={{ background: it.bg }}>
                  <Image
                    src={it.src}
                    alt={it.caption ?? ""}
                    width={2000}
                    height={1400}
                    className="zoomable w-full transition-transform duration-700 ease-premium hover:scale-[1.02]"
                  />
                </button>
                {it.caption && (
                  <figcaption className="border-t border-border bg-card px-[18px] py-3.5 text-[13.5px] text-muted">
                    {it.caption}
                  </figcaption>
                )}
              </Reveal>
            );
          })}
        </div>
      ))}

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex cursor-zoom-out flex-col items-center justify-center p-[5vw] backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,.92)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <Image
              src={flat[index].src}
              alt={flat[index].caption ?? ""}
              width={2400}
              height={1600}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] w-auto cursor-default rounded-[14px] object-contain"
            />
            {flat[index].caption && (
              <div className="mt-4 max-w-[60ch] text-center text-sm text-white/75">{flat[index].caption}</div>
            )}
            <button aria-label="Close" onClick={close} className="absolute right-8 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <X size={20} />
            </button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <ChevronLeft size={22} />
            </button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
