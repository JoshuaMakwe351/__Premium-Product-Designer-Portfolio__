import { Reveal } from "./reveal";
import { SKILLS } from "@/lib/site";

export function SkillGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px overflow-hidden rounded-[20px] border border-border bg-border">
      {SKILLS.map((title, i) => (
        <Reveal
          key={title}
          className="flex min-h-[120px] flex-col justify-between bg-card px-6 py-7 transition-transform duration-500 ease-premium hover:-translate-y-1"
        >
          <div className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</div>
          <div className="font-serif text-[17px] tracking-[-0.01em]">{title}</div>
        </Reveal>
      ))}
    </div>
  );
}
