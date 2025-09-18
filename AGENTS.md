# Agent Instructions for Limpopo Connect

Welcome, agent! This document provides instructions and guidelines for working on the Limpopo Connect codebase. Please follow these guidelines to ensure consistency, quality, and maintainability.

## 🚀 Project Overview

Limpopo Connect is a community platform for the residents of Limpopo Province, South Africa. It's built with React, Vite, and Tailwind CSS. The goal is to create a vibrant and engaging platform for community members to connect, share, and grow together.

## 🛠️ Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
3.  **Run Tests:**
    ```bash
    npm test
    ```
4.  **Run Linter:**
    ```bash
    npm run lint
    ```

## 📝 Coding Conventions

*   **Code Style:** We use ESLint to enforce a consistent code style. Please make sure to run `npm run lint` before committing your changes.
*   **Component Naming:** Components should be named in `PascalCase`. For example, `MyComponent.jsx`.
*   **File Structure:**
    *   Pages (top-level components for routes) go in `src/pages`.
    *   Reusable components go in `src/components`.
    *   Contexts go in `src/contexts`.
    *   Routes are defined in `src/routes.js`.

## 🎭 Component Structure

*   Components should be functional components using hooks.
*   Keep components small and focused on a single responsibility.
*   Use JSDoc comments to document components and their props.

## 🧠 State Management

This project uses React Context for state management.
*   `AuthContext` manages user authentication state.
*   `ThemeContext` manages the application's theme.

When adding new global state, consider whether it belongs in an existing context or if a new context is needed.

## ✅ Testing

*   We use Vitest and React Testing Library for testing.
*   Write tests for all new components and features.
*   Tests should be placed in the same directory as the component they are testing, with a `.test.jsx` extension. For example, `MyComponent.test.jsx`.
*   Aim for high test coverage to ensure the application is stable and reliable.

## 🌊 Git Workflow

1.  Create a new branch for your feature or bug fix: `git checkout -b feature/my-new-feature`.
2.  Make your changes and commit them with a clear and descriptive commit message.
3.  Push your branch to the repository: `git push origin feature/my-new-feature`.
4.  Open a pull request for review.

## ⚡ Performance

Performance is critical for a good user experience.
*   **Image Optimization:** Use the `OptimizedImage` component for all images. It provides lazy loading, WebP support, and responsive image sizes using `srcset`.
    *   When using `OptimizedImage`, provide a `srcset` attribute with different image sizes to ensure the browser can load the most appropriate image.
*   **Code Splitting:** Routes are already code-split by default thanks to Vite. Consider using `React.lazy` for other large components that are not needed on the initial page load.

## ♿ Accessibility (A11y)

*   Ensure all new features are accessible.
*   Use semantic HTML5 elements.
*   Provide `alt` text for all images.
*   Use `aria-label` for interactive elements that don't have a clear text label (e.g., icon buttons).
*   Use a tool like Axe to test for accessibility issues.
