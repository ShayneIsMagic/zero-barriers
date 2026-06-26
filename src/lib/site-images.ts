/**
 * Single source of truth for site imagery.
 * Each visual is used once, matched to page/section meaning.
 */

export const siteImages = {
  home: {
    hero: {
      src: '/images/photography/spencer-dutoit/summit-ridge-hikers',
      alt: 'Mountaineers ascending a snow-covered ridge toward the summit. Photography by Spencer DuToit.',
      width: 768,
      height: 1024,
    },
  },
  services: {
    hero: {
      src: '/images/photography/spencer-dutoit/summit-climbers-samuel-joseph',
      alt: 'Climbers working together on a steep alpine ridge. Photography by Spencer DuToit.',
      width: 768,
      height: 1024,
    },
    humanTransformation: {
      src: '/images/services-human-transformation',
      alt: 'Abstract illustration symbolizing personal growth, mindset shift, and human potential.',
      width: 768,
      height: 768,
      fullWidth: 768,
    },
    technology: {
      src: '/images/technology-empowerment-hero',
      extension: 'jpg' as const,
      alt: 'Abstract technology illustration representing systems activation and digital enablement.',
      width: 768,
      height: 768,
      fullWidth: 768,
    },
    revenue: {
      src: '/images/services-revenue-flow-landscape',
      alt: 'Landscape illustration symbolizing revenue flow, connection, and sustainable growth.',
      width: 768,
      height: 768,
      fullWidth: 768,
    },
  },
  technology: {
    hero: {
      src: '/images/extracted/technology/side-profile-tech',
      extension: 'jpg' as const,
      alt: 'Abstract technology illustration representing innovation and technical empowerment.',
      width: 800,
      height: 800,
      fullWidth: 800,
    },
  },
  results: {
    hero: {
      src: '/images/case-studies-bridge-the-gap-hero',
      alt: 'Mountain landscape with a bridge symbolizing the gap-to-results transformation journey.',
      width: 768,
      height: 512,
      fullWidth: 768,
    },
  },
} as const
