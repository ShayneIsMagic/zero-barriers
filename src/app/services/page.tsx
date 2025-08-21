import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Cpu, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Zero Barriers - Human Transformation, Technology Enablement & Revenue Acceleration',
  description: 'Zero Barriers Services: Human Transformation methodologies, Technology Enablement solutions, and Revenue Acceleration systems. Achieve rapid, substantial, sustainable growth through our proven four-phase methodology.',
};

const ServicesPage = () => {
  const services = [
    {
      id: 'human-transformation',
      label: 'Purpose-Driven Transformation',
      title: 'Human Transformation',
      description: 'Our human transformation services help individuals and teams unlock their full potential through purpose-driven methodologies and proprietary frameworks. We believe that lasting success starts with people who understand their purpose and are equipped with the right mindset and skills.',
      features: [
        {
          title: 'The Attitude Cycle™',
          description: 'Our proprietary methodology for creating mindset shifts that lead to lasting behavioral change'
        },
        {
          title: 'IMPROV Sales Methodology™',
          description: 'A customer-centric approach to sales that emphasizes authenticity and adaptability'
        },
        {
          title: 'Purpose-Driven Exercise™',
          description: 'A structured process for identifying individual and team purpose'
        },
        {
          title: 'Leadership Development',
          description: 'Programs designed to build confident, effective leaders at all levels'
        },
        {
          title: 'Team Alignment',
          description: 'Workshops and tools to align teams around shared goals and values'
        }
      ],
      testimonial: {
        quote: 'The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love. It set me free and lit me on fire!',
        author: 'Michelle A., SOS Support'
      },
      icon: Users,
      image: '/images/Human_Transformation.png'
    },
    {
      id: 'technology-enablement',
      label: 'Strategic Technology Solutions',
      title: 'Technology Enablement',
      description: 'We implement the right technology solutions to streamline revenue operations and enhance customer experiences. Our technology enablement services focus on creating systems that support and accelerate your growth rather than creating barriers.',
      features: [
        {
          title: 'Custom Software Development',
          description: 'Tailored solutions that fit your unique business processes and requirements'
        },
        {
          title: 'Salesforce Implementation',
          description: 'Expert CRM setup and optimization for maximum revenue impact'
        },
        {
          title: 'System Integration',
          description: 'Seamless connections between your existing tools and platforms'
        },
        {
          title: 'Automation Solutions',
          description: 'Eliminate repetitive tasks and boost team productivity'
        },
        {
          title: 'Data Management',
          description: 'Organize and leverage your data for better decision-making'
        }
      ],
      testimonial: {
        quote: 'Shayne helped me overcome my own barriers and stay focused on my goals. His guidance was the key to my success!',
        author: 'Darrel R., Business Leader'
      },
      icon: Cpu,
      image: '/images/side-profile-tech.png'
    },
    {
      id: 'revenue-acceleration',
      label: 'Systematic Growth Engineering',
      title: 'Revenue Acceleration',
      description: 'Our revenue acceleration services combine people, process, and technology to create systems that generate predictable, sustainable growth. We focus on building repeatable processes that scale with your business.',
      features: [
        {
          title: 'Sales Process Optimization',
          description: 'Streamline and improve your sales methodology for better results'
        },
        {
          title: 'KPI-Driven Performance Management',
          description: 'Establish and track the metrics that drive revenue growth'
        },
        {
          title: 'Continuous Improvement Cycles',
          description: 'Ongoing optimization based on real-time data and feedback'
        },
        {
          title: 'Revenue Operations (RevOps)',
          description: 'Align sales, marketing, and customer success for maximum impact'
        },
        {
          title: 'Growth Strategy Development',
          description: 'Create comprehensive plans for sustainable business expansion'
        }
      ],
      testimonial: {
        quote: 'Shayne has tools and ideas that produce remarkable results. We grew 25% in revenue consistently for nearly a year. He genuinely cares for those he serves and his systems work.',
        author: 'Greg Williams, Business Owner'
      },
      icon: TrendingUp,
      image: '/images/B2B Sales.png'
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
    <div className="pt-16">
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive solutions designed to eliminate barriers and engineer breakthrough growth through our proven four-phase methodology
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Zero Barriers delivers rapid, substantial, and sustainable results through our systematic approach to transformation. Each service is designed to work independently or as part of our comprehensive growth solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={itemVariants}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600 mr-3" />
                    <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                      {service.label}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 font-semibold">
                            {feature.title}
                          </strong>
                          <span className="text-gray-600"> - {feature.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                    <p className="text-gray-700 italic mb-2">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </p>
                    <span className="text-gray-600 font-medium">
                      — {service.testimonial.author}
                    </span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss how our services can help you achieve rapid, substantial, and sustainable revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
