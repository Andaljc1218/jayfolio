'use client';

import { motion } from 'framer-motion';

export interface AnimatedPillProps {
  label: string;
  delay?: number;
  color?: 'default' | 'blue';
}

export const AnimatedPill = ({ label, delay = 0, color = 'default' }: AnimatedPillProps) => {
  const colorClasses = {
    default:
      'bg-[var(--theme-surface-elevated)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]',
    blue:
      'bg-blue-500/10 text-blue-400 border border-blue-500/30',
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={[
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all',
        colorClasses[color],
      ].join(' ')}
    >
      {label}
    </motion.span>
  );
};

AnimatedPill.displayName = 'AnimatedPill';
