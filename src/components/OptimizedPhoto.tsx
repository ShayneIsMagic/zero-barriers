type OptimizedPhotoProps = {
  /** Asset path without extension, e.g. /images/photography/spencer-dutoit/summit-ridge-hikers */
  src: string
  alt: string
  width: number
  height: number
  /** Pixel width of the full-size WebP (defaults to width). */
  fullWidth?: number
  loading?: 'lazy' | 'eager'
  priority?: boolean
  className?: string
  sizes?: string
}

/**
 * Responsive photo with WebP sources and JPEG fallback.
 * Keeps color vibrancy (q86 WebP) while reducing transfer size.
 */
export function OptimizedPhoto({
  src,
  alt,
  width,
  height,
  fullWidth,
  loading = 'lazy',
  priority = false,
  className,
  sizes,
}: OptimizedPhotoProps) {
  const resolvedFullWidth = fullWidth ?? width
  const resolvedSizes =
    sizes ?? `(max-width: 768px) 90vw, ${Math.min(resolvedFullWidth, 640)}px`

  return (
    <picture className={className}>
      <source
        type="image/webp"
        media="(max-width: 768px)"
        srcSet={`${src}-480.webp`}
      />
      <source
        type="image/webp"
        srcSet={`${src}-480.webp 480w, ${src}.webp ${resolvedFullWidth}w`}
        sizes={resolvedSizes}
      />
      <img
        src={`${src}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        sizes={resolvedSizes}
      />
    </picture>
  )
}
