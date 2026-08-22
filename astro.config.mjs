// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';

// Deploy target: Cloudflare Pages, served at the site root (no base path).
// `site` is the production origin — it drives canonical, Open Graph, and sitemap
// URLs.
const SITE = 'https://kuber.pages.dev';

export default defineConfig({
  site: SITE,
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
