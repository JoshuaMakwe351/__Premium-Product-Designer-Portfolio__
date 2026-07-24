import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapped to CSS variables defined in app/globals.css (light/dark).
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        fg: "var(--fg)",
        fg2: "var(--fg2)",
        muted: "var(--muted)",
        card: "var(--card)",
        border: "var(--border)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1320px", content: "1180px" },
      boxShadow: {
        soft: "0 24px 60px -20px rgba(17,17,17,.18)",
        "soft-dark": "0 30px 70px -24px rgba(0,0,0,.7)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(.2,.7,.2,1)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        floatA: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(40px,-30px) scale(1.08)" } },
        floatB: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(-50px,40px) scale(1.12)" } },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floatA: "floatA 16s ease-in-out infinite",
        floatB: "floatB 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
