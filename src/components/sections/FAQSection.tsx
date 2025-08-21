'use client';

import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do you achieve rapid revenue growth?',
      answer: 'We achieve rapid revenue growth through our proven four-phase methodology that identifies revenue barriers, implements best practices, adapts systems to your strengths, and engineers predictable revenue success patterns.'
    },
    {
      question: 'What makes revenue growth substantial and sustainable?',
      answer: 'Our revenue growth is substantial and sustainable because we focus on building systems, not just tactics. We create predictable, repeatable revenue patterns that scale with your business and deliver long-term results.'
    },
    {
      question: 'How does revenue generation work with your methodology?',
      answer: 'Our revenue generation methodology combines human transformation, technology enablement, and revenue acceleration to eliminate barriers and create systems that generate predictable, sustainable revenue growth.'
    },
    {
      question: 'Can you really deliver 122% revenue growth?',
      answer: 'Yes, our clients consistently achieve 122% revenue growth in first-year implementations through our proven rapid, substantial, sustainable growth methodology and strategic partnerships.'
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about achieving rapid, substantial, sustainable revenue growth
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
