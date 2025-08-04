import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CommunitySection from '@/components/sections/CommunitySection';
import EnterCompetitionSection from '@/components/sections/EnterCompetitionSection';
import WinnersSection from '@/components/sections/WinnersSection';
import SecuritySection from '@/components/sections/SecuritySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

// Page d'accueil TIME-2WIN - Test Vercel deployment
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunitySection />
      {/* Hero Section - Desktop seulement en haut, Mobile après Winners */}
      <div className="hidden sm:block">
        <HeroSection />
      </div>
      <EnterCompetitionSection />
      <WinnersSection />
      {/* Hero Section - Mobile seulement après Winners */}
      <div className="block sm:hidden">
        <HeroSection />
      </div>
      <SecuritySection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
