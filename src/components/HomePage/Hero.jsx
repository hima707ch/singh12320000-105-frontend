import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-57.1,75.6,-44.2C83.5,-31.3,87.6,-15.7,86.6,-0.6C85.5,14.5,79.3,29,70.1,41.3C60.9,53.6,48.7,63.7,35.1,69.9C21.5,76.1,6.5,78.3,-8.2,77.1C-22.9,75.8,-37.3,71,-47.7,62.1C-58.1,53.2,-64.6,40.2,-69.9,26.8C-75.2,13.4,-79.4,-0.4,-77.4,-13.1C-75.4,-25.8,-67.2,-37.4,-56.8,-46.9C-46.4,-56.4,-33.7,-63.8,-20.6,-69.7C-7.5,-75.6,6,-80,19.1,-78.5C32.2,-77,45,-79.1,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text">Find Your Dream
                <span className="animate-bounce inline-block ml-2">Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-xl mb-8">Discover the perfect property that matches your lifestyle and dreams.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started</button>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img src={images[0] || 'https://placehold.co/600x400'} alt="Modern home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;