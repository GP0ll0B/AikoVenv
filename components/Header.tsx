
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark">
            AikoVenv
          </h1>
          <p className="text-sm text-secondary hidden sm:block">Powered by Google Ecosystem</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
