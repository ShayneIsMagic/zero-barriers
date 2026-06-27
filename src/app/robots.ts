import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const blockedBots = [
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'PetalBot',
  'ZoominfoBot',
  'ChatGPT-User',
  'GPTBot',
  'anthropic-ai',
  'Claude-Web',
  'Google-Extended',
  'PerplexityBot',
  'YouBot',
  'CCBot',
  'Omgilibot',
]

const allowedBots = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-Mobile',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'Applebot',
  'ia_archiver',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/images/photography/',
          '/images/extracted/technology/',
          '/images/home-human-transformation',
          '/images/services-human-transformation',
          '/images/transforming-breakthrough',
          '/images/technology-empowerment-hero',
          '/images/case-studies-bridge-the-gap-hero',
          '/images/services-revenue-flow-landscape',
        ],
        crawlDelay: 1,
      },
      ...blockedBots.map((bot) => ({
        userAgent: bot,
        disallow: '/',
      })),
      ...allowedBots.map((bot) => ({
        userAgent: bot,
        allow: '/',
      })),
    ],
    sitemap: 'https://zerobarriers.io/sitemap.xml',
  }
}
