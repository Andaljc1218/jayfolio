'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import { skillCategories } from '@/lib/data';
import { SectionTitle } from '@/components/ui/section-title';

interface SkillPillProps {
  label: string;
  index: number;
}

function SkillPill({ label, index }: SkillPillProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="shrink-0 inline-flex items-center px-5 py-2.5 border text-sm font-mono rounded-full transition-all"
      style={{
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-text-secondary)',
        backgroundColor: 'var(--theme-bg)',
      }}
    >
      {label}
    </motion.span>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
}: {
  items: string[];
  direction?: 'left' | 'right';
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const duration = 25 + items.length * 1.2;
  const animationClass = direction === 'left' ? 'marquee-left' : 'marquee-right';

  const duplicated = [...items, ...items];

  return (
    <div
      className="relative group overflow-hidden py-3"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent)',
      }}
    >
      <motion.div
        className={`flex gap-5 ${animationClass} group-hover:[animation-play-state=pause]`}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {duplicated.map((item, i) => (
          <SkillPill
            key={`${item}-${i}`}
            label={item}
            index={i}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Skills"
          subtitle="The tools and technologies I work with daily."
        />
        <div className="mt-12 md:mt-16 space-y-2">
          {skillCategories.map((category, i) => (
            <div key={category.label}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {category.label}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--theme-border)' }}
                />
              </div>
              <MarqueeRow
                items={category.items}
                direction={i % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
