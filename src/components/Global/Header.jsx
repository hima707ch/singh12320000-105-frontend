import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center" id="Header_1">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold ml-3 hover:text-blue-200 transition-colors duration-300">YourBrand</span>
          </div>

          <div className="hidden md:flex items-center space-x-8" id="Header_2">
            <Link to="/" className="hover:text-blue-200 transition-colors duration-300 font-medium">Home</Link>
            <a href="#services" className="hover:text-blue-200 transition-colors duration-300 font-medium">Services</a>
            <a href="#about" className="hover:text-blue-200 transition-colors duration-300 font-medium">About</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors duration-300 font-medium">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_3">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 font-medium">Login</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 font-medium">Sign Up</button>
          </div>

          <div className="md:hidden" id="Header_4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4" id="Header_5">
            <Link to="/" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Home</Link>
            <a href="#services" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Services</a>
            <a href="#about" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">About</a>
            <a href="#contact" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Contact</a>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300">Login</button>
              <button className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;