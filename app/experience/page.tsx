'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const experiences = [
  {
    period: '2024 — Present',
    title: 'Software Engineer Intern',
    company: 'Tech Company Inc.',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained full-stack web applications using Next.js and PostgreSQL',
      'Collaborated with cross-functional teams on feature design and code reviews',
      'Improved API response times by 30% through query optimization',
    ],
  },
];

export default function ExperiencePage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-prose mx-auto">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: isDark ? '#fafafa' : '#171717' }}
          >
            Experience
          </h1>
          <div
            className="border-t mt-4 mb-12"
            style={{ borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-[8rem_1fr] gap-8"
              >
                <div
                  className="text-sm font-mono"
                  style={{ color: isDark ? '#525252' : '#a3a3a3' }}
                >
                  {exp.period}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ color: isDark ? '#fafafa' : '#171717' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-base mt-1"
                    style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: isDark ? '#525252' : '#a3a3a3' }}
                  >
                    {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="text-sm list-disc list-inside"
                        style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}