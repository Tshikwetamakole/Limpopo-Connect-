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
          // Core Palette
          bg: withOpacity('--theme-bg'),
          text: withOpacity('--theme-text'),
          'text-subtle': withOpacity('--theme-text-subtle'),
          border: withOpacity('--theme-border'),

          // Components
          'bg-card': withOpacity('--theme-bg-card'),
          'bg-card-hover': withOpacity('--theme-bg-card-hover'),

          // Accents & CTAs
          accent: withOpacity('--theme-accent'),
          'accent-hover': withOpacity('--theme-accent-hover'),
          'cta-primary-bg': withOpacity('--theme-cta-primary-bg'),
          'cta-primary-text': withOpacity('--theme-cta-primary-text'),
          'cta-primary-bg-hover': withOpacity('--theme-cta-primary-bg-hover'),
          'cta-secondary-bg': withOpacity('--theme-cta-secondary-bg'),
          'cta-secondary-text': withOpacity('--theme-cta-secondary-text'),
          'cta-secondary-bg-hover': withOpacity('--theme-cta-secondary-bg-hover'),
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
