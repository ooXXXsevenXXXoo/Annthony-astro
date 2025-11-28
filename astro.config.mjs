
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; 
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: netlify(),

  vite: {
    plugins: [tailwind()],
  }
});
