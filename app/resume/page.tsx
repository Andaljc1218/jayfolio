'use client';

import { FileText, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import { SectionTitle } from '@/components/ui/section-title';
import { site } from '@/lib/constants';
import { experiences } from '@/lib/data';
import { educationData } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const item = fadeInUp;
const container = staggerContainer;

export default function ResumePage() {
  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Resume"
          subtitle="Download my resume or explore my experience and education below."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <motion.div variants={item}>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--theme-accent)] text-[var(--theme-bg)] rounded-[var(--btn-radius)] transition-all hover:scale-105 hover:shadow-lg"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--theme-border)] text-[var(--theme-text)] rounded-[var(--btn-radius)] transition-all hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-surface-elevated)]"
            >
              <Briefcase size={16} />
              View Experience
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="/education"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--theme-border)] text-[var(--theme-text)] rounded-[var(--btn-radius)] transition-all hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-surface-elevated)]"
            >
              <GraduationCap size={16} />
              View Education
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          <motion.div variants={item}>
            <h2
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <Briefcase size={18} style={{ color: 'var(--theme-accent)' }} />
              Work Experience
            </h2>
            <motion.div
              variants={container}
              className="space-y-8"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  className="pb-6"
                  style={{
                    borderBottom: `1px solid var(--theme-border)`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium" style={{ color: 'var(--theme-text)' }}>
                      {exp.title}
                    </h3>
                    <time className="text-sm font-mono" style={{ color: 'var(--theme-text-muted)' }}>
                      {exp.period}
                    </time>
                  </div>
                  <p style={{ color: 'var(--theme-text-secondary)' }}>{exp.company} · {exp.location}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                        • {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <h2
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <GraduationCap size={18} style={{ color: 'var(--theme-accent)' }} />
              Education
            </h2>
            <motion.div
              variants={container}
              className="space-y-8"
            >
              {educationData.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  className="pb-6"
                  style={{
                    borderBottom: `1px solid var(--theme-border)`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium" style={{ color: 'var(--theme-text)' }}>
                      {edu.degree}
                    </h3>
                    <time className="text-sm font-mono" style={{ color: 'var(--theme-text-muted)' }}>
                      {edu.period}
                    </time>
                  </div>
                  <p style={{ color: 'var(--theme-text-secondary)' }}>{edu.school} · {edu.location}</p>
                  {edu.coursework.length > 0 && (
                    <div className="mt-3">
                      <span className="text-xs font-medium" style={{ color: 'var(--theme-text-muted)' }}>
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-2.5 py-1 border rounded-full"
                            style={{
                              borderColor: 'var(--theme-border)',
                              color: 'var(--theme-text-secondary)',
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
