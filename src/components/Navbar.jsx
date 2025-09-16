import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const { currentTheme } = useContext(ThemeContext);
  const linkStyle = `${currentTheme.text} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors`;

  return (
    <nav className={`${currentTheme.navbar} shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${currentTheme.text}`}>Limpopo Connect</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={linkStyle}>Home</Link>
              <Link to="#" className={linkStyle}>Search</Link>
              <Link to="/hookups" className={linkStyle}>Hookups</Link>
              <Link to="/community" className={linkStyle}>Events</Link>
              <Link to="/groups" className={linkStyle}>Groups</Link>
              <Link to="/leaderboard" className={linkStyle}>Leaderboard</Link>
              <Link to="/messages" className={linkStyle}>Messages</Link>
              <Link to="/profile" className={linkStyle}>Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
