export type GalleryLayout = "single" | "two" | "three" | "phone";

export interface GalleryItem {
  src: string;
  caption?: string;
  bg?: string;
}

export interface GalleryRow {
  layout: GalleryLayout;
  items: GalleryItem[];
}

export interface Decision {
  h: string;
  p: string;
}

/**
 * ProjectFrontmatter maps 1:1 to the YAML frontmatter of each
 * content/projects/*.mdx file. This is the single source of truth for a
 * project — cards, the work list, filters, the case study page, prev/next
 * and SEO metadata all derive from it. Add a project by dropping a new .mdx
 * file into content/projects and its images into public/assets.
 */
export interface ProjectFrontmatter {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  category: string;
  role: string;
  duration: string;
  platform: string;
  tools: string;
  status: "published" | "draft";
  featured: boolean;
  featuredOrder: number;
  tags: string[];
  coverBg: string;
  cover: string;
  hero: string;
  video?: string;
  overview: string;
  problem: string;
  goals: string[];
  researchIntro?: string;
  research?: string[];
  process: string;
  features?: string[];
  decisions?: Decision[];
  gallery?: GalleryRow[];
  designSystem?: string[];
  outcome: string;
  lessons: string;
}

export interface Project extends ProjectFrontmatter {
  /** Rendered MDX body (optional long-form content). */
  body?: string;
}
