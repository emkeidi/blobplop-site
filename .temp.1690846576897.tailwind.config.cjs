/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['sans-serif'],
			serif: ['Lora', 'serif'],
		},
		extend: {},
	},
	daisyui: {
		themes: [
			{
				blobby: {
					primary: '#7ee7abff',
					secondary: '#f0abfc',
					accent: '#d4b966ff',
					neutral: '#57534e',
					'base-100': '#1f2937',
					info: '#9c5c2fff',
					success: '#9b4da8ff',
					warning: '#fbbd23',
					error: '#f87272',
				},
			},
			'retro',
			'coffee',
			'fantasy',
		],
	},
	darkmode: 'class',
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
