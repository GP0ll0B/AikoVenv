
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} AikoVenv. All rights reserved.</p>
        <p className="text-sm mt-1">Vision by Gazi Pollob Hussain. Built on Google's Ecosystem.</p>
      </div>
    </footer>
  );
};

export default Footer;
