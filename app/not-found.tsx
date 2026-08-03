'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <main id="main" className="pt-16">
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            className="text-7xl font-bold mb-4"
            style={{ color: 'var(--theme-text)' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-2xl font-medium mb-2"
            style={{ color: 'var(--theme-text)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page not found
          </motion.h2>
          <motion.p
            className="mb-8 max-w-md"
            style={{ color: 'var(--theme-text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-[var(--theme-accent)] text-[var(--theme-bg)] rounded-[var(--btn-radius)] transition-all hover:scale-105 hover:shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
