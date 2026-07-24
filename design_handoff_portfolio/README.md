# Makwe Chidubem Joshua — Portfolio (Next.js 15 + TypeScript + MDX)

A premium, production-ready portfolio for **Makwe Chidubem Joshua, Product Designer**. Built as a scalable, data-driven system: every project is a single MDX file, and cards, the work list, filters, case-study pages, prev/next, and SEO metadata all generate automatically.

> **This is a real, deployable codebase** — not just a design reference. It mirrors the interactive HTML design prototype (see `reference/Portfolio.dc.html`) in a Next.js App Router app using the project's real patterns. Recreate/adjust against your own conventions freely.

---

## Tech stack

- **Next.js 15** (App Router, React Server Components, TypeScript)
- **Tailwind CSS** (design tokens as CSS variables → Tailwind theme)
- **Framer Motion** (scroll reveals, magnetic buttons, gallery lightbox, filter transitions)
- **Lenis** (smooth scrolling, disabled under `prefers-reduced-motion`)
- **next-themes** (light / dark / system, persisted)
- **lucide-react** (icons)
- **gray-matter** (MDX frontmatter parsing)

Designed for **Vercel** — push to GitHub and import; zero config needed.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

Set your production domain in `lib/site.ts` (`site.url`) so Open Graph, canonical URLs and the sitemap resolve correctly.

---

## Architecture

```
app/
  layout.tsx            Root layout: fonts, global SEO/metadata, JSON-LD Person, providers, nav/footer/cursor/back-to-top
  providers.tsx         next-themes + Lenis (client)
  globals.css           CSS variables (light/dark tokens), base styles, focus-visible, reduced-motion
  page.tsx              Home: hero, marquee, featured cinematic (Titan), Selected Work, philosophy, skills, CTA
  work/page.tsx         Work index (client filter + search via components/work-list)
  work/[slug]/page.tsx  Case study — generateStaticParams + generateMetadata (per-project SEO/OG)
  about/page.tsx        About
  process/page.tsx      8-stage design-process timeline
  resume/page.tsx       Résumé (summary, experience timeline, projects, skills, education, contact, View/Download)
  contact/page.tsx      Contact (form + details)
  not-found.tsx         404 ("Looks like you're off the grid.")
  sitemap.ts            Dynamic sitemap (static routes + every project)
  robots.ts             robots.txt

components/              Navbar, Footer, Hero, ProjectCard, WorkList, CaseStudy, Gallery (lightbox),
                        FeatureVideo (viewport pause), Timeline, SkillGrid, ContactForm, ThemeToggle,
                        CursorGlow, BackToTop, Reveal, Magnetic

content/projects/*.mdx  THE CONTENT LAYER — one file per project (frontmatter = all project data)
lib/projects.ts         Reads/parses MDX, provides getAllProjects / getProject / getFeatured / getAdjacent
lib/site.ts             Site constants, filter labels, skills list, process steps
types/project.ts        ProjectFrontmatter / Project / Gallery types
public/assets/          All project images, the cinematic video, and resume.pdf
reference/              The original interactive HTML design prototype (source of truth for look & motion)
```

### Data flow (why it's scalable)

`content/projects/*.mdx` → `gray-matter` (in `lib/projects.ts`) → typed `Project[]` → consumed by every page/component. No project data is hardcoded in the UI.

---

## Adding a new project (no redesign required)

1. Add images to `public/assets/` (e.g. `public/assets/myproject-hero.png`).
2. Create `content/projects/my-project.mdx` with frontmatter (copy an existing file as a template).
3. Set `featured: true` + a `featuredOrder` to show it on the home page; set `status: draft` to hide it.
4. Done — the card, work-list row, filters, case-study page (`/work/my-project`), prev/next links, and sitemap entry all appear automatically.

### Frontmatter reference (see `types/project.ts`)

| Field | Type | Notes |
|---|---|---|
| `slug` | string | URL segment → `/work/<slug>` |
| `title`, `subtitle`, `description` | string | Card + hero + meta descriptions |
| `year`, `category`, `role`, `duration`, `platform`, `tools` | string | Meta grid |
| `status` | `published \| draft` | `draft` hides it everywhere |
| `featured`, `featuredOrder` | boolean, number | Home "Selected Work" |
| `tags` | string[] | Powers Work-page filters |
| `coverBg` | string | CSS color behind screenshots (matches app chrome) |
| `cover`, `hero` | string | `/assets/…` paths |
| `video` | string? | Optional MP4 — autoplays, pauses off-screen |
| `overview`, `problem`, `process`, `outcome`, `lessons` | string | Case-study prose |
| `goals` | string[] | Bulleted |
| `research`, `researchIntro` | string[]?, string? | Reference chips (section hidden if absent) |
| `features` | string[]? | Feature grid (hidden if absent) |
| `decisions` | `{h,p}[]?` | Design-decision blocks |
| `gallery` | `{layout,items[]}[]?` | `layout`: `single \| two \| three \| phone`; items `{src,caption?,bg?}` |
| `designSystem` | string[]? | Chips |

