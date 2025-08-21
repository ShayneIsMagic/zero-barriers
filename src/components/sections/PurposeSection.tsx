'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PurposeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Purpose-Driven Revenue Growth Transformation
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 mb-12 leading-relaxed"
            variants={itemVariants}
          >
            At Zero Barriers, we believe that lasting revenue growth starts with purpose. Our approach aligns personal motivation with professional excellence, creating organizations where people thrive and revenue growth follows.
          </motion.p>

          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-8"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic mb-4">
                &ldquo;The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love in multiple arenas of my life.&rdquo;
              </p>
              <p className="text-lg text-gray-600 font-medium">
                — Michelle A., Purpose-Driven Leader
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/services"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg group transition-colors duration-200"
            >
              Discover our purpose and values
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
