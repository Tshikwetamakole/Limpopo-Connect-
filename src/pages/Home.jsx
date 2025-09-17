import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
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
    <div className={`min-h-screen ${currentTheme.text}`}>
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Choose Your Experience</h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">Whether you're looking for community or something more discreet.</p>
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
                  <h3 className="text-4xl font-bold">Hookups</h3>
                  <p className="mt-2 text-lg">Discreet. Anonymous. Direct.</p>
                  <div className="mt-6">
                    <span className={`bg-red-600 text-white font-bold py-3 px-8 rounded-lg group-hover:bg-red-700 transition-colors duration-300`}>
                        Enter
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
                  <h3 className="text-4xl font-bold">Community</h3>
                  <p className="mt-2 text-lg">Events. Groups. Culture.</p>
                   <div className="mt-6">
                    <span className={`bg-blue-600 text-white font-bold py-3 px-8 rounded-lg group-hover:bg-blue-700 transition-colors duration-300`}>
                        Explore
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
