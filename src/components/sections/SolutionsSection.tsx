'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Human Transformation',
      description: 'Powered by our purpose-driven revenue growth methodologies, we help individuals and teams unlock their full revenue potential through our proprietary frameworks:',
      benefits: [
        'The Attitude Cycle™',
        'IMPROV Sales Methodology™',
        'Purpose-Driven Exercise™'
      ]
    },
    {
      title: 'Technology Enablement',
      description: 'Through our strategic partnerships, we implement the right technology solutions to streamline revenue operations and enhance customer experiences for rapid growth:',
      benefits: [
        'Custom software development',
        'Salesforce implementation',
        'System integration and automation'
      ]
    },
    {
      title: 'Revenue Acceleration',
      description: 'Combining people, process, and technology for breakthrough revenue results, we create systems that generate predictable, sustainable revenue growth and substantial business expansion:',
      benefits: [
        'Sales process optimization',
        'KPI-driven performance management',
        'Continuous improvement cycles'
      ]
    }
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive revenue generation solutions designed to eliminate barriers and drive sustainable growth through our integrated approach.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-3 mb-6">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg group transition-colors duration-200"
          >
            Explore our comprehensive services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
