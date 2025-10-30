import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <div className="footer-logo">
              <img className="logo-image" src="/images/zero-barriers-logo.png" alt="Zero Barriers logo" />
              ZERO <span>BARRIERS</span>
            </div>
            <p className="footer-description">
              Potential Unleashed: Transforming people and organizations through rapid, substantial, and sustainable growth.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/zerobarriers"><i className="fab fa-linkedin-in" aria-label="LinkedIn"></i></a>
              <a href="https://www.facebook.com/zerobarriers"><i className="fab fa-facebook-f" aria-label="Facebook"></i></a>
              <a href="https://www.instagram.com/zerobarriersinc"><i className="fab fa-instagram" aria-label="Instagram"></i></a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link href="/services#human">Human Transformation</Link></li>
              <li><Link href="/services#technology">Technology Enablement</Link></li>
              <li><Link href="/services#revenue">Revenue Acceleration</Link></li>
              <li><Link href="/services#consulting">Strategic Consulting</Link></li>
              <li><Link href="/services#training">Team Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt" aria-label="Address"></i>
              </div>
              <p>518 E 800 N, Suite A<br />Orem, Utah 84097</p>
            </div>
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fas fa-phone-alt" aria-label="Phone"></i>
              </div>
              <p>+1 (801) 997-0457</p>
            </div>
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fas fa-envelope" aria-label="Email"></i>
              </div>
              <p>sk@zerobarriers.io</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Zero Barriers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
