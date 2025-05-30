
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TechEcosystemSection from './components/TechEcosystemSection';
import GeminiInteraction from './components/GeminiInteraction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lightbg text-gray-800 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12 sm:space-y-16">
          <HeroSection />
          <TechEcosystemSection />
          <GeminiInteraction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
