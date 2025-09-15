import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const { theme, toggleTheme, currentTheme } = useContext(ThemeContext);

  return (
    <nav className={`${currentTheme.navbar} shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${currentTheme.text}`}>Limpopo Connect</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Home</Link>
              <Link to="#" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Search</Link>
              <Link to="/hookups" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Hookups</Link>
              <Link to="/community" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Events</Link>
              <Link to="/groups" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Groups</Link>
              <Link to="/leaderboard" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Leaderboard</Link>
              <Link to="/messages" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Messages</Link>
              <Link to="/profile" className={`${currentTheme.text} hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium`}>Profile</Link>
            </div>
          </div>
          <div>
            <select onChange={(e) => toggleTheme(e.target.value)} value={theme} className="bg-gray-200 text-gray-800 p-2 rounded">
              <option value="community">Community</option>
              <option value="hookups">Hookups</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
