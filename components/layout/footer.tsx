import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <footer
      className="mt-24"
      style={{ borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)' }}
    >
      <div className="mx-auto max-w-prose px-6 md:px-8 py-12 flex flex-col items-center gap-4">
        <p
          className="text-sm"
          style={{ color: isDark ? '#a3a3a3' : '#737373' }}
        >
          Designed &amp; Developed by Jaycee Andal.
        </p>
        <p
          className="text-xs"
          style={{ color: isDark ? '#525252' : '#d4d4d4' }}
        >
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p
          className="text-xs"
          style={{ color: isDark ? '#525252' : '#d4d4d4' }}
        >
          © 2026
        </p>
      </div>
    </footer>
  );
}