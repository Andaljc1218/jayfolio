'use client';

import { motion } from 'framer-motion';

const education = [
  {
    period: '2022 — 2026',
    degree: 'BS Computer Science',
    school: 'University of the Philippines',
    location: 'Los Baños, Laguna',
    coursework: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering'],
    awards: ['Dean\'s List — 2023', 'Dean\'s List — 2024'],
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-prose mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Education
          </h1>
          <div className="border-t border-gray-200 mt-4 mb-12" />

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
                <div className="text-sm text-gray-400 font-mono">{edu.period}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-base text-gray-500 mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{edu.location}</p>

                  {edu.coursework.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Relevant Coursework
                      </h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course) => (
                          <li
                            key={course}
                            className="text-sm text-gray-600 list-disc list-inside"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.awards.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Awards</h4>
                      <ul className="space-y-1">
                        {edu.awards.map((award) => (
                          <li
                            key={award}
                            className="text-sm text-gray-600 list-disc list-inside"
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
