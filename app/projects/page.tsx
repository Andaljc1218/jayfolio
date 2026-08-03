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
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      tech: (frontmatter.tech as string[]) || [],
      year: frontmatter.year || '',
      status: frontmatter.status || '',
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Selected Work
          </h1>
          <div className="border-t border-gray-200 mt-4 mb-0" />

          <div>
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={project.href}
                className="group block border-b border-gray-100 py-8 last:border-0 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 font-mono">
                      <span>{project.tech.join(' • ')}</span>
                      <span className="text-gray-300">|</span>
                      <span>{project.year}</span>
                      <span className="text-gray-300">|</span>
                      <span className="uppercase tracking-wider">{project.status}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
