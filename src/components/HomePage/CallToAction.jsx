import React from 'react';

const CallToAction = ({ onSubmit }) => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
          <p id="CTA_3" className="text-xl text-blue-100 mb-10">Contact us today and let our experts guide you through your journey.</p>
          <form id="CTA_4" onSubmit={onSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Get Started Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;