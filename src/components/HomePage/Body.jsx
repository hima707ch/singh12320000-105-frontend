import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';

const Body = () => {
  const { handleContactSubmit } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <CallToAction onSubmit={handleContactSubmit} />
      <Footer />
    </div>
  );
};

export default Body;