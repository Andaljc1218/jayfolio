import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-light text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-900 mb-2">Page not found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
