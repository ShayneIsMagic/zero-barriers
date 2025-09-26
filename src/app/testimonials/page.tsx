'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Greg Williams",
      role: "Business Owner",
      company: "SeboDev",
      rating: 5,
      testimonial: "Shayne is warm and insightful, driving consistent 25% revenue growth for our company. His systems truly work, and he genuinely cares about his clients.",
      category: "Revenue Acceleration",
      results: ["25% consistent growth", "Proven systems", "Client-focused approach"]
    },
    {
      id: 2,
      name: "Jason Kidman",
      role: "Owner",
      company: "SOS Support",
      rating: 5,
      testimonial: "We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles.",
      category: "Human Transformation",
      results: ["122% first-year growth", "Team empowerment", "Business confidence"]
    },
    {
      id: 3,
      name: "Kyle C.",
      role: "Sales Manager",
      company: "Q90",
      rating: 5,
      testimonial: "Working with Shayne was a game-changer! He quickly identified our sales challenges and provided effective solutions. His enthusiasm boosted results and morale across the entire team.",
      category: "Technology Enablement",
      results: ["Sales optimization", "Team morale", "Quick implementation"]
    },
    {
      id: 4,
      name: "Michelle A.",
      role: "Purpose-Driven Leader",
      company: "SOS Support",
      rating: 5,
      testimonial: "The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love in multiple arenas of my life.",
      category: "Human Transformation",
      results: ["Life transformation", "Purpose clarity", "Personal growth"]
    },
    {
      id: 5,
      name: "Darrel R.",
      role: "Business Leader",
      company: "Independent",
      rating: 5,
      testimonial: "Shayne helped me overcome my own barriers and stay focused on my goals. His guidance was the key to my success!",
      category: "Personal Development",
      results: ["Barrier removal", "Goal focus", "Personal success"]
    }
  ];

  const categories = [
    { name: "Human Transformation", count: 2, icon: Users },
    { name: "Revenue Acceleration", count: 1, icon: TrendingUp },
    { name: "Technology Enablement", count: 1, icon: Target },
    { name: "Personal Development", count: 1, icon: CheckCircle }
  ];

  const stats = [
    { number: "150%", label: "Average Revenue Growth" },
    { number: "90", label: "Days to Results" },
    { number: "200+", label: "Businesses Transformed" },
    { number: "5.0", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-professional-50 via-primary-50 to-growth-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-professional-900 to-growth-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto mb-8">
              Real stories from business leaders who transformed their revenue growth with Zero Barriers
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
              Transformation Categories
            </h2>
            <p className="text-xl text-professional-600 max-w-3xl mx-auto">
              Our clients achieve success across multiple areas of business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-6 text-center"
              >
                <category.icon className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-professional-900 mb-2">{category.count}</div>
                <div className="text-lg font-semibold text-professional-700">{category.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-professional-600 max-w-3xl mx-auto">
              Authentic feedback from business leaders who have experienced our transformation methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8 relative"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary-200 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-professional-700 italic mb-6">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-bold text-professional-900">{testimonial.name}</div>
                    <div className="text-professional-600">{testimonial.role}</div>
                    <div className="text-sm text-professional-500">{testimonial.company}</div>
                  </div>
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>

                {/* Key Results */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-professional-900">Key Results:</h4>
                  <ul className="space-y-1">
                    {testimonial.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-professional-600">
                        <CheckCircle className="w-4 h-4 text-growth-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="section-padding bg-gradient-to-r from-gold-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-professional-900 mb-6">
                Featured Success Story
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-6xl font-bold text-gold-600 mb-4">122%</div>
                <h3 className="text-2xl font-bold text-professional-900 mb-4">
                  First-Year Growth Achievement
                </h3>
                <p className="text-lg text-professional-700 mb-6">
                  &ldquo;We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. 
                  Zero Barriers has empowered our team and instilled ownership principles.&rdquo;
                </p>
                <div className="text-center">
                  <div className="font-bold text-professional-900">Jason Kidman</div>
                  <div className="text-professional-600">Owner, SOS Support</div>
                </div>
              </div>
            </motion.div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Transform your revenue growth with our proven methodology. Join hundreds of businesses that have achieved rapid, substantial, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium">
                Schedule Your Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
