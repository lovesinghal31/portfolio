import type { MetadataRoute } from 'next'
import { SITE } from '../lib/data'

// Basic static sitemap. If you add dynamic content (projects/blog), extend this.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const routes: string[] = [
    '/',
    '/about',
    '/projects',
    '/skills',
    '/contact'
  ]
  const now = new Date()
  return routes.map(r => ({
    url: base + r,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '/' ? 1 : 0.7
  }))
}
