
# Limpopo Connect - GitHub Copilot Instructions

Limpopo Connect is a modern React-based social networking application designed for the Limpopo province community. It provides platforms for community engagement, social events, and personal connections through an elegant web interface.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Build Process
- **Install dependencies**: `npm install` -- takes ~30 seconds including package downloads
- **Development**: `npm run dev` -- starts Vite dev server on http://localhost:5173/ (ready in ~200ms)
- **Build**: `npm run build` -- takes ~2 seconds. NEVER CANCEL. Set timeout to 30+ seconds for safety
- **Preview production**: `npm run preview` -- serves production build on http://localhost:4173/
- **Lint**: `npm run lint` -- runs ESLint, takes ~1 second

### Prerequisites
- **Node.js**: v14 or later (tested with v20.19.5)
- **npm**: v6 or later (tested with v10.8.2)
- **Browser**: Modern browser with JavaScript enabled

### Quick Start Workflow
```bash
npm install
npm run dev
```
Navigate to http://localhost:5173/ to see the application.

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS** test these scenarios after making changes:
1. **Navigation Flow**: 
   - Load home page and verify main content displays
   - Click "Community" card → verify events list displays (3 events: Polokwane Tech Meetup, Tzaneen Cultural Festival, Mokopane Hiking Trip)
   - Click "Hookups" card → verify forum posts display (3 posts from different locations)
   - Test navigation bar links work correctly
2. **Groups Page**: Verify 3 groups display (Polokwane Programmers - 128 members, Tzaneen Book Club - 42 members, Mokopane Artists Collective - 78 members)
3. **Build Validation**: Always run `npm run build` and verify no errors before committing

### Linting and Code Quality
- **ALWAYS** run `npm run lint` before committing changes
- Fix all ESLint errors and warnings
- The project uses ESLint with React hooks and React refresh plugins
- Common issues: unused variables, unescaped entities in JSX

## Application Architecture

### Technology Stack
- **Frontend**: React 18.2.0 with Vite 7.1.6
- **Styling**: TailwindCSS 4.1.13 with custom brand colors and PostCSS
- **Routing**: React Router DOM 6.8.0
- **Build Tool**: Vite (fast development and hot reload)
- **Linting**: ESLint 8.57.1 (deprecated but functional)

### Project Structure
```
/
├── public/                    # Static assets and images
│   ├── images/               # Application images (referenced in components)
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx            # Application footer with contact info
│   │   └── Navbar.jsx            # Top navigation bar
│   ├── contexts/            # React context providers
│   │   ├── AuthContext.jsx       # Authentication state management
│   │   └── ThemeContext.jsx      # Theme management
│   ├── pages/               # Page components (routes)
│   │   ├── Home.jsx              # Landing page with main cards
│   │   ├── Community.jsx         # Events and community hub
│   │   ├── Groups.jsx            # Community groups listing
│   │   ├── Blog.jsx              # Blog platform
│   │   └── [other pages...]      # Login, Profile, etc.
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── routes.js            # Route configuration
│   └── index.css            # Global styles with TailwindCSS imports
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration (base: '/')
├── tailwind.config.js       # TailwindCSS configuration with brand colors
├── postcss.config.js        # PostCSS configuration with TailwindCSS v4
└── .eslintrc.json           # ESLint configuration
```

### Key Components
- **Home.jsx**: Landing page with "Hookups" and "Community" cards using background images
- **routes.js**: Central route configuration defining all application pages and navigation
- **Footer.jsx**: Comprehensive footer with contact information and social links
- **ThemeContext.jsx**: Provides theme management across the application

## Common Development Tasks

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/routes.js` with path, component reference
3. Import the component at the top of routes.js

### Styling Guidelines
- Use TailwindCSS classes for styling
- Custom brand colors available: `brand-purple`, `brand-red`, `brand-dark`
- TailwindCSS v4 requires `@tailwindcss/postcss` plugin in postcss.config.js
- Follow existing component patterns for consistency

### Common Issues and Solutions

#### TailwindCSS Build Issues
- If PostCSS fails with "Cannot find module tailwindcss/dist/lib.js", try fresh install:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- Ensure postcss.config.js uses `'@tailwindcss/postcss': {}` for v4

#### ESLint Issues
- Common errors: unused variables (`React` imports), unescaped entities (`'` in JSX)
- Fix unescaped entities: use `&apos;` or `&#39;` instead of `'` in JSX text

#### Image Loading
- Some demo images may return 404 errors (placeholder URLs from via.placeholder.com)
- Application functions normally despite missing demo images
- Real deployment should replace with actual image assets

## Build and Deployment

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch or manual dispatch
- **Process**: Runs `npm ci`, `npm run lint`, `npm run build`, then deploys to GitHub Pages
- **Custom Domain**: Uses limpopoconnect.site (configured in CNAME file)
- **Timeout**: Build typically completes in <5 minutes

### Production Build
- **Command**: `npm run build`
- **Output**: `dist/` directory with optimized assets
- **Base URL**: `/` (root path due to custom domain)
- **Verification**: Check `dist/` contains index.html, assets/, images/ directories

## Validation Commands Reference

### Quick validation sequence:
```bash
npm install          # Install dependencies (~30 seconds)
npm run lint        # Check code quality (~1 second)
npm run build       # Build for production (~2 seconds)
npm run dev         # Start development server (~200ms to ready)
```

### Performance expectations:
- **npm install**: ~30 seconds (includes deprecation warnings - expected)
- **npm run build**: ~2 seconds
- **npm run lint**: ~1 second
- **npm run dev**: Server ready in ~200ms
- **npm run preview**: Same performance as dev

### Manual Validation Checklist:
1. **Home Page**: Verify "Hookups" and "Community" cards display correctly
2. **Community Page**: Verify 3 events display (Polokwane, Tzaneen, Mokopane locations)
3. **Hookups Page**: Verify 3 forum posts display with user interactions
4. **Groups Page**: Verify 3 groups with member counts display
5. **Navigation**: Test all navigation links work properly
6. **Build**: Verify `npm run build` succeeds and `dist/` directory is created

NEVER CANCEL build or lint commands. They complete quickly but set generous timeouts (30+ seconds) to account for system variations.

## Known Working Configuration

### Dependencies Status (Last Validated)
- React 18.2.0 ✓
- Vite 7.1.6 ✓  
- TailwindCSS 4.1.13 ✓
- ESLint 8.57.1 ✓ (deprecated but functional)
- Node.js 20.19.5 ✓
- npm 10.8.2 ✓

### Expected Warnings (Safe to Ignore)
- ESLint deprecation warnings
- TailwindCSS dependencies with deprecation messages
- 404 errors for placeholder images from via.placeholder.com
- Manifest property warnings in browser console

### Build Output Verification
After `npm run build`, verify these files exist in `dist/`:
- `index.html` (~4.6 KB)
- `assets/index-*.css` (~23 KB)
- `assets/index-*.js` (~473 KB)
- `images/` directory
- `CNAME` file (for custom domain)
- Additional meta files (robots.txt, sitemap.xml, etc.)
