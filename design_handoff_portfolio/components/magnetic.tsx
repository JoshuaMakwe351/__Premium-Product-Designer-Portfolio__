"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Magnetic hover wrapper — the child drifts toward the cursor and springs back.
 * Render as a link or button via `as`.
 */
export function Magnetic({
  children,
  className,
  href,
  onClick,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${
      (e.clientY - r.top - r.height / 2) * (strength + 0.12)
    }px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const props = {
    ref: ref as never,
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { transition: "transform 0.3s cubic-bezier(.2,.7,.2,1)" },
  };

  if (href) return <a href={href} {...props}>{children}</a>;
  return <button type="button" onClick={onClick} {...props}>{children}</button>;
}
