"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-[100] transition-[background,border-color,backdrop-filter] duration-500"
        style={{
          background: scrolled ? "var(--glass)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        }}
      >
        <div className="mx-auto flex h-[70px] max-w-site items-center justify-between px-5 sm:px-10">
          <Link href="/" className="font-serif text-2xl tracking-tight">
            {site.name.split(" ").slice(0, 2).join(" ")}
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 md:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="u-link text-sm font-medium transition-colors"
                  style={{ color: isActive(l.href) ? "var(--fg)" : "var(--muted)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg md:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-border text-[17px] md:hidden"
            >
              {open ? "\u2715" : "\u2630"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-6 bg-bg transition-opacity duration-400 md:hidden"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-serif text-4xl"
            style={{ color: isActive(l.href) ? "var(--fg)" : "var(--muted)" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={site.resume}
          download
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-[15px] font-semibold text-bg"
        >
          Download Resume ↓
        </a>
      </div>
    </>
  );
}
