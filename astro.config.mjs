// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "server", // mantenemos server porque quieres SSR
  adapter: netlify(), // usa el adapter correcto sin /functions

  vite: {
    plugins: [tailwind()],
  },
});
