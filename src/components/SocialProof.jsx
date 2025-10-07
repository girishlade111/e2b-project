import React from 'react';

const SocialProof = () => {
  const tweets = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `https://www.bharatui.com/assets/Tweet/\${i + 1}.webp`
  }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Developers Say</h2>
          <p className="text-gray-400">Join thousands of developers using BharatUI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet) => (
            <div 
              key={tweet.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={tweet.image} 
                alt={`Tweet \${tweet.id}`}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Tweet';
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://www.bharatui.com/assets/nice.webp" 
            alt="Main content"
            className="mx-auto mb-8 rounded-lg shadow-2xl"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Main+Content';
            }}
          />
          <img 
            src="https://www.bharatui.com/assets/shortwing.webp" 
            alt="Wing design"
            className="mx-auto rounded-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=Wing+Design';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;