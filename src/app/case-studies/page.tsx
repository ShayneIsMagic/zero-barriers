import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Zero Barriers – Gap → Bridge → Results',
  description:
    'Detailed case studies showcasing the Gap (challenges), Bridge (solutions), and Results (measurable outcomes) delivered by Zero Barriers.',
  alternates: { canonical: 'https://zerobarriers.io/case-studies' },
  openGraph: {
    title: 'Case Studies | Zero Barriers',
    description:
      'Gap → Bridge → Results: measurable outcomes delivered by Zero Barriers.',
    url: 'https://zerobarriers.io/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Zero Barriers',
    description:
      'Gap → Bridge → Results: measurable outcomes delivered by Zero Barriers.',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Case Studies Hero */}
      <section className="case-studies-hero">
        <div className="container">
          <div className="section-title">
            <h1>Case Studies</h1>
            <p>Real results from real businesses using our proven revenue growth methodologies</p>
          </div>
          <div className="case-studies-intro">
            <p>
              Explore detailed success stories following our proven framework: The Gap (challenges), The Bridge (solutions), and The Results (measurable outcomes). Each case study demonstrates how we transform businesses through rapid, substantial, and sustainable growth.
            </p>
          </div>
          <div className="case-studies-stats">
            <div className="case-stat-item">
              <div className="case-stat-number">122%</div>
              <div className="case-stat-label">Peak Growth Achieved</div>
            </div>
            <div className="case-stat-item">
              <div className="case-stat-number">6</div>
              <div className="case-stat-label">Detailed Case Studies</div>
            </div>
            <div className="case-stat-item">
              <div className="case-stat-number">100%</div>
              <div className="case-stat-label">Client Success Rate</div>
            </div>
            <div className="case-stat-item">
              <div className="case-stat-number">25-122%</div>
              <div className="case-stat-label">Revenue Growth Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Support Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sos-support-logo.png" alt="SOS Support logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Business Transformation</span>
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
                Zero Barriers implemented its comprehensive transformation
                approach:
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
            <div className="case-link">
              <Link href="/services#partnerships">
                See how our partnerships enhanced this solution <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Michelle Atkinson Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sos-support-logo.png" alt="SOS Support logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Personal Transformation</span>
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
                As VP of Operations & Finance at SOS Support, Michelle struggled
                with:
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
                Zero Barriers implemented its Purpose-Driven transformation
                approach:
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
            <div className="case-link">
              <Link href="/services#purpose">
                Discover the values that drive our transformation approach <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Darrell Rawlins Case Study */}
      <section className="case-study-section">
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
                As a Client Advisor in Benefits & HR Consulting, Darrell faced:
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
              <p>Zero Barriers deployed its comprehensive toolkit:</p>
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
            <div className="case-link">
              <Link href="/services#technology">
                See how our CRM partnerships enhance sales transformation <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caselle Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/caselle-logo.png" alt="Caselle logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Sales Process Transformation</span>
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
                Caselle faced a critical challenge: they were stuck in a boom-bust cycle where they would have one good year followed by a lean year. This pattern was preventing sustainable growth and creating uncertainty for the business.
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
              <p>Zero Barriers implemented a comprehensive sales transformation:</p>
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

            <div className="testimonial">
              <p className="testimonial-content">
                Zero Barriers delivered exactly what we needed - a systematic approach that broke our boom-bust cycle and delivered three consecutive banner years. Their sales process transformation was the key to our sustainable growth.
              </p>
              <p className="testimonial-author">— Caselle Leadership Team</p>
            </div>
            <div className="case-link">
              <Link href="/services#technology">
                See how our CRM partnerships enhance sales transformation <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sebo Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/sebo-logo.svg" alt="Sebo logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Revenue Growth & Process Optimization</span>
                <h2 className="case-study-title">Sebo: From Chaos to Clarity</h2>
                <p className="case-study-client">Client: Sebo Marketing | Leadership Team</p>
              </div>
            </div>
            
            <div className="case-study-content-full">
            
            <div className="case-study-module">
              <h3 className="module-title">
                <i className="fas fa-exclamation-triangle"></i> The Gap: Barrier
              </h3>
              <p>
                Sebo Marketing wanted to increase revenue and split off their website development division into a separate entity. They needed to identify growth barriers and create a strategic plan for division separation.
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
              <p>Zero Barriers provided comprehensive business transformation:</p>
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

            <div className="testimonial">
              <p className="testimonial-content">
                Zero Barriers helped us not only increase revenue but also strategically plan our division separation. Their IMPROV Sales coaching transformed our entire company and identified the perfect team for our new SeboDev division.
              </p>
              <p className="testimonial-author">— Sebo Marketing Leadership</p>
            </div>
            <div className="case-link">
              <Link href="/services#technology">
                See how our technology partnerships support business growth <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevPipeline Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-study-header">
              <div className="case-study-logo-container">
                <img src="/images/devpipeline-logo-black.png" alt="DevPipeline logo" className="case-study-logo-large" />
              </div>
              <div className="case-study-header-content">
                <span className="case-study-label">Technology Enablement & Growth</span>
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
                DevPipeline needed to create a viable apprenticeship program and establish a DevShop that could provide employer partners with qualified candidates while maintaining multiple development teams.
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
              <p>Zero Barriers provided strategic development and scaling support:</p>
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

            <div className="testimonial">
              <p className="testimonial-content">
                Zero Barriers helped us create an award-winning apprenticeship program and a thriving DevShop that consistently delivers quality candidates to our employer partners. Their strategic guidance was invaluable to our success.
              </p>
              <p className="testimonial-author">— DevPipeline Leadership</p>
            </div>
            <div className="case-link">
              <Link href="/services#partnerships">
                See how our strategic partnerships drive success <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Create Your Success Story</h2>
            <p>Ready to transform your business or career with Zero Barriers?</p>
            <Link href="/contact" className="white-cta">Schedule Your Transformation Assessment</Link>
            <div>
              <Link href="/services#methodology" className="secondary-white-cta">Explore Our Methodology <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
