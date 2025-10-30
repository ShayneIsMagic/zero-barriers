import Link from 'next/link'
import type { Metadata } from 'next'
import StoryCard from '../components/StoryCard'

export const metadata: Metadata = {
  title: 'Zero Barriers – Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
  description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
  alternates: { canonical: 'https://zerobarriers.io' },
  openGraph: {
    title: 'Zero Barriers – Revenue Growth Transformation',
    description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results.',
    url: 'https://zerobarriers.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Barriers – Revenue Growth Transformation',
    description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <span className="hero-tagline">Purpose-Driven Growth Agency</span>
              <h1 className="hero-title">Transform Your Revenue Growth</h1>
              <p className="hero-subtitle">Rapid, Substantial, Sustainable Growth</p>
              <div className="hero-image-mobile">
                <img src="/images/hero-human-transformation.png" alt="Human transformation visual illustrating revenue growth through purpose-driven methodologies" width="600" height="400" loading="lazy" />
              </div>
              <p className="hero-description">
                We specialize in rapid revenue transformation through proven methodologies that deliver measurable results. Our expert team unlocks your business potential with data-driven strategies and systematic implementation.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="cta-button primary">Get Started Today</Link>
                <Link href="/case-studies" className="cta-button secondary">View Case Studies</Link>
              </div>
            </div>
            <div className="hero-image-desktop">
              <img src="/images/hero-human-transformation.png" alt="Human transformation visual illustrating revenue growth through purpose-driven methodologies" width="800" height="600" loading="lazy" />
            </div>
          </div>
          <div className="hero-metrics">
            <div className="metric-item">
              <div className="metric-number">150%</div>
              <div className="metric-label">Average Revenue Growth</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">90</div>
              <div className="metric-label">Days to Results</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">200+</div>
              <div className="metric-label">Businesses Transformed</div>
            </div>
          </div>
          <div className="hero-cta">
            <Link href="/contact" className="cta-button">Schedule Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology">
        <div className="container">
          <div className="section-title">
            <h2>Our Proven Four-Phase Methodology</h2>
            <p>Our systematic approach delivers rapid, substantial, and sustainable growth for businesses through proven revenue generation strategies.</p>
          </div>
          <div className="methodology-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Identify Revenue Barriers</h3>
              <p className="step-description">
                Uncover what's preventing rapid revenue growth through comprehensive analysis of your current operations, identifying revenue bottlenecks, misalignments, and untapped revenue potential.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Implement Revenue Growth Best Practices</h3>
              <p className="step-description">
                Implement proven revenue generation systems by mapping top performer strategies, creating custom revenue growth playbooks, and establishing metrics that drive substantial growth.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Adapt Revenue Systems to Strengths</h3>
              <p className="step-description">
                Customize revenue generation solutions to your unique context by tailoring systems to leverage individual and team strengths, aligning revenue processes with your company culture for sustainable growth.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Engineer Revenue Success</h3>
              <p className="step-description">
                Create predictable, repeatable revenue growth patterns through systematic replication of top-performing revenue strategies and continuous improvement cycles driven by real-time data for sustainable growth.
              </p>
            </div>
          </div>
          <div className="methodology-cta">
            <Link href="/services" className="methodology-link">Learn more about our methodology <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Solutions</h2>
            <p>Comprehensive revenue generation solutions designed to eliminate barriers and drive sustainable growth through our integrated approach.</p>
          </div>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-header">Human Transformation</div>
              <div className="solution-content">
                <p>Powered by our purpose-driven revenue growth methodologies, we help individuals and teams unlock their full revenue potential through our proprietary frameworks:</p>
                <ul className="benefits-list">
                  <li>The Attitude Cycle™</li>
                  <li>IMPROV Sales Methodology™</li>
                  <li>Purpose-Driven Exercise™</li>
                </ul>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-header">Technology Enablement</div>
              <div className="solution-content">
                <p>Through our strategic partnerships, we implement the right technology solutions to streamline revenue operations and enhance customer experiences for rapid growth:</p>
                <ul className="benefits-list">
                  <li>Custom software development</li>
                  <li>Salesforce implementation</li>
                  <li>System integration and automation</li>
                </ul>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-header">Revenue Acceleration</div>
              <div className="solution-content">
                <p>Combining people, process, and technology for breakthrough revenue results, we create systems that generate predictable, sustainable revenue growth and substantial business expansion:</p>
                <ul className="benefits-list">
                  <li>Sales process optimization</li>
                  <li>KPI-driven performance management</li>
                  <li>Continuous improvement cycles</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="solutions-cta">
            <Link href="/services" className="solutions-link">Explore our comprehensive services <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Technology Division Section */}
      <section className="technology-division">
        <div className="container">
          <div className="section-title">
            <h2>Our Technology Division</h2>
            <p>Integrated technology solutions that deliver the infrastructure for rapid, substantial, sustainable revenue growth</p>
          </div>
          
          {/* CRM Solutions */}
          <div className="division-card">
            <div className="division-header">
              <h3>Zero Barriers CRM Solutions</h3>
              <p className="division-tagline">SalesforceConsultants.io Division | 40% Average ROI Improvement</p>
            </div>
            <div className="division-content">
              <div className="division-description">
                <div className="division-logos">
                  <img src="/images/salesforce-consulting-logo.svg" alt="Salesforce Consulting logo" className="division-logo" />
                  <img src="/images/caselle-logo.png" alt="Caselle logo" className="division-logo" />
                </div>
                <p>Our <strong>Zero Barriers CRM Solutions division</strong> delivers revenue growth through world-class CRM implementation and optimization. With 15+ Salesforce certifications and 100+ successful implementations, we provide the technology foundation for rapid, substantial, sustainable revenue growth.</p>
                
                <h4>Revenue Growth Benefits:</h4>
                <ul className="division-benefits">
                  <li><strong>40% Average ROI Improvement</strong> - Proven revenue growth through optimized CRM systems</li>
                  <li><strong>Custom Salesforce Development</strong> - Tailored solutions that streamline revenue workflows</li>
                  <li><strong>Salesforce Implementation</strong> - Seamless setup with proven adoption strategies for revenue teams</li>
                  <li><strong>Salesforce Training</strong> - Empower revenue teams with expert-led training</li>
                  <li><strong>Salesforce Integrations</strong> - Connect with QuickBooks, Mailchimp, and essential revenue tools</li>
                  <li><strong>Salesforce Automation</strong> - Eliminate repetitive tasks and boost revenue productivity</li>
                </ul>
                
                <div className="division-testimonial">
                  <p>"Shayne is warm and insightful, driving consistent 25% revenue growth for our company. His systems truly work, and he genuinely cares about his clients."</p>
                  <span className="testimonial-source">— Greg Williams, Business Owner</span>
                </div>
              </div>
              <div className="division-cta">
                <Link href="https://salesforceconsultants.io/" target="_blank" rel="noopener" className="division-button">
                  Explore CRM Solutions <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Development */}
          <div className="division-card">
            <div className="division-header">
              <h3>Zero Barriers Custom Development</h3>
              <p className="division-tagline">DevPipeline Division | Custom Development | Integration | Automation</p>
            </div>
            <div className="division-content">
              <div className="division-description">
                <div className="division-logos">
                  <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" className="division-logo" />
                  <img src="/images/q90-logo.svg" alt="Q90 logo" className="division-logo" />
                  <img src="/images/sebo-logo.svg" alt="Sebo logo" className="division-logo" />
                </div>
                <p>Our <strong>Zero Barriers Custom Development division</strong> delivers revenue growth through custom software solutions that eliminate technical barriers. With 30+ years of software development experience and a proven track record of building scalable systems, we create the technology infrastructure for sustainable revenue growth.</p>
                
                <h4>Revenue Growth Solutions:</h4>
                <ul className="division-benefits">
                  <li><strong>Custom CRM Development</strong> - Tailored systems that fit your unique revenue processes</li>
                  <li><strong>Workflow Management</strong> - Streamlined processes that accelerate revenue generation</li>
                  <li><strong>Data Management & Reporting</strong> - Real-time insights for revenue optimization</li>
                  <li><strong>Integrations & Feature Enhancements</strong> - Seamless connections between revenue systems</li>
                  <li><strong>Cross-Platform Customer-Facing Apps</strong> - Enhanced customer experiences that drive revenue</li>
                  <li><strong>E-Commerce Solutions</strong> - Direct revenue generation through optimized online platforms</li>
                  <li><strong>Inventory Management</strong> - Optimized operations that support revenue growth</li>
                  <li><strong>Task Management Systems</strong> - Improved productivity for revenue teams</li>
                </ul>
                
                <div className="division-testimonial">
                  <p>"Shayne helped me overcome my own barriers and stay focused on my goals. His guidance was the key to my success!"</p>
                  <span className="testimonial-source">— Darrel R., Business Leader</span>
                </div>
              </div>
              <div className="division-cta">
                <Link href="https://www.devpipeline.com/software-solutions" target="_blank" rel="noopener" className="division-button">
                  Explore Custom Development <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose">
        <div className="container">
          <div className="section-title">
            <h2>Purpose-Driven Revenue Growth Transformation</h2>
            <p>At Zero Barriers, we believe that lasting revenue growth starts with purpose. Our approach aligns personal motivation with professional excellence, creating organizations where people thrive and revenue growth follows.</p>
          </div>
          <div className="purpose-content">
            <div className="purpose-testimonial">
              <p className="purpose-testimonial-content">
                The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love in multiple arenas of my life.
              </p>
              <p className="purpose-testimonial-author">— Michelle A., Purpose-Driven Leader</p>
            </div>
            <Link href="/services" className="purpose-link">Discover our purpose and values <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="success-stories">
        <div className="container">
          <div className="section-title">
            <h2>Client Success Stories</h2>
            <p>Real results from businesses that transformed their revenue growth with Zero Barriers</p>
          </div>
          <div className="stories-grid">
            <StoryCard
              title="122% Growth Achievement"
              quote="We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles."
              author="— Jason Kidman, Owner | SOS Support"
            />
            <StoryCard
              title="25% Consistent Growth"
              quote="Shayne has tools and ideas that produce remarkable results. We grew 25% in revenue consistently for nearly a year. He genuinely cares for those he serves and his systems work."
              author="— Greg Williams, Business Owner | SeboDev"
            />
            <StoryCard
              title="Sales Process Optimization"
              quote="Working with Shayne was a game-changer! He quickly identified our sales challenges and provided effective solutions. His enthusiasm boosted results and morale across the entire team."
              author="— Kyle C., Sales Manager | Q90"
            />
            <StoryCard
              title="Purpose-Driven Transformation"
              quote="The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love."
              author="— Michelle A., Purpose-Driven Leader | SOS Support"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about achieving rapid, substantial, sustainable revenue growth</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do you achieve rapid revenue growth?</h3>
              <p>We achieve rapid revenue growth through our proven four-phase methodology that identifies revenue barriers, implements best practices, adapts systems to your strengths, and engineers predictable revenue success patterns.</p>
            </div>
            <div className="faq-item">
              <h3>What makes revenue growth substantial and sustainable?</h3>
              <p>Our revenue growth is substantial and sustainable because we focus on building systems, not just tactics. We create predictable, repeatable revenue patterns that scale with your business and deliver long-term results.</p>
            </div>
            <div className="faq-item">
              <h3>How does revenue generation work with your methodology?</h3>
              <p>Our revenue generation methodology combines human transformation, technology enablement, and revenue acceleration to eliminate barriers and create systems that generate predictable, sustainable revenue growth.</p>
            </div>
            <div className="faq-item">
              <h3>Can you really deliver 122% revenue growth?</h3>
              <p>Yes, our clients consistently achieve 122% revenue growth in first-year implementations through our proven rapid, substantial, sustainable growth methodology and strategic partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Dominate Revenue Growth?</h2>
            <p>
              Schedule a no-obligation revenue growth assessment with our team to identify your revenue barriers and explore how our proven methodology can help you achieve rapid, substantial, sustainable revenue growth.
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
