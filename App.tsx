import React from 'react';
import HeroBanner from './components/HeroBanner';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import VisionMission from './components/VisionMission';
import InsightsSection from './components/InsightsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative w-full font-sans overflow-x-hidden bg-slate-900 perspective-1000">
      <HeroBanner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <VisionMission />
      <InsightsSection />
      <Footer />
    </main>
  );
};

export default App;