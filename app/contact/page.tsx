'use client';

import { Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { submitContactForm } from '@/app/actions';
import { site } from '@/lib/constants';

const contactInfo = [
  { label: 'Email', value: site.email, icon: Mail, href: `mailto:${site.email}` },
  { label: 'GitHub', value: 'github.com/Andaljc1218', icon: GitHubIcon, href: site.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/jaycee-andal', icon: LinkedInIcon, href: site.linkedin },
  { label: 'Resume', value: 'Download PDF', icon: FileText, href: site.resume },
];

const item = fadeInUp;
const container = staggerContainer;

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's build something together."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <motion.div variants={item} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const isExternal = info.href.startsWith('http');
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-10 h-10 rounded-[var(--btn-radius)] flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        backgroundColor: 'var(--theme-glow)',
                        color: 'var(--theme-accent)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--theme-text)' }}>
                        {info.label}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              variants={item}
              className="pt-8 border-t"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
                Let's Build Something Together
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                via email or through any of the channels above.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <form action={submitContactForm} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-[var(--btn-radius)] text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)]"
                  style={{
                    backgroundColor: 'var(--theme-input-bg)',
                    borderColor: 'var(--theme-input-border)',
                    color: 'var(--theme-input-text)',
                  }}
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-[var(--btn-radius)] text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)]"
                  style={{
                    backgroundColor: 'var(--theme-input-bg)',
                    borderColor: 'var(--theme-input-border)',
                    color: 'var(--theme-input-text)',
                  }}
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-[var(--btn-radius)] text-sm transition-all resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)]"
                  style={{
                    backgroundColor: 'var(--theme-input-bg)',
                    borderColor: 'var(--theme-input-border)',
                    color: 'var(--theme-input-text)',
                  }}
                  placeholder="Your message here..."
                  aria-required="true"
                />
              </div>

              <Button variant="primary" size="md" radius="default" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
