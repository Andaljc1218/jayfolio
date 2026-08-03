import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-prose mx-auto">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            About
          </h1>
          <div
            className="border-t mt-4 mb-12"
            style={{ borderColor: 'var(--theme-border)' }}
          />

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="aspect-square w-48 rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Jaycee Andal"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                I&apos;m a Computer Science student specializing in full-stack web development.
                I focus on building clean, scalable applications that balance technical
                functionality with intuitive user experiences.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                My work combines strong programming fundamentals with modern development
                practices. I&apos;m particularly interested in system design, database
                architecture, and creating maintainable codebases.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Currently seeking internship opportunities to apply my skills in real-world
                software engineering environments.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/resume"
                  className="text-sm underline underline-offset-4 transition-colors"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  Resume
                </Link>
                <Link
                  href="https://github.com/Andaljc1218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm transition-colors"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  GitHub
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}