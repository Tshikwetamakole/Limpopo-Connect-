import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://limpopoconnect.site", // 👈 your custom domain
  base: "/",                           // 👈 root, because custom domain points to root
  integrations: [tailwind()],
});

