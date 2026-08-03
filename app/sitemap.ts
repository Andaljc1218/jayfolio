import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jayfolio.vercel.app';

  const routes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/education',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const projects: MetadataRoute.Sitemap = ['foundit', 'jayfolio-v2', 'eco-map', 'flash-q'].map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...projects];
}
