import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/lady-azania.jpg"
            srcset="/images/lady-azania-sm.jpg 640w, /images/lady-azania-md.jpg 1024w, /images/lady-azania-lg.jpg 1280w"
            alt="Limpopo community members celebrating together at a local event, showcasing the vibrant culture and connections in the province"
            className="w-full h-full object-cover"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-red-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-red-400">Limpopo Connect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed">
            Discover local events, join vibrant communities, and build meaningful connections
            across Polokwane, Tzaneen, and Mokopane.
          </p>
  
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/events"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Explore upcoming events in Limpopo"
            >
              Explore Events
            </Link>
            <Link
              to="/community"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Join the Limpopo community"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="page-container">
        <h1 className="page-title">Connect with Your Community</h1>
        <p className="page-subtitle">
          Connect with the Limpopo community through events, groups, and social networking.
          Join Polokwane, Tzaneen, and Mokopane residents for local events and connections.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link to="/profile">
            <button className="btn">Create Your Profile</button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="/images/community-card.jpg"
                alt="Community Events - People participating in local events and gatherings in Limpopo Province"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Community Events</h3>
            <p className="text-gray-600 mb-4">Join local events and meet new people in your area. Discover upcoming gatherings, workshops, and social activities.</p>
            <Link to="/events">
              <button className="btn btn-secondary w-full" style={{ marginTop: '1rem' }}>Explore Events</button>
            </Link>
          </div>

          <div className="card group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="/images/hookups-card.png"
                alt="Connections - People forming meaningful relationships and friendships in Limpopo communities"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Connections</h3>
            <p className="text-gray-600 mb-4">Find connections and build relationships. Connect with like-minded people in your community.</p>
            <Link to="/connections">
              <button className="btn btn-secondary w-full" style={{ marginTop: '1rem' }}>Start Connecting</button>
            </Link>
          </div>

          <div className="card group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="/images/public-faces.jpg"
                alt="Public Figures - Community leaders and influencers engaging with residents in Limpopo Province"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Public Figures</h3>
            <p className="text-gray-600 mb-4">Connect with local leaders and influencers. Stay updated with community news and announcements.</p>
            <Link to="/blog">
              <button className="btn btn-secondary w-full" style={{ marginTop: '1rem' }}>Read Updates</button>
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
            Built with ❤️ for the Limpopo community by{' Emmanuel Charley Raluswinga'}
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
