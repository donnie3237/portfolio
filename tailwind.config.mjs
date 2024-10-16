/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)", // Your custom green
				secondary: "var(--color-secondary)", // Your custom orange
				line: "var(--color-line)", // Your custom orange
			}
		},		
	},
	plugins: [require('daisyui')],
}
