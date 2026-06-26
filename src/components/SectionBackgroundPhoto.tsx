type SectionBackgroundPhotoProps = {
  /** Asset path without extension */
  src: string
  width?: number
  height?: number
  priority?: boolean
}

/**
 * Full-bleed section background using an optimized picture element
 * instead of CSS background-image (enables lazy loading and WebP).
 */
export function SectionBackgroundPhoto({
  src,
  width = 768,
  height = 1024,
  priority = false,
}: SectionBackgroundPhotoProps) {
  return (
    <picture className="section-bg-photo" aria-hidden="true">
      <source
        type="image/webp"
        media="(max-width: 768px)"
        srcSet={`${src}-480.webp`}
      />
      <source type="image/webp" srcSet={`${src}.webp`} />
      <img
        src={`${src}.jpg`}
        alt=""
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        sizes="100vw"
      />
    </picture>
  )
}
