import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-orange-500 opacity-30 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-1 h-24 bg-orange-400 opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-20 bg-orange-600 opacity-25"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-orange-900 bg-opacity-50 text-orange-300 rounded-full text-sm font-medium mb-4">
            Powering Aatmanirbhar Design
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Transform Your Designs with BharatUI
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          BharatUI brings components, not complexity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://www.bharatui.com/guides/getting-started/"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Documentation
          </a>

          <div className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg">
            <code className="text-green-400">npm i bharat-ui</code>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Seamless Use of Bharat UI</h3>
          <p className="text-gray-400 leading-relaxed">
            Built on Web Components. Powered by Lit. BharatUI fits into any codebase with zero overhead, no build step, and full composability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;