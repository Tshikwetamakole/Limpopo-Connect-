# Limpopo Connect - Social Networking Application

Limpopo Connect is a modern React-based social networking application designed to connect people within the Limpopo province. It provides community features, groups, events, messaging, and user profiles with gamification elements.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Tech Stack & Architecture

- **Frontend**: React 19.1.1 with JSX
- **Build Tool**: Vite 7.1.5 (fast development server and build tool)
- **Styling**: Tailwind CSS 3.3.5 with custom brand colors and gradients
- **Routing**: React Router DOM 7.9.1 for client-side navigation
- **Animations**: tsparticles 2.12.0 for animated background effects
- **Linting**: ESLint 9.33.0 with React hooks and refresh plugins
- **Node.js**: Requires v14+ (tested with v20.19.5)
- **Package Manager**: npm (tested with v10.8.2)

## Working Effectively

### Bootstrap and Setup
**NEVER CANCEL builds or long-running commands. Be patient - all commands below complete quickly.**

1. **Dependencies Installation**:
   ```bash
   npm install
   ```
   - Takes ~12 seconds to complete
   - Expect deprecation warnings for tsparticles v2 (this is normal)
   - NEVER CANCEL: Set timeout to 60+ seconds for safety

2. **Linting** (ALWAYS run before committing):
   ```bash
   npm run lint
   ```
   - Takes ~0.7 seconds to complete
   - Must pass before committing or CI will fail
   - NEVER CANCEL: Set timeout to 30+ seconds

3. **Build for Production**:
   ```bash
   npm run build
   ```
   - Takes ~3 seconds to complete
   - Outputs to `dist/` directory
   - NEVER CANCEL: Set timeout to 60+ seconds
   - Verify build output exists in `dist/` after completion

### Development Server

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   - Starts Vite dev server at `http://localhost:5173/Limpopo-Connect-/`
   - Hot reload enabled for instant feedback
   - **Note the `/Limpopo-Connect-/` base path** - this is configured in vite.config.js for GitHub Pages deployment

5. **Production Preview**:
   ```bash
   npm run preview
   ```
   - Serves built files at `http://localhost:4173/Limpopo-Connect-/`
   - Use this to test production build locally

## Validation & Testing

### Manual Validation Requirements
**ALWAYS manually validate any changes via these scenarios:**

1. **Core Navigation Test**:
   - Start dev server with `npm run dev`
   - Navigate to `http://localhost:5173/Limpopo-Connect-/`
   - Click "Home" in navigation to reach main page
   - Verify animated particle background loads
   - Verify both "Hookups" and "Community" cards display with images

2. **Page Navigation Test**:
   - From home page, test navigation to all pages:
     - Groups page: displays 3 sample groups (Polokwane Programmers, Tzaneen Book Club, Mokopane Artists Collective)
     - Events page: displays sample events with dates and locations
     - Profile, Messages, Settings pages: verify they load without errors

3. **Build Validation**:
   - Run `npm run build` and verify `dist/` directory contains built files
   - Run `npm run preview` and test navigation works identically to dev server
   - Verify no console errors in browser dev tools

### Pre-commit Checklist
Before any commit, ALWAYS run:
```bash
npm run lint
npm run build
```
Both must succeed or CI will fail.

## Repository Structure

### Key Directories
- `/src/pages/` - Top-level page components (14 pages total)
- `/src/components/` - Reusable UI components (Navbar, BottomNav, AnimatedBackground)
- `/src/contexts/` - React contexts (ThemeContext for dark/light themes)
- `/src/assets/` - Static assets used by components
- `/public/images/` - Public image assets (lady-azania.jpg, public-faces.jpg, etc.)
- `/dist/` - Build output directory (created after npm run build)

### Important Files
- `src/routes.js` - Application routing configuration with 14 routes
- `src/App.jsx` - Main application component with theme provider and router setup
- `src/main.jsx` - React application entry point
- `vite.config.js` - Build configuration with base path `/Limpopo-Connect-/`
- `tailwind.config.js` - Custom brand colors (brand-purple, brand-red, brand-dark)
- `eslint.config.js` - Linting rules configuration

## Common Issues & Solutions

### Routing Problems
- The app uses base path `/Limpopo-Connect-/` for GitHub Pages deployment
- If navigation doesn't work, ensure you're accessing the correct URL with base path
- Routes are defined in `src/routes.js` - check this file when adding new pages

### Build Issues
- If build fails, check for syntax errors with `npm run lint` first
- Common issue: JSX syntax errors (incomplete className attributes, missing closing tags)
- Ensure all imports have correct file extensions (.jsx)

### Image Loading Issues
- Public images are served from `/public/images/` directory
- Use absolute paths starting with `/images/` in components
- Placeholder images from `via.placeholder.com` may be blocked in some environments

## Available npm Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run lint     # Run ESLint linting
npm run preview  # Preview production build locally
```

## Development Workflow

1. **Always start with**: `npm install` then `npm run dev`
2. **Before making changes**: Test current functionality to establish baseline
3. **During development**: Use dev server for hot reload
4. **Before committing**: Run `npm run lint` and `npm run build`
5. **For new pages**: Add route to `src/routes.js` and create component in `src/pages/`
6. **For styling**: Use Tailwind classes, custom brand colors available as `brand-purple`, `brand-red`, `brand-dark`

## GitHub Actions CI/CD

The repository has a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Runs on every push to main branch
- Installs dependencies with `npm ci`
- Builds with `npm run build`
- Deploys to GitHub Pages
- **Takes ~20 minutes total** - NEVER CANCEL GitHub Actions builds

## Current Application Features

- **Home Page**: Landing page with choice between "Hookups" and "Community" sections
- **Community Features**: Groups, events, user profiles with badges and leaderboards
- **Navigation**: Top navbar and bottom navigation with React Router
- **Theming**: Dark/light theme support via ThemeContext
- **Animations**: Particle.js animated backgrounds
- **Responsive Design**: Mobile-first design with Tailwind CSS

**Remember**: Always run `npm run lint` and `npm run build` before committing changes to ensure CI passes.