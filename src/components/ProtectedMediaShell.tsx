'use client'

import { blockImageSave } from '../lib/image-protection'

type ProtectedMediaShellProps = {
  protectedMedia: boolean
  className?: string
  children: React.ReactNode
}

/** Transparent overlay + interaction blocks for licensed / sensitive imagery. */
export function ProtectedMediaShell({
  protectedMedia,
  className,
  children,
}: ProtectedMediaShellProps) {
  if (!protectedMedia) {
    return <>{children}</>
  }

  return (
    <div
      className={`protected-media${className ? ` ${className}` : ''}`}
      onContextMenu={blockImageSave}
      onDragStart={blockImageSave}
    >
      {children}
      <div className="protected-media-shield" aria-hidden="true" />
    </div>
  )
}
