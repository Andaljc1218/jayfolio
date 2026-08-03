"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { site } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const socialLinks: SocialLink[] = [
    { href: site.github, label: "GitHub", icon: GitHubIcon },
    { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: `mailto:${site.email}`, label: "Email", icon: Mail },
  ];

  return (
    <footer
      className="border-t mt-24 md:mt-32"
      style={{ borderColor: "var(--theme-border)" }}
    >
      <div className="max-width-content mx-auto section-padding-x py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm"
            style={{ color: "var(--theme-text-secondary)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Designed &amp; Developed by Jaycee Andal
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, label, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="p-2 rounded-full transition-all duration-200"
                style={{ color: "var(--theme-text-secondary)" }}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-xs"
            style={{ color: "var(--theme-text-secondary)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Built with{" "}
            {techStack.map((tech, i) => (
              <span key={tech} style={{ color: "var(--theme-accent)" }}>
                {tech}
                {i < techStack.length - 1 && (
                  <span style={{ color: "var(--theme-text-muted)" }}> · </span>
                )}
              </span>
            ))}
          </motion.p>
        </div>

        <motion.div
          className="border-t mt-6 pt-6 text-center text-xs"
          style={{
            borderColor: "var(--theme-border)",
            color: "var(--theme-text-muted)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Jaycee Andal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
