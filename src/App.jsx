import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';

/**
 * The main application component.
 * It sets up the theme provider, router, and the overall layout of the application,
 * including the animated background, navigation bars, and page routes.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 */
function App() {
  return (
    <ThemeProvider>
      <div style={{ position: 'relative' }}>
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/*
            Determine the router basename at runtime so the app works both when
            served from the repo subpath (GitHub Pages URL: /Limpopo-Connect-/)
            and when served from a custom domain root (https://limpopoconnect.site/).
          */}
          {(() => {
            const shouldUseRepoBase = typeof window !== 'undefined' && window.location.pathname.startsWith('/Limpopo-Connect-');
            const basename = shouldUseRepoBase ? '/Limpopo-Connect-' : undefined;
            return (
              <Router basename={basename}>
                <Navbar />
                <Routes>
                  {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.Component />} />
                  ))}
                </Routes>
                <BottomNav />
              </Router>
            );
          })()}
          
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
