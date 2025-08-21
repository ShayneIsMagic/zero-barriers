'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SuccessStoriesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const stories = [
    {
      title: '122% Growth Achievement',
      quote: 'We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles.',
      author: 'Jason Kidman, Owner | SOS Support'
    },
    {
      title: '25% Consistent Growth',
      quote: 'Shayne has tools and ideas that produce remarkable results. We grew 25% in revenue consistently for nearly a year. He genuinely cares for those he serves and his systems work.',
      author: 'Greg Williams, Business Owner | SeboDev'
    },
    {
      title: 'Sales Process Optimization',
      quote: 'Working with Shayne was a game-changer! He quickly identified our sales challenges and provided effective solutions. His enthusiasm boosted results and morale across the entire team.',
      author: 'Kyle C., Sales Manager | Q90'
    },
    {
      title: 'Purpose-Driven Transformation',
      quote: 'The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love.',
      author: 'Michelle A., Purpose-Driven Leader | SOS Support'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from businesses that transformed their revenue growth with Zero Barriers
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              onClick={() => toggleCard(index)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {story.title}
                  </h3>
                  <div className="text-green-600">
                    {expandedCard === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 italic mb-3 leading-relaxed">
                          &ldquo;{story.quote}&rdquo;
                        </p>
                        <p className="text-gray-600 font-medium">
                          — {story.author}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
