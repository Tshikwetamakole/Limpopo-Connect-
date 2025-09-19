import '@testing-library/jest-dom';
<<<<<<< HEAD
=======

// Ensure BASE_URL exists during tests
if (!import.meta.env.BASE_URL) {
  // Vite populates BASE_URL in dev/build, but tests run via Vitest
  import.meta.env.BASE_URL = '/Limpopo-Connect-/';
}
>>>>>>> bcbbecc (chore: clean root assets, add NotFound route, fix base paths; lint+build pass)
