'use client'

import { isProtectedImagePath, blockImageSave } from '../lib/image-protection'
import { ProtectedMediaShell } from './ProtectedMediaShell'

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
  objectPosition?: string
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
  objectPosition = 'center center',
}: OptimizedRasterProps) {
  const resolvedFullWidth = fullWidth ?? width
  const resolvedSizes =
    sizes ?? `(max-width: 992px) 92vw, ${Math.min(resolvedFullWidth, 680)}px`
  const protectedMedia = isProtectedImagePath(src)
  const imgSrc = `${src}.webp`

  return (
    <ProtectedMediaShell protectedMedia={protectedMedia} className={className}>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 768px)"
          srcSet={`${src}-480.webp 480w, ${src}.webp ${resolvedFullWidth}w`}
          sizes={resolvedSizes}
        />
        <source
          type="image/webp"
          srcSet={`${src}-480.webp 480w, ${src}.webp ${resolvedFullWidth}w`}
          sizes={resolvedSizes}
        />
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          sizes={resolvedSizes}
          draggable={false}
          style={{ objectPosition }}
          onContextMenu={protectedMedia ? blockImageSave : undefined}
          onDragStart={protectedMedia ? blockImageSave : undefined}
        />
      </picture>
    </ProtectedMediaShell>
  )
}