To migrate to a **CMS** (Sanity / Contentful / Notion / Hygraph) later: keep this same shape and replace the body of `lib/projects.ts` with a CMS fetch. No UI changes needed.

---

## Fidelity

**High-fidelity.** The `reference/Portfolio.dc.html` prototype is the authoritative source for exact colors, type, spacing, motion, and behavior. Recreate pixel-close.

## Design tokens

Defined as CSS variables in `app/globals.css` (light `:root` + `.dark`) and exposed to Tailwind in `tailwind.config.ts`.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#08080a` |
| `--bg2` | `#f8f8f8` | `#101013` |
| `--fg` | `#111111` | `#f7f7f8` |
| `--fg2` | `#2d2d2d` | `#c9c9cf` |
| `--muted` | `#6e6e73` | `#8b8b93` |
| `--border` | `rgba(17,17,17,.10)` | `rgba(255,255,255,.12)` |
| `--card` | `#ffffff` | `#111114` |
| `--glass` | `rgba(255,255,255,.72)` | `rgba(18,18,22,.66)` |
| `--accent` | `#4f46e5` | `#7c74ff` |
| `--accent2` | `#6d5cff` | `#9d90ff` |

**Type:** Display = **Instrument Serif** (`--font-instrument-serif`); Body/UI = **Manrope** (`--font-manrope`); labels = **Geist Mono** (`--font-geist-mono`) — all via `next/font/google` in `app/layout.tsx`.
**Radius:** cards 18–22px, pills 100px. **Shadow:** `shadow-soft` / `shadow-soft-dark`. **Easing:** `cubic-bezier(.2,.7,.2,1)`.

---

## Interactions & behavior

- **Smooth scroll** via Lenis (off when reduced-motion).
- **Scroll reveal** — `components/reveal.tsx` (Framer Motion `whileInView`, once).
- **Magnetic buttons** — `components/magnetic.tsx`.
- **Navbar** — transparent at top, glass + hairline border on scroll; desktop links, mobile full-screen menu.
- **Theme** — light/dark/system, persisted, no transition flash.
- **Gallery lightbox** — click to open; ←/→ step, Esc/backdrop close; captions.
- **Video** — autoplay muted loop, **pauses when scrolled out of viewport** (IntersectionObserver); shows controls on hover.
- **Contact form** — client validation + loading/success/error states; composes a `mailto:` by default (see below).
- **Cursor glow** (fine-pointer only), **back-to-top** FAB.
- **Accessibility** — semantic landmarks, `:focus-visible` rings, ARIA labels, `aria-expanded` menu, JSON-LD Person, reduced-motion.

---

## Things to wire up before launch

1. **`site.url`** in `lib/site.ts` — your real domain (needed for OG/canonical/sitemap).
2. **Contact form delivery** — `components/contact-form.tsx` currently opens the user's mail client via `mailto:`. For real submissions, replace `handleSubmit` with a `fetch("/api/contact")` to a Route Handler, or use Formspree / Resend / Web3Forms. The loading/success/error UI is already in place.
3. **Content truth pass** — the Problem / Design Decisions / Outcome / Lessons prose and some research reference lists (Nestly, Titan) were drafted to fit each story. Review and replace with your real narrative and metrics directly in the `.mdx` files.
4. **Verify links** — LinkedIn (`/in/makwe-joshua`) and Dribbble handle in `lib/site.ts`.
5. **OG image** — currently the FlowSync dashboard; swap `site.ogImage` or add a dedicated 1200×630 share image.
6. **shadcn/ui** — components are hand-rolled with Tailwind; add shadcn if you prefer its primitives.

---

## Screens

- **Home** `/` — Hero (badge, headline, dual CTA, animated blobs) → marquee → featured cinematic (Titan video) → Selected Work (alternating cards) → philosophy → 17 skill cards → CTA.
- **Work** `/work` — heading, search + filter chips (All/AI/Fintech/SaaS/Travel/Landing Page/Mobile/Web/Dashboard/Admin), animated project rows.
- **Case study** `/work/[slug]` — hero image (+ optional video), meta grid, Overview → Problem → Goals → Research → Process → Key Features → Design Decisions → Hi-Fi Gallery → Design System → Outcome → Lessons → prev/next.
- **Process** `/process` — 8-stage vertical timeline.
- **About** `/about`, **Resume** `/resume`, **Contact** `/contact`, **404** `/not-found`.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel (framework auto-detected as Next.js).
3. Deploy. Add your custom domain and update `site.url`.

_Assets currently load from `/public/assets` via `next/image`. Add `images.remotePatterns` in `next.config.mjs` if you later serve from a CDN/CMS._
