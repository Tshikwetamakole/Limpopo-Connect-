# Limpopo Connect

A static prototype of a social platform with two distinct modes:
- **Hookups** — a discreet, dark-themed mode for private connections.
- **Community** — a light, vibrant mode for events, groups and cultural engagement.

This repository contains a front-end design built with Astro, demonstrating UI/UX, theme toggles, and a persistent user onboarding flow. There is no backend — all forms and interactions are simulated in the browser using `localStorage`.

Quick links
- Repo: https://github.com/Tshikwetamakole/Limpopo-Connect-
- Demo: https://limpopoconnect.site

Why this repo exists
- Prototype interactions and visual design for two user journeys in the same product.
- Validate UI/UX and flows before building a backend or full-stack implementation.

, 
Features
- **Seamless Onboarding Flow**: Sign up, complete an onboarding form, and see your information persisted on a dynamic profile page.
- **Persistent User Data**: User information is saved to `localStorage`, simulating a real user session across page reloads.
- **Dual Modes**: Hookups (dark) and Community (light) with distinct visual identities.
- **Theme Toggle**: Light/dark function preference is saved to `localStorage`.
- **Simulated Interactions**: Basic chat UI and event RSVP buttons that toggle state on the client-side.
- **Responsive Design**: A mobile-friendly layout with a bottom navigation bar.

Tech stack
- **Astro**: A modern static site builder for creating fast, content-driven websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vanilla JS (ES6+)**: Used for client-side interactivity.

File / folder structure
- `src/` - All source code.
  - `components/` - Reusable Astro components.
  - `layouts/` - Main page layouts.
  - `pages/` - Site pages and routes.
  - `scripts/` - Global client-side JavaScript.
  - `styles/` - Global CSS.
- `public/` - Static assets (images, fonts, etc.).
- `astro.config.mjs` - Astro configuration file.
- `package.json` - Project dependencies and scripts.
- `README.md` - This file.

Prerequisites
- **Node.js** (LTS version recommended)
- **npm** (or yarn/pnpm)

Local preview
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  Open the printed URL (e.g., `http://localhost:4321`) in your browser.

How to use the prototype
- **Sign Up**: Create a new user account. You will be automatically redirected to the onboarding page.
- **Onboarding**: Fill out your profile information. You will be redirected to your dynamic profile page.
- **View Profile**: See your persisted information on the profile page. Reload the page to confirm the data is saved.
- **Toggle Theme**: Use the theme button to switch between light and dark modes. Your preference is saved.

Recommended development workflow
- Branching strategy:
  - `main` — Production-ready (or prototype default).
  - `feature/{short-descrip}` — For new features or improvements.
  - `fix/{short-descrip}` — Bug fixes.
  - `chore/{short-descrip}` — Non-functional changes (docs, formatting).

Suggested commit messages (conventional, clear)
- `docs: improve README with setup, deployment and workflow`
- `feat: add theme persistence to localStorage`
- `fix: correct mobile nav behaviour on small screens`
- `chore: reorganise assets folder`

Deployment
This project is configured for easy deployment on platforms like GitHub Pages, Netlify, or Vercel.

- **Build the site:**
  ```bash
  npm run build
  ```
- **Deploy:** The static files will be generated in the `dist/` directory. Deploy this directory to your hosting provider. See the `astro.config.mjs` for the site configuration.

Contributing
- Keep PRs small and focused.
- Use the branch naming and commit message suggestions above.
- Include screenshots or short GIFs on UI changes.
- If adding code, prefer ES6+ (async/await, const/let, modular structure) and Tailwind utility classes for quick, consistent styling.

Accessibility & UX notes
- Ensure sufficient colour contrast between text and background in both modes.
- Prefer native form controls for best keyboard and screen reader behaviour.
- Add `aria-labels` to dynamic UI elements when moving beyond the prototype stage.

Next steps (suggested roadmap)
- Create a Proto API (mock endpoints) to simulate server behaviour for feeds.
- Build a full authentication flow and connect to a backend service (e.g., Firebase, Supabase).
- Implement the messaging and event RSVP functionality with data persistence.

Author
- Emmanuel “Charley” Raluswinga — Tshikwetamakole
- Main stack: C#, .NET MAUI, JS/TS, React, Tailwind, PostgreSQL, Firebase

License
- Add a LICENSE file (e.g., MIT) if you want to open-source this prototype.

Contact
- justexecutetechnologies@gmail.com
