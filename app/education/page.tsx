"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { educationData } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const container = staggerContainer;
const item = fadeInUp;

export default function EducationPage() {
  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle title="Education" subtitle="My academic background." />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.degree}
              variants={item}
              className="border-t border-b"
              style={{ borderColor: "var(--theme-border)" }}
            >
              <div className="py-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    {edu.degree}
                  </h3>
                  <time
                    className="text-sm font-mono"
                    style={{ color: "var(--theme-text-muted)" }}
                  >
                    {edu.period}
                  </time>
                </div>
                <p style={{ color: "var(--theme-text-secondary)" }}>
                  {edu.school} · {edu.location}
                </p>
                {edu.awards && edu.awards.length > 0 && (
                  <div className="mt-3">
                    <p
                      className="text-sm font-mono"
                      style={{ color: "var(--theme-text-muted)" }}
                    >
                      {edu.awards.join(" · ")}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
