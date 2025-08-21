import HeroSection from '@/components/sections/HeroSection';
import MethodologySection from '@/components/sections/MethodologySection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import TechnologyDivisionSection from '@/components/sections/TechnologyDivisionSection';
import PurposeSection from '@/components/sections/PurposeSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
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
