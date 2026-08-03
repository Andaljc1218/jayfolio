'use client';

import { Mail, FileText } from 'lucide-react';
import { site } from '../../lib/constants';
import { motion } from 'framer-motion';
import { submitContactForm } from '../actions';
import { useTheme } from '@/components/theme-provider';

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-prose mx-auto">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: isDark ? '#fafafa' : '#171717' }}
          >
            Contact
          </h1>
          <div
            className="border-t mt-4 mb-12"
            style={{ borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)' }}
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-medium mb-4"
                style={{ color: isDark ? '#fafafa' : '#171717' }}
              >
                Get in touch
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: isDark ? '#a3a3a3' : '#737373' }}
              >
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                >
                  <Mail size={18} />
                  <span className="text-sm">{site.email}</span>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                >
                  <FileText size={18} />
                  <span className="text-sm">Resume</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <form action={submitContactForm} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: isDark ? '#fafafa' : '#171717' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                    style={{
                      backgroundColor: isDark ? '#171717' : '#ffffff',
                      borderColor: isDark ? '#262626' : '#e5e5e5',
                      color: isDark ? '#fafafa' : '#171717',
                    }}
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: isDark ? '#fafafa' : '#171717' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                    style={{
                      backgroundColor: isDark ? '#171717' : '#ffffff',
                      borderColor: isDark ? '#262626' : '#e5e5e5',
                      color: isDark ? '#fafafa' : '#171717',
                    }}
                    placeholder="your.email@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: isDark ? '#fafafa' : '#171717' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none"
                    style={{
                      backgroundColor: isDark ? '#171717' : '#ffffff',
                      borderColor: isDark ? '#262626' : '#e5e5e5',
                      color: isDark ? '#fafafa' : '#171717',
                    }}
                    placeholder="Your message here..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    backgroundColor: isDark ? '#fafafa' : '#171717',
                    color: isDark ? '#171717' : '#fafafa',
                  }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}