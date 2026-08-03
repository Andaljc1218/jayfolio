import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Jaycee Andal — Full Stack Developer',
    template: '%s | Jaycee Andal',
  },
  description: 'Portfolio of Jaycee Andal — Computer Science Student and Full Stack Developer',
  keywords: ['portfolio', 'web development', 'full stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Jaycee Andal' }],
  creator: 'Jaycee Andal',
  metadataBase: new URL('https://jayfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jayfolio.vercel.app',
    siteName: 'Jaycee Andal',
    title: 'Jaycee Andal — Full Stack Developer',
    description: 'Portfolio of Jaycee Andal — Computer Science Student and Full Stack Developer',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaycee Andal — Full Stack Developer',
    description: 'Portfolio of Jaycee Andal — Computer Science Student and Full Stack Developer',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
