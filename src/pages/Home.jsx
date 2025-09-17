import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import ladyAzania from '/images/lady-azania.jpg';
import publicFaces from '/images/public-faces.jpg';

/**
 * Renders the Home page, which serves as the main entry point of the application.
 * It presents users with a choice to navigate to either the "Hookups" section or the "Community" hub.
 * The component uses the ThemeContext to apply themes.
 *
 * @component
 * @returns {JSX.Element} The Home page component.
 */
function Home() {
  const { currentTheme } = useContext(ThemeContext);

  const cardStyle = "relative flex flex-col rounded-lg shadow-lg overflow-hidden h-96 justify-end";
  const overlayStyle = "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-60";
  const textContainerStyle = "relative z-10 p-6 text-white";

  return (
    <>
      <SEO
        title="Home - Limpopo Connect"
        description="Welcome to Limpopo Connect, the premier social networking platform for the Limpopo province. Connect with locals in Polokwane, Tzaneen, and Mokopane through community events, groups, and social networking."
        keywords="Limpopo social network, Polokwane community, Tzaneen events, Mokopane groups, South African social platform"
        image="/images/lady-azania.jpg"
      />
      <StructuredData />

      <div className={`min-h-screen ${currentTheme.text}`}>
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome to Limpopo Connect</h1>
              <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-300">
                Limpopo Connect is your gateway to the vibrant community of Limpopo Province.
                Whether you're seeking meaningful connections, discovering local events, or exploring
                cultural experiences in Polokwane, Tzaneen, and Mokopane, we've got you covered.
                Join thousands of residents building stronger community ties through our comprehensive
                social networking platform.
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                From tech meetups in Polokwane to cultural festivals in Tzaneen and hiking adventures
                in Mokopane, discover the rich tapestry of life in Limpopo Province. Our platform
                connects you with like-minded individuals, local businesses, and community events
                that make our province truly special.
              </p>
            </div>

            <div className="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-5xl">
              {/* Hookups Card */}
              <Link to="/hookups" className="block transform hover:scale-105 transition-transform duration-300 group">
                <div
                  className={cardStyle}
                  style={{ backgroundImage: `url(${ladyAzania})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className={overlayStyle}></div>
                  <div className={textContainerStyle}>
                    <h2 className="text-4xl font-bold">Hookups</h2>
                    <p className="mt-2 text-lg">Discreet. Anonymous. Direct connections for adults in Limpopo.</p>
                    <p className="mt-2 text-base opacity-90">Find meaningful relationships and connections with people who share your interests and values in our safe, respectful community.</p>
                    <div className="mt-6">
                      <span className={`bg-red-600 text-white font-bold py-3 px-8 rounded-lg group-hover:bg-red-700 transition-colors duration-300`}>
                        Explore Connections
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Community Hub Card */}
              <Link to="/community" className="block transform hover:scale-105 transition-transform duration-300 group">
                <div
                  className={cardStyle}
                  style={{ backgroundImage: `url(${publicFaces})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className={overlayStyle}></div>
                  <div className={textContainerStyle}>
                    <h2 className="text-4xl font-bold">Community</h2>
                    <p className="mt-2 text-lg">Events. Groups. Culture. Building stronger communities together.</p>
                    <p className="mt-2 text-base opacity-90">Join local events, participate in community groups, and celebrate the rich cultural heritage of Limpopo Province with fellow residents.</p>
                    <div className="mt-6">
                      <span className={`bg-blue-600 text-white font-bold py-3 px-8 rounded-lg group-hover:bg-blue-700 transition-colors duration-300`}>
                        Join Community
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Additional Content Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Limpopo Connect?</h2>
              <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                <div className="p-6 rounded-lg bg-gray-800 bg-opacity-50">
                  <h3 className="text-xl font-semibold mb-4">Local Focus</h3>
                  <p className="text-gray-300">Designed specifically for the Limpopo Province community, connecting you with events and people in Polokwane, Tzaneen, Mokopane, and surrounding areas.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-800 bg-opacity-50">
                  <h3 className="text-xl font-semibold mb-4">Safe & Respectful</h3>
                  <p className="text-gray-300">Our platform prioritizes user safety with robust moderation, privacy controls, and community guidelines that foster positive interactions.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-800 bg-opacity-50">
                  <h3 className="text-xl font-semibold mb-4">Cultural Celebration</h3>
                  <p className="text-gray-300">Celebrate the diverse cultures, languages, and traditions of Limpopo Province through dedicated events, groups, and community features.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
