import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials | Zero Barriers – Proven Results',
  description:
    'Real stories and measurable outcomes from Zero Barriers clients across industries—ROI gains, revenue growth, adoption, and transformation.',
  alternates: { canonical: 'https://zerobarriers.io/testimonials' },
  openGraph: {
    title: 'Client Testimonials | Zero Barriers',
    description:
      'Real stories and measurable outcomes from Zero Barriers clients across industries.',
    url: 'https://zerobarriers.io/testimonials',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Zero Barriers',
    description:
      'Real stories and measurable outcomes from Zero Barriers clients across industries.',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="testimonials-hero">
        {/* Floating Logos Layer */}
        <div className="floating-logos">
          <img src="/images/caselle-logo.png" alt="Caselle logo" />
          <img src="/images/salesforce-consulting-logo.svg" alt="Salesforce Consulting logo" />
          <img src="/images/q90-logo.svg" alt="Q90 logo" />
          <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" />
          <img src="/images/sebo-logo.svg" alt="Sebo logo" />
          <img src="/images/sos-support-logo.png" alt="SOS Support logo" />
        </div>
        <div className="container">
          <div className="section-title">
            <h1>Client Testimonials</h1>
            <p>Real stories from real businesses achieving breakthrough growth</p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="featured-testimonials">
        <div className="container">
          <div className="testimonial-grid">
            {/* Caselle Success Story */}
            <div className="testimonial-card featured">
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-logo">
                    <img src="/images/caselle-logo.png" alt="Caselle logo" />
                  </div>
                  <h3>Transformative Revenue Growth</h3>
                  <p className="client-name">Caselle</p>
                  <p className="client-title">Commitment to Community</p>
                </div>
                <div className="results-badge">
                  <span className="percentage">40%</span>
                  <span className="label">ROI</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"Zero Barriers delivered exceptional results through their integrated technology approach. Their CRM solutions and custom development services eliminated our technical barriers and accelerated our revenue growth significantly."</p>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">40%</span>
                  <span className="metric-label">ROI Improvement</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Implementation Success</span>
                </div>
                <div className="metric">
                  <span className="metric-value">6 Months</span>
                  <span className="metric-label">Time to Results</span>
                </div>
              </div>
            </div>

            {/* DevPipeline Success Story */}
            <div className="testimonial-card featured">
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-logo">
                    <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" />
                  </div>
                  <h3>Custom Development Excellence</h3>
                  <p className="client-name">DevPipeline</p>
                  <p className="client-title">Technology Division Partner</p>
                </div>
                <div className="results-badge">
                  <span className="percentage">30+</span>
                  <span className="label">Years</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"Our partnership with Zero Barriers has been instrumental in delivering world-class custom development solutions. With 30+ years of experience, we've built scalable systems that eliminate technical barriers for sustainable business growth."</p>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">30+</span>
                  <span className="metric-label">Years Experience</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100+</span>
                  <span className="metric-label">Projects Delivered</span>
                </div>
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="industry-testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Success Across Industries</h2>
            <p>Our revenue growth methodology works across diverse business sectors</p>
          </div>
          <div className="industry-grid">
            {/* Q90 Technology */}
            <div className="industry-section">
              <h3>Technology & Innovation</h3>
              <div className="testimonial-card">
                <div className="client-logo-small">
                  <img src="/images/q90-logo.svg" alt="Q90 logo" />
                </div>
                <div className="testimonial-content">
                  <p>"Zero Barriers' technology enablement division delivered exceptional results. Their integrated approach to CRM solutions and custom development helped us achieve significant operational improvements and revenue growth."</p>
                </div>
                <div className="client-info">
                  <p className="client-name">Q90 Technology</p>
                  <p className="client-title">Innovation Partner</p>
                </div>
              </div>
            </div>

            {/* Salesforce Consulting */}
            <div className="industry-section">
              <h3>CRM Solutions</h3>
              <div className="testimonial-card">
                <div className="client-logo-small">
                  <img src="/images/salesforce-consulting-logo.svg" alt="Salesforce Consulting logo" />
                </div>
                <div className="testimonial-content">
                  <p>"Our partnership with Zero Barriers has been transformative. We've achieved 40% average ROI improvement and 100+ successful implementations through their proven Salesforce expertise and methodology."</p>
                </div>
                <div className="client-info">
                  <p className="client-name">Salesforce Consulting</p>
                  <p className="client-title">CRM Excellence Partner</p>
                </div>
              </div>
            </div>

            {/* Sebo */}
            <div className="industry-section">
              <h3>Business Solutions</h3>
              <div className="testimonial-card">
                <div className="client-logo-small">
                  <img src="/images/sebo-logo.svg" alt="Sebo logo" />
                </div>
                <div className="testimonial-content">
                  <p>"Zero Barriers' revenue acceleration framework transformed our business processes. We achieved substantial growth through their systematic approach to eliminating barriers and optimizing operations."</p>
                </div>
                <div className="client-info">
                  <p className="client-name">Sebo</p>
                  <p className="client-title">Business Solutions Partner</p>
                </div>
              </div>
            </div>

            {/* SOS Support */}
            <div className="industry-section">
              <h3>Support Services</h3>
              <div className="testimonial-card">
                <div className="client-logo-small">
                  <img src="/images/sos-support-logo.png" alt="SOS Support Logo" />
                </div>
                <div className="testimonial-content">
                  <p>"We achieved 122% revenue growth in our first year! Zero Barriers empowered our team, instilled ownership principles, and identified top talent for our elite firm. Their revenue growth methodology delivered rapid, substantial, sustainable results."</p>
                </div>
                <div className="client-info">
                  <p className="client-name">Jason Kidman</p>
                  <p className="client-title">CEO, SOS Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Results */}
      <section className="methodology-results">
        <div className="container">
          <div className="section-title">
            <h2>Proven Results Across Our Methodology</h2>
            <p>Every phase of our revenue growth methodology delivers measurable results</p>
          </div>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">1</div>
              <h3>Identify Revenue Barriers</h3>
              <p className="result-stats">Average 40% efficiency gain identified</p>
              <p className="result-description">Clients discover untapped revenue potential and eliminate bottlenecks through our comprehensive analysis.</p>
            </div>
            <div className="result-card">
              <div className="result-number">2</div>
              <h3>Implement Best Practices</h3>
              <p className="result-stats">Average 60% process improvement</p>
              <p className="result-description">Proven systems and methodologies deliver immediate performance improvements and revenue acceleration.</p>
            </div>
            <div className="result-card">
              <div className="result-number">3</div>
              <h3>Adapt to Strengths</h3>
              <p className="result-stats">Average 80% team adoption rate</p>
              <p className="result-description">Customized solutions that leverage individual and team strengths for sustainable growth.</p>
            </div>
            <div className="result-card">
              <div className="result-number">4</div>
              <h3>Engineer Success</h3>
              <p className="result-stats">Average 122% revenue growth</p>
              <p className="result-description">Predictable, repeatable revenue patterns that scale with your business and deliver lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Join the growing list of businesses achieving rapid, substantial, sustainable revenue growth with Zero Barriers</p>
          <Link href="/contact" className="white-cta">Schedule Your Revenue Growth Assessment</Link>
          <div>
            <Link href="/case-studies" className="secondary-white-cta">View Detailed Case Studies <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  )
}
