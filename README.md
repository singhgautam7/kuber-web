# Kuber Web

[![Live Site](https://img.shields.io/badge/Live_Site-kuber.pages.dev-2563eb?style=for-the-badge&logo=cloudflare&logoColor=F38020)](https://kuber.pages.dev/)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Bun](https://img.shields.io/badge/Bun-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)

The marketing and documentation website for [Kuber](https://play.google.com/store/apps/details?id=com.grs.kuber), a fully offline personal finance app for India. Built with Astro, hand-written CSS driven by a token system, and content collections. No account, no cloud, no trackers, and no CSS framework. The whole site recolors across 7 themes and light or dark, matching the app.

## Tech stack

- **Astro** (static output) with Content Collections
- **Bun** as package manager and runtime
- **TypeScript** strict mode
- Hand-written CSS via CSS custom properties (no Tailwind, no framework)
- Vanilla JS islands only (theme switcher, mobile nav, feature filter, copy buttons, email reveal). No React/Vue/Preact.
- Self-hosted fonts (Inter, Playfair Display, JetBrains Mono) via `@fontsource*`. No Google Fonts CDN.
- Deploys to **Cloudflare Pages** (connected via the Cloudflare dashboard, not a workflow file).

## Local development

```bash
bun install
```

```bash
bun run dev
```

The dev server runs at `http://localhost:4321/`.

```bash
bun run build
```

```bash
bun run preview
```

`bun run build` regenerates `src/styles/tokens.css` from `src/lib/theme.ts` before building (see Theme system).

## Project layout

```
content/            Markdown content (edit these to change the site)
  features/         One .md per feature -> /features/<slug>/
  docs/             Privacy policy, data deletion, FAQ -> /docs/<slug>/
  pages/            About letter, developer, press-kit copy
  changelog/        One .md per release
public/
  screenshots/
    features/<slug>/ Drop feature screenshots here (see naming below)
    hero/            Hero + default OG image
    press/           Press screenshots
  assets/           Bank logos, app icon, store screenshots
src/
  config.ts         Single source of site config (see below)
  content/config.ts Collection schemas (Zod, type-checked at build)
  lib/theme.ts      The 14 palettes + colour maths (source of truth)
  scripts/          gen-tokens.mjs (tokens.css generator)
  styles/           reset, tokens (generated), typography, global
  components/ layouts/ pages/
```

## Content workflow

Adding content never requires touching code. Just add markdown (and optionally images).

### How to add a new feature

1. Create `content/features/<slug>.md`. The `slug` in frontmatter must match the filename.
2. Fill the frontmatter:

   ```yaml
   ---
   title: "My Feature"
   slug: "my-feature"
   category: "Tracking"      # one of: Tracking, Insights, Money,
                             # Privacy & Security, Personalization,
                             # Productivity, Data
   order: 27                 # controls position in the list
   description: "One-line summary for the card."
   pro: false                # true shows the Pro badge
   beta: false               # true shows the Beta badge
   signature: false          # true flags it as a signature feature
   related: [sms-import, budgets]   # optional, other feature slugs
   iconName: "my-feature"    # optional, key in src/lib/icons.ts
   ---

   A short body. Two or three sentences is plenty.
   ```

3. (Optional) Add screenshots to `public/screenshots/features/<slug>/` (see naming below).

The feature now appears on `/features`, gets its own page at `/features/<slug>/`, and is counted in the filter chips. Zero code changes.

If you use a new `iconName`, add its SVG path to `src/lib/icons.ts`. If you omit `iconName`, the slug is used as the icon key.

### How to add a new doc

Create `content/docs/<slug>.md` with `title`, `slug`, optional `order`, `last_updated`, and `toc` (defaults true). It appears at `/docs/<slug>/` with an auto-generated table of contents built from its `##` headings.

Docs support callouts via GitHub-style admonitions:

```markdown
> [!INFO] Good to know
> This renders as an info box.
```

Supported kinds: `NOTE`/`INFO` (info), `WARNING`/`CAUTION` (warning), `TIP`/`SUCCESS` (success).

### How to add a new changelog entry

Create `content/changelog/<year-month-title>.md`:

```yaml
---
title: "Release name"
date: 2026-09-01        # ISO date, controls order (newest first)
version: "5.2.0"        # optional
latest: false           # true shows the LATEST pill
summary: "Lead paragraph."
points:
  - "First bullet."
  - "Second bullet."
---
```

It appears on `/changelog/`, sorted newest first.

### How to change the theme system

All colours live in `src/lib/theme.ts` (the 14 palettes and the `deepShade`/`hexToRgba` maths). Edit a palette there, then regenerate the CSS:

```bash
bun run gen:tokens
```

This rewrites `src/styles/tokens.css` (committed) with every palette and derived token. `bun run dev` and `bun run build` run this automatically. Never edit `tokens.css` by hand.

### How to update the Play Store URL or developer email

Edit `src/config.ts`. Every page reads from it, so one change updates the whole site. The email is obfuscated at render time.

### How to update the current promo

Edit `currentPromo` in `src/config.ts`:

```ts
currentPromo: {
  code: 'KUBERLAUNCH',
  description: 'Launch discount on Kuber Pro. Use this code at checkout.',
  expiresOn: null,          // or an ISO date string
},
```

Set `currentPromo: null` to hide the promo banner everywhere.

## Screenshot naming conventions

Drop images into `public/screenshots/features/<slug>/`. They appear on that feature's page automatically, ordered by filename, so prefix them:

```
01-home.png
02-import.png
03-review.png
```

**Theme variants:** to show a different image in light vs dark mode, add a `-obsidian` (dark) or `-alabaster` (light) suffix before the extension:

```
01-home-obsidian.png      # shown in dark mode
01-home-alabaster.png     # shown in light mode
```

Files sharing a base name are grouped, and the one matching the current site mode is shown. If only one variant exists, it is used for both modes.

## Theme system

- 7 accent families (Signature, FlewTube, Woofsapp, Purrhub, Honkpe, Squeakdin, Oinkzon) x light (Alabaster) and dark (Obsidian) = 14 palettes.
- Tokens are CSS custom properties (`--k-*`) written onto `:root` and `[data-theme][data-mode]` selectors.
- The default (bare `:root`) is Signature + dark, so the first paint is correct with no JS.
- An inline `<head>` script reads `localStorage` (`kuber-theme-variant`, `kuber-theme-mode`), falls back to `prefers-color-scheme` for mode, and sets the attributes before the body paints (no flash of the wrong theme).
- The choice persists across page loads and navigations.

## SEO

- `sitemap-index.xml` is generated at build time (`@astrojs/sitemap`).
- `public/robots.txt` allows all and points to the sitemap.
- Every page sets title, description, canonical, Open Graph, and Twitter card tags. Feature pages use their first screenshot as the OG image; otherwise the default app icon is used.

## Accessibility

- Semantic landmarks, one `<h1>` per page, skip-to-main link, visible focus rings.
- The theme dropdown and mobile drawer are keyboard operable (Esc closes them) with ARIA attributes.
- Colours are chosen so text meets WCAG AA across all 14 theme and mode combinations.

## Deploy notes (Cloudflare Pages)

The site deploys to **Cloudflare Pages**, served at the **root** (`/`) at [`https://kuber.pages.dev`](https://kuber.pages.dev/). Cloudflare is connected directly to the GitHub repo through the Cloudflare dashboard and automatically builds and deploys on every push to `main`.

`astro.config.mjs` sets `site: 'https://kuber.pages.dev'` and sets **no** `base`. `public/_headers` (caching + security headers) and `public/_redirects` ship as part of `dist/`.

- **Preview deployments:** Every non-production branch/PR push gets its own `*.pages.dev` preview URL automatically. `main` is the production branch.
- **Custom domain (later):** Add it in the Cloudflare Pages project (**Custom domains**), then update `SITE` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt` to the new origin.

### Build configuration summary

- **Framework preset:** `Astro`
- **Build command:** `bun run build`
- **Build output directory:** `dist`
- **Root directory:** *(empty)*
- **Bun version:** Auto-detected from `bun.lock`


## Testing

Type-check and build:

```bash
bun run check
```

```bash
bun run build
```

### Lighthouse audit

Build, preview, then run Lighthouse against the homepage:

```bash
bun run build && bun run preview
```

```bash
npx lighthouse http://localhost:4321/ --view --preset=desktop
```

Targets on the homepage: Performance, Accessibility, SEO, and Best Practices all 95+.

## License

MIT. See [LICENSE](./LICENSE).
