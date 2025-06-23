import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        setIsLoggedIn(true);
        setShowLoginForm(false);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        setShowRegisterForm(false);
        setShowLoginForm(true);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <header id="Header_1" className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" id="Header_2" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold">Your Brand</span>
          </Link>

          <nav id="Header_3" className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors duration-200 font-medium">Home</Link>
          </nav>

          <div id="Header_4" className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setShowLoginForm(!showLoginForm)}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegisterForm(!showRegisterForm)}
                  className="bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Register
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {showLoginForm && (
          <div id="Header_5" className="absolute top-20 right-4 bg-white p-6 rounded-lg shadow-xl">
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {showRegisterForm && (
          <div id="Header_6" className="absolute top-20 right-4 bg-white p-6 rounded-lg shadow-xl">
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;