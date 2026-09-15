// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.freechemlab.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
