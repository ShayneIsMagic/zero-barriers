import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Empowerment | Zero Barriers – CRM + Custom Development',
  description:
    'Zero Barriers technology division delivers Salesforce CRM solutions and custom development to eliminate technical barriers and accelerate revenue.',
  alternates: { canonical: 'https://zerobarriers.io/technology' },
  openGraph: {
    title: 'Tech Empowerment | Zero Barriers',
    description:
      'Salesforce CRM solutions and custom development to eliminate technical barriers and accelerate revenue.',
    url: 'https://zerobarriers.io/technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Empowerment | Zero Barriers',
    description:
      'Salesforce CRM solutions and custom development to eliminate technical barriers and accelerate revenue.',
  },
}

export default function TechnologyPage() {
  return (
    <>
      {/* Technology Hero */}
      <section className="technology-hero">
        <div className="container">
          <div className="section-title">
            <h1>Tech Empowerment</h1>
            <p>Strategic technology solutions to streamline operations and enhance customer experiences</p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="technology-overview">
        <div className="container">
          <div className="overview-container">
            <div className="overview-content">
              <h2>Unified Technology Solutions for Revenue Growth</h2>
              <p>
                Our technology division combines the expertise of industry-leading specialists to deliver comprehensive solutions that eliminate technical barriers and accelerate revenue growth. Through our integrated approach, we provide the technology foundation for rapid, substantial, sustainable business transformation.
              </p>
              <div className="technology-stats">
                <div className="stat">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Average ROI Improvement</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Successful Implementations</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Salesforce Certifications</span>
                </div>
                <div className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Years Development Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Solutions */}
      <section className="crm-solutions">
        <div className="container">
          <div className="division-header">
            <h2>Zero Barriers CRM Solutions</h2>
            <p className="division-subtitle">Powered by SalesforceConsultants.io | A Zero Barriers Technology Division</p>
          </div>
          <div className="division-content">
            <div className="division-logos">
              <img src="/images/salesforce-consulting-logo.svg" alt="Salesforce Consulting logo" className="division-logo" />
              <img src="/images/caselle-logo.png" alt="Caselle logo" className="division-logo" />
            </div>
            <div className="division-description">
              <p>
                Our CRM Solutions division delivers world-class Salesforce implementation and optimization services that provide the technology backbone for revenue growth. With 15+ Salesforce certifications and 100+ successful implementations, we ensure your CRM becomes a powerful engine for sustainable growth.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <h3>Custom Salesforce Development</h3>
                <p>Tailored CRM solutions that streamline your revenue workflows and eliminate bottlenecks in your sales process.</p>
              </div>
              <div className="service-item">
                <h3>Salesforce Implementation</h3>
                <p>Seamless setup with proven adoption strategies designed specifically for revenue teams and growth objectives.</p>
              </div>
              <div className="service-item">
                <h3>Salesforce Training</h3>
                <p>Expert-led training that empowers your revenue teams to maximize CRM utilization and drive results.</p>
              </div>
              <div className="service-item">
                <h3>Salesforce Integrations</h3>
                <p>Connect with QuickBooks, Mailchimp, and other essential revenue tools for unified data and workflows.</p>
              </div>
              <div className="service-item">
                <h3>Salesforce Automation</h3>
                <p>Eliminate repetitive tasks and boost revenue productivity through intelligent automation workflows.</p>
              </div>
              <div className="service-item">
                <h3>Salesforce Migrations</h3>
                <p>Transition from legacy systems with zero data loss and minimal disruption to your revenue operations.</p>
              </div>
            </div>
            <div className="division-testimonial">
              <p>"Our partnership with SalesforceConsultants.io has been instrumental in delivering world-class CRM solutions to our clients, with proven results of 40% ROI improvement and 100+ successful implementations."</p>
              <span className="testimonial-source">— Zero Barriers Technology Division</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="custom-development">
        <div className="container">
          <div className="division-header">
            <h2>Zero Barriers Custom Development</h2>
            <p className="division-subtitle">Powered by DevPipeline | A Zero Barriers Technology Division</p>
          </div>
          <div className="division-content">
            <div className="division-logos">
              <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" className="division-logo" />
              <img src="/images/q90-logo.svg" alt="Q90 logo" className="division-logo" />
              <img src="/images/sebo-logo.svg" alt="Sebo logo" className="division-logo" />
            </div>
            <div className="division-description">
              <p>
                Our Custom Development division delivers comprehensive software solutions that eliminate technical barriers and create the infrastructure for sustainable revenue growth. With 30+ years of software development experience, we build scalable systems that support your business transformation.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <h3>Custom CRM Development</h3>
                <p>Tailored systems that fit your unique revenue processes and eliminate technical barriers to growth.</p>
              </div>
              <div className="service-item">
                <h3>Workflow Management</h3>
                <p>Streamlined processes that accelerate revenue generation and eliminate operational bottlenecks.</p>
              </div>
              <div className="service-item">
                <h3>Data Management & Reporting</h3>
                <p>Real-time insights for revenue optimization and data-driven decision making.</p>
              </div>
              <div className="service-item">
                <h3>Integrations & Feature Enhancements</h3>
                <p>Seamless connections between revenue systems for unified data and improved efficiency.</p>
              </div>
              <div className="service-item">
                <h3>Cross-Platform Customer-Facing Apps</h3>
                <p>Enhanced customer experiences that drive revenue through improved engagement and satisfaction.</p>
              </div>
              <div className="service-item">
                <h3>E-Commerce Solutions</h3>
                <p>Direct revenue generation through optimized online platforms and digital commerce systems.</p>
              </div>
            </div>
            <div className="division-testimonial">
              <p>"Our partnership with DevPipeline enables us to deliver exceptional custom development solutions, with 30+ years of experience building scalable systems that eliminate technical barriers for our clients."</p>
              <span className="testimonial-source">— Zero Barriers Technology Division</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="integrated-approach">
        <div className="container">
          <div className="section-title">
            <h2>Our Integrated Technology Approach</h2>
            <p>How our unified technology division delivers comprehensive revenue growth solutions</p>
          </div>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Unified Strategy</h3>
              <p>Both divisions work together under the Zero Barriers brand to deliver cohesive technology solutions that eliminate barriers and accelerate revenue growth.</p>
            </div>
            <div className="approach-item">
              <h3>Proven Results</h3>
              <p>Combined track record of 40% ROI improvement, 100+ successful implementations, and 15+ years of technology expertise across both divisions.</p>
            </div>
            <div className="approach-item">
              <h3>Comprehensive Coverage</h3>
              <p>From CRM optimization to custom development, our technology divisions cover every aspect of technology-enabled revenue growth.</p>
            </div>
            <div className="approach-item">
              <h3>Local Expertise</h3>
              <p>Serving Utah, California, and surrounding areas with personalized support and deep understanding of local business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Technology Infrastructure?</h2>
            <p>
              Discover how our integrated technology division can eliminate barriers and accelerate your revenue growth
            </p>
            <Link href="/contact" className="white-cta">Schedule Your Technology Assessment</Link>
            <div>
              <Link href="/testimonials" className="secondary-white-cta">See Technology Success Stories <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
