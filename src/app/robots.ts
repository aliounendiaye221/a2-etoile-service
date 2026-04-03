import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Blocks search engines from crawling backend API endpoints
    },
    sitemap: 'https://a2etoileservice.sn/sitemap.xml',
  }
}
