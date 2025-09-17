import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="page-container">
        <h1 className="page-title">Welcome to Limpopo Connect</h1>
        <p className="page-subtitle">
          Connect with the Limpopo community through events, groups, and social networking.
          Join Polokwane, Tzaneen, and Mokopane residents for local events and connections.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link to="/profile">
            <button className="btn">Create Your Profile</button>
          </Link>
        </div>

        <div className="grid">
          <div className="card">
            <img src="/images/community-card.jpg" alt="Community Events" />
            <h3>Community Events</h3>
            <p>Join local events and meet new people in your area. Discover upcoming gatherings, workshops, and social activities.</p>
            <Link to="/events">
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>Explore Events</button>
            </Link>
          </div>

          <div className="card">
            <img src="/images/hookups-card.png" alt="Hookups" />
            <h3>Hookups</h3>
            <p>Find connections and build relationships. Connect with like-minded people in your community.</p>
            <Link to="/messages">
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>Start Connecting</button>
            </Link>
          </div>

          <div className="card">
            <img src="/images/public-faces.jpg" alt="Public Figures" />
            <h3>Public Figures</h3>
            <p>Connect with local leaders and influencers. Stay updated with community news and announcements.</p>
            <Link to="/blog">
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>Read Updates</button>
            </Link>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '1rem',
          borderTop: '1px solid #eee',
          fontSize: '0.8rem',
          color: '#666'
        }}>
          <p style={{ margin: 0 }}>
            Built with ❤️ for the Limpopo community by{' '}
            <a
              href="https://charleyraluswinga.space"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ff6b6b',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Emmanuel Charley Raluswinga
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;