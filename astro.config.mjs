// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const isDevMode = process.env.DEV_MODE === 'true';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://becbec.fr',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  adapter: isDevMode ? undefined : cloudflare(),
  integrations: [sitemap()],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        "frame-ancestors 'none'",
      ],
    },
  },
  vite: {
    plugins: [yaml()],
  },
});
