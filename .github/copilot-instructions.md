
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
=======
# Limpopo Connect - GitHub Copilot Instructions

Limpopo Connect is a modern React-based social networking application designed for the Limpopo province community. It provides platforms for community engagement, social events, and personal connections through an elegant, animated web interface.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Build Process
- **Install dependencies**: `npm install` -- takes ~30 seconds including package downloads
- **Development**: `npm run dev` -- starts Vite dev server on http://localhost:5173/Limpopo-Connect-/ (ready in ~200ms)
- **Build**: `npm run build` -- takes ~3 seconds. NEVER CANCEL. Set timeout to 30+ seconds for safety
- **Preview production**: `npm run preview` -- serves production build on http://localhost:4173/Limpopo-Connect-/
- **Lint**: `npm run lint` -- runs ESLint, takes <1 second

### Prerequisites
- **Node.js**: v14 or later (tested with v20.19.5)
- **npm**: v6 or later (tested with v10.8.2)
- **Browser**: Modern browser with JavaScript enabled

### Quick Start Workflow
```bash
npm install
npm run dev
```
Navigate to http://localhost:5173/Limpopo-Connect-/ to see the application.

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS** test these scenarios after making changes:
1. **Navigation Flow**: 
   - Load home page and verify animated background renders
   - Click "Community" card → verify events list displays
   - Click "Hookups" card → verify forum posts display
   - Test navigation bar links work correctly
2. **Responsive Design**: Test that bottom navigation appears on mobile viewports
3. **Build Validation**: Always run `npm run build` and verify no errors before committing

### Linting and Code Quality
- **ALWAYS** run `npm run lint` before committing changes
- Fix all ESLint errors and warnings
- The project uses ESLint with React hooks and React refresh plugins
- No unused variables allowed (except those starting with uppercase)

## Application Architecture

### Technology Stack
- **Frontend**: React 19.1.1 with Vite 7.1.5
- **Styling**: Tailwind CSS with custom brand colors and PostCSS
- **Routing**: React Router DOM 7.9.1
- **Animations**: TSParticles for animated background effects
- **Icons**: React Icons (Ionicons)

### Project Structure
```
/
├── public/                    # Static assets and images
│   ├── images/               # Application images (lady-azania.jpg, public-faces.jpg)
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedBackground.jsx  # TSParticles animated background
│   │   ├── BottomNav.jsx          # Mobile bottom navigation
│   │   └── Navbar.jsx             # Desktop top navigation
│   ├── contexts/            # React context providers
│   │   └── ThemeContext.jsx       # Theme management
│   ├── pages/               # Page components (routes)
│   │   ├── Home.jsx               # Landing page with main cards
│   │   ├── Community.jsx          # Events and community hub
│   │   ├── Hookups.jsx           # Personal ads forum
│   │   └── [other pages...]       # Login, Profile, etc.
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── routes.js            # Route configuration
│   └── index.css            # Global styles
├── dist/                    # Production build output (generated)
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration (base: '/Limpopo-Connect-/')
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint configuration
└── postcss.config.js        # PostCSS configuration
```

### Key Components
- **Home.jsx**: Landing page with "Hookups" and "Community" cards using background images
- **routes.js**: Central route configuration defining all application pages and navigation
- **AnimatedBackground.jsx**: TSParticles component creating animated particle effects
- **ThemeContext.jsx**: Provides theme management across the application

## Common Development Tasks

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/routes.js` with path, component, label, and optional Icon
3. Set `nav: true` if page should appear in navigation

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Custom brand colors available: `brand-purple`, `brand-red`, `brand-dark`
- Animated backgrounds use purple gradient theme (`#1a0033`)
- Follow existing component patterns for consistency

### Debugging Issues
- Check browser console for React/Vite development messages
- 404 errors for placeholder images (via.placeholder.com) are expected in demo
- TSParticles may show deprecation warnings but functionality works correctly

## Build and Deployment

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch or manual dispatch
- **Process**: Builds with `npm run build` and deploys to GitHub Pages
- **Output**: Serves from `dist/` directory on `gh-pages` branch
- **Timeout**: 20 minutes (build typically completes in <5 minutes)

### Production Build
- **Command**: `npm run build`
- **Output**: `dist/` directory with optimized assets
- **Base URL**: Configured for `/Limpopo-Connect-/` path (GitHub Pages)
- **Assets**: JavaScript, CSS, and images are automatically optimized

## Known Issues and Workarounds

### Image Loading
- Some demo images may return 404 errors (placeholder URLs)
- Application functions normally despite missing demo images
- Real deployment should replace with actual image assets

### Routing Configuration
- Vite config uses `base: '/Limpopo-Connect-/'` for GitHub Pages deployment
- Local development serves on `/Limpopo-Connect-/` path
- All internal routes work correctly with this configuration

### Dependencies
- TSParticles shows deprecation warnings for v2.x (consider upgrading to v3 in future)
- All functionality works correctly despite warnings

## Validation Commands Reference

### Quick validation sequence:
```bash
npm install          # Install dependencies
npm run lint        # Check code quality
npm run build       # Build for production
npm run dev         # Start development server
```

### Build output verification:
```bash
ls -la dist/        # Verify build artifacts exist
# Should show: assets/, images/, index.html, vite.svg
```

### Performance expectations:
- **npm install**: ~30 seconds (includes TSParticles deprecation warnings - expected)
- **npm run build**: ~3 seconds
- **npm run lint**: <1 second
- **npm run dev**: Server ready in ~200ms

NEVER CANCEL build or lint commands. They complete quickly but set generous timeouts (30+ seconds) to account for system variations.

