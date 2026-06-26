type OptimizedRasterProps = {
  /** Asset path without extension */
  src: string
  extension?: 'png' | 'jpg'
  alt: string
  width: number
  height: number
  fullWidth?: number
  loading?: 'lazy' | 'eager'
  priority?: boolean
  className?: string
  sizes?: string
}

/** Responsive WebP + PNG/JPEG fallback for raster illustrations. */
export function OptimizedRaster({
  src,
  extension = 'png',
  alt,
  width,
  height,
  fullWidth,
  loading = 'lazy',
  priority = false,
  className,
  sizes,
}: OptimizedRasterProps) {
  const resolvedFullWidth = fullWidth ?? width
  const resolvedSizes =
    sizes ?? `(max-width: 768px) 90vw, ${Math.min(resolvedFullWidth, 640)}px`
  const fallback = `${src}.${extension}`

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
        src={fallback}
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
