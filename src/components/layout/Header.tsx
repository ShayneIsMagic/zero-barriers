'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      description: 'Transform your revenue growth'
    },
    { 
      name: 'Services', 
      href: '/services',
      description: 'Our proven methodologies',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Human Transformation', href: '/services#human-transformation', description: 'Purpose-driven methodologies' },
        { name: 'Technology Enablement', href: '/services#technology-enablement', description: 'Digital transformation solutions' },
        { name: 'Revenue Acceleration', href: '/services#revenue-acceleration', description: 'Breakthrough growth strategies' }
      ]
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

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
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
                className="w-12 h-12 filter brightness-110 contrast-125 drop-shadow-lg"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black leading-none ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                ZERO BARRIERS
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-gray-600' : 'text-blue-200'
              }`}>
                Revenue Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                        <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="ml-4 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                onClick={closeMobileMenu}
                              >
                                <div className="font-medium">{dropdownItem.name}</div>
                                <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
