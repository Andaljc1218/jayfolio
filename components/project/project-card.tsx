import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
  return (
    <Link
      href={href}
      className="group block border-b border-gray-100 py-8 last:border-0 hover:bg-gray-50/50 transition-colors"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {thumbnail && (
          <div className="w-full md:w-48 shrink-0">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
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
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
              {title}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-gray-400 group-hover:text-gray-900 transition-colors"
            />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 font-mono">
            <span>{tech.join(' • ')}</span>
            <span className="text-gray-300">|</span>
            <span>{year}</span>
            <span className="text-gray-300">|</span>
            <span className="uppercase tracking-wider">{status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
