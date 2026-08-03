import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const projectsDir = path.join(process.cwd(), 'content', 'projects');

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: string;
  github?: string;
  demo?: string;
}

function getProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(projectsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: Partial<Project> = {};
    if (frontmatterMatch) {
      frontmatterMatch[1].split('\n').forEach((line) => {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim().replace(/^["']|["']$/g, '');
        if (key.trim() === 'tech') {
          frontmatter.tech = value.split(',').map((v) => v.trim());
        } else if (key.trim() === 'github') {
          frontmatter.github = value;
        } else if (key.trim() === 'demo') {
          frontmatter.demo = value;
        } else {
          (frontmatter as Record<string, string>)[key.trim()] = value;
        }
      });
    }
    return { slug, ...frontmatter } as Project;
  });
}

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);

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

  return (
    <main className="min-h-screen pt-16">
      <article className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-project mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm transition-colors mb-8"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            ← Back to Projects
          </Link>

          <header className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
              style={{ color: 'var(--theme-text)' }}
            >
              {project.title}
            </h1>
            <p
              className="text-lg mb-4"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 border text-xs font-medium rounded-full"
                  style={{
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text-secondary)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </header>

          <div
            className="border-t mb-12"
            style={{ borderColor: 'var(--theme-border)' }}
          />

          <div className="prose prose-gray max-w-none" style={{ color: 'var(--theme-text-secondary)' }}>
            <MDXRemote source={mdxSource} />
          </div>

          <footer className="mt-16 pt-8 border-t flex flex-wrap gap-6" style={{ borderColor: 'var(--theme-border)' }}>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                GitHub Repository
                <ArrowUpRight size={14} />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Live Demo
                <ArrowUpRight size={14} />
              </Link>
            )}
          </footer>
        </div>
      </article>
    </main>
  );
}