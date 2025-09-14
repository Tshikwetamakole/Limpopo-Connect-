`README.md`:

````markdown
🌍 Limpopo Connect

> A modern prototype of a **social platform** built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), designed to connect people, communities, and culture in Limpopo.

🔗 **Live Demo:** [limpopoconnect.site](https://limpopoconnect.site)

---

## ✨ Highlights

- 🔒 **Hookups Mode** — discreet, dark-themed UI for private connections  
- 🎉 **Community Mode** — vibrant light mode for events, groups & engagement  
- 🎨 **Theme Toggle** — light/dark preference saved in `localStorage`  
- 📱 **Responsive Layout** — mobile-friendly with bottom navigation bar  
- ⚡ **Fast & Lightweight** — powered by Astro’s static generation  
- 🛠 **Fully Automated Deployment** — via GitHub Actions → GitHub Pages  

---

## 🛠 Tech Stack

| Technology     | Purpose |
|----------------|---------|
| **Astro**      | Static site generation |
| **Tailwind CSS** | Utility-first styling |
| **Vanilla JS (ES6+)** | Client-side interactivity |
| **GitHub Actions** | CI/CD pipeline |
| **GitHub Pages** | Hosting (with custom domain support) |

---

## 📂 Project Structure

```text
.github/workflows/   → Deployment workflows
public/              → Static assets (incl. CNAME for custom domain)
src/
  components/        → Reusable UI pieces
  layouts/           → Base layouts (e.g., MainLayout.astro)
  pages/             → Pages & routes
astro.config.mjs     → Astro config
tailwind.config.mjs  → Tailwind config
package.json         → Project metadata & dependencies
````

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Tshikwetamakole/Limpopo-Connect-.git
cd Limpopo-Connect-
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

➡️ Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production

```bash
npm run build
```

Outputs static site into `dist/`.

---

## 🌐 Deployment

This project auto-deploys to **GitHub Pages** using GitHub Actions.

### ⚙️ Workflow

* Push to `main` → CI builds site → static files pushed to `gh-pages` branch
* GitHub Pages serves the site from `gh-pages`

### ✅ Settings

* **Branch:** `gh-pages`
* **Folder:** `/ (root)`
* **Custom domain:** `limpopoconnect.site`

### 🔑 Config (`astro.config.mjs`)

For custom domain:

```js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://limpopoconnect.site",
  base: "/",
  integrations: [tailwind()],
});
```

For GitHub repo URL (if no domain):

```js
export default defineConfig({
  site: "https://tshikwetamakole.github.io/Limpopo-Connect-/",
  base: "/Limpopo-Connect-/",
  integrations: [tailwind()],
});
```

### 📌 CNAME file

Add a `public/CNAME` with:

```
limpopoconnect.site
```

---

## 🐞 Troubleshooting

* **Unstyled page / missing CSS** → Check `base` in `astro.config.mjs` matches hosting path
* **403 error pushing to gh-pages** → Enable Actions → Workflow permissions → *Read & write*
* **Custom domain not applied** → Ensure `public/CNAME` exists & DNS is configured

---

## 👨‍💻 Author

**Emmanuel Charley Raluswinga**
📍 Limpopo, South Africa
💻 C#, .NET MAUI, JavaScript/TypeScript, React, Tailwind, PostgreSQL, Firebase

---

## 📌 Live Project

🌐 [limpopoconnect.site](https://limpopoconnect.site)

```

- Main stack: C#, .NET MAUI, JS/TS, React, Tailwind, PostgreSQL, Firebase

License
- Add a LICENSE file (e.g., MIT) if you want to open-source this prototype.

Contact
- justexecutetechnologies@gmail.com
