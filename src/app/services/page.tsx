import Link from 'next/link'
import type { Metadata } from 'next'
import TrackedCTA from '../../components/TrackedCTA'

// Structured Data for Services Page
const servicesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zerobarriers.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://zerobarriers.io/services"
    }
  ]
}

export const metadata: Metadata = {
  title: 'Services | Zero Barriers – Human Transformation, Technology, Revenue, Strategy',
  description:
    'Explore Zero Barriers services: Human Transformation, Technology Enablement, Revenue Acceleration, Strategic Consulting, and Team Training.',
  alternates: { canonical: 'https://zerobarriers.io/services' },
  openGraph: {
    title: 'Services | Zero Barriers',
    description:
      'Explore Zero Barriers services: Human Transformation, Technology Enablement, Revenue Acceleration, Strategic Consulting, and Team Training.',
    url: 'https://zerobarriers.io/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Zero Barriers',
    description:
      'Explore Zero Barriers services: Human Transformation, Technology Enablement, Revenue Acceleration, Strategic Consulting, and Team Training.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesBreadcrumbSchema),
        }}
      />
      {/* Services Hero - Split Layout */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <span className="hero-tagline">THREE PILLARS, ONE TRANSFORMATION</span>
              <h1 className="hero-title">Purpose-Driven Growth Engine</h1>
              <p className="hero-subtitle">When purpose-driven human transformation, activated technology systems, and engineered revenue acceleration align—breakthrough results become inevitable.</p>
              <div className="hero-image-mobile">
                <img src="/images/extracted/services/Transforming_Breakthrough.png" alt="Strategic planning and growth transformation" width="600" height="400" loading="lazy" />
              </div>
              <p className="hero-description">
                Every client is different. We unleash potential through our proven three-pillar approach, delivering rapid, substantial, and sustainable transformation results across 15+ industries.
              </p>
              <div className="hero-cta">
                <TrackedCTA href="/contact" className="cta-button primary" location="services_hero">
                  Begin Your Transformation
                </TrackedCTA>
                <TrackedCTA href="/results" className="cta-button secondary" location="services_hero">
                  See Transformations
                </TrackedCTA>
              </div>
            </div>
            <div className="hero-image-desktop">
              <img src="/images/extracted/services/Transforming_Breakthrough.png" alt="Strategic planning and growth transformation" width="800" height="600" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Human Transformation */}
      <section className="service-detail" id="human">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Purpose Unleashed</span>
            <h2 className="service-title">Human Transformation</h2>
            <p className="service-description">
              Unleash human potential through purpose-driven transformation. When individuals connect with their deeper purpose, professional excellence follows naturally—delivering breakthrough results through our proprietary methodologies.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>The Attitude Cycle™</strong> - Our proprietary methodology
                  for creating mindset shifts that lead to lasting behavioral change
                </li>
                <li>
                  <strong>IMPROV Sales Methodology™</strong> - A customer-centric
                  approach to sales that emphasizes authenticity and adaptability
                </li>
                <li>
                  <strong>Purpose-Driven Exercise™</strong> - A structured process
                  for identifying individual and team purpose
                </li>
                <li>
                  <strong>Leadership Development</strong> - Programs designed to build
                  confident, effective leaders at all levels
                </li>
                <li>
                  <strong>Team Training & Development</strong> - Comprehensive training programs including sales training, leadership development workshops, customer service excellence, process adoption sessions, and role-based certifications that equip teams with skills, knowledge, and purpose-driven mindset for breakthrough performance
                </li>
                <li>
                  <strong>Team Alignment</strong> - Workshops and tools to align teams
                  around shared goals and values
                </li>
              </ul>
            </div>
            <div className="service-testimonial">
              <p className="service-testimonial-content">
                "The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love. It set me free and lit me on fire!"
              </p>
              <p className="service-testimonial-author">— Michelle A., SOS Support</p>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="/images/hero-human-transformation.png" 
              alt="Human transformation service illustration showing purpose-driven methodologies and revenue growth" 
              loading="eager"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Technology Enablement */}
      <section className="service-detail" id="technology">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Systems Activated</span>
            <h2 className="service-title">Technology Enablement</h2>
            <p className="service-description">
              Activate technology systems that amplify purpose-driven performance. Strategic implementation unleashes efficiency, scales transformation results, and eliminates technical barriers—enabling breakthrough growth.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Custom Software Development</strong> - Tailored applications
                  designed to address your specific business challenges
                </li>
                <li>
                  <strong>Salesforce Implementation</strong> - Expert configuration
                  and customization of the world's leading CRM platform
                </li>
                <li>
                  <strong>System Integration</strong> - Seamless connection of disparate
                  systems to create unified workflows
                </li>
                <li>
                  <strong>Workflow Automation</strong> - Identification and automation
                  of repetitive tasks to increase efficiency
                </li>
                <li>
                  <strong>Digital Presence Enhancement</strong> - Website development,
                  SEO, and digital marketing solutions
                </li>
              </ul>
            </div>
            <div className="service-testimonial">
              <p className="service-testimonial-content">
                "Shayne has tools and ideas that produce remarkable results. We grew 25% in revenue consistently for nearly a year. He genuinely cares for those he serves and his systems work."
              </p>
              <p className="service-testimonial-author">— Greg Williams, SeboDev</p>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/technology-empowerment-hero.png"
              alt="Technology enablement services including Salesforce implementation and custom software development"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Revenue Acceleration */}
      <section className="service-detail" id="revenue">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Growth Engineered</span>
            <h2 className="service-title">Revenue Acceleration & Strategic Planning</h2>
            <p className="service-description">
              Engineer revenue acceleration through purpose-aligned systems and strategic growth planning. When strategic plans and revenue processes align with purpose-driven values, growth becomes predictable, substantial, and sustainable—delivering breakthrough results.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Strategic Growth & Planning</strong> - Comprehensive strategic planning, growth strategy development, and roadmap creation aligned with purpose-driven values
                </li>
                <li>
                  <strong>Organizational Design</strong> - Structuring teams and roles for optimal performance and growth objectives
                </li>
                <li>
                  <strong>Sales Process Optimization</strong> - Design and implementation of efficient, effective sales processes
                </li>
                <li>
                  <strong>KPI-Driven Performance Management</strong> - Establishment of meaningful metrics and management systems
                </li>
                <li>
                  <strong>Revenue Operations (RevOps)</strong> - Alignment of sales, marketing, and customer success functions
                </li>
                <li>
                  <strong>Continuous Improvement Cycles</strong> - Implementation of feedback loops to drive ongoing enhancement
                </li>
                <li>
                  <strong>Market Expansion & M&A Support</strong> - Identification of new opportunities and integration planning
                </li>
              </ul>
            </div>
            <div className="service-testimonial">
              <p className="service-testimonial-content">
                "We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles."
              </p>
              <p className="service-testimonial-author">— Jason Kidman, SOS Support</p>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/services-b2b-sales.png"
              alt="B2B sales and revenue acceleration services optimizing sales processes and KPIs"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>


      {/* Strategic Partnerships */}
      <section className="partnerships" id="partnerships">
        <div className="container">
          <div className="section-title">
            <h2>Our Strategic Partnerships</h2>
            <p>
              Zero Barriers collaborates with industry leaders to deliver
              comprehensive solutions
            </p>
          </div>
          <div className="partnerships-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="partner-name">Zero Barriers Custom Development</h3>
              <p className="partner-description">
                Our technology division delivering custom software development, integration, automation, and workflow management solutions that eliminate technical barriers and accelerate revenue growth. 30+ years of experience building scalable systems for sustainable business growth.
              </p>
              <div className="partner-highlights">
                <span className="highlight">Custom CRM Development</span>
                <span className="highlight">Workflow Management</span>
                <span className="highlight">E-Commerce Solutions</span>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="partner-name">Zero Barriers CRM Solutions</h3>
              <p className="partner-description">
                Our technology division delivering 40% average ROI improvement through expert Salesforce implementation, customization, and optimization services. 15+ certifications and 100+ successful implementations for rapid revenue growth.
              </p>
              <div className="partner-highlights">
                <span className="highlight">40% ROI Improvement</span>
                <span className="highlight">15+ Certifications</span>
                <span className="highlight">100+ Implementations</span>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="partner-name">Growth Accelerators</h3>
              <p className="partner-description">
                Specialized revenue acceleration tools and methodologies to drive predictable, sustainable growth through proven frameworks and systematic approaches.
              </p>
              <div className="partner-highlights">
                <span className="highlight">Revenue Acceleration</span>
                <span className="highlight">Growth Frameworks</span>
                <span className="highlight">Systematic Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Transformation?</h2>
            <p>
              Schedule a no-obligation assessment to discover how purpose-driven transformation, activated technology systems, and engineered revenue acceleration can align to unleash your breakthrough results.
            </p>
            <TrackedCTA href="/contact" className="white-cta" location="services_final">
              Begin Your Transformation
            </TrackedCTA>
            <div>
              <TrackedCTA href="/results" className="secondary-white-cta" location="services_final">
                See Transformations <i className="fas fa-arrow-right"></i>
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

