import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/zblogo.png"
                  alt="Zero Barriers Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 filter brightness-110 contrast-125 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              </div>
              <div>
                <span className="text-2xl font-black">ZERO BARRIERS</span>
                <div className="text-sm text-blue-200 font-medium">Revenue Growth Agency</div>
              </div>
            </div>
            
            <p className="text-blue-100 mb-8 max-w-lg leading-relaxed">
              We eliminate revenue barriers and engineer breakthrough growth through our proven four-phase methodology, delivering measurable, sustainable results for businesses ready to transform.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-blue-200">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">200+ Businesses Transformed</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm">122% Average Growth</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services#human-transformation" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Human Transformation
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#technology-enablement" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#revenue-acceleration" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Revenue Acceleration
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#strategic-consulting" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#team-training" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Team Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link 
                  href="/" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/technology" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Contact
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm">Orem, Utah 84097</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-sm">+1 (801) 997-0457</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-sm">info@zerobarriers.io</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-blue-700/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Revenue?</h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Join 200+ businesses that have eliminated revenue barriers and achieved breakthrough growth with our proven methodology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/30 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              © {currentYear} Zero Barriers. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-blue-300">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
