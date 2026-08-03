'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled
          ? isDark
            ? 'rgba(10, 10, 10, 0.85)'
            : 'rgba(250, 250, 250, 0.85)'
          : 'transparent',
        borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)',
      }}
    >
      <nav className="mx-auto max-w-prose px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight transition-colors"
          style={{ color: isDark ? '#fafafa' : '#171717' }}
        >
          Jaycee Andal
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: isDark ? '#a3a3a3' : '#737373' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ color: isDark ? '#a3a3a3' : '#737373' }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 -mr-1 transition-colors"
            style={{ color: isDark ? '#a3a3a3' : '#737373' }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            style={{ color: isDark ? '#fafafa' : '#171717' }}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
            style={{
              backgroundColor: isDark ? 'rgba(10, 10, 10, 0.95)' : 'rgba(250, 250, 250, 0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex flex-col h-full px-6 py-6">
              <div className="flex justify-between items-center mb-8">
                <span
                  className="text-sm font-medium"
                  style={{ color: isDark ? '#fafafa' : '#171717' }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                  style={{ color: isDark ? '#fafafa' : '#171717' }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl transition-colors"
                      style={{ color: isDark ? '#fafafa' : '#171717' }}
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
    </header>
  );
}