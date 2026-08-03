'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  location?: string;
  details: { type: 'text'; content: string }[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const lineColor = isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)';
  const dotColor = isDark ? '#3b82f6' : '#2563eb';
  const textColor = isDark ? '#fafafa' : '#181818';
  const secondaryColor = isDark ? '#a0a0a0' : '#525252';
  const mutedColor = isDark ? '#666666' : '#999999';
  const borderColor = isDark ? 'rgba(34, 34, 34, 0.5)' : 'rgba(224, 224, 220, 0.5)';

  return (
    <div className="relative">
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px"
        style={{ backgroundColor: lineColor }}
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
      />
      {items.map((item, index) => (
        <motion.div
          key={item.title + index}
          className="relative mb-16 md:mb-24 last:mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <motion.div
            className="absolute top-0 w-3 h-3 rounded-full"
            style={{ left: 'calc(-6px + 1px)', backgroundColor: dotColor }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
          />
          <div className="md:ml-auto md:w-1/2 md:pl-8">
            <div className="md:text-right">
              <time
                className="text-sm font-mono"
                style={{ color: mutedColor }}
              >
                {item.period}
              </time>
              <h3
                className="text-xl font-semibold mt-1"
                style={{ color: textColor }}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p
                  className="text-base mt-1"
                  style={{ color: secondaryColor }}
                >
                  {item.subtitle}
                </p>
              )}
              {item.location && (
                <p
                  className="text-sm mt-0.5"
                  style={{ color: mutedColor }}
                >
                  {item.location}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-end mt-3">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="mt-4 space-y-1.5 text-left md:text-right">
                {item.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: secondaryColor }}
                  >
                    {detail.content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
