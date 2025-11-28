// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ¡Cambiado a Vercel!
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "server", // Esto es correcto para server-side rendering (SSR)
  adapter: vercel(), // Utilizamos el adaptador de Vercel
  
  vite: {
    plugins: [tailwind()],
  },});