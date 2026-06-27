'use client'

import { isProtectedImagePath, blockImageSave } from '../lib/image-protection'
import { ProtectedMediaShell } from './ProtectedMediaShell'

type SectionBackgroundPhotoProps = {
  /** Asset path without extension */
  src: string
  width?: number
  height?: number
  priority?: boolean
  objectPosition?: string
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
  objectPosition = 'center center',
}: SectionBackgroundPhotoProps) {
  const protectedMedia = isProtectedImagePath(src)
  const imgSrc = protectedMedia ? `${src}.webp` : `${src}.jpg`

  return (
    <ProtectedMediaShell protectedMedia={protectedMedia} className="section-bg-photo">
      <picture aria-hidden="true">
        <source
          type="image/webp"
          media="(max-width: 768px)"
          srcSet={`${src}-480.webp`}
        />
        <source type="image/webp" srcSet={`${src}.webp`} />
        <img
          src={imgSrc}
          alt=""
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          sizes="100vw"
          style={{ objectPosition }}
          draggable={false}
          onContextMenu={protectedMedia ? blockImageSave : undefined}
          onDragStart={protectedMedia ? blockImageSave : undefined}
        />
      </picture>
    </ProtectedMediaShell>
  )
}
