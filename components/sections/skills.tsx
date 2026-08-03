"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { skillCategories } from "@/lib/data";
import { SectionTitle } from "@/components/ui/section-title";
import { TechIcon } from "@/components/ui/icons";
import { staggerFade, fadeInUp } from "@/lib/animations";

const ITEMS_PER_CATEGORY = 5;

function SkillItem({ name }: { name: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 text-sm font-mono rounded-[var(--btn-radius)] border border-transparent transition-all hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
      style={{ color: "var(--theme-text-secondary)" }}
    >
      <span
        className="w-4 h-4 flex items-center justify-center"
        style={{ color: "var(--theme-text-secondary)" }}
      >
        <TechIcon name={name} />
      </span>
      <span style={{ color: "var(--theme-text-secondary)" }}>{name}</span>
    </div>
  );
}

function SkillGrid({ items, max }: { items: string[]; max: number }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {items.slice(0, max).map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -2 }}
          className="cursor-default"
        >
          <SkillItem name={item} />
        </motion.div>
      ))}
    </div>
  );
}

function SkillsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-[var(--card-radius)]"
            style={{
              backgroundColor: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-6 border-b"
              style={{ borderColor: "var(--theme-border)" }}
            >
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--theme-text)" }}
              >
                All Skills
              </h2>
            </div>
            <div className="p-6 space-y-8">
              {skillCategories.map((category) => (
                <div key={category.label}>
                  <h3
                    className="text-sm font-medium uppercase tracking-wider mb-4"
                    style={{ color: "var(--theme-text-muted)" }}
                  >
                    {category.label}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {category.items.map((item) => (
                      <SkillItem key={item} name={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SkillsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const container = staggerFade;

  return (
    <section id="skills" className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Skills"
          subtitle="The technologies and tools I work with daily."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-10"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.label} variants={fadeInUp}>
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: "var(--theme-text)" }}
                >
                  {category.label}
                </h2>
                {category.items.length > ITEMS_PER_CATEGORY && (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-sm font-mono transition-colors"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    +{category.items.length - ITEMS_PER_CATEGORY} more →
                  </button>
                )}
              </div>
              <SkillGrid items={category.items} max={ITEMS_PER_CATEGORY} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SkillsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
