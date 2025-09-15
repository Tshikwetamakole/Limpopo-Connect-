import { STORAGE_KEYS, THEME_TOGGLE_BTN_CLASS, THEMES } from './constants.js';

/**
 * Applies the given theme to the document.
 * @param {string} theme - The theme to apply ('community' or 'hookups').
 */
export function applyTheme(theme) {
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
  // Attach event listener to all toggle buttons
  const themeToggleBtns = document.querySelectorAll(`.${THEME_TOGGLE_BTN_CLASS}`);
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}
