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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Resume
          </h1>
          <div className="border-t border-gray-200 mt-4 mb-12" />

          <p className="text-base text-gray-500 mb-8">
            Download my resume or view my experience and education pages for more details.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ArrowUpRight size={16} />
              Download Resume
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/education"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors"
            >
              View Education
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
