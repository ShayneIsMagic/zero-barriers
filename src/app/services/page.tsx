import Link from 'next/link'
import type { Metadata } from 'next'

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
      {/* Services Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="section-title">
            <h1>Our Services</h1>
            <p>
              Comprehensive solutions designed to eliminate barriers and engineer
              breakthrough growth through our proven four-phase methodology
            </p>
          </div>
          <div className="services-intro">
            <p>
              Zero Barriers delivers rapid, substantial, and sustainable results through our systematic approach to transformation. Each service is designed to work independently or as part of our comprehensive growth solution.
            </p>
          </div>
        </div>
      </section>

      {/* Human Transformation */}
      <section className="service-detail" id="human">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Purpose-Driven Transformation</span>
            <h2 className="service-title">Human Transformation</h2>
            <p className="service-description">
              Our human transformation services help individuals and teams unlock
              their full potential through purpose-driven methodologies and
              proprietary frameworks. We believe that lasting success starts with
              people who understand their purpose and are equipped with the right
              mindset and skills.
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
            <span className="service-label">Technology-Enabled Growth</span>
            <h2 className="service-title">Technology Enablement</h2>
            <p className="service-description">
              Through our strategic partnerships, we implement the right
              technology solutions to streamline operations, enhance customer
              experiences, and drive efficiency. Our technology enablement
              services are designed to support your growth objectives and
              eliminate technical barriers.
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
            <span className="service-label">Revenue Growth & Acceleration</span>
            <h2 className="service-title">Revenue Acceleration</h2>
            <p className="service-description">
              By combining people, process, and technology, we create systems that
              generate predictable, sustainable revenue growth. Our revenue
              acceleration services focus on eliminating bottlenecks and
              optimizing your entire revenue generation process.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Sales Process Optimization</strong> - Design and implementation
                  of efficient, effective sales processes
                </li>
                <li>
                  <strong>KPI-Driven Performance Management</strong> - Establishment
                  of meaningful metrics and management systems
                </li>
                <li>
                  <strong>Continuous Improvement Cycles</strong> - Implementation of
                  feedback loops to drive ongoing enhancement
                </li>
                <li>
                  <strong>Revenue Operations (RevOps)</strong> - Alignment of sales,
                  marketing, and customer success functions
                </li>
                <li>
                  <strong>Compensation Design</strong> - Creation of incentive structures
                  that drive desired behaviors and outcomes
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

      {/* Strategic Consulting */}
      <section className="service-detail" id="consulting">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Strategic Growth & Planning</span>
            <h2 className="service-title">Strategic Consulting</h2>
            <p className="service-description">
              Our strategic consulting services provide expert guidance on
              critical business challenges and opportunities. We work with
              executive teams to identify growth obstacles, develop strategic
              plans, and implement solutions that drive sustainable results.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Growth Strategy Development</strong> - Creation of clear,
                  actionable plans to achieve revenue targets
                </li>
                <li>
                  <strong>Organizational Design</strong> - Structuring teams and roles
                  for optimal performance
                </li>
                <li>
                  <strong>Market Expansion</strong> - Identification and evaluation
                  of new market opportunities
                </li>
                <li>
                  <strong>Merger & Acquisition Support</strong> - Due diligence and
                  integration planning
                </li>
                <li>
                  <strong>Executive Coaching</strong> - One-on-one support for leaders
                  driving transformation
                </li>
              </ul>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/services-strategic-consulting-transforming-breakthrough.png"
              alt="Strategic consulting services for business transformation and growth strategy development"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Team Training */}
      <section className="service-detail" id="training">
        <div className="container service-container">
          <div className="service-content">
            <span className="service-label">Skills Development & Training</span>
            <h2 className="service-title">Team Training</h2>
            <p className="service-description">
              Our training programs equip your teams with the skills, knowledge,
              and mindset needed to excel in their roles. From sales professionals
              to customer service representatives, we provide custom training
              solutions designed to drive immediate performance improvements.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Sales Training</strong> - Comprehensive programs to develop
                  consultative selling skills
                </li>
                <li>
                  <strong>Leadership Development</strong> - Practical workshops for
                  new and experienced leaders
                </li>
                <li>
                  <strong>Customer Service Excellence</strong> - Training focused on
                  creating exceptional experiences
                </li>
                <li>
                  <strong>Process Adoption</strong> - Sessions designed to drive compliance
                  with new systems and processes
                </li>
                <li>
                  <strong>Role-Based Certifications</strong> - Structured programs
                  to validate skills and knowledge
                </li>
              </ul>
            </div>
            <div className="service-testimonial">
              <p className="service-testimonial-content">
                "Shayne guided me to find purpose and direction in my life. He's incredibly passionate about building people and making a difference. He always takes time to make sure you're doing well."
              </p>
              <p className="service-testimonial-author">— Andrew B., DevPipeline</p>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/services-team-collaboration.jpg"
              alt="Team training and collaboration services for sales teams and leadership development"
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
            <h2>Ready to Eliminate Your Growth Barriers?</h2>
            <p>
              Schedule a no-obligation transformation assessment with our team to identify your barriers to growth and explore how our integrated approach can help you achieve rapid, substantial, and sustainable results.
            </p>
            <Link href="/contact" className="white-cta">Schedule Your Assessment</Link>
            <div>
              <Link href="/case-studies" className="secondary-white-cta">Explore Our Case Studies <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

