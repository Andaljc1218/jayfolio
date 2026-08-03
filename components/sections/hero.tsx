import { site } from '@/lib/constants';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-20">
      <div className="max-w-prose mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-500 mb-4">{site.title}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
            {site.name}
          </h1>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-12">
            {site.description}
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span>Selected Work</span>
            <ArrowDown size={16} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
