// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // funciones serverless de Netlify
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "server",        // mantenemos server porque tu código usa SSR
  adapter: netlify(),      // configuramos adapter para Netlify

  vite: {
    plugins: [tailwind()],
  }
});
