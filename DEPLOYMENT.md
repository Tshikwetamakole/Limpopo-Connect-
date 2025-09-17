# Deployment Guide

This project is set up to automatically deploy to GitHub Pages using GitHub Actions.

## Deployment Process

The deployment happens automatically when code is pushed to the `main` branch. The workflow:

1. **Build Job**: Installs dependencies, builds the project, and uploads the build artifacts
2. **Deploy Job**: Takes the build artifacts and deploys them to GitHub Pages

## GitHub Pages Configuration

To ensure deployment works correctly, make sure GitHub Pages is configured properly in your repository settings:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Set the source to "GitHub Actions"
4. The site will be available at: `https://tshikwetamakole.github.io/Limpopo-Connect-/`

## Build Configuration

The project uses Vite with the base path configured for GitHub Pages:
- Base URL: `/Limpopo-Connect-/`
- Build output: `dist/` directory
- Vite configuration: `vite.config.js`

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173/Limpopo-Connect-/`

## Troubleshooting

### Common Issues

1. **Permission Denied Error**: Make sure GitHub Actions has the necessary permissions:
   - Go to Settings > Actions > General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

2. **Build Failures**: Check the GitHub Actions logs:
   - Go to the "Actions" tab in your repository
   - Click on the failed workflow run
   - Check the logs for specific error messages

3. **404 Errors**: Verify that:
   - The base path in `vite.config.js` matches your repository name
   - GitHub Pages is configured to use "GitHub Actions" as the source
   - The site URL uses the correct path: `/Limpopo-Connect-/`

### Manual Deployment

If needed, you can manually trigger a deployment:
1. Go to the "Actions" tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the main branch and click "Run workflow"

## Production Preview

To test the production build locally before deployment:

```bash
npm run build
npm run preview
```

This will start a local server serving the production build at `http://localhost:4173/Limpopo-Connect-/`

## Configuration Files

- **`vite.config.js`**: Contains the base path configuration for GitHub Pages
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`package.json`**: Contains build scripts with host binding for external access

## External Access

Both development and preview servers are configured with `--host` flag to allow external access from containers, codespaces, or other environments.