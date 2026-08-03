import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-prose mx-auto">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            Resume
          </h1>
          <div
            className="border-t mt-4 mb-12"
            style={{ borderColor: 'var(--theme-border)' }}
          />

          <p
            className="text-base mb-8"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Download my resume or view my experience and education pages for more details.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: 'var(--theme-bg)',
              }}
            >
              <ArrowUpRight size={16} />
              Download Resume
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors"
              style={{
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text-secondary)',
              }}
            >
              View Experience
            </Link>
            <Link
              href="/education"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors"
              style={{
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text-secondary)',
              }}
            >
              View Education
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}