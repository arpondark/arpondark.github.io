/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://arpon.vercel.app',
  generateRobotsTxt: false, // We already created our own robots.txt
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 