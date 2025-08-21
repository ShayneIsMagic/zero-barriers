// Zero Barriers - Site Configuration
// This file contains all site-wide configuration values

export const siteConfig = {
  // Site Information
  name: 'Zero Barriers',
  description: 'Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
  url: 'https://zerobarriers.io',
  ogImage: 'https://zerobarriers.io/images/og-image.jpg',
  
  // Google Analytics
  googleAnalyticsId: 'G-YHS2Y7L3C9',
  googleAnalyticsMeasurementId: 'G-YHS2Y7L3C9',
  
  // Contact Information
  contact: {
    email: 'info@zerobarriers.io',
    phone: '+1 (555) 123-4567',
    address: 'United States'
  },
  
  // Social Media
  social: {
    linkedin: 'https://www.linkedin.com/company/zero-barriers',
    twitter: 'https://twitter.com/zerobarriers',
    facebook: 'https://facebook.com/zerobarriers',
    instagram: 'https://instagram.com/zerobarriers'
  },
  
  // SEO
  seo: {
    titleTemplate: '%s | Zero Barriers',
    defaultTitle: 'Zero Barriers - Revenue Growth Transformation',
    defaultDescription: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results.',
    keywords: [
      'revenue growth',
      'rapid growth',
      'substantial growth',
      'sustainable growth',
      'revenue generation',
      'business transformation',
      'sales optimization',
      'revenue acceleration',
      'human transformation',
      'technology enablement',
      'business consulting',
      'growth strategy'
    ]
  },
  
  // Performance
  performance: {
    enableAnalytics: true,
    enablePerformanceMonitoring: true,
    enableErrorTracking: true
  }
} as const;

export type SiteConfig = typeof siteConfig;
