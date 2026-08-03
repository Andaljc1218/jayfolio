"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { site } from "@/lib/constants";
import { fadeInUpDelay, staggerContainerHero } from "@/lib/animations";
import { useState, useEffect, useCallback } from "react";

const item = fadeInUpDelay;
const container = staggerContainerHero;

const profileImages = [
  "/images/profile.jpg",
  "/images/profile-2.jpg",
  "/images/profile-3.jpg",
];

const playerStats = [
  { label: "LEVEL", value: "03" },
  { label: "ROLE", value: "FULL STACK" },
  { label: "XP", value: "80%" },
  { label: "PROJECTS", value: "12+" },
  { label: "TECH", value: "18+" },
  { label: "COFFEE", value: "∞" },
];

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % profileImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = useCallback(() => {
    setImgIndex((prev) => (prev + 1) % profileImages.length);
  }, []);

  return (
    <section id="hero" className="min-h-[75vh] flex items-center py-12">
      <div className="max-width-content mx-auto section-padding-x w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <motion.div className="text-left" variants={heroItem}>
            <motion.p
              variants={heroItem}
              className="text-sm font-mono tracking-wider uppercase mb-6"
              style={{ color: "var(--theme-text-muted)" }}
            >
              {site.title}
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "var(--theme-text)" }}
            >
              Jaycee Andal
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-lg md:text-xl leading-relaxed max-w-md mb-8"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              {site.description}
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 text-sm font-medium bg-[var(--theme-accent)] text-[var(--theme-bg)] rounded-[var(--btn-radius)] transition-all hover:shadow-lg"
                >
                  View Projects
                </motion.button>
              </Link>
              <motion.a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-medium border border-[var(--theme-border)] text-[var(--theme-text)] rounded-[var(--btn-radius)] transition-all"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono"
              style={{ color: "var(--theme-text-muted)" }}
            >
              {playerStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span style={{ color: "var(--theme-text-muted)" }}>
                    {stat.label}
                  </span>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--theme-text)" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex justify-center lg:justify-end"
          >
            <motion.button
              onClick={nextImage}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[var(--card-radius)] overflow-hidden"
                style={{
                  border: "1px solid var(--theme-border)",
                }}
              >
                <img
                  src={profileImages[imgIndex]}
                  alt={`Jaycee Andal — ${imgIndex + 1}`}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="eager"
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
