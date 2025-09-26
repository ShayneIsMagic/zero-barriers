'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code, Shield, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyPage() {
  const crmSolutions = [
    "40% Average ROI Improvement",
    "Custom Salesforce Development",
    "Salesforce Implementation",
    "Salesforce Training",
    "Salesforce Integrations",
    "Salesforce Automation"
  ];

  const customDevelopment = [
    "Custom CRM Development",
    "Workflow Management",
    "Data Management & Reporting",
    "Integrations & Feature Enhancements",
    "Cross-Platform Customer-Facing Apps",
    "E-Commerce Solutions",
    "Inventory Management",
    "Task Management Systems"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "40% average improvement in return on investment"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "15+ Salesforce certifications, 100+ implementations"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored to your unique business processes"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-professional-50 via-primary-50 to-growth-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-professional-900 via-primary-900 to-growth-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Technology Division
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto mb-8">
              Integrated technology solutions that deliver the infrastructure for rapid, substantial, sustainable revenue growth
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3"
              >
                <Zap className="w-6 h-6 text-gold-400" />
                <span className="text-lg font-semibold">15+ Certifications</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3"
              >
                <Users className="w-6 h-6 text-gold-400" />
                <span className="text-lg font-semibold">100+ Implementations</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3"
              >
                <TrendingUp className="w-6 h-6 text-gold-400" />
                <span className="text-lg font-semibold">40% ROI Improvement</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRM Solutions Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
              Zero Barriers CRM Solutions
            </h2>
            <p className="text-xl text-professional-600 max-w-4xl mx-auto">
              Our <strong>Zero Barriers CRM Solutions division</strong> delivers revenue growth through world-class CRM implementation and optimization. 
              With 15+ Salesforce certifications and 100+ successful implementations, we provide the technology foundation for rapid, substantial, sustainable revenue growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-professional-900 mb-6">
                Revenue Growth Benefits:
              </h3>
              <div className="space-y-4">
                {crmSolutions.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-growth-500 flex-shrink-0" />
                    <span className="text-lg text-professional-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Explore CRM Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-growth-100 rounded-3xl p-8 text-center">
                <div className="text-6xl font-bold text-primary-600 mb-4">40%</div>
                <div className="text-2xl font-semibold text-professional-800 mb-2">Average ROI Improvement</div>
                <div className="text-professional-600">Proven revenue growth through optimized CRM systems</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Development Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
              Zero Barriers Custom Development
            </h2>
            <p className="text-xl text-professional-600 max-w-4xl mx-auto">
              Our <strong>Zero Barriers Custom Development division</strong> delivers revenue growth through custom software solutions that eliminate technical barriers. 
              With 30+ years of software development experience and a proven track record of building scalable systems, we create the technology infrastructure for sustainable revenue growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-gold-100 to-primary-100 rounded-3xl p-8 text-center">
                <div className="text-6xl font-bold text-gold-600 mb-4">30+</div>
                <div className="text-2xl font-semibold text-professional-800 mb-2">Years Experience</div>
                <div className="text-professional-600">Building scalable, revenue-generating systems</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl font-bold text-professional-900 mb-6">
                Revenue Growth Solutions:
              </h3>
              <div className="space-y-4">
                {customDevelopment.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Code className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-lg text-professional-700 font-medium">{solution}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-growth">
                  Explore Custom Development
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
              Why Choose Our Technology Solutions?
            </h2>
            <p className="text-xl text-professional-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real revenue growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-6 text-center"
              >
                <benefit.icon className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-professional-900 mb-3">{benefit.title}</h3>
                <p className="text-professional-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-growth-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Let our technology experts build the systems that will drive your revenue growth and eliminate technical barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium">
                Schedule Technology Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
