import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],
  site: 'https://blobplop.com/',
  markdown: {
    smartypants: false,
    gfm: true
  }
});
