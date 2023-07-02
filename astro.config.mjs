import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	output: 'hybrid',
	integrations: [svelte(), react(), tailwind()],
	markdown: {
		smartypants: false,
		gfm: true,
	},
});
