// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';

// Deploy target: GitHub Pages project site at https://singhgautam7.github.io/kuber/
// If you move to a custom domain / user site, set `site` to that origin and `base` to '/'.
const SITE = 'https://singhgautam7.github.io';
const BASE = '/kuber';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkCallouts],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  image: {
    // Screenshots live in /public and are served as-is (drop-in workflow).
    // Astro still optimizes any images imported from src/.
  },
});
