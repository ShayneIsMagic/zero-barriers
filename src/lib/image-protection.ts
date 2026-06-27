/** Client-side mirror of functions/_shared/image-guard.ts path rules. */
import type { DragEvent, MouseEvent } from 'react'

export const COPY_WATERMARK =
  '\n\n— © Zero Barriers | https://zerobarriers.io\nLicensed content. Unauthorized reproduction prohibited.'

export const IMAGE_COPY_WATERMARK =
  '© Zero Barriers | https://zerobarriers.io\nLicensed image. Unauthorized reproduction prohibited.'

export function isProtectedImagePath(src: string): boolean {
  if (/logo|og-image|twitter-card|zero-barriers-logo/i.test(src)) {
    return false
  }
  return (
    src.includes('/photography/') ||
    src.includes('human-transformation') ||
    src.includes('transforming-breakthrough') ||
    src.includes('technology-empowerment') ||
    src.includes('bridge-the-gap-hero') ||
    src.includes('revenue-flow-landscape') ||
    src.includes('/extracted/technology/')
  )
}

export function blockImageSave(event: MouseEvent | DragEvent): void {
  event.preventDefault()
}
