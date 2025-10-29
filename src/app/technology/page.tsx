import Link from 'next/link'

export default function TechnologyPage() {
  return (
    <>
      {/* Technology Hero */}
      <section className="technology-hero">
        <div className="container">
          <div className="section-title">
            <h1>Our Technology Division</h1>
            <p>
              Integrated technology solutions that deliver the infrastructure for rapid, 
              substantial, sustainable revenue growth
            </p>
          </div>
        </div>
      </section>

      {/* CRM Solutions */}
      <section className="technology-section">
        <div className="container">
          <div className="technology-card">
            <div className="technology-header">
              <h2>Zero Barriers CRM Solutions</h2>
              <p className="technology-tagline">SalesforceConsultants.io Division | 40% Average ROI Improvement</p>
            </div>
            <div className="technology-content">
              <div className="technology-description">
                <div className="technology-logos">
                  <img src="/images/Salesforce_Consulting_Logo.svg" alt="Salesforce Consulting Logo" className="technology-logo" />
                  <img src="/images/caselle-updated-logo.png" alt="Caselle Logo" className="technology-logo" />
                </div>
                <p>Our <strong>Zero Barriers CRM Solutions division</strong> delivers revenue growth through world-class CRM implementation and optimization. With 15+ Salesforce certifications and 100+ successful implementations, we provide the technology foundation for rapid, substantial, sustainable revenue growth.</p>
                
                <h3>Revenue Growth Benefits:</h3>
                <ul className="technology-benefits">
                  <li><strong>40% Average ROI Improvement</strong> - Proven revenue growth through optimized CRM systems</li>
                  <li><strong>Custom Salesforce Development</strong> - Tailored solutions that streamline revenue workflows</li>
                  <li><strong>Salesforce Implementation</strong> - Seamless setup with proven adoption strategies for revenue teams</li>
                  <li><strong>Salesforce Training</strong> - Empower revenue teams with expert-led training</li>
                  <li><strong>Salesforce Integrations</strong> - Connect with QuickBooks, Mailchimp, and essential revenue tools</li>
                  <li><strong>Salesforce Automation</strong> - Eliminate repetitive tasks and boost revenue productivity</li>
                </ul>
                
                <div className="technology-testimonial">
                  <p>"Shayne is warm and insightful, driving consistent 25% revenue growth for our company. His systems truly work, and he genuinely cares about his clients."</p>
                  <span className="testimonial-source">— Greg Williams, Business Owner</span>
                </div>
              </div>
              <div className="technology-cta">
                <a href="https://salesforceconsultants.io/" target="_blank" rel="noopener" className="technology-button">
                  Explore CRM Solutions <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="technology-section">
        <div className="container">
          <div className="technology-card">
            <div className="technology-header">
              <h2>Zero Barriers Custom Development</h2>
              <p className="technology-tagline">DevPipeline Division | Custom Development | Integration | Automation</p>
            </div>
            <div className="technology-content">
              <div className="technology-description">
                <div className="technology-logos">
                  <img src="/images/devpipeline-black-logo.png" alt="DevPipeline Logo" className="technology-logo" />
                  <img src="/images/Q90-LOGO.svg" alt="Q90 Logo" className="technology-logo" />
                  <img src="/images/Sebo Logosvg.svg" alt="Sebo Logo" className="technology-logo" />
                </div>
                <p>Our <strong>Zero Barriers Custom Development division</strong> delivers revenue growth through custom software solutions that eliminate technical barriers. With 30+ years of software development experience and a proven track record of building scalable systems, we create the technology infrastructure for sustainable revenue growth.</p>
                
                <h3>Revenue Growth Solutions:</h3>
                <ul className="technology-benefits">
                  <li><strong>Custom CRM Development</strong> - Tailored systems that fit your unique revenue processes</li>
                  <li><strong>Workflow Management</strong> - Streamlined processes that accelerate revenue generation</li>
                  <li><strong>Data Management & Reporting</strong> - Real-time insights for revenue optimization</li>
                  <li><strong>Integrations & Feature Enhancements</strong> - Seamless connections between revenue systems</li>
                  <li><strong>Cross-Platform Customer-Facing Apps</strong> - Enhanced customer experiences that drive revenue</li>
                  <li><strong>E-Commerce Solutions</strong> - Direct revenue generation through optimized online platforms</li>
                  <li><strong>Inventory Management</strong> - Optimized operations that support revenue growth</li>
                  <li><strong>Task Management Systems</strong> - Improved productivity for revenue teams</li>
                </ul>
                
                <div className="technology-testimonial">
                  <p>"Shayne helped me overcome my own barriers and stay focused on my goals. His guidance was the key to my success!"</p>
                  <span className="testimonial-source">— Darrel R., Business Leader</span>
                </div>
              </div>
              <div className="technology-cta">
                <a href="https://www.devpipeline.com/software-solutions" target="_blank" rel="noopener" className="technology-button">
                  Explore Custom Development <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Technology?</h2>
            <p>
              Let's discuss how our technology solutions can help you achieve rapid, substantial,
              and sustainable growth. Schedule a consultation to explore the best approach for your organization.
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

