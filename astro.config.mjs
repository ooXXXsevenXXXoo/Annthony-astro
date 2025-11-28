
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// Asumiendo que quieres el plugin de vite tal como lo tenías:
import tailwindcss from '@tailwindcss/vite'; 

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  // ERROR CORREGIDO: El adaptador DEBE ir dentro del array 'integrations'
  integrations: [vercel()], 
  // La propiedad 'adapter' ya no es necesaria ni reconocida en esta sintaxis.
});