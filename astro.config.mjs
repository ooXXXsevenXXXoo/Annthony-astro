
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // ya no usar /functions
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "server",   
  adapter: netlify(), 
  vite: {
    plugins: [tailwind()],
  }
});
