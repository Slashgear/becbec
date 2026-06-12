// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: [yaml()],
  },
});
