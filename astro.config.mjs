import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import remarkDirective from 'remark-directive';
import remarkReadingTime from 'remark-reading-time';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: netlify(),
	integrations: [
		react(),
		sanity({
			projectId: 'rfglm6rd',
			dataset: 'production',
			apiVersion: '2021-10-21',
			useCdn: false,
		}),
		tailwind(),
		mdx({
			shikiConfig: {
				theme: 'rose-pine-moon',
				wrap: true,
			},
		}),
	],
	markdown: {
		remarkPlugins: [
			[remarkToc, { tight: true, ordered: true }],
			remarkDirective,
			remarkCalloutDirectives,
			remarkReadingTime,
		],
		rehypePlugins: [rehypeHeadingIds],
		smartypants: false,
		gfm: true,
	},
	scopedStyleStrategy: 'where',
});
