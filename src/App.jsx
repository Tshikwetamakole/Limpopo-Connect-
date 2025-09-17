import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

/**
 * The main application component.
 * Sets up routing, authentication, and overall layout.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Helmet>
          <title>Limpopo Connect - Community Platform</title>
          <meta name="description" content="Connect with the Limpopo community through events, groups, and social networking. Join Polokwane, Tzaneen, and Mokopane residents." />
          <meta name="author" content="Emmanuel Charley Raluswinga" />
          <meta name="keywords" content="Limpopo, community, social network, events, Polokwane, Tzaneen, Mokopane" />
          <meta name="robots" content="index, follow" />
          <link rel="author" href="https://charleyraluswinga.space" />
        </Helmet>
        <div className="app">
          <Navbar />
          <main className="main-content">
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
  );
}

export default App;
