const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(26, 0, 51, 0.9)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem 1rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            margin: '0 0 0.5rem',
            fontSize: '1.2rem',
            color: '#ff6b6b',
            fontWeight: 'bold'
          }}>
            Limpopo Connect
          </h3>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building stronger communities in Limpopo Province through technology and connection.
          </p>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          marginBottom: '1rem'
        }}>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
            &copy; 2025 Limpopo Connect. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>
            Developed with ❤️ by{' '}
            <a
              href="https://charleyraluswinga.space"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ff6b6b',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.color = '#ff5252'}
              onMouseOut={(e) => e.target.style.color = '#ff6b6b'}
            >
              Emmanuel Charley Raluswinga
            </a>
          </p>
                    <p style={{
            margin: '0.5rem 0 0',
            fontSize: '0.7rem',
            opacity: 0.6
          }}>
            Full-Stack Developer | Community Builder | Limpopo Province, South Africa
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          fontSize: '0.8rem',
          opacity: 0.7
        }}>
          <span>Built with React & Vite</span>
          <span>•</span>
          <span>Hosted on GitHub Pages</span>
          <span>•</span>
          <span>Private Community Project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;