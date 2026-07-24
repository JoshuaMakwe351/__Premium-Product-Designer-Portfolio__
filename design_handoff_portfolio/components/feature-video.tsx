"use client";

import { useEffect, useRef, useState } from "react";

/** Autoplays when in view, pauses when scrolled away. */
export function FeatureVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [controls, setControls] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      controls={controls}
      preload="metadata"
      onMouseEnter={() => setControls(true)}
      onMouseLeave={() => setControls(false)}
      className={className}
    />
  );
}
