type SiteLogoProps = {
  /** Display height in CSS pixels (40 header, 60 footer). */
  size?: 40 | 60
  className?: string
}

const SIZES = {
  40: { asset: 80, width: 40, height: 40 },
  60: { asset: 120, width: 60, height: 60 },
} as const

export function SiteLogo({ size = 40, className }: SiteLogoProps) {
  const { asset, width, height } = SIZES[size]

  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`/images/zero-barriers-logo-${asset}.webp`}
      />
      <img
        src={`/images/zero-barriers-logo-${asset}.png`}
        alt="Zero Barriers logo"
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  )
}
