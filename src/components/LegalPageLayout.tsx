type LegalPageLayoutProps = {
  title: string
  children: React.ReactNode
}

const POLICY_DATES = 'Effective Date: July 24, 2026 | Last Updated: July 24, 2026'

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
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
