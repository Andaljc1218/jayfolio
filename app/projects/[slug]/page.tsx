import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatedPill } from '@/components/ui/animated-pill';
import { projects } from '@/lib/data';

const projectsDir = path.join(process.cwd(), 'content', 'projects');

function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

function getAdjacentProjects(slug: string) {
  const featured = projects.filter((p) => p.featured);
  const index = featured.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? featured[index - 1] : null;
  const next = index < featured.length - 1 ? featured[index + 1] : null;
  return { prev, next };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const filePath = path.join(projectsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    parseFrontmatter: true,
  });

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            {project.title}
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            {project.description}
          </p>
        </header>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <AnimatedPill key={t} label={t} delay={i * 0.05} color="blue" />
            ))}
          </div>

          <div
            className="flex flex-wrap gap-4 text-sm"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            <span className="font-mono">
              {project.year} ·{' '}
              <span style={{ color: project.status === 'Completed' ? '#4ade80' : '#fbbf24' }}>
                {project.status}
              </span>
            </span>
            <span className="font-mono">{project.role}</span>
          </div>
        </div>

        <div
          className="prose prose-gray max-w-none"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          <MDXRemote source={mdxSource} />
        </div>

        <footer className="mt-16 pt-8 border-t flex flex-wrap gap-6" style={{ borderColor: 'var(--theme-border)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              GitHub Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Live Demo
            </a>
          )}
        </footer>

        <div
          className="mt-12 pt-8 border-t flex justify-between items-center"
          style={{ borderColor: 'var(--theme-border)' }}
        >
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              <ArrowLeft size={16} />
              Previous: {prev.title}
            </Link>
          )}
          <Link
            href="/projects"
            className="text-sm transition-colors"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            All Projects
          </Link>
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Next: {next.title}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
