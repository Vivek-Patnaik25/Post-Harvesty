import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/features/landing-redesign/HeroSection';
import { RealitySection } from '@/components/features/landing-redesign/RealitySection';
import { TurningPointSection } from '@/components/features/landing-redesign/TurningPointSection';
import { IntelligenceEngineSection } from '@/components/features/landing-redesign/IntelligenceEngineSection';
import { DeepFeatureReveal } from '@/components/features/landing-redesign/DeepFeatureReveal';
import { FarmerTestimonial } from '@/components/features/landing-redesign/FarmerTestimonial';
import { FinalCTA } from '@/components/features/landing-redesign/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115] selection:bg-agri-gold/30 text-white">
      <Navbar />
      <HeroSection />
      <RealitySection />
      <TurningPointSection />
      <IntelligenceEngineSection />
      <DeepFeatureReveal />
      <FarmerTestimonial />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm bg-[#0F1115]">
        <p>© 2026 AgriIntel AI. Built for the future of farming.</p>
      </footer>
    </main>
  );
}
