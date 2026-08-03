import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="mx-auto max-w-prose px-6 md:px-8 py-12 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500">
          Designed & Developed by Jaycee Andal.
        </p>
        <p className="text-xs text-gray-400">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-xs text-gray-400">© 2026</p>
      </div>
    </footer>
  );
}
