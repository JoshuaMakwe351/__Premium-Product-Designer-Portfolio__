"use client";

import { useEffect, useState } from "react";

/** Soft glowing cursor follower — desktop / fine-pointer only. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[190] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[2px]"
      style={{ left: pos.x, top: pos.y, background: "var(--accent)" }}
    />
  );
}
