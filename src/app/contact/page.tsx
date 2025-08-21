import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Linkedin, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Zero Barriers | Start Your Revenue Growth Transformation',
  description: 'Ready to transform your revenue growth? Contact Zero Barriers for a free consultation. Our proven methodologies deliver rapid, substantial, and sustainable results. Schedule your transformation assessment today.',
};

const ContactPage = () => {
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="90687b2d-b5f9-471e-bf36-759c2b3ce51c"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://zerobarriers.io/form-submitted"
                />
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      How can we help you? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Submit
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
