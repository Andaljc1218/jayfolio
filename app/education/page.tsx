'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const education = [
  {
    period: '2022 — 2026',
    degree: 'BS Computer Science',
    school: 'University of the Philippines',
    location: 'Los Baños, Laguna',
    coursework: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering'],
    awards: ["Dean's List — 2023", "Dean's List — 2024"],
  },
];

export default function EducationPage() {
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
            Education
          </h1>
          <div
            className="border-t mt-4 mb-12"
            style={{ borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)' }}
          />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
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
                  {edu.period}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ color: isDark ? '#fafafa' : '#171717' }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-base mt-1"
                    style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                  >
                    {edu.school}
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: isDark ? '#525252' : '#a3a3a3' }}
                  >
                    {edu.location}
                  </p>

                  {edu.coursework.length > 0 && (
                    <div className="mt-6">
                      <h4
                        className="text-sm font-medium mb-2"
                        style={{ color: isDark ? '#fafafa' : '#171717' }}
                      >
                        Relevant Coursework
                      </h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course) => (
                          <li
                            key={course}
                            className="text-sm list-disc list-inside"
                            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.awards.length > 0 && (
                    <div className="mt-6">
                      <h4
                        className="text-sm font-medium mb-2"
                        style={{ color: isDark ? '#fafafa' : '#171717' }}
                      >
                        Awards
                      </h4>
                      <ul className="space-y-1">
                        {edu.awards.map((award) => (
                          <li
                            key={award}
                            className="text-sm list-disc list-inside"
                            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                          >
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}