import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Features />
      <Terminal />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;