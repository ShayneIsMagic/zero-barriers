'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const metrics = [
    { number: '150%', label: 'Average Revenue Growth' },
    { number: '90', label: 'Days to Results' },
    { number: '200+', label: 'Businesses Transformed' },
  ];

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
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              variants={itemVariants}
            >
              Purpose-Driven Growth Agency
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Transform Your{' '}
              <span className="text-green-600">Revenue Growth</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 font-medium"
              variants={itemVariants}
            >
              Rapid, Substantial, Sustainable Growth
            </motion.p>

            {/* Mobile Image */}
            <motion.div className="lg:hidden" variants={itemVariants}>
              <Image
                src="/images/Human_Transformation.png"
                alt="Human transformation and growth visualization"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              We specialize in rapid revenue transformation through proven methodologies that deliver measurable results. Our expert team unlocks your business potential with data-driven strategies and systematic implementation.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            className="hidden lg:block relative"
            variants={itemVariants}
          >
            <Image
              src="/images/Human_Transformation.png"
              alt="Human transformation and growth visualization"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-green-600 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
              >
                {metric.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
