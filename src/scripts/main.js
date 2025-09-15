/**
 * @file Main entry point for all client-side JavaScript.
 * @description This script imports and initializes all the necessary modules for the site.
 * It is processed by Astro and runs on the client.
 */

import { initTheme } from './theme.js';
import { initUI } from './ui.js';

// Ensure this code runs only in the browser
if (typeof window !== 'undefined') {
  // Initialize all client-side functionality when the DOM is ready.
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initUI();
    console.log("Limpopo Connect scripts initialized.");
  });
}
