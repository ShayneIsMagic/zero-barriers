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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Four-Phase Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach delivers rapid, substantial, and sustainable growth for businesses through proven revenue generation strategies.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methodologySteps.map((step) => (
            <motion.div
              key={step.number}
              className="relative group"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
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
