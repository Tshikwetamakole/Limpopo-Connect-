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
      <nav style={{
        backgroundColor: 'rgba(26, 0, 51, 0.95)',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}>
            Limpopo Connect
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}>
            {/* Search Bar */}
            <div style={{ position: 'relative' }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }} aria-label="Search form">
                <input
                  type="text"
                  placeholder="Search events, groups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '0.5rem 2.5rem 0.5rem 1rem',
                    borderRadius: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '0.9rem',
                    width: showSearch ? '250px' : '0px',
                    transition: 'width 0.3s ease',
                    opacity: showSearch ? 1 : 0,
                    overflow: 'hidden',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                  style={{
                    position: 'absolute',
                    right: '0.5rem',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
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
                style={{
                  color: location.pathname === item.path ? '#ff6b6b' : 'white',
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.background = 'none'}
                  aria-label="Open user menu"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#ff6b6b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {user.avatar}
                  </div>
                </button>

                {showUserMenu && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    minWidth: '200px',
                    zIndex: 1000,
                    marginTop: '0.5rem'
                  }}>
                    <div style={{
                      padding: '1rem',
                      borderBottom: '1px solid #eee',
                      fontWeight: 'bold',
                      color: '#1a0033'
                    }}>
                      {user.name}
                    </div>
                    <Link
                      to="/profile"
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        color: '#333',
                        textDecoration: 'none',
                        borderBottom: '1px solid #eee'
                      }}
                      onClick={() => setShowUserMenu(false)}
                    >
                      <span aria-hidden="true">👤</span> View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'none',
                        border: 'none',
                        color: '#c62828',
                        cursor: 'pointer',
                        textAlign: 'left',
                        borderRadius: '0 0 8px 8px'
                      }}
                    >
                      <span aria-hidden="true">🚪</span> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                style={{
                  background: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.background = '#ff5252'}
                onMouseLeave={(e) => e.target.style.background = '#ff6b6b'}
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