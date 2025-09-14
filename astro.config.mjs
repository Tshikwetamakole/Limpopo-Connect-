import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://limpopoconnect.site',
  integrations: [tailwind()]
});

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tshikwetamakole.github.io", // your GitHub username + .github.io
  base: "/Limpopo-Connect-/",               // repo name with trailing slash
});
