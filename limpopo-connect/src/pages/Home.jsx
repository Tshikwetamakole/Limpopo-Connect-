import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Home() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${currentTheme.background}`}>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-4xl font-extrabold ${currentTheme.text} sm:text-5xl sm:tracking-tight lg:text-6xl`}>Welcome to Limpopo Connect</h2>
            <p className={`mt-5 max-w-xl mx-auto text-xl ${currentTheme.text}`}>Your dual-purpose platform for connection.</p>
          </div>

          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
            {/* Hookups Card */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-gray-800 p-6">
                <h3 className="text-2xl font-bold text-white">Hookups (18+)</h3>
                <p className="mt-2 text-lg text-gray-300">A private and anonymous space for casual encounters.</p>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-gray-700">Find what you're looking for with our advanced filters and anonymous messaging.</p>
                </div>
              </div>
            </div>

            {/* Community Hub Card */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-orange-500 p-6">
                <h3 className="text-2xl font-bold text-white">Community Hub</h3>
                <p className="mt-2 text-lg text-white">A social space for events, groups, and cultural activities.</p>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-gray-700">Discover local events, join groups, and connect with your community.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg font-medium py-3 px-8 rounded-lg">Sign Up</Link>
            <Link to="/login" className="ml-4 bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg font--medium py-3 px-8 rounded-lg">Login</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
