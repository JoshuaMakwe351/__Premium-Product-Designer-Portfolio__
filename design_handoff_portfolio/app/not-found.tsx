import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-5 py-40 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-floatA absolute left-1/2 top-[30%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]" style={{ background: "radial-gradient(circle, var(--accent2), transparent 70%)" }} />
      </div>
      <div className="relative bg-gradient-to-br from-fg to-muted bg-clip-text font-serif text-[clamp(6rem,20vw,16rem)] leading-none tracking-[-0.03em] text-transparent">
        404
      </div>
      <h1 className="relative mb-3 font-serif text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.01em]">
        Looks like you&apos;re off the grid.
      </h1>
      <p className="relative mb-8 text-[17px] text-fg2">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="relative inline-flex items-center gap-2.5 rounded-full bg-fg px-7 py-3.5 text-[15px] font-semibold text-bg">
        Return Home →
      </Link>
    </div>
  );
}
