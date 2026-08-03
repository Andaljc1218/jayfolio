"use client";

import { motion } from "framer-motion";
import { staggerFade, fadeInUp } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/section-title";
import { site } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="About"
          subtitle="I build clean, scalable software that solves real-world problems."
        />

        <motion.div
          variants={staggerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: "var(--theme-text-secondary)" }}
          >
            BS Computer Science student at Batangas State University. Building
            software that solves real-world problems.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center text-sm"
            style={{ color: "var(--theme-text-secondary)" }}
          >
            <span>Full Stack Development</span>
            <span>·</span>
            <span>Laravel</span>
            <span>·</span>
            <span>System Design</span>
            <span>·</span>
            <span>UI/UX</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
