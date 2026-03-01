// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://sagascript.gille.ai',

  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'sv', 'no'],
      routing: {
          prefixDefaultLocale: false,
      },
	},

  integrations: [sitemap()],
  adapter: cloudflare(),
});