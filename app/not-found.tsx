import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1
        className="text-6xl font-light mb-4"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        404
      </h1>
      <h2
        className="text-2xl font-medium mb-2"
        style={{ color: 'var(--theme-text)' }}
      >
        Page not found
      </h2>
      <p
        className="mb-8 text-center max-w-md"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-sm underline underline-offset-4 transition-colors"
        style={{ color: 'var(--theme-text-secondary)' }}
      >
        Back to Home
      </Link>
    </div>
  );
}