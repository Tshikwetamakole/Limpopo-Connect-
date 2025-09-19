<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import Navbar from "../src/components/Navbar";
import BottomNav from "../src/components/BottomNav";
import SEO from "../src/components/SEO";
import { routes } from "./routes";
import "./App.css";
>>>>>>> bcbbecc (chore: clean root assets, add NotFound route, fix base paths; lint+build pass)

/**
 * The main application component.
 * Sets up routing, authentication, and overall layout.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 */
const App = () => {
  return (
<<<<<<< HEAD
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router basename={import.meta.env.BASE_URL}>
            <Helmet>
              <title>Limpopo Connect - Community Platform</title>
              <meta name="description" content="Connect with the Limpopo community through events, groups, and social networking. Join Polokwane, Tzaneen, and Mokopane residents." />
              <meta name="author" content="Emmanuel Charley Raluswinga" />
              <meta name="keywords" content="Limpopo, community, social network, events, Polokwane, Tzaneen, Mokopane" />
              <meta name="robots" content="index, follow" />
              <link rel="author" href="https://charleyraluswinga.space" />
            </Helmet>
            <div className="app">
              <a href="#main-content" className="skip-link">Skip to main content</a>
              <Navbar />
              <main id="main-content" className="main-content">
                <Routes>
                  {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.Component />} />
                  ))}
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
=======
    <ThemeProvider>
      <SEO />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <main className="pt-16 pb-20 min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark">
          <Routes>
            {routes.map(({ path, Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}
          </Routes>
        </main>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
>>>>>>> bcbbecc (chore: clean root assets, add NotFound route, fix base paths; lint+build pass)
  );
};

export default App;
