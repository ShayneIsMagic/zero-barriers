'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MethodologySection = () => {
  const methodologySteps = [
    {
      number: 1,
      title: 'Identify Revenue Barriers',
      description: 'Uncover what\'s preventing rapid revenue growth through comprehensive analysis of your current operations, identifying revenue bottlenecks, misalignments, and untapped revenue potential.'
    },
    {
      number: 2,
      title: 'Implement Revenue Growth Best Practices',
      description: 'Implement proven revenue generation systems by mapping top performer strategies, creating custom revenue growth playbooks, and establishing metrics that drive substantial growth.'
    },
    {
      number: 3,
      title: 'Adapt Revenue Systems to Strengths',
      description: 'Customize revenue generation solutions to your unique context by tailoring systems to leverage individual and team strengths, aligning revenue processes with your company culture for sustainable growth.'
    },
    {
      number: 4,
      title: 'Engineer Revenue Success',
      description: 'Create predictable, repeatable revenue growth patterns through systematic replication of top-performing revenue strategies and continuous improvement cycles driven by real-time data for sustainable growth.'
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
    <section className="py-32 bg-gradient-to-b from-white to-professional-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional-900 mb-6">
            Our Proven Four-Phase Methodology
          </h2>
          <p className="text-xl text-professional-600 max-w-4xl mx-auto">
            Our systematic approach delivers rapid, substantial, and sustainable growth for businesses through proven revenue generation strategies.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`relative group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              variants={itemVariants}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-growth-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-professional-900 mb-6 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-professional-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Visual Element */}
                <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="h-64 bg-gradient-to-br from-primary-100 via-growth-100 to-gold-100 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-growth-200/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary-600 opacity-20">{step.number}</div>
                    </div>
                  </div>
                </div>
              </div>
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
            Learn more about our methodology
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
