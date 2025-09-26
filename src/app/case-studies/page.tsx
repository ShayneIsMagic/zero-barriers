'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "SOS Support: Engineering Elite-Level Growth",
      company: "SOS Support",
      owner: "Jason Kidman",
      category: "Business Transformation",
      image: "/images/code.jpg",
      gap: [
        "Location limitations",
        "Staffing capabilities", 
        "Structural inefficiencies",
        "Capacity constraints",
        "Brand development needs"
      ],
      solution: [
        "Served as Outsourced Sales and Service Manager",
        "Applied the four-phase Zero Barriers methodology",
        "Provided comprehensive coaching and leadership development",
        "Aligned implementation with the owner's vision"
      ],
      results: [
        "122% growth in first year",
        "Greater confidence as business owner",
        "Team empowerment and ownership principles",
        "Systematic growth approach"
      ],
      testimonial: "We achieved 122% growth in our first year! The coaching has given me greater confidence as a business owner. Zero Barriers has empowered our team and instilled ownership principles."
    },
    {
      id: 2,
      title: "Personal Transformation: L. Michelle Atkinson",
      company: "SOS Support",
      owner: "Michelle Atkinson",
      category: "Personal Transformation",
      image: "/images/typing.jpg",
      gap: [
        "Professional fulfillment despite success",
        "Recurring burnout cycles",
        "Misalignment between skills and passion",
        "Career transitions every three years",
        "Impact on personal well-being"
      ],
      solution: [
        "Purpose-Driven Exercise implementation",
        "Personal transformation coaching",
        "Career alignment strategies",
        "Work-life balance optimization"
      ],
      results: [
        "Personal fulfillment achieved",
        "Sustainable work-life balance",
        "Career passion rediscovered",
        "Long-term professional stability"
      ],
      testimonial: "The purpose-driven model transformed my life, removing obstacles and igniting my potential. Being purpose-oriented has given me direction, freedom, fulfillment, confidence, peace, success, happiness, and love."
    },
    {
      id: 3,
      title: "B2C to B2B Transformation: Darrell Rawlins",
      company: "Benefits & HR Consulting",
      owner: "Darrell Rawlins",
      category: "Sales Transformation",
      image: "/images/teamwork.jpg",
      gap: [
        "Transition challenges from B2C to B2B sales",
        "Extended sales cycle adaptation",
        "Confidence and ability doubts",
        "Need for sustainable income stability"
      ],
      solution: [
        "IMPROV Sales System implementation",
        "Purpose-Driven Exercise integration",
        "The Attitude Cycle methodology",
        "Individual and team coaching",
        "Personalized strength adaptation"
      ],
      results: [
        "Successful B2B transition",
        "Confidence in sales abilities",
        "Sustainable income achieved",
        "Sales process mastery"
      ],
      testimonial: "Working with Shayne was a game-changer! He quickly identified our sales challenges and provided effective solutions. His enthusiasm boosted results and morale across the entire team."
    },
    {
      id: 4,
      title: "Caselle: Breaking the Boom-Bust Cycle",
      company: "Caselle",
      category: "Sales Process Transformation",
      logo: "/images/caselle-updated-logo.png",
      gap: [
        "Inconsistent year-over-year performance",
        "Lack of predictable sales processes",
        "No systematic approach to sales",
        "Dependency on individual sales talent",
        "Inability to scale consistently"
      ],
      solution: [
        "Developed a new, systematic sales process",
        "Created a custom sales playbook",
        "Improved sales stages in Salesforce CRM",
        "Replicated top performer strategies",
        "Implemented consistent sales methodologies"
      ],
      results: [
        "Consistent year-over-year growth",
        "Predictable sales processes",
        "Scalable sales methodology",
        "Reduced dependency on individual talent"
      ],
      testimonial: "Zero Barriers helped us break free from the boom-bust cycle. We now have consistent, predictable growth year after year."
    },
    {
      id: 5,
      title: "Sebo: From Chaos to Clarity",
      company: "Sebo Marketing",
      category: "Revenue Growth & Process Optimization",
      logo: "/images/Sebo Logosvg.svg",
      gap: [
        "Need for revenue growth strategies",
        "Complex division separation planning",
        "Identifying key personnel for new division",
        "Coaching entire company on sales processes",
        "Strategic business restructuring"
      ],
      solution: [
        "Identified barriers to growth and expansion",
        "Coached entire company on IMPROV Sales methodology",
        "Identified key individuals for SeboDev division",
        "Created strategic plan for division spin-off",
        "Provided leadership development and coaching"
      ],
      results: [
        "25% consistent revenue growth",
        "Successful division separation",
        "Enhanced sales processes company-wide",
        "Strategic growth roadmap established"
      ],
      testimonial: "Shayne has tools and ideas that produce remarkable results. We grew 25% in revenue consistently for nearly a year. He genuinely cares for those he serves and his systems work."
    },
    {
      id: 6,
      title: "DevPipeline: Scaling Through Technology",
      company: "DevPipeline",
      category: "Technology Enablement & Growth",
      logo: "/images/devpipeline-black-logo.png",
      gap: [
        "Need for structured apprenticeship program",
        "DevShop establishment and management",
        "Scaling development teams effectively",
        "Providing quality candidates to employer partners",
        "Balancing training and production work"
      ],
      solution: [
        "Developed comprehensive apprenticeship program",
        "Established DevShop operational framework",
        "Created scalable team management systems",
        "Implemented quality assurance processes",
        "Balanced training and production workflows"
      ],
      results: [
        "Structured apprenticeship program established",
        "DevShop successfully launched",
        "Scalable team management systems",
        "Quality candidate pipeline created"
      ],
      testimonial: "Zero Barriers helped us scale our technology operations and create a sustainable apprenticeship program that delivers quality candidates to our partners."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-professional-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-professional-900 via-primary-900 to-growth-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Case Studies
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real results from real businesses using our proven revenue growth methodologies
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image/Logo Section */}
                  <div className="relative h-80 lg:h-full bg-gradient-to-br from-primary-50 to-growth-50 flex items-center justify-center">
                                         {study.logo ? (
                       <div className="p-8">
                         <Image
                           src={study.logo}
                           alt={`${study.company} logo`}
                           width={200}
                           height={120}
                           className="object-contain filter brightness-110 contrast-125 drop-shadow-lg"
                         />
                       </div>
                     ) : study.image ? (
                       <div className="relative w-full h-full">
                         <Image
                           src={study.image}
                           alt={study.title}
                           fill
                           className="object-cover"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                       </div>
                     ) : (
                       <div className="w-full h-full bg-gradient-to-br from-primary-100 to-growth-100 flex items-center justify-center">
                         <div className="text-6xl font-bold text-primary-300 opacity-50">ZB</div>
                       </div>
                     )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <span className="inline-block bg-gradient-to-r from-primary-100 to-growth-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        {study.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-professional-900 mb-4 leading-tight">
                        {study.title}
                      </h2>
                      {study.owner && (
                        <p className="text-lg text-professional-600">
                          <strong>{study.owner}</strong> • {study.company}
                        </p>
                      )}
                    </div>

                    {/* The Gap: Barrier */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        The Gap: Barrier
                      </h3>
                      <ul className="space-y-2">
                        {study.gap.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-professional-700">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Bridge: Solution */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        The Bridge: Solution
                      </h3>
                      <ul className="space-y-2">
                        {study.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-professional-700">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-professional-700">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-primary-50 to-growth-50 rounded-2xl p-6 border-l-4 border-primary-400">
                      <blockquote className="text-professional-700 italic">
                        &ldquo;{study.testimonial}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-professional-900 via-primary-900 to-growth-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the businesses that have already achieved breakthrough growth with our proven methodologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-growth-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
