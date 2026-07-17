import type { MetadataRoute } from 'next'
import { allInternalRoutes } from '@/lib/site'

export const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  return allInternalRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/download-beta' ? 0.9 : 0.7,
  }))
}
