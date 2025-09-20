import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/community', label: 'Community' },
    { path: '/events', label: 'Events' },
    { path: '/messages', label: 'Messages' },
    { path: '/blog', label: 'Blog' },
    { path: '/profile', label: 'Profile' },
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For now, redirect to events page with search query
      // In a full implementation, this would search across events, groups, and profiles
      navigate(`/events?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <nav className="hidden md:block sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-white/10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-white no-underline text-xl font-bold">
            Limpopo Connect
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Search Bar */}
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center" aria-label="Search form">
                <input
                  type="text"
                  placeholder="Search events, groups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm transition-all ${showSearch ? 'w-64 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                  className="absolute right-2 text-white p-1 rounded-full"
                  aria-label="Toggle search"
                >
                  🔍
                </button>
              </form>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded text-sm transition-colors ${location.pathname === item.path ? 'text-red-400 bg-white/10 font-semibold' : 'text-white hover:text-white/90'}`}
              >
                {item.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="text-white p-2 rounded-full hover:bg-white/10"
                  aria-label="Open user menu"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">{user.avatar}</div>
                </button>

                {showUserMenu && (
                  <div className="absolute top-full right-0 bg-white rounded-lg shadow-lg min-w-[200px] z-50 mt-2">
                    <div className="p-4 border-b font-semibold text-brand-dark">{user.name}</div>
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-50 border-b" onClick={() => setShowUserMenu(false)}>
                      <span aria-hidden="true">👤</span> View Profile
                    </Link>
                    <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 rounded-b-lg">
                      <span aria-hidden="true">🚪</span> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-brand-red text-white px-4 py-2 rounded-full font-semibold hover:bg-brand-red/90"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Navbar;