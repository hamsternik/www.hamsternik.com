import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.hamsternik.com',
	redirects: {
		// Kept so links shared before the .ios/.fs split keep resolving.
		'/nkhomitsevych.resume.pdf': '/nkhomitsevych.resume.ios.pdf'
	},
	integrations: [mdx(), sitemap(), tailwind()]
});
