import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.hamsternik.com',
	markdown: {
		shikiConfig: {
			// Dual themes: Shiki emits CSS variables for both and switches on
			// prefers-color-scheme, instead of baking one theme into the markup.
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			}
		}
	},
	redirects: {
		// Kept so links shared before the .ios/.fs split keep resolving.
		'/nkhomitsevych.resume.pdf': '/nkhomitsevych.resume.ios.pdf'
	},
	integrations: [mdx(), sitemap(), tailwind()]
});
