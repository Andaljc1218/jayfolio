export type Theme = 'light' | 'dark' | 'system';

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

export function getResolvedTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
}

export function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
}

export function toggleTheme(current: Theme): Theme {
  const cycle: Theme[] = ['light', 'dark', 'system'];
  const idx = cycle.indexOf(current);
  return cycle[(idx + 1) % cycle.length];
}

export function getThemeLabel(theme: Theme): string {
  switch (theme) {
    case 'light':
      return 'Light';
    case 'dark':
      return 'Dark';
    case 'system':
      return 'System';
  }
}