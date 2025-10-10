// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Para producción (cuando tengas dominio)
  site: 'https://leonardo-canorio.com',
  
  // Base path si despliegas en subdirectorio (ej: GitHub Pages)
  // base: '/mi-portafolio',
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  // Opcional: Configurar build output
  output: 'static', // o 'server' si necesitas SSR
  
  // Opcional: Configurar compresión
  compressHTML: true,
});