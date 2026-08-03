'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: string;
  href: string;
  thumbnail?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  year,
  status,
  href,
  thumbnail,
}: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Link
      href={href}
      className="group block border-b transition-colors py-8 last:border-0"
      style={{
        borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)',
      }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {thumbnail && (
          <div className="w-full md:w-48 shrink-0">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3
              className="text-lg font-medium transition-colors"
              style={{ color: isDark ? '#fafafa' : '#171717' }}
            >
              {title}
            </h3>
            <ArrowUpRight
              size={16}
              style={{ color: isDark ? '#737373' : '#a3a3a3' }}
            />
          </div>
          <p
            className="text-sm leading-relaxed mb-3 line-clamp-2"
            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
          >
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono">
            <span style={{ color: isDark ? '#737373' : '#a3a3a3' }}>
              {tech.join(' • ')}
            </span>
            <span style={{ color: isDark ? '#262626' : '#e5e5e5' }}>|</span>
            <span style={{ color: isDark ? '#737373' : '#a3a3a3' }}>{year}</span>
            <span style={{ color: isDark ? '#262626' : '#e5e5e5' }}>|</span>
            <span
              className="uppercase tracking-wider"
              style={{ color: isDark ? '#737373' : '#a3a3a3' }}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}