import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
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
              src="/images/Human_Transformation.png" 
              alt="human transformation" 
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
              src="/images/side-profile-tech.png"
              alt="technology enablement"
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
              src="/images/B2B Sales.png"
              alt="revenue acceleration"
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
            <span className="service-label">Strategic Growth Consulting</span>
            <h2 className="service-title">Strategic Consulting</h2>
            <p className="service-description">
              Our strategic consulting services provide high-level guidance and
              expertise to help you navigate complex business challenges and
              opportunities. We work with leadership teams to develop comprehensive
              strategies that drive sustainable growth.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Business Strategy Development</strong> - Comprehensive
                  strategic planning and roadmap creation
                </li>
                <li>
                  <strong>Market Analysis & Positioning</strong> - Deep dive into
                  market opportunities and competitive positioning
                </li>
                <li>
                  <strong>Organizational Design</strong> - Structure optimization
                  to support growth objectives
                </li>
                <li>
                  <strong>Change Management</strong> - Guidance through major
                  organizational transitions
                </li>
                <li>
                  <strong>Performance Optimization</strong> - Identification and
                  elimination of operational inefficiencies
                </li>
              </ul>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/Team.png"
              alt="strategic consulting"
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
            <span className="service-label">Team Development & Training</span>
            <h2 className="service-title">Team Training</h2>
            <p className="service-description">
              Our team training programs are designed to elevate the performance
              of your entire organization. We provide comprehensive training
              solutions that build skills, improve collaboration, and drive
              measurable results.
            </p>
            <div className="service-features">
              <ul className="benefits-list">
                <li>
                  <strong>Sales Training Programs</strong> - Comprehensive sales
                  skill development and methodology training
                </li>
                <li>
                  <strong>Leadership Development</strong> - Programs to build
                  effective leaders at all levels
                </li>
                <li>
                  <strong>Team Building Workshops</strong> - Interactive sessions
                  to improve collaboration and communication
                </li>
                <li>
                  <strong>Process Training</strong> - Implementation and adoption
                  of new processes and systems
                </li>
                <li>
                  <strong>Ongoing Support</strong> - Continuous coaching and
                  reinforcement to ensure lasting change
                </li>
              </ul>
            </div>
          </div>
          <div className="service-image">
            <img
              src="/images/teamwork.jpg"
              alt="team training"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's discuss how our services can help you achieve rapid, substantial,
              and sustainable growth. Schedule a consultation to explore the best
              approach for your organization.
            </p>
            <Link href="/contact" className="white-cta">Schedule Your Consultation</Link>
            <div>
              <Link href="/case-studies" className="secondary-white-cta">View Our Case Studies <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

