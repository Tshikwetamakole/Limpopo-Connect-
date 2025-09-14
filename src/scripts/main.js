/**
 * @file Main entry point for all client-side JavaScript.
 * @description This script imports and initializes all the necessary modules for the site.
 * It is processed by Astro and runs on the client.
 */

import { initTheme } from './theme.js';
import { initializeUI } from './ui.js';

// Initialize all client-side functionality.
// This script is loaded as a module in the browser, so it runs after the DOM is parsed.
initTheme();
initializeUI();

console.log("Limpopo Connect scripts initialized.");
