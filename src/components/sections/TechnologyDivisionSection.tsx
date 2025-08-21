'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const TechnologyDivisionSection = () => {
  const divisions = [
    {
      title: 'Zero Barriers CRM Solutions',
      tagline: 'SalesforceConsultants.io Division | 40% Average ROI Improvement',
      logos: [
        { src: '/images/Salesforce_Consulting_Logo.svg', alt: 'Salesforce Consulting Logo' },
        { src: '/images/caselle-updated-logo.png', alt: 'Caselle Logo' }
      ],
      description: 'Our Zero Barriers CRM Solutions division delivers revenue growth through world-class CRM implementation and optimization. With 15+ Salesforce certifications and 100+ successful implementations, we provide the technology foundation for rapid, substantial, sustainable revenue growth.',
      benefits: [
        { title: '40% Average ROI Improvement', description: 'Proven revenue growth through optimized CRM systems' },
        { title: 'Custom Salesforce Development', description: 'Tailored solutions that streamline revenue workflows' },
        { title: 'Salesforce Implementation', description: 'Seamless setup with proven adoption strategies for revenue teams' },
        { title: 'Salesforce Training', description: 'Empower revenue teams with expert-led training' },
        { title: 'Salesforce Integrations', description: 'Connect with QuickBooks, Mailchimp, and essential revenue tools' },
        { title: 'Salesforce Automation', description: 'Eliminate repetitive tasks and boost revenue productivity' }
      ],
      testimonial: {
        quote: 'Shayne is warm and insightful, driving consistent 25% revenue growth for our company. His systems truly work, and he genuinely cares about his clients.',
        author: 'Greg Williams, Business Owner'
      },
      ctaLink: 'https://salesforceconsultants.io/',
      ctaText: 'Explore CRM Solutions'
    },
    {
      title: 'Zero Barriers Custom Development',
      tagline: 'DevPipeline Division | Custom Development | Integration | Automation',
      logos: [
        { src: '/images/devpipeline-black-logo.png', alt: 'DevPipeline Logo' },
        { src: '/images/Q90-LOGO.svg', alt: 'Q90 Logo' },
        { src: '/images/Sebo Logosvg.svg', alt: 'Sebo Logo' }
      ],
      description: 'Our Zero Barriers Custom Development division delivers revenue growth through custom software solutions that eliminate technical barriers. With 30+ years of software development experience and a proven track record of building scalable systems, we create the technology infrastructure for sustainable revenue growth.',
      benefits: [
        { title: 'Custom CRM Development', description: 'Tailored systems that fit your unique revenue processes' },
        { title: 'Workflow Management', description: 'Streamlined processes that accelerate revenue generation' },
        { title: 'Data Management & Reporting', description: 'Real-time insights for revenue optimization' },
        { title: 'Integrations & Feature Enhancements', description: 'Seamless connections between revenue systems' },
        { title: 'Cross-Platform Customer-Facing Apps', description: 'Enhanced customer experiences that drive revenue' },
        { title: 'E-Commerce Solutions', description: 'Direct revenue generation through optimized online platforms' },
        { title: 'Inventory Management', description: 'Optimized operations that support revenue growth' },
        { title: 'Task Management Systems', description: 'Improved productivity for revenue teams' }
      ],
      testimonial: {
        quote: 'Shayne helped me overcome my own barriers and stay focused on my goals. His guidance was the key to my success!',
        author: 'Darrel R., Business Leader'
      },
      ctaLink: 'https://www.devpipeline.com/software-solutions',
      ctaText: 'Explore Custom Development'
    }
  ];

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
            Our Technology Division
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated technology solutions that deliver the infrastructure for rapid, substantial, sustainable revenue growth
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {divisions.map((division) => (
            <motion.div
              key={division.title}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200"
              variants={itemVariants}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {division.title}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      {division.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {division.logos.map((logo, logoIndex) => (
                      <div key={logoIndex} className="bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={120}
                          height={60}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {division.description}
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Revenue Growth Benefits:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {division.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">{benefit.title}</strong>
                          <span className="text-gray-600"> - {benefit.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 mb-6">
                    <p className="text-gray-700 italic mb-2">
                      &ldquo;{division.testimonial.quote}&rdquo;
                    </p>
                    <span className="text-gray-600 font-medium">
                      — {division.testimonial.author}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href={division.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    {division.ctaText}
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyDivisionSection;
