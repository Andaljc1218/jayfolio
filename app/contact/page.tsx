"use client";

import { motion } from "framer-motion";
import { Mail, Copy } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { site } from "@/lib/constants";

const item = fadeInUp;
const container = staggerContainer;

export default function ContactPage() {
  const { resolvedTheme } = useTheme();

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
  };

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
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div variants={item} className="mb-12">
            <p
              className="text-lg leading-relaxed max-w-md mx-auto mb-8"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col gap-4 max-w-sm mx-auto"
          >
            <motion.a
              href={`mailto:${site.email}`}
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-sm font-medium transition-all"
              style={{
                color: "var(--theme-text)",
              }}
            >
              <Mail size={16} />
              {site.email}
            </motion.a>

            <motion.a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-sm font-medium transition-all"
              style={{
                color: "var(--theme-text)",
              }}
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </motion.a>

            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-sm font-medium transition-all"
              style={{
                color: "var(--theme-text)",
              }}
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </motion.a>

            <motion.a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-sm font-medium transition-all"
              style={{
                color: "var(--theme-text)",
              }}
            >
              <Copy size={16} />
              Resume
            </motion.a>

            <motion.button
              onClick={copyEmail}
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--theme-border)] rounded-[var(--btn-radius)] text-sm font-medium transition-all"
              style={{
                color: "var(--theme-text)",
              }}
            >
              <Copy size={16} />
              Copy Email
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
