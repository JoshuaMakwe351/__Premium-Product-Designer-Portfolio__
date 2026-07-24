import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 pb-11 pt-20 sm:px-10">
      <div className="mx-auto max-w-site">
        <div className="mb-14">
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.1em] text-muted">
            Let&apos;s connect
          </div>
          <a
            href={`mailto:${site.email}`}
            className="u-link font-serif text-3xl leading-tight tracking-tight sm:text-5xl"
          >
            {site.email}
          </a>
        </div>
        <div className="mb-11 flex flex-wrap justify-between gap-10">
          <div className="max-w-[34ch]">
            <div className="mb-3 font-serif text-[22px] tracking-tight">{site.name}</div>
            <p className="text-[15px] leading-relaxed text-muted">
              {site.tagline} Based in {site.location}.
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Menu</div>
              <Link href="/" className="u-link text-[15px]">Home</Link>
              <Link href="/work" className="u-link text-[15px]">Work</Link>
              <Link href="/about" className="u-link text-[15px]">About</Link>
              <Link href="/process" className="u-link text-[15px]">Process</Link>
              <Link href="/resume" className="u-link text-[15px]">Resume</Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Connect</div>
              <a href={`mailto:${site.email}`} className="u-link text-[15px]">Email</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="u-link text-[15px]">LinkedIn ↗</a>
              <a href={site.dribbble} target="_blank" rel="noopener noreferrer" className="u-link text-[15px]">Dribbble ↗</a>
              <a href={site.resume} download className="u-link text-[15px]">Resume ↓</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <span className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}</span>
          <span className="font-mono text-[12.5px] text-muted">{site.location} · Available for work</span>
        </div>
      </div>
    </footer>
  );
}
