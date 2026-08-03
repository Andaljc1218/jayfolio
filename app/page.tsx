'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import Hero from '../components/sections/hero';
import ProjectCard from '../components/project/project-card';
import SkillsMarquee from '../components/sections/skills-marquee';
import { site } from '@/lib/constants';

const projects = [
  {
    title: 'FoundIT',
    description:
      'A job matching platform connecting students with internship opportunities. Built with Next.js and PostgreSQL.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    year: '2025',
    status: 'Completed',
    href: '/projects/foundit',
  },
  {
    title: 'JayFolio v2',
    description:
      'A minimal, typography-driven portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: '2026',
    status: 'Ongoing',
    href: '/projects/jayfolio-v2',
  },
  {
    title: 'Eco-map',
    description:
      'An Environmental Waste Management and Tracking System. A web-based platform for efficient waste management.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
    year: '2024',
    status: 'Completed',
    href: '/projects/eco-map',
  },
  {
    title: 'FLASH-Q',
    description:
      'A console-based Java flashcard quiz system for learning and self-assessment.',
    tech: ['Java', 'OOP', 'Console'],
    year: '2024',
    status: 'Completed',
    href: '/projects/flash-q',
  },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <>
      <Hero />

      <SkillsMarquee />

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-project mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl font-medium mb-2"
              style={{ color: isDark ? '#fafafa' : '#171717' }}
            >
              Selected Work
            </h2>
            <div
              className="border-t mt-4 mb-0"
              style={{ borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)' }}
            />
          </motion.div>

          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}