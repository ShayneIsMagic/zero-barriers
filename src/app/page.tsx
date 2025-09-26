import MethodologySection from '@/components/sections/MethodologySection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import TechnologyDivisionSection from '@/components/sections/TechnologyDivisionSection';
import PurposeSection from '@/components/sections/PurposeSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, CheckCircle, Star, Award } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - WOW FACTOR */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Professional grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT - COMPELLING MESSAGING */}
            <div className="text-white space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md text-white text-sm font-semibold px-6 py-3 rounded-full border border-blue-400/30 shadow-2xl">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
                Award-Winning Growth Agency
              </div>
              
              {/* Compelling Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white">Eliminate Revenue</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Barriers Forever
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                  Proven 4-Phase Methodology • 15+ Years Experience • Real Results
                </p>
                
                <p className="text-lg text-blue-200 leading-relaxed max-w-2xl">
                  We don&apos;t just promise growth—we engineer it. Our systematic approach has delivered 122% revenue increases and consistent 25% growth for businesses ready to transform.
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>200+ Businesses Transformed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>15+ Years Experience</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                
                <Link href="/case-studies" className="group relative overflow-hidden border-2 border-blue-400/30 text-white text-lg font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    See Real Results
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - VISUAL IMPACT */}
            <div className="relative">
              {/* Floating Success Metrics */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-blue-200 transform rotate-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">122%</div>
                  <div className="text-sm text-gray-600">First Year Growth</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-purple-200 transform -rotate-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">Consistent Growth</div>
                </div>
              </div>
              
              {/* Main Visual Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
                  {/* Strategic Image Placement */}
                  <div className="text-center mb-6">
                    <div className="w-72 h-48 mx-auto mb-4 relative overflow-hidden rounded-2xl">
                      <Image
                        src="/images/Human_Transformation.png"
                        alt="Human transformation and growth visualization"
                        width={288}
                        height={192}
                        className="w-full h-full object-cover"
                        priority
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Key Metrics */}
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-black text-yellow-400 mb-2">15+</div>
                    <div className="text-xl font-semibold text-white mb-2">Years of Proven Results</div>
                    <div className="text-blue-200">Transforming businesses through systematic methodologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">122%</div>
              <div className="text-lg text-gray-700">Average Revenue Growth</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">90</div>
              <div className="text-lg text-gray-700">Days to Results</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl border border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-lg text-gray-700">Businesses Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with existing sections */}
      <MethodologySection />
      <SolutionsSection />
      <TechnologyDivisionSection />
      <PurposeSection />
      <SuccessStoriesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
