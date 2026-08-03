'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsMarquee from '@/components/sections/skills-marquee';
import ProjectGrid from '@/components/project/project-grid';
import { Timeline } from '@/components/ui/timeline';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { experiences } from '@/lib/data';
import { educationData } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Home() {
  const experienceItems = experiences.map((exp) => ({
    period: exp.period,
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    tags: ['Laravel', 'PHP', 'Git'],
    details: exp.responsibilities.map((r) => ({ type: 'text' as const, content: r })),
  }));

  const educationItems = educationData.map((edu) => ({
    period: edu.period,
    title: edu.degree,
    subtitle: edu.school,
    location: edu.location,
    details: [
      ...edu.coursework.map((c) => ({ type: 'text' as const, content: `Coursework: ${c}` })),
      ...(edu.awards?.map((a) => ({ type: 'text' as const, content: `Award: ${a}` })) || []),
    ],
  }));

  return (
    <>
      <HeroSection />

      <AboutSection />

      <section className="section-padding">
        <div className="max-width-content mx-auto section-padding-x">
          <SectionTitle
            title="Selected Work"
            subtitle="A collection of projects I've built, ranging from full-stack web applications to console-based systems."
          />
          <ProjectGrid featuredOnly limit={4} />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/projects">
              <Button variant="secondary" size="md">
                View All Projects
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="section-padding">
        <div className="max-width-content mx-auto section-padding-x">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey in software engineering."
          />
          <Timeline items={experienceItems} />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/experience">
              <Button variant="secondary" size="md">
                View Full Experience
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <SkillsMarquee />

      <section id="education" className="section-padding">
        <div className="max-width-content mx-auto section-padding-x">
          <SectionTitle
            title="Education"
            subtitle="My academic background and relevant coursework."
          />
          <Timeline items={educationItems} />
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="max-width-content mx-auto section-padding-x">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--theme-text)' }}
              variants={fadeInUp}
            >
              Let&apos;s Build Something Together
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--theme-text-secondary)' }}
              variants={fadeInUp}
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
              variants={fadeInUp}
            >
              <a
                href="mailto:jayceeja12@gmail.com"
                className="hover:text-[var(--theme-accent)] transition-colors"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                jayceeja12@gmail.com
              </a>
              <span style={{ color: 'var(--theme-border)' }}>|</span>
              <a
                href="https://github.com/Andaljc1218"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--theme-accent)] transition-colors"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                GitHub
              </a>
              <span style={{ color: 'var(--theme-border)' }}>|</span>
              <a
                href="https://linkedin.com/in/jaycee-andal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--theme-accent)] transition-colors"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
