import { site } from '@/lib/constants';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-20">
      <div className="max-w-prose mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-lg md:text-xl mb-4"
            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
          >
            {site.title}
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
            style={{ color: isDark ? '#fafafa' : '#171717' }}
          >
            {site.name}
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
          >
            {site.description}
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: isDark ? '#737373' : '#a3a3a3' }}
          >
            <span>Selected Work</span>
            <ArrowDown size={16} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}