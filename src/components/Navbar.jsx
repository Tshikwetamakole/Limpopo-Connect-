import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  return (
    <>
      <nav style={{
        backgroundColor: 'rgba(26, 0, 51, 0.9)',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
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

          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}>
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
                      👤 View Profile
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
                      🚪 Logout
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