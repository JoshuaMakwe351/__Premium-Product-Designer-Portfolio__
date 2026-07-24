import { Reveal } from "./reveal";
import { PROCESS } from "@/lib/site";

export function Timeline() {
  return (
    <div className="mt-16">
      {PROCESS.map((p, i) => (
        <Reveal key={p.title} className="grid grid-cols-[64px_1fr] gap-7 pb-11">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            {i < PROCESS.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
          </div>
          <div className="pb-3">
            <h3 className="mb-2.5 font-serif text-[clamp(1.3rem,2.2vw,1.7rem)] tracking-[-0.01em]">{p.title}</h3>
            <p className="max-w-[56ch] text-[16px] leading-relaxed text-fg2">{p.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
