'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  title,
  description,
  tech,
  year,
  status,
  role,
  thumbnail,
  href,
  github,
  demo,
}: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const borderColor = isDark ? 'rgba(34, 34, 34, 0.6)' : 'rgba(224, 224, 220, 0.6)';
  const hoverBorderColor = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)';
  const statusColor =
    status === 'Completed'
      ? isDark ? '#4ade80' : '#16a34a'
      : isDark ? '#fbbf24' : '#d97706';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group block"
    >
      <Link href={href} className="block">
        <div
          className="rounded-[var(--card-radius)] overflow-hidden border transition-all duration-300 bg-[var(--theme-surface)]"
          style={{
            borderColor,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div className="relative overflow-hidden h-48">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--theme-surface-elevated)' }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: 'var(--theme-accent)' }}
                >
                  {title.charAt(0)}
                </span>
              </div>
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3
                className="text-xl font-semibold mb-2 transition-colors group-hover:text-[var(--theme-accent)]"
                style={{ color: 'var(--theme-text)' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed line-clamp-2"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tech.slice(0, 5).map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>

            <div
              className="flex items-center justify-between text-xs"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              <span className="font-mono">
                {year} · <span style={{ color: statusColor }}>{status}</span>
              </span>
              <span className="font-mono">{role}</span>
            </div>

            <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t" style={{ borderColor }}>
              <Link
                href={href}
                className="text-xs font-medium px-3 py-1.5 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] hover:border-[var(--theme-accent)] transition-all"
              >
                Case Study
              </Link>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-1.5 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] hover:border-[var(--theme-accent)] transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-1.5 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] hover:border-[var(--theme-accent)] transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
