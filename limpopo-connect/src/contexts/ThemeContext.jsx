import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Theme configuration using the newly defined colors in tailwind.config.js
  const themeConfig = {
    dark: {
      navbar: 'bg-transparent',
      // The background now uses the custom colors.
      background: 'bg-brand-dark',
      gradient: 'bg-brand-gradient from-brand-dark via-brand-purple to-brand-red',
      text: 'text-white',
      cardBg: 'bg-gray-800 bg-opacity-50 backdrop-blur-sm', // Added backdrop-blur for a frosted glass effect
      button: 'bg-brand-red hover:bg-red-700',
      buttonText: 'text-white',
    },
    light: {
      navbar: 'bg-white',
      background: 'bg-gray-100',
      gradient: '',
      text: 'text-gray-800',
      cardBg: 'bg-white',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      buttonText: 'text-white',
    }
  };

  const currentTheme = themeConfig[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
