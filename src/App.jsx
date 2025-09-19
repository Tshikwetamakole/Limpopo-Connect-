import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import SEO from "./components/SEO";
import { routes } from "./routes";
import "./App.css";

/**
 * The main application component.
 * Sets up routing, authentication, and overall layout.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 */
const App = () => {
  return (
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
  );
};

export default App;
