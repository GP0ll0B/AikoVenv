
import React from 'react';

const technologies: string[] = [
  "Google Cloud Platform",
  "Gemini API",
  "Android",
  "Google Workspace",
  "TensorFlow",
  "Kubernetes",
  "Firebase",
  "Flutter",
  "Google Search",
  "Google AI"
];

const TechEcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-12 sm:py-16 bg-white rounded-xl shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-8 sm:mb-12">
          Our Technological Foundation: The Google Ecosystem
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech} 
              className="bg-primary-light/10 text-primary-dark p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex items-center justify-center"
            >
              <span className="font-medium text-sm sm:text-base">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystemSection;
