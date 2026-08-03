import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import ProjectCard from '../../components/project/project-card';

const projectsDir = path.join(process.cwd(), 'content', 'projects');

function getProjects() {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(projectsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: Record<string, string | string[]> = {};
    if (frontmatterMatch) {
      frontmatterMatch[1].split('\n').forEach((line) => {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim().replace(/^["']|["']$/g, '');
        if (key.trim() === 'tech') {
          frontmatter[key.trim()] = value.split(',').map((v) => v.trim());
        } else {
          frontmatter[key.trim()] = value;
        }
      });
    }
    return {
      slug,
      title: String(frontmatter.title || slug),
      description: String(frontmatter.description || ''),
      tech: (frontmatter.tech as string[]) || [],
      year: String(frontmatter.year || ''),
      status: String(frontmatter.status || ''),
      href: `/projects/${slug}`,
    };
  });
}

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-project mx-auto">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Selected Work
          </h1>
          <div
            className="border-t mt-4 mb-0"
            style={{ borderColor: 'var(--theme-border)' }}
          />

          <div>
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}