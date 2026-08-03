'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getInitialTheme, getResolvedTheme, applyTheme, toggleTheme, getThemeLabel, type Theme } from '@/lib/theme';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  label: string;
}

const defaultContext: ThemeContextValue = {
  theme: 'system',
  resolvedTheme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  label: 'System',
};

const ThemeContext = createContext<ThemeContextValue>(defaultContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    const resolved = getResolvedTheme(initial);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const resolved = e.matches ? 'dark' : 'light';
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const handleToggle = () => {
    const next = toggleTheme(theme);
    handleSetTheme(next);
  };

  const handleSetTheme = (next: Theme) => {
    document.documentElement.classList.add('theme-transitioning');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 500);
    setTheme(next);
    const resolved = getResolvedTheme(next);
    setResolvedTheme(resolved);
    applyTheme(resolved);
    localStorage.setItem('theme', next);
  };

  const value = {
    theme,
    resolvedTheme,
    toggleTheme: handleToggle,
    setTheme: handleSetTheme,
    label: getThemeLabel(theme),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
