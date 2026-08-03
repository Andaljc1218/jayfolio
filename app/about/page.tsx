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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            About
          </h1>
          <div className="border-t border-gray-200 mt-4 mb-12" />

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="aspect-square w-48 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Jaycee Andal"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base text-gray-700 leading-relaxed">
                I&apos;m a Computer Science student specializing in full-stack web development.
                I focus on building clean, scalable applications that balance technical
                functionality with intuitive user experiences.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                My work combines strong programming fundamentals with modern development
                practices. I&apos;m particularly interested in system design, database
                architecture, and creating maintainable codebases.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Currently seeking internship opportunities to apply my skills in real-world
                software engineering environments.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/resume"
                  className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
                >
                  Resume
                </Link>
                <Link
                  href="https://github.com/Andaljc1218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
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
