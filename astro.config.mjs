// astro.config.mjs

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Asegúrate de que importas Vercel
import tailwind from "@tailwindcss/vite"; // u otras dependencias que tengas

export default defineConfig({
  output: "server", // Esto debe ser 'server' si quieres renderizado del lado del servidor
  adapter: vercel(), // ¡Asegúrate de que estás usando vercel() aquí!
  
  vite: {
    plugins: [tailwind()],
  },
});