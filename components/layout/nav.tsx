"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/lib/constants";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const isDark = resolvedTheme === "dark";

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .filter((link) => link.href !== "/about")
      .map((link) => {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const offset = rect.top + window.scrollY;
        return { id, offset, height: rect.height };
      })
      .filter(Boolean) as { id: string; offset: number; height: number }[];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let current = sections[0]?.id || null;
      for (const section of sections) {
        if (scrollPos >= section.offset) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isExternal = pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isExternal
            ? "border-b"
            : "bg-transparent border-transparent"
        }`}
        style={{
          backgroundColor:
            scrolled || isExternal
              ? isDark
                ? "rgba(13, 15, 18, 0.9)"
                : "rgba(246, 246, 244, 0.9)"
              : "transparent",
          borderColor: isDark ? "#2a2f36" : "#e0e0dc",
          backdropFilter: scrolled || isExternal ? "blur(12px)" : "none",
        }}
      >
        <nav className="max-width-content mx-auto section-padding-x h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight transition-colors"
            style={{ color: isDark ? "#f0f0f0" : "#1a1a1a" }}
          >
            Jaycee Andal
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isExternal
                ? pathname === link.href
                : activeSection === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-200"
                    style={{
                      color: isActive
                        ? isDark
                          ? "#3b82f6"
                          : "#2563eb"
                        : isDark
                          ? "#8b93a7"
                          : "#6b7280",
                    }}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="active-underline-nav"
                      className="absolute bottom-[-6px] left-0 right-0 h-0.5"
                      style={{
                        backgroundColor: isDark ? "#3b82f6" : "#2563eb",
                      }}
                    />
                  )}
                </li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              style={{ color: isDark ? "#f0f0f0" : "#1a1a1a" }}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
            style={{
              backgroundColor: isDark
                ? "rgba(10, 10, 10, 0.96)"
                : "rgba(246, 246, 244, 0.96)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex flex-col h-full section-padding-x pt-20">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-2 mb-8"
                aria-label="Close menu"
                style={{ color: isDark ? "#f0f0f0" : "#1a1a1a" }}
              >
                <X size={24} />
              </button>
              <ul className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl transition-colors"
                      style={{ color: isDark ? "#f0f0f0" : "#1a1a1a" }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
