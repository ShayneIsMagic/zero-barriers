'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Target, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const metrics = [
    { 
      number: '122%', 
      label: 'First Year Growth (SOS Support)',
      icon: TrendingUp,
      color: 'text-growth-600'
    },
    { 
      number: '25%', 
      label: 'Consistent Growth (SeboDev)',
      icon: Target,
      color: 'text-primary-600'
    },
    { 
      number: '15+', 
      label: 'Years Experience',
      icon: Users,
      color: 'text-gold-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-professional-50 via-primary-50 to-growth-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(14,165,233,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-growth-200 to-growth-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Why & How */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Why - Purpose Statement */}
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-growth-100 text-primary-700 rounded-full text-sm font-semibold border border-primary-200"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Zap className="h-4 w-4 mr-2" />
                Purpose-Driven Growth Agency
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className="text-professional-900">Transform Your</span>{' '}
                <span className="gradient-text">Revenue Growth</span>
              </motion.h1>
              
              <motion.p
                className="text-2xl md:text-3xl text-professional-600 font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Rapid, Substantial, Sustainable Growth
              </motion.p>
            </div>

            {/* How - Methodology Preview */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-lg text-professional-700 leading-relaxed">
                We specialize in <strong className="text-primary-600">rapid revenue transformation</strong> through proven methodologies that deliver measurable results. Our expert team unlocks your business potential with <strong className="text-growth-600">data-driven strategies</strong> and <strong className="text-gold-600">systematic implementation</strong>.
              </p>
            </motion.div>

            {/* What - Core Promise */}
            <motion.div
              className="bg-gradient-to-r from-primary-600 to-growth-600 rounded-2xl p-6 text-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-3">Our Promise to Business Leaders:</h3>
              <p className="text-lg opacity-90">
                &ldquo;We eliminate revenue barriers and engineer breakthrough growth through our proven four-phase methodology, delivering measurable, sustainable results for businesses ready to transform.&rdquo;
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <Link href="/contact" className="btn-primary group">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Impact */}
          <motion.div
            className="relative"
            variants={itemVariants}
            style={{ y, opacity }}
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-growth-400 rounded-3xl blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/images/Human_Transformation.png"
                  alt="Human transformation and growth visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Metrics Cards */}
            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-growth-200"
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-growth-600">122%</div>
                <div className="text-sm text-professional-600">First Year Growth</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-primary-200"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">25%</div>
                <div className="text-sm text-professional-600">Consistent Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Metrics Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-professional-200 hover:shadow-xl transition-all duration-300 hover:border-primary-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-${metric.color.replace('text-', '')}-100 to-${metric.color.replace('text-', '')}-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <motion.div
                  className={`text-4xl md:text-5xl font-black ${metric.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {metric.number}
                </motion.div>
                <div className="text-professional-600 font-semibold text-lg">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Link href="/contact" className="btn-growth group">
            Schedule Free Revenue Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
