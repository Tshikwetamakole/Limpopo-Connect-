import { STORAGE_KEYS, THEME_TOGGLE_BTN_ID, THEMES } from './constants.js';

/**
 * Applies the given theme to the document.
 * @param {string} theme - The theme to apply ('community' or 'hookups').
 */
function applyTheme(theme) {
  const newTheme = theme === THEMES.HOOKUPS ? THEMES.HOOKUPS : THEMES.COMMUNITY;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
}

/**
 * Toggles the theme between 'community' and 'hookups'.
 */
function toggleTheme() {
  const currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || THEMES.COMMUNITY;
  const newTheme = currentTheme === THEMES.COMMUNITY ? THEMES.HOOKUPS : THEMES.COMMUNITY;
  applyTheme(newTheme);
}

/**
 * Initializes the theme based on localStorage or system preference,
 * and attaches the toggle event listener.
 * This function should only be called on the client.
 */
export function initTheme() {
  // Apply the saved theme or default to 'community'
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  applyTheme(savedTheme || THEMES.COMMUNITY);

  // Attach event listener to the toggle button
  const themeToggleBtn = document.getElementById(THEME_TOGGLE_BTN_ID);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
}
