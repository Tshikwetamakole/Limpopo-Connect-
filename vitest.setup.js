import '@testing-library/jest-dom';

// Ensure BASE_URL exists during tests
if (!import.meta.env.BASE_URL) {
  // Vite populates BASE_URL in dev/build, but tests run via Vitest
  import.meta.env.BASE_URL = '/Limpopo-Connect-/';
}
