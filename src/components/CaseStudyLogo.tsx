type CaseStudyLogoProps = {
  /** Path without extension, e.g. /images/sos-support-logo */
  src: string
  alt: string
  /** SVG logos skip WebP optimization. */
  format?: 'png' | 'svg'
}

export function CaseStudyLogo({ src, alt, format = 'png' }: CaseStudyLogoProps) {
  if (format === 'svg') {
    return (
      <img
        src={`${src}.svg`}
        alt={alt}
        width={110}
        height={80}
        className="case-study-logo-large"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <picture>
      <source type="image/webp" srcSet={`${src}-120.webp`} />
      <img
        src={`${src}.png`}
        alt={alt}
        width={110}
        height={80}
        className="case-study-logo-large"
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}
