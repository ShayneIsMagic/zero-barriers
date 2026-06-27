type LegalPageLayoutProps = {
  title: string
  documentLabel?: string
  children: React.ReactNode
}

const POLICY_DATES = 'Effective Date: July 24, 2026 | Last Updated: July 24, 2026'

export default function LegalPageLayout({ title, documentLabel, children }: LegalPageLayoutProps) {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
            {documentLabel ? (
              <span className="section-eyebrow">{documentLabel}</span>
            ) : null}
            <h1>{title}</h1>
            <p>{POLICY_DATES}</p>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-document">{children}</div>
      </section>
    </>
  )
}
