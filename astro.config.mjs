// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';

// Deploy target: GitHub Pages project site at https://singhgautam7.github.io/kuber-web/
// The base path MUST equal the repository name for a project site.
// If you move to a custom domain / user site, set `site` to that origin and `base` to '/'.
const SITE = 'https://singhgautam7.github.io';
const BASE = '/kuber-web';

export default defineConfig({
  site: SITE,
  base: BASE,
  // 'ignore' (the default) so any unmatched path falls through to our custom
  // 404 page. With 'always', Astro's dev/preview server intercepts paths that
  // lack a trailing slash and shows its own built-in 404 instead of ours.
  trailingSlash: 'ignore',
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
