import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { getAdjacentProjects, getProject, getProjectSlugs } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.description,
      url: `${site.url}/work/${project.slug}`,
      images: [{ url: project.cover, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.description, images: [project.cover] },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const adjacent = getAdjacentProjects(slug);
  if (!project || !adjacent) notFound();
  return <CaseStudy project={project} prev={adjacent.prev} next={adjacent.next} />;
}
