# Kuber Web

[![Live Site](https://img.shields.io/badge/Live_Site-kuber.pages.dev-2563eb?style=for-the-badge&logo=cloudflare&logoColor=F38020)](https://kuber.pages.dev/)

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Bun](https://img.shields.io/badge/Bun-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)

The marketing and documentation website for [Kuber](https://play.google.com/store/apps/details?id=com.grs.kuber), a fully offline personal finance app for India. Built with Astro, hand-written CSS driven by a token system, and content collections. No account, no cloud, no trackers, and no CSS framework. The whole site recolors across the app's 16 themes in light or dark, generated from the app's own theme engine.

## Tech stack

- **Astro** (static output) with Content Collections
- **Bun** as package manager and runtime
- **TypeScript** strict mode
- Hand-written CSS via CSS custom properties (no Tailwind, no framework)
- Vanilla JS islands only (theme switcher, mobile nav, feature filter, copy buttons, email reveal). No React/Vue/Preact.
- Inter only, self-hosted as one subset variable WOFF2 (`public/fonts/`). Icons are Material Symbols Rounded served as one same-origin SVG sprite (`/icons.svg`). No font or icon CDN, no third-party requests.
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

`bun run build` regenerates `src/styles/tokens.css` from `src/lib/themes.ts` before building (see Theme system).

## Project layout

```
content/            Markdown content (edit these to change the site)
  features/         One .md per feature -> /features/<slug>/
  docs/             Privacy policy, data deletion, FAQ -> /docs/<slug>/
  pages/            About letter, developer, press-kit copy
  changelog/        One .md per release
public/
  assets/           App icon (also the default OG image)
  fonts/            Inter variable subset + licence
  press/            Wordmark downloads (SVG and PNG, light and dark)
src/
  assets/screenshots/
    features/<slug>/ Feature screenshots (see naming below)
    press/           Press kit screenshots
  config.ts         Single source of site config (see below)
  content.config.ts Collection schemas (Zod, type-checked at build)
  data/reviews.ts   Home reviews (section hidden while empty)
  lib/themes.ts     Theme families, ported from the app (source of truth)
  lib/docs.ts       Docs hub groups; status and counters are computed
  lib/symbols.json  Material Symbols glyphs used by the site
  styles/           reset, tokens (generated), global
  components/ layouts/ pages/
scripts/            gen-tokens.mjs (tokens.css), fetch-symbols.mjs (icons)
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
   limit: "Free: 2 notes. Pro: unlimited."   # optional, shown on Home Signature cards
   beta: false               # true adds the Beta badge (no Free/Pro badges: plan detail lives on the Kuber Pro page)
   signature: false          # true flags it as a signature feature
   related: [sms-import, budgets]   # optional, other feature slugs
   iconName: "bolt"          # a Material Symbols name
   ---

   A short body. Two or three sentences is plenty.
   ```

3. (Optional) Add screenshots to `src/assets/screenshots/features/<slug>/` (see naming below).

The feature now appears on `/features`, gets its own page at `/features/<slug>/`, and is counted in the filter chips. Zero code changes.

If you use a new `iconName`, add the glyph with `bun scripts/fetch-symbols.mjs <name>`. The build fails on an unknown icon name.

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

All colours come from `src/lib/themes.ts`: Kuber Signature (M3 values) plus a line-by-line port of the app's `MullFamily.palette()` OKLCh engine (`kuber/lib/core/theme/theme_families.dart`). When the app's families change, mirror the parameters there, then regenerate the CSS:

```bash
bun run gen:tokens
```

This rewrites `src/styles/tokens.css` (committed) with every palette, plus the static type, shape and motion tokens. It also prints any web-only contrast adjustments (`accessible()` lowers a role's lightness until it meets WCAG AA). `bun run dev` and `bun run build` run this automatically. Never edit `tokens.css` by hand.

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

Set `currentPromo: null` to hide the promo block on feature pages.

## Screenshot naming conventions

Drop PNGs into `src/assets/screenshots/features/<slug>/`. They appear on that feature's page automatically (AVIF and WebP via Astro's image pipeline), ordered by filename. Every shot needs a `-light` file; a `-dark` file is optional:

```
01-sms-inbox-light.png    # shown in light mode, and in dark mode if there is no dark file
01-sms-inbox-dark.png     # optional: shown in dark mode
```

Add alt text for new shots to the `ALT` map in `src/lib/screenshots.ts`. The first shot is also the page's Open Graph image.

## Theme system

- 16 families (Kuber Signature + 15 Mull families, as in the app) x light and dark = 32 palettes, one CSS custom property per M3 role (`--k-primary`, `--k-surface-container-low`, ...).
- The default is Kuber Signature in light mode (also without JS). Visitors can pick Light, Dark or System.
- An inline `<head>` script reads `localStorage['kuber-theme']` (`{fam, mode}`, mode `light | dark | system`) inside `try/catch`, defaults to Signature light, and sets `data-theme` and `data-mode` before the body paints (no flash of the wrong theme).
- The live mockups on Home (hero and Themes) are HTML on the same tokens, so they recolor too.
- The choice persists across page loads and navigations.

## SEO

- `sitemap-index.xml` is generated at build time (`@astrojs/sitemap`).
- `public/robots.txt` allows all and points to the sitemap.
- Every page sets title, description, canonical, Open Graph, and Twitter card tags. Feature pages use their first screenshot as the OG image; otherwise the default app icon is used.

## Accessibility

- Semantic landmarks, one `<h1>` per page, skip-to-main link, visible focus rings.
- The theme menu (native popover) and mobile menu (native dialog, focus trapped) are keyboard operable and close with Esc.
- Text meets WCAG AA across all 32 theme and mode combinations (checked by the generator).
- Every animation has a static version under `prefers-reduced-motion`.

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
