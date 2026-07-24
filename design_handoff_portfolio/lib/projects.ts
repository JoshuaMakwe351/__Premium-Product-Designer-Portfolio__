import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

/** Read + parse every published project, sorted by featuredOrder. */
export function getAllProjects(): Project[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as ProjectFrontmatter;
    return { ...fm, slug: fm.slug ?? file.replace(/\.mdx$/, ""), body: content.trim() || undefined };
  });
  return projects
    .filter((p) => p.status !== "draft")
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

/** Featured projects for the home "Selected Work" section. */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

/** Previous / next in the ordered list (wraps around). */
export function getAdjacentProjects(slug: string): { prev: Project; next: Project } | null {
  const all = getAllProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i < 0) return null;
  return {
    prev: all[(i - 1 + all.length) % all.length],
    next: all[(i + 1) % all.length],
  };
}
