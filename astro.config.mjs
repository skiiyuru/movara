import tailwindcss from '@tailwindcss/vite'

// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://movara.co',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})