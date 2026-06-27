import { OptimizedPhoto } from './OptimizedPhoto'
import { OptimizedRaster } from './OptimizedRaster'
import type { SiteImage } from '../lib/site-images'

type ContentSplitProps = {
  image: SiteImage
  reverse?: boolean
  children: React.ReactNode
}

function SplitImageMedia({ image }: { image: SiteImage }) {
  const sizes = '(max-width: 992px) 92vw, 680px'

  if (image.variant === 'photo') {
    return (
      <OptimizedPhoto
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fullWidth={image.fullWidth}
        loading="lazy"
        sizes={sizes}
        objectPosition={image.objectPosition}
      />
    )
  }

  return (
    <OptimizedRaster
      src={image.src}
      extension={image.extension ?? 'jpg'}
      alt={image.alt}
      width={image.width}
      height={image.height}
      fullWidth={image.fullWidth ?? image.width}
      loading="lazy"
      sizes={sizes}
      objectPosition={image.objectPosition}
    />
  )
}

/** Services-style two-column text + image layout (shared across pages). */
export function ContentSplit({ image, reverse, children }: ContentSplitProps) {
  return (
    <div
      className={`container service-container${reverse ? ' service-container--reverse' : ''}`}
    >
      <div className="service-content">{children}</div>
      <div className="service-image">
        <SplitImageMedia image={image} />
      </div>
    </div>
  )
}

type CaseStudySectionProps = {
  className: string
  image?: SiteImage
  reverse?: boolean
  children: React.ReactNode
}

export function CaseStudySection({
  className,
  image,
  reverse,
  children,
}: CaseStudySectionProps) {
  return (
    <section className={`case-study-section ${className}`}>
      {image ? (
        <ContentSplit image={image} reverse={reverse}>
          {children}
        </ContentSplit>
      ) : (
        <div className="container">{children}</div>
      )}
    </section>
  )
}
