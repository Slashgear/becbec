// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://becbec.fr',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: {
    plugins: [yaml()],
  },
});
