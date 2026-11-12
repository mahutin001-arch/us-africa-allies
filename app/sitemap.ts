import type { MetadataRoute } from 'next';

const BASE = 'https://usafricaallies.org';

const PATHS = [
  '',
  '/about',
  '/founders-message',
  '/leadership',
  '/network',
  '/council',
  '/adca',
  '/partners',
  '/get-involved',
  '/donate',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/refund-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${BASE}${path || '/'}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path.match(/policy|terms/) ? 0.3 : 0.7,
  }));
}
