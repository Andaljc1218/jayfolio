'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import { SectionTitle } from '@/components/ui/section-title';
import { staggerFade, fadeInUp } from '@/lib/animations';

interface ContentBlock {
  title: string;
  content: string | string[];
}

const contentBlocks: ContentBlock[] = [
  {
    title: 'Who I Am',
    content: [
      'I am a Computer Science student at Batangas State University pursuing a Bachelor of Science in Computer Science (2023–2027). I am passionate about software engineering, backend systems, web development, and building useful applications.',
      'I enjoy learning new technologies and improving development workflows.',
    ],
  },
  {
    title: 'Current Focus',
    content: [
      'Currently focused on full-stack development with Next.js and TypeScript, building scalable backend systems with Laravel and PHP, and crafting interactive user experiences with Framer Motion.',
      'I am actively expanding my skills in database architecture, API design, and performance optimization.',
    ],
  },
  {
    title: 'Interests',
    content: [
      'Software engineering and system design',
      'Backend systems and database architecture',
      'Web development and modern frameworks',
      'Learning new technologies and development tools',
    ],
  },
  {
    title: 'Goals',
    content: [
      'My goal is to become a software engineer building scalable digital products that solve real-world problems.',
      'I aim to work on systems that impact thousands of users and contribute to meaningful open-source projects.',
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="About Me"
          subtitle="I build clean, scalable software that solves real-world problems."
        />

        <motion.div
          variants={staggerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {contentBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--theme-text)' }}
              >
                {block.title}
              </h3>
              {Array.isArray(block.content) ? (
                <div className="space-y-3">
                  {block.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--theme-text-secondary)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  {block.content}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
