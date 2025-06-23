import React from 'react';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div id="AboutUs_3" className="text-center p-6 hover:shadow-lg rounded-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-home"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Extensive Portfolio</h3>
            <p className="text-gray-600">Access to thousands of premium properties across prime locations.</p>
          </div>
          <div id="AboutUs_4" className="text-center p-6 hover:shadow-lg rounded-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
            <p className="text-gray-600">Professional real estate agents to guide you through every step.</p>
          </div>
          <div id="AboutUs_5" className="text-center p-6 hover:shadow-lg rounded-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Trusted Partner</h3>
            <p className="text-gray-600">Over 10 years of experience in real estate excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;