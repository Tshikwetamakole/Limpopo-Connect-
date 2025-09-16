import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <ThemeProvider>
      <div style={{ position: 'relative' }}>
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Router>
            <Navbar />
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
            <BottomNav />
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
