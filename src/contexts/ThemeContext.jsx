import { createContext, useState } from 'react';

/**
 * @typedef {'dark' | 'light'} ThemeName
 */

/**
 * @typedef {object} Theme
 * @property {string} navbar - CSS classes for the navbar background.
 * @property {string} background - CSS classes for the main background.
 * @property {string} gradient - CSS classes for background gradients.
 * @property {string} text - CSS classes for the primary text color.
 * @property {string} cardBg - CSS classes for card backgrounds.
 * @property {string} button - CSS classes for button backgrounds.
 * @property {string} buttonText - CSS classes for button text color.
 */

/**
 * @typedef {object} ThemeContextValue
 * @property {ThemeName} theme - The name of the current theme ('dark' or 'light').
 * @property {function(ThemeName): void} toggleTheme - Function to switch the theme.
 * @property {Theme} currentTheme - The configuration object for the current theme.
 */

/**
 * React context for managing application theme.
 * Provides theme information and a function to change the theme.
 *
 * @type {React.Context<ThemeContextValue>}
 */

export const ThemeContext = createContext();

/**
 * Provides the theme context to its children.
 * It manages the current theme state and provides a function to update it.
 *
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The theme provider component.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  /**
   * Toggles the current theme.
   * @param {ThemeName} newTheme - The new theme name to set.
   */
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  /**
   * Configuration for the different themes available in the application.
   * @type {Object<ThemeName, Theme>}
   */
  const themeConfig = {
    dark: {
      navbar: 'bg-transparent',
      // The background is now handled by the AnimatedBackground component.
      background: '',
      gradient: '',
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
