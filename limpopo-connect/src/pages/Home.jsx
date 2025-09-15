import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Home() {
  const { currentTheme } = useContext(ThemeContext);

  const cardStyle = "relative flex flex-col rounded-lg shadow-lg overflow-hidden h-64 justify-end";
  const overlayStyle = "absolute inset-0 bg-black bg-opacity-50";
  const textContainerStyle = "relative z-10 p-6 text-white";

  return (
    <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Connect Your Way</h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">One platform, two worlds. Find your connection.</p>
          </div>

          <div className="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-4xl">
            {/* Hookups Card */}
            <Link to="/hookups" className="block transform hover:scale-105 transition-transform duration-300">
              <div
                className={cardStyle}
                style={{ backgroundImage: `url('/images/hookups-card.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className={overlayStyle}></div>
                <div className={textContainerStyle}>
                  <h3 className="text-3xl font-bold">Hookups</h3>
                  <p className="mt-1 text-lg">Discreet. Anonymous. Direct.</p>
                  <div className="mt-4">
                    <span className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-6 rounded-lg`}>
                        Enter
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Community Hub Card */}
            <Link to="/community" className="block transform hover:scale-105 transition-transform duration-300">
              <div
                className={cardStyle}
                style={{ backgroundImage: `url('/images/community-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className={overlayStyle}></div>
                <div className={textContainerStyle}>
                  <h3 className="text-3xl font-bold">Community</h3>
                  <p className="mt-1 text-lg">Events. Groups. Culture.</p>
                   <div className="mt-4">
                    <span className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-6 rounded-lg`}>
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
