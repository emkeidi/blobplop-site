import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	output: 'hybrid',
	adapter: netlify(),
	integrations: [svelte(), react(), tailwind()],
	markdown: {
		smartypants: false,
		gfm: true,
	},
});
