import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CommunitySection from '@/components/sections/CommunitySection';
import EnterCompetitionSection from '@/components/sections/EnterCompetitionSection';
import WinnersSection from '@/components/sections/WinnersSection';
import SecuritySection from '@/components/sections/SecuritySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunitySection />
      <HeroSection />
      <EnterCompetitionSection />
      <WinnersSection />
      <SecuritySection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
