/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Mapped onto the CSS custom properties in global.css so utilities stay
			// theme-aware: the dark override happens in :root, not here.
			// Note: no `<alpha-value>` placeholders — the vars are comma-separated
			// triplets, so `rgb(var(--gray) / 0.3)` would be invalid CSS. Use an
			// arbitrary value when you need alpha.
			colors: {
				accent: 'var(--accent)',
				page: 'var(--page-bg)',
				fg: 'rgb(var(--gray-dark))',
				heading: 'rgb(var(--black))',
				muted: 'rgb(var(--gray))',
				subtle: 'rgb(var(--gray-light))'
			}
		}
	},
	plugins: []
};
