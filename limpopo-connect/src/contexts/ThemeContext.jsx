import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('community'); // community, hookups, both

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const themeConfig = {
    community: {
      navbar: 'bg-white',
      background: 'bg-gray-100',
      text: 'text-gray-800',
    },
    hookups: {
      navbar: 'bg-gray-800',
      background: 'bg-black',
      text: 'text-white',
    },
    both: {
      navbar: 'bg-gradient-to-r from-white to-gray-800',
      background: 'bg-gray-500',
      text: 'text-white',
    }
  };

  const currentTheme = themeConfig[Object.keys(themeConfig).includes(theme) ? theme : 'default'];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
