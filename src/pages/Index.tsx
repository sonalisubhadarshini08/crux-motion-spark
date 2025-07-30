import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import WhyCruxSection from '@/components/WhyCruxSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <HeroSection />
      <WhyCruxSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;