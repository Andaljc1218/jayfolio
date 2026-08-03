'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import ProjectCard from '@/components/project/project-card';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/types';

interface ProjectGridProps {
  featuredOnly?: boolean;
  limit?: number;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ProjectGrid({ featuredOnly = false, limit }: ProjectGridProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const displayProjects: Project[] = featuredOnly
    ? projects.filter((p) => p.featured)
    : projects;

  const visibleProjects = limit
    ? displayProjects.slice(0, limit)
    : displayProjects;

  if (visibleProjects.length === 0) return null;

  return (
    <div className="max-width-content mx-auto section-padding-x">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
