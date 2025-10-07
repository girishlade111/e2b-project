import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-500">BharatUI</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Components</a>
            <a href="#terminal" className="text-gray-300 hover:text-white transition-colors duration-200">Terminal</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a>
            <a href="https://www.bharatui.com/guides/getting-started/" className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-200">Get Started</a>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Components</a>
              <a href="#terminal" className="text-gray-300 hover:text-white transition-colors duration-200">Terminal</a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a>
              <a href="https://www.bharatui.com/guides/getting-started/" className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-200 inline-block">Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;