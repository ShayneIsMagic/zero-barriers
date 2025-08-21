import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/zblogo.png"
                alt="Zero Barriers Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">ZERO BARRIERS</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Potential Unleashed: Transforming people and organizations through rapid, substantial, and sustainable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#human-transformation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Human Transformation
                </Link>
              </li>
              <li>
                <Link href="/services#technology-enablement" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link href="/services#revenue-acceleration" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Revenue Acceleration
                </Link>
              </li>
              <li>
                <Link href="/services#strategic-consulting" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#team-training" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Team Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>518 E 800 N, Suite A</p>
                <p>Orem, Utah 84097</p>
                <p>+1 (801) 997-0457</p>
                <p>info@zerobarriers.io</p>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zero Barriers. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
