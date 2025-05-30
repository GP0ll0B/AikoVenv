
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary-light to-primary-dark text-white py-12 sm:py-16 lg:py-20 rounded-xl shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          AikoVenv: Building the Future
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Google's ecosystem is the chosen technological foundation and toolkit that Gazi Pollob Hussain is personally leveraging and mastering to build and realize his vision, which is manifesting as the company AikoVenv.
        </p>
        <div className="flex justify-center">
            <img 
              src="https://picsum.photos/seed/aikovenv/600/300" 
              alt="Abstract representation of AikoVenv's vision" 
              className="rounded-lg shadow-xl w-full max-w-2xl aspect-video object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
