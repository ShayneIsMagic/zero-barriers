type DivisionLogoProps = {
  src: string
  alt: string
  format?: 'png' | 'svg'
}

export function DivisionLogo({ src, alt, format = 'png' }: DivisionLogoProps) {
  if (format === 'svg') {
    return (
      <img
        src={`${src}.svg`}
        alt={alt}
        width={150}
        height={60}
        className="division-logo"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <picture>
      <source type="image/webp" srcSet={`${src}-150.webp`} />
      <img
        src={`${src}.png`}
        alt={alt}
        width={150}
        height={60}
        className="division-logo"
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}
