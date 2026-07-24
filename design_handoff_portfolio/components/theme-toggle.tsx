"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, MonitorSmartphone } from "lucide-react";

/** Cycles light → dark → system. */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const cycle = () => {
    const order = ["light", "dark", "system"] as const;
    const current = (theme as (typeof order)[number]) ?? "system";
    setTheme(order[(order.indexOf(current) + 1) % 3]);
  };

  const Icon = !mounted ? Sun : theme === "dark" ? Sun : theme === "light" ? Moon : MonitorSmartphone;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label="Toggle theme (light, dark, system)"
      title={`Theme: ${mounted ? theme : "system"}`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg"
    >
      <Icon size={16} />
    </button>
  );
}
