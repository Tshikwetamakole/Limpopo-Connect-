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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-indigo-900/75 to-red-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent drop-shadow-2xl">
            Welcome to <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Limpopo Connect</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed max-w-4xl mx-auto font-medium text-gray-100 drop-shadow-lg">
            Discover local events, join vibrant communities, and build meaningful connections
            across Polokwane, Tzaneen, and Mokopane.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/events"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-red-500/50 border border-red-500"
              aria-label="Explore upcoming events in Limpopo"
            >
              ✨ Explore Events
            </Link>
            <Link
              to="/community"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-white/30"
              aria-label="Join the Limpopo community"
            >
              🚀 Join Community
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="w-8 h-12 border-2 border-white/80 hover:border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-white/30 transition-all duration-300">
            <div className="w-1.5 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 font-medium">Scroll down</p>
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
