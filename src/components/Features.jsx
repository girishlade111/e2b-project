import React from 'react';

const Features = () => {
  const components = [
    { name: 'Buttons', description: 'Customizable button styles' },
    { name: 'QR', description: 'QR Code component' },
    { name: 'Git Profile Card', description: 'Git stats' },
    { name: 'Cards', description: 'Flexible content containers' },
    { name: 'Avatars', description: 'User profile images' },
    { name: 'Navigation', description: 'Intuitive nav systems' },
    { name: 'Rating', description: 'Rating component' },
    { name: 'Alerts', description: 'Notification components' },
    { name: 'Badge', description: 'Feedback and status' },
    { name: 'Modals', description: 'Overlay dialogs' },
    { name: 'Loaders', description: 'Loading indicators' },
    { name: 'Toggles', description: 'Switch components' }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Components & Features</h2>
          <p className="text-xl text-gray-400">Everything you need to build modern interfaces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-2">{component.name}</h3>
              <p className="text-gray-400">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;