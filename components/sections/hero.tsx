'use client';

import { motion, type Transition } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { site } from '@/lib/constants';
import { fadeInUpDelay, staggerContainerHero, floatTween, floatTransition } from '@/lib/animations';

const item = fadeInUpDelay;
const container = staggerContainerHero;

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const glowColor = isDark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(37, 99, 235, 0.15)';

  return (
    <section id="hero" className="min-h-screen flex items-center py-20">
      <div className="max-width-content mx-auto section-padding-x w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.p
              variants={item}
              className="text-sm font-medium tracking-wider uppercase mb-4"
              style={{ color: 'var(--theme-accent)' }}
            >
              {site.title}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6"
              style={{ color: 'var(--theme-text)' }}
            >
              Jaycee Andal
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl leading-relaxed max-w-lg mb-8"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              {site.description}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 text-sm font-medium bg-[var(--theme-accent)] text-[var(--theme-bg)] rounded-[var(--btn-radius)] transition-all hover:shadow-lg"
                >
                  View Projects
                </motion.button>
              </Link>
              <motion.a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-medium border border-[var(--theme-border)] text-[var(--theme-text)] rounded-[var(--btn-radius)] transition-all hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-surface-elevated)]"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="cursor-pointer"
              animate={floatTween}
              transition={floatTransition}
            >
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                Scroll
              </span>
              <div className="mt-2 w-5 h-8 border border-[var(--theme-border)] rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-2 rounded-full mt-1"
                  style={{ backgroundColor: 'var(--theme-text-muted)' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={floatTween}
              transition={floatTransition}
              className="relative group"
            >
              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-[var(--card-radius)] overflow-hidden transition-all duration-500"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  border: '1px solid var(--theme-border)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Jaycee Andal"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="eager"
                />
                <motion.div
                  className="absolute inset-0 rounded-[var(--card-radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 40px ${glowColor}`,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
