/**
 * Single source of truth for site imagery.
 * Priority: Spencer DuToit photography → site travel photography → selective AI abstracts.
 *
 * Slot fit guide (match image orientation to the CSS box):
 * - Hero split columns: portrait 3:4 (Spencer, 768×1024)
 * - ContentSplit panels: landscape 4:3 (~600×450, object-fit cover)
 * - Section backgrounds: landscape wide (object-fit cover)
 */

export type SiteImagePhoto = {
  variant: 'photo'
  src: string
  alt: string
  width: number
  height: number
  fullWidth?: number
  /** Focal point for object-fit: cover crops in split/hero boxes */
  objectPosition?: string
}

export type SiteImageRaster = {
  variant: 'raster'
  src: string
  extension?: 'jpg' | 'png'
  alt: string
  width: number
  height: number
  fullWidth?: number
  objectPosition?: string
}

export type SiteImage = SiteImagePhoto | SiteImageRaster

const sitePhotoBase = '/images/photography/site'
const spencerBase = '/images/photography/spencer-dutoit'

export const siteImages = {
  home: {
    /** Portrait 3:4 — hero split column */
    hero: {
      src: `${spencerBase}/summit-ridge-hikers`,
      alt: 'Mountaineers ascending a snow-covered ridge toward the summit. Photography by Spencer DuToit.',
      width: 768,
      height: 1024,
      objectPosition: 'center 35%',
    },
    /** Landscape 4:3 — ContentSplit panel */
    methodologyJourney: {
      variant: 'photo',
      src: `${sitePhotoBase}/provo-canyon`,
      alt: 'Provo Canyon road winding through Utah mountains, symbolizing the transformation journey ahead.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center 55%',
    } satisfies SiteImagePhoto,
    /** Landscape 4:3 — ContentSplit panel */
    purposeIllustration: {
      variant: 'photo',
      src: `${sitePhotoBase}/sunrise-provo`,
      alt: 'Sunrise over Utah Valley with Mount Timpanogos, symbolizing new beginnings and purpose-driven transformation.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center 40%',
    } satisfies SiteImagePhoto,
    /** Landscape wide — full-bleed background */
    finalCtaBackground: {
      src: `${sitePhotoBase}/brianhead-sunset`,
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center 45%',
    },
  },
  services: {
    /** Portrait 3:4 — hero split column */
    hero: {
      src: `${spencerBase}/summit-climbers-samuel-joseph`,
      alt: 'Climbers working together on a steep alpine ridge. Photography by Spencer DuToit.',
      width: 768,
      height: 1024,
      objectPosition: 'center 30%',
    },
    humanTransformation: {
      variant: 'photo',
      src: `${sitePhotoBase}/drombeg-circle`,
      alt: 'Ancient stone circle in Ireland, symbolizing foundational structure and repeatable transformation patterns.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center center',
    } satisfies SiteImagePhoto,
    technology: {
      variant: 'photo',
      src: `${sitePhotoBase}/st-louis-bridge`,
      alt: 'St. Louis bridge spanning the Mississippi River, symbolizing connection between systems and teams.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center bottom',
    } satisfies SiteImagePhoto,
    revenue: {
      variant: 'photo',
      src: `${sitePhotoBase}/ballymacoda-fields`,
      alt: 'Rolling green fields in County Cork, Ireland, symbolizing sustainable growth and harvest.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center center',
    } satisfies SiteImagePhoto,
  },
  technology: {
    /** Landscape 4:3 — hero split column (unique from Home/Services Spencer photos) */
    hero: {
      variant: 'photo',
      src: `${sitePhotoBase}/st-louis-bridge-2`,
      alt: 'Gateway Arch and bridge in St. Louis, symbolizing technology that connects and scales business systems.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center bottom',
    } satisfies SiteImagePhoto,
  },
  contact: {
    hero: {
      src: `${sitePhotoBase}/cliffs-of-moher`,
      width: 1024,
      height: 768,
      objectPosition: 'center 60%',
    },
  },
  results: {
    hero: {
      src: '/images/case-studies-bridge-the-gap-hero',
      alt: 'Mountain landscape with a bridge symbolizing the gap-to-results transformation journey.',
      width: 768,
      height: 512,
      fullWidth: 768,
      objectPosition: 'center center',
    },
    intro: {
      variant: 'photo',
      src: `${sitePhotoBase}/timp-mountain`,
      alt: 'Mount Timpanogos rising above Utah Valley, symbolizing the scale of transformation ahead.',
      width: 1024,
      height: 768,
      fullWidth: 1024,
      objectPosition: 'center 25%',
    } satisfies SiteImagePhoto,
    caseStudies: {
      sos: {
        variant: 'photo',
        src: `${sitePhotoBase}/colorado-peaks`,
        alt: 'Colorado mountain peaks above the treeline, symbolizing elite-level growth and summit achievement.',
        width: 1024,
        height: 768,
        fullWidth: 1024,
        objectPosition: 'center 20%',
      } satisfies SiteImagePhoto,
      michelle: {
        variant: 'photo',
        src: `${sitePhotoBase}/provo-sunset`,
        alt: 'Sunset light through trees in Provo, Utah, symbolizing personal reflection and purpose-driven transformation.',
        width: 1024,
        height: 768,
        fullWidth: 1024,
        objectPosition: 'center center',
      } satisfies SiteImagePhoto,
      darrell: {
        variant: 'photo',
        src: `${sitePhotoBase}/st-louis-bridge`,
        alt: 'St. Louis bridge spanning the Mississippi River, symbolizing the transition from one business path to another.',
        width: 1024,
        height: 768,
        fullWidth: 1024,
        objectPosition: 'center bottom',
      } satisfies SiteImagePhoto,
      caselle: {
        variant: 'photo',
        src: `${sitePhotoBase}/ballymacoda-sunset`,
        alt: 'Dramatic sunset over Ballymacoda, Ireland, symbolizing breaking through boom-and-bust cycles.',
        width: 1024,
        height: 768,
        fullWidth: 1024,
        objectPosition: 'center 45%',
      } satisfies SiteImagePhoto,
      sebo: {
        variant: 'photo',
        src: `${sitePhotoBase}/brianhead-sunset`,
        alt: 'Sunset above the clouds at Brian Head, Utah, symbolizing breakthrough growth above previous limits.',
        width: 1024,
        height: 768,
        fullWidth: 1024,
        objectPosition: 'center 40%',
      } satisfies SiteImagePhoto,
      devpipeline: {
        variant: 'raster',
        src: '/images/extracted/technology/side-profile-tech',
        extension: 'jpg',
        alt: 'Abstract technology illustration representing technical empowerment and DevShop scaling.',
        width: 800,
        height: 800,
        fullWidth: 800,
        objectPosition: 'center center',
      } satisfies SiteImageRaster,
    },
  },
} as const
