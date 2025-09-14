# Limpopo Connect

A static prototype of a social platform with two distinct modes:
- **Hookups** — a discreet, dark-themed mode for private connections.
- **Community** — a light, vibrant mode for events, groups and cultural engagement.

This repository contains a self-contained front-end prototype (HTML, Tailwind CSS via CDN, and vanilla JS) demonstrating UI/UX, theme toggles, simulated forms, messaging UI, and RSVP behaviour. There is no backend — all forms and interactions are simulated in the browser.

Quick links
- Repo: https://github.com/Tshikwetamakole/Limpopo-Connect-
- Demo: https://limpopoconnect.site

Why this repo exists
- Prototype interactions and visual design for two user journeys in the same product.
- Validate UI/UX and flows before building a backend or full-stack implementation.

Features
- Dual Modes: Hookups (dark) and Community (light) with distinct visual identities.
- Theme toggle persisted to localStorage.
- Simulated, functional forms for Sign Up, Onboarding, Create Post and Settings (logs input to console).
- Basic chat UI — type messages and see them appear (client-side only).
- Event RSVP buttons that toggle state client-side.
- Responsive layout with a mobile-friendly bottom navigation.

Tech stack
- HTML5 (static files)
- Tailwind CSS (via CDN)
- Vanilla JS (ES6+)
- No build step required

File / folder structure (suggested)
- index.html — landing / entry page
- hooks.html — Hookups mode pages
- community.html — Community mode pages
- assets/ — images, icons, fonts
- README.md — this file

Prerequisites
- Modern browser (Chrome, Edge, Firefox, Safari)
- Optional: Node.js or Python to run a simple local HTTP server (recommended over opening files directly)

Local preview (recommended)
- Using Python 3:
```bash
# from repo root
python3 -m http.server 8000
# open http://localhost:8000 in your browser
```

- Using Node (http-server):
```bash
# install once globally if needed
npm install -g http-server
http-server -c-1
# open printed URL (e.g. http://127.0.0.1:8080)
```

How to use the prototype
- Toggle the theme using the theme button — preference is saved to localStorage.
- Fill forms — inputs are captured and logged to the browser console.
- Type messages in the chat UI — they appear locally.
- Click RSVP to change event state (client-side toggle).

Recommended development workflow
- Branching strategy:
  - main — production-ready (or prototype default)
  - develop — integration branch (optional)
  - feature/{short-descrip} — for new features or improvements
  - fix/{short-descrip} — bug fixes
  - chore/{short-descrip} — non-functional changes (docs, formatting)

- Example branch for this README change:
  - improve/readme

Suggested commit messages (conventional, clear)
- docs: improve README with setup, deployment and workflow
- feat: add theme persistence to localStorage
- fix: correct mobile nav behaviour on small screens
- chore: reorganise assets folder

Apply the README update (example CLI)
```bash
git checkout -b improve/readme
# replace README.md with the updated file
git add README.md
git commit -m "docs: improve README with setup, deployment and workflow"
git push -u origin improve/readme
# then open a PR on GitHub from improve/readme -> main
```

Deployment tips
- GitHub Pages (simple):
  - Option A (docs folder): move built files to /docs and enable Pages on branch main / folder /docs.
  - Option B (gh-pages branch): use a gh-pages branch and push static files there. Example:
    ```bash
    # using gh-pages package (if you later add a build step)
    npm install --save-dev gh-pages
    npm run build
    npx gh-pages -d build
    ```
- Netlify:
  - Connect the GitHub repo in Netlify, set build command (if any) and publish directory (root for static).
  - Drag-and-drop deploy is also available for static prototype.
- Quick tip: for a static prototype without build step, GitHub Pages with the /docs folder or serving from main is simplest.

Contributing
- Keep PRs small and focused.
- Use the branch naming and commit message suggestions above.
- Include screenshots or short GIFs on UI changes.
- If adding code, prefer ES6+ (async/await, const/let, modular structure) and Tailwind utility classes for quick, consistent styling.

Accessibility & UX notes
- Ensure sufficient colour contrast between text and background in both modes.
- Prefer native form controls for best keyboard and screen reader behaviour.
- Add aria-labels to dynamic UI elements (theme toggle, RSVP buttons, chat input) when you move beyond prototype.

Next steps (suggested roadmap)
- Add a small JSON-backed simulation to persist user actions across reloads.
- Create a Proto API (mock endpoints) to simulate server behaviour.
- Build authentication flow and connect to Firebase or a lightweight backend (e.g., .NET minimal API or Node).

Author
- Emmanuel “Charley” Raluswinga — Tshikwetamakole
- Main stack: C#, .NET MAUI, JS/TS, React, Tailwind, PostgreSQL, Firebase

License
- Add a LICENSE file (e.g., MIT) if you want to open-source this prototype.

Contact
- Add your preferred contact or socials here (email, Twitter, LinkedIn, etc.)
