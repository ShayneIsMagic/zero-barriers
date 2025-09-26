'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Linkedin, User } from 'lucide-react';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    // Load Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Form handling
    const handleFormSubmit = async (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const submitBtn = form.querySelector('.submit-btn') as HTMLButtonElement;
      const btnText = form.querySelector('.btn-text') as HTMLSpanElement;
      const btnLoading = form.querySelector('.btn-loading') as HTMLSpanElement;
      
      // Show loading state
      if (btnText && btnLoading && submitBtn) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;
      }
      
      try {
        const formData = new FormData(form);
        
        // Add Turnstile response
        const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement;
        if (turnstileResponse) {
          formData.append('cf-turnstile-response', turnstileResponse.value);
        }
        
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          // Success message
          form.innerHTML = '<div class="success-message text-center p-6 bg-green-50 border border-green-200 rounded-lg"><h3 class="text-green-800 font-semibold text-lg mb-2">Thank you!</h3><p class="text-green-700">Your message has been sent successfully. We\'ll get back to you within 24 hours.</p></div>';
        } else {
          throw new Error('Failed to send message');
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
        
        // Reset form state
        if (btnText && btnLoading && submitBtn) {
          btnText.style.display = 'inline';
          btnLoading.style.display = 'none';
          submitBtn.disabled = false;
        }
      }
    };

    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Start Your Transformation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to eliminate barriers and achieve breakthrough growth?
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <Image
                src="/images/mountain-sunset.png"
                alt="Contact visualization"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ready to explore how Zero Barriers can help you achieve rapid, substantial, and sustainable growth? Complete the form to start the conversation.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Shayne Roy</div>
                    <div className="text-gray-600">Founder, Zero Barriers</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <a href="mailto:sk@zerobarriers.io" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                    sk@zerobarriers.io
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <a href="tel:8019970457" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                    801-997-0457
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-green-600" />
                  <a href="https://www.instagram.com/zerobarriersinc" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                    Instagram
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="h-5 w-5 text-green-600" />
                  <a href="https://www.facebook.com/zerobarriers" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                    Facebook
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-green-600" />
                  <a href="https://www.linkedin.com/company/zerobarriers" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <form
                id="contact-form"
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                action="#"
                method="POST"
              >
                {/* Honeypot field for spam protection */}
                <input 
                  type="text" 
                  name="website" 
                  style={{display: 'none'}} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
                
                {/* Hidden timestamp for bot detection */}
                <input 
                  type="hidden" 
                  name="form-start-time" 
                  value={Date.now()} 
                />
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                    ></textarea>
                  </div>
                  
                  {/* Cloudflare Turnstile CAPTCHA - Enhanced Security */}
        <div className="cf-turnstile" 
             data-sitekey="0x4AAAAAAB3leLaMnnM_ISQ0"
                       data-theme="light"
                       data-size="normal"
                       data-retry="auto"
                       data-retry-interval="8000"
                       data-refresh-expired="auto"
                       data-language="en">
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    This site is protected by Cloudflare Turnstile
                  </div>
                  
                  <button
                    type="submit"
                    className="submit-btn w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="btn-text">Send Message</span>
                    <span className="btn-loading" style={{display: 'none'}}>Sending...</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Business with Purpose
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover how our integrated approach can help you achieve rapid, substantial, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a Call
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Our Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
