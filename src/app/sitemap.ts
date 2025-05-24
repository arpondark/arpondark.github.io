import { MetadataRoute } from 'next'

// Force static generation for sitemap
export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arpon007.me'
  
  // Define your static routes
  const routes = [
    '',
    '/#about',
    '/#skills',
    '/#projects',
    '/#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 