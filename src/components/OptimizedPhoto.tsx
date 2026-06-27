'use client'

import { isProtectedImagePath, blockImageSave } from '../lib/image-protection'
import { ProtectedMediaShell } from './ProtectedMediaShell'

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
  objectPosition?: string
}

/**
 * Responsive photo with WebP sources and JPEG fallback.
 * Protected paths omit the JPEG URL and use an interaction shield.
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
  objectPosition = 'center center',
}: OptimizedPhotoProps) {
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
