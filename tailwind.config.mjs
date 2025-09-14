/** @type {import('tailwindcss').Config} */

// Helper function to define colors with opacity support
const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: withOpacity('--theme-bg'),
          text: withOpacity('--theme-text'),
          accent: withOpacity('--theme-accent'),
          secondary: withOpacity('--theme-secondary'),
        },
        // The old color names are kept for now for a gradual refactor,
        // but they point to the new CSS variables.
        hookups: {
          bg: withOpacity('--theme-bg'),
          text: withOpacity('--theme-text'),
          accent: withOpacity('--theme-accent'),
        },
        community: {
          bg: withOpacity('--theme-bg'),
          text: withOpacity('--theme-text'),
          accent: withOpacity('--theme-accent'),
          secondary: withOpacity('--theme-secondary'),
        }
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
