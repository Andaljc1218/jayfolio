'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <h2
        className="text-3xl md:text-4xl font-semibold tracking-tight"
        style={{ color: isDark ? '#fafafa' : '#181818' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg md:text-xl mt-3 max-w-2xl"
          style={{ color: isDark ? '#a0a0a0' : '#525252' }}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        className="border-t mt-6 md:mt-8"
        style={{ borderColor: isDark ? 'rgba(34, 34, 34, 0.5)' : 'rgba(224, 224, 220, 0.5)' }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
