import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://limpopoconnect.site',
  integrations: [tailwind()]
});

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tshikwetamakole.github.io/",
  base: "/Limpopo-Connect-/", 
});
