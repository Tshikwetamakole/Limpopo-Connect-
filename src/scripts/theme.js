// src/scripts/theme.js
export const STORAGE_KEY = 'lc_theme';

export function initTheme() {
  // guard: do nothing during SSR
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  const applyTheme = () => {
    const theme = localStorage.getItem(STORAGE_KEY) || 'community'; // Default to community
    if (theme === 'dark') {
      root.classList.add('dark');
      root.dataset.theme = 'hookups';
    } else {
      root.classList.remove('dark');
      root.dataset.theme = 'community';
    }
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem(STORAGE_KEY);
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme();
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  applyTheme();
}
