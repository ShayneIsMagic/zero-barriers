'use client'

import { useEffect } from 'react'
import { IMAGE_COPY_WATERMARK } from '../lib/image-protection'

function isFormField(element: EventTarget | null): boolean {
  if (!(element instanceof HTMLElement)) return false
  return Boolean(
    element.closest('input, textarea, select, [contenteditable="true"]')
  )
}

function isInsideProtectedMedia(element: EventTarget | null): boolean {
  if (!(element instanceof HTMLElement)) return false
  return Boolean(element.closest('.protected-media'))
}

/**
 * Adds a clipboard attribution line only when visitors copy protected images.
 * Text selections copy normally so headings and body copy stay clean on mobile.
 */
export function CopyWatermark() {
  useEffect(() => {
    const onCopy = (event: ClipboardEvent) => {
      if (isFormField(event.target)) return

      const selection = window.getSelection()
      const copiedText = selection?.toString().trim() ?? ''

      if (copiedText) return

      if (isInsideProtectedMedia(event.target)) {
        event.clipboardData?.setData('text/plain', IMAGE_COPY_WATERMARK)
        event.preventDefault()
      }
    }

    document.addEventListener('copy', onCopy)
    return () => document.removeEventListener('copy', onCopy)
  }, [])

  return null
}
