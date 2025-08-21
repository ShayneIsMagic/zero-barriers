'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      description: 'Transform your revenue growth'
    },
    { 
      name: 'Services', 
      href: '/services',
      description: 'Our proven methodologies'
    },
    { 
      name: 'Technology', 
      href: '/technology',
      description: 'Digital transformation solutions'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies',
      description: 'Success stories & results'
    },
    { 
      name: 'Testimonials', 
      href: '/testimonials',
      description: 'Client feedback & results'
    },
    { 
      name: 'Contact', 
      href: '/contact',
      description: 'Start your transformation'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-professional-200 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/zblogo.png"
                alt="Zero Barriers Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-growth-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-professional-900 leading-none">
                ZERO BARRIERS
              </span>
              <span className="text-xs text-professional-500 font-medium uppercase tracking-wider">
                Revenue Growth Transformation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-professional-700 hover:text-primary-600 font-medium rounded-lg transition-all duration-200 group-hover:bg-primary-50"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-growth-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </Link>
                
                {/* Hover Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-professional-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {item.description}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-professional-900 rotate-45" />
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary group"
            >
              Start Transformation
              <motion.div
                className="ml-2 w-5 h-5 bg-white rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ArrowRight className="h-3 w-3 text-primary-600" />
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-professional-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-professional-200">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-base font-medium text-professional-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                  >
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-professional-500">{item.description}</div>
                  </Link>
                ))}
                <div className="pt-4 border-t border-professional-200">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full text-center btn-primary"
                  >
                    Start Your Transformation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
