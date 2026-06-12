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
