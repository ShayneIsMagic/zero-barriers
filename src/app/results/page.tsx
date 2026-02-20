import Link from 'next/link'
import type { Metadata } from 'next'
import TrackedCTA from '../../components/TrackedCTA'

export const metadata: Metadata = {
  title: 'Results | Zero Barriers – Gap → Bridge → Results',
  description:
    'Real businesses. Real breakthroughs. Detailed case studies showcasing how purpose-driven transformation delivers rapid, substantial, and sustainable results.',
  alternates: { canonical: 'https://zerobarriers.io/results' },
  openGraph: {
    title: 'Results | Zero Barriers',
    description:
      'Gap → Bridge → Results: Detailed transformation stories from Zero Barriers clients showing measurable outcomes.',
    url: 'https://zerobarriers.io/results',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Results | Zero Barriers',
    description:
      'Gap → Bridge → Results: Detailed transformation stories from Zero Barriers clients showing measurable outcomes.',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="section-title">
            <div className="testimonials-eyebrow-group">
              <span className="section-eyebrow transformation-eyebrow">TRANSFORMATION STORIES</span>
              <span className="section-eyebrow technology-eyebrow">TECHNOLOGY ENABLED</span>
              <span className="section-eyebrow services-eyebrow">SERVICES DELIVERED</span>
            </div>
            <h1>Real Businesses. Real Breakthroughs.</h1>
            <p>See how clients become the heroes of their own transformation stories</p>
          </div>
        </div>
      </section>

      {/* Case Studies Introduction Section */}
      <section className="case-studies-intro-section">
        <div className="container">
          <div className="case-studies-intro">
            <h2 className="intro-heading">Client Heroes, Proven Results</h2>
            <p className="intro-description">
              Every client is the hero of their own transformation story. Explore how we partnered with businesses to unlock their potential through our proven framework: <strong>The Gap</strong> (challenges they faced), <strong>The Bridge</strong> (how we worked together), and <strong>The Results</strong> (their breakthrough outcomes). Each case study demonstrates how purpose-driven partnership delivers rapid, substantial, and sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* SOS Support Case Study */}
      <section className="case-study-section transformation-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sos-support-logo.png" alt="SOS Support logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label transformation-label">Business Transformation</span>
                <h2 className="case-study-title">SOS Support: Engineering Elite-Level Growth</h2>
                <p className="case-study-client">Client: SOS Support | Owner: Jason Kidman</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                As owner of SOS Support, Jason Kidman faced a critical challenge:
                how to build an elite firm without becoming its single point of
                failure. He needed to address multiple barriers including:
              </p>
              <ul className="barrier-list">
                <li>Location limitations</li>
                <li>Staffing capabilities</li>
                <li>Structural inefficiencies</li>
                <li>Capacity constraints</li>
                <li>Brand development needs</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>
                Partnering together, we supported Jason's vision by implementing a comprehensive transformation approach:
              </p>
              <ul className="solution-list">
                <li>Served as Outsourced Sales and Service Manager</li>
                <li>
                  Applied the four-phase Zero Barriers methodology:
                  <ul className="solution-list" style={{marginTop: '10px'}}>
                    <li>Identified Barriers to Growth</li>
                    <li>Implemented System Adoption (Best Practices)</li>
                    <li>Facilitated System Adaptation (Own it)</li>
                    <li>Established KPI-driven Focus</li>
                  </ul>
                </li>
                <li>
                  Provided comprehensive coaching and leadership development
                </li>
                <li>Aligned implementation with the owner's vision</li>
              </ul>
              <div className="case-link">
                <Link href="/services#methodology">
                  Learn more about our four-phase methodology <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              
              {/* Key Stats Highlight */}
              <div className="results-stats-highlight">
                <div className="results-stat-card">
                  <div className="results-stat-number">122%</div>
                  <div className="results-stat-label">Growth in First Year</div>
                </div>
                <div className="results-stat-card">
                  <div className="results-stat-number">3</div>
                  <div className="results-stat-label">Consecutive Award Years</div>
                </div>
              </div>

              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li><strong>122% growth</strong> in the first year</li>
                    <li>Expanded market share and reach</li>
                    <li>Enhanced team recruitment and retention</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li>Achieved <strong>back-to-back banner years</strong> (2016-2018)</li>
                    <li>Strengthened customer portfolio</li>
                    <li>Improved client retention and advocacy</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Recognition as <strong>Utah One Hundred</strong> (2017, 2018)</li>
                    <li><strong>Next Gen 250 Award</strong> (2017)</li>
                    <li><strong>MSP 501 Global Award</strong> (2018)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-content">
                "We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles. Zero Barriers helped me identify top talent for building an elite firm."
              </p>
              <p className="testimonial-author">— Jason Kidman, SOS Support</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Michelle Atkinson Case Study */}
      <section className="case-study-section transformation-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sos-support-logo.png" alt="SOS Support logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label transformation-label">Personal Transformation</span>
                <h2 className="case-study-title">Personal Transformation: L. Michelle Atkinson</h2>
                <p className="case-study-client">Client: SOS Support | VP Operations & Finance</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                As VP of Operations & Finance at SOS Support, Michelle had achieved professional success but knew she needed to align her career with her deeper purpose. When we partnered together, she courageously faced these challenges:
              </p>
              <ul className="barrier-list">
                <li>Professional fulfillment despite success</li>
                <li>Recurring burnout cycles</li>
                <li>Misalignment between skills and passion</li>
                <li>Career transitions every three years</li>
                <li>Impact on personal well-being</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>
                Partnering together, we supported Michelle's journey by implementing a Purpose-Driven transformation approach:
              </p>
              <ul className="solution-list">
                <li>Comprehensive Purpose Exercise implementation</li>
                <li>Regular coaching sessions</li>
                <li>Five-step process execution</li>
                <li>Focus on authentic decision-making</li>
                <li>Barrier removal strategies</li>
              </ul>
              <div className="case-link">
                <Link href="/services#human">
                  Learn more about our Purpose-Driven Exercise <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li>Immediate attitude and focus transformation</li>
                    <li>Enhanced decision-making confidence</li>
                    <li>Career advancement and promotion</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li>Improved work-life integration</li>
                    <li>Strengthened professional relationships</li>
                    <li>Increased personal fulfillment</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Sustained positive mindset transformation</li>
                    <li>Enhanced self-talk and confidence</li>
                    <li>Improved relationship dynamics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-content">
                "The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love. It set me free and lit me on fire!"
              </p>
              <p className="testimonial-author">— Michelle A., SOS Support</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Darrell Rawlins Case Study */}
      <section className="case-study-section transformation-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/hays-company-logo.png" alt="Hays Company logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Sales Transformation</span>
                <h2 className="case-study-title">B2C to B2B Transformation: Darrell Rawlins</h2>
                <p className="case-study-client">Client: Hays and Company | Client Advisor</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                As a Client Advisor in Benefits & HR Consulting, Darrell was determined to master the B2B sales environment and build sustainable success. When we partnered together, he was ready to tackle these challenges:
              </p>
              <ul className="barrier-list">
                <li>Transition challenges from B2C to B2B sales</li>
                <li>Extended sales cycle adaptation</li>
                <li>Confidence and ability doubts</li>
                <li>Need for sustainable income stability</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>Partnering together, we supported Darrell's transformation by deploying our comprehensive toolkit:</p>
              <ul className="solution-list">
                <li>IMPROV Sales System implementation</li>
                <li>Purpose-Driven Exercise integration</li>
                <li>The Attitude Cycle methodology</li>
                <li>Individual and team coaching</li>
                <li>Personalized strength adaptation</li>
              </ul>
              <div className="case-link">
                <Link href="/services#revenue">
                  Learn more about our IMPROV Sales Methodology <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li>Record-setting appointment generation</li>
                    <li>Created "Mutual Discovery Tsunamis"</li>
                    <li>Outperformed industry veterans</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li>Successfully bridged B2C to B2B gap</li>
                    <li>Developed consultative selling expertise</li>
                    <li>Enhanced client relationship capabilities</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Established authentic purpose alignment</li>
                    <li>Increased client investment and trust</li>
                    <li>Sustained high-performance results</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-content">
                "Shayne helped me find ways to adapt the process without losing sight of the ultimate goal. He helped me break down the barriers I had placed in my own way. Shayne prevented me from missing the path to success."
              </p>
              <p className="testimonial-author">— Darrel R., Hays and Company</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caselle Case Study */}
      <section className="case-study-section services-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/caselle-logo.png" alt="Caselle logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label services-label">Sales Process Transformation</span>
                <h2 className="case-study-title">Caselle: Breaking the Boom-Bust Cycle</h2>
                <p className="case-study-client">Client: Caselle | Leadership Team</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                Caselle's leadership team recognized they were stuck in a boom-bust cycle—one good year followed by a lean year—and were determined to break this pattern. When we partnered together, they were ready to build sustainable, predictable growth:
              </p>
              <ul className="barrier-list">
                <li>Inconsistent year-over-year performance</li>
                <li>Lack of predictable sales processes</li>
                <li>No systematic approach to sales</li>
                <li>Dependency on individual sales talent</li>
                <li>Inability to scale consistently</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>Partnering together, we supported Caselle's vision by implementing a comprehensive sales transformation:</p>
              <ul className="solution-list">
                <li>Developed a new, systematic sales process</li>
                <li>Created a custom sales playbook</li>
                <li>Improved sales stages in Salesforce CRM</li>
                <li>Replicated top performer strategies</li>
                <li>Implemented consistent sales methodologies</li>
              </ul>
              <div className="case-link">
                <Link href="/services#revenue">
                  Learn more about our sales transformation methodology <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              
              {/* Key Stats Highlight */}
              <div className="results-stats-highlight">
                <div className="results-stat-card">
                  <div className="results-stat-number">3</div>
                  <div className="results-stat-label">Consecutive Banner Years</div>
                </div>
                <div className="results-stat-card">
                  <div className="results-stat-number">100%</div>
                  <div className="results-stat-label">Boom-Bust Cycle Eliminated</div>
                </div>
              </div>

              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li>Immediate implementation of new sales processes</li>
                    <li>Quick adoption of systematic approaches</li>
                    <li>Rapid improvement in sales consistency</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li>Achieved <strong>3 consecutive banner years</strong></li>
                    <li>Broke the boom-bust cycle completely</li>
                    <li>Established predictable revenue streams</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Created repeatable sales success patterns</li>
                    <li>Built scalable sales infrastructure</li>
                    <li>Established long-term growth foundation</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sebo Case Study */}
      <section className="case-study-section services-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sebo-logo.svg" alt="Sebo logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Revenue Growth & Process Optimization</span>
                <h2 className="case-study-title">Sebo's Transformation: Engineer Growth</h2>
                <p className="case-study-client">Client: Sebo Marketing | Leadership Team</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                Sebo Marketing's leadership had a clear vision: increase revenue and strategically split off their website development division into a separate entity. When we partnered together, they were ready to tackle this ambitious transformation:
              </p>
              <ul className="barrier-list">
                <li>Need for revenue growth strategies</li>
                <li>Complex division separation planning</li>
                <li>Identifying key personnel for new division</li>
                <li>Coaching entire company on sales processes</li>
                <li>Strategic business restructuring</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>Partnering together, we supported Sebo's strategic vision by providing comprehensive business transformation:</p>
              <ul className="solution-list">
                <li>Identified barriers to growth and expansion</li>
                <li>Coached entire company on IMPROV Sales methodology</li>
                <li>Identified key individuals for SeboDev division</li>
                <li>Created strategic plan for division spin-off</li>
                <li>Provided leadership development and coaching</li>
              </ul>
              <div className="case-link">
                <Link href="/services#revenue">
                  Learn more about our IMPROV Sales methodology <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              
              {/* Key Stats Highlight */}
              <div className="results-stats-highlight">
                <div className="results-stat-card">
                  <div className="results-stat-number">25%</div>
                  <div className="results-stat-label">Revenue Growth</div>
                </div>
                <div className="results-stat-card">
                  <div className="results-stat-number">100%</div>
                  <div className="results-stat-label">Company-Wide Adoption</div>
                </div>
              </div>

              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li>Immediate implementation of IMPROV Sales across company</li>
                    <li>Quick identification of division separation strategy</li>
                    <li>Rapid coaching and skill development</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li>Successfully increased <strong>revenue by 25%</strong></li>
                    <li>Identified and prepared key personnel for SeboDev</li>
                    <li>Created viable division separation plan</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Established foundation for SeboDev spin-off</li>
                    <li>Built sustainable sales processes</li>
                    <li>Created scalable business structure</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevPipeline Case Study */}
      <section className="case-study-section technology-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label technology-label">Technology Enablement & Growth</span>
                <h2 className="case-study-title">DevPipeline: Scaling Through Technology</h2>
                <p className="case-study-client">Client: DevPipeline | Leadership Team</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                DevPipeline had an ambitious vision: create a viable apprenticeship program and establish a DevShop that could provide employer partners with qualified candidates while maintaining multiple development teams. When we partnered together, they were ready to bring this vision to life:
              </p>
              <ul className="barrier-list">
                <li>Need for structured apprenticeship program</li>
                <li>DevShop establishment and management</li>
                <li>Scaling development teams effectively</li>
                <li>Providing quality candidates to employer partners</li>
                <li>Balancing training and production work</li>
              </ul>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-bridge"></i> The Bridge: Solution
              </h3>
              <p>Partnering together, we supported DevPipeline's vision by providing strategic development and scaling support:</p>
              <ul className="solution-list">
                <li>Designed comprehensive apprenticeship program</li>
                <li>Established DevShop operational structure</li>
                <li>Created scalable team management processes</li>
                <li>Developed employer partner relationships</li>
                <li>Implemented quality assurance systems</li>
              </ul>
              <div className="case-link">
                <Link href="/services#technology">
                  Learn more about our technology enablement services <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-chart-line"></i> The Results: Success
              </h3>
              
              {/* Key Stats Highlight */}
              <div className="results-stats-highlight">
                <div className="results-stat-card">
                  <div className="results-stat-number">4-6</div>
                  <div className="results-stat-label">Active Dev Teams</div>
                </div>
                <div className="results-stat-card">
                  <div className="results-stat-number">100%</div>
                  <div className="results-stat-label">Award-Winning Program</div>
                </div>
              </div>

              <div className="results-group">
                <div className="result-category">
                  <h4 className="result-category-title">Rapid Growth:</h4>
                  <ul className="results-list">
                    <li>Quick establishment of apprenticeship program</li>
                    <li>Rapid DevShop setup and operation</li>
                    <li>Immediate employer partner engagement</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Substantial Growth:</h4>
                  <ul className="results-list">
                    <li><strong>Award-winning</strong> apprenticeship program</li>
                    <li>Thriving DevShop with <strong>4-6 development teams</strong></li>
                    <li>Successful candidate placement with employer partners</li>
                  </ul>
                </div>
                <div className="result-category">
                  <h4 className="result-category-title">Sustainable Growth:</h4>
                  <ul className="results-list">
                    <li>Scalable apprenticeship model</li>
                    <li>Sustainable DevShop operations</li>
                    <li>Long-term employer partner relationships</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Ready to transform your business or career with Zero Barriers?</p>
          <TrackedCTA href="/contact" className="white-cta" location="results_final">
            Schedule Your Transformation Assessment
          </TrackedCTA>
          <div>
            <TrackedCTA href="/services#methodology" className="secondary-white-cta" location="results_final">
              Explore Our Methodology <i className="fas fa-arrow-right"></i>
            </TrackedCTA>
          </div>
        </div>
      </section>
    </>
  )
}
