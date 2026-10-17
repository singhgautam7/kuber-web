# Kuber Web v1: performance review

Measured on local `astro preview` builds: "before" is `origin/main` (`c618fe2`), "after" is branch `web-v1`. Lighthouse 12 (mobile preset, simulated throttling), headless Chrome.

## Lighthouse (mobile)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS | Transfer |
|---|---|---|---|---|---|---|---|---|
| Home, before | 97 | 96 | 100 | 100 | 2.1 s | 0 ms | 0 | 189 KiB |
| Home, after | **100** | **100** | 100 | 100 | 1.7 s | 0 ms | 0.003 | 116 KiB |
| Feature (SMS Import), before | 99 | 96 | 100 | 100 | 2.0 s | 0 ms | 0 | 178 KiB |
| Feature (SMS Import), after | 99 | **100** | 100 | 100 | 2.0 s | 0 ms | 0 | 175 KiB |
| Doc (Privacy Policy), before | 100 | 100 | 100 | 100 | 1.4 s | 0 ms | 0 | 74 KiB |
| Doc (Privacy Policy), after | 100 | 100 | 100 | 100 | 1.5 s | 0 ms | 0 | 104 KiB |

The doc page grew by 30 KiB because every page now loads the Inter subset (64 KiB, cached across pages) and the icon sprite (21 KiB gzipped, cached). Before, the doc page happened to need fewer font files.

## JavaScript and CSS per page

JS is the one site module plus the inline head script. CSS includes the generated tokens (32 palettes).

| Page | HTML gz | JS raw / gz, before | JS raw / gz, after | CSS raw / gz, before | CSS raw / gz, after |
|---|---|---|---|---|---|
| Home | 10.8 → 17.0 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 73.6 / 23.1 KB | 74.3 / 13.3 KB |
| Features index | 8.6 → 11.9 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 51.6 / 19.8 KB | 65.2 / 11.8 KB |
| Feature (SMS Import) | 6.0 → 7.9 KB | 4.5 / 1.5 KB | 4.6 / 1.8 KB | 57.8 / 20.8 KB | 66.0 / 11.9 KB |
| Docs hub | 5.9 → 6.7 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 53.4 / 20.1 KB | 64.3 / 11.6 KB |
| Doc (Privacy Policy) | 6.2 → 8.1 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 49.7 / 19.5 KB | 65.2 / 11.8 KB |
| About | 5.4 → 7.0 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 53.6 / 20.1 KB | 64.6 / 11.6 KB |
| Press | 5.1 → 7.7 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 53.0 / 19.9 KB | 64.9 / 11.7 KB |
| 404 | 4.5 → 5.2 KB | 4.0 / 1.4 KB | 4.6 / 1.8 KB | 50.4 / 19.6 KB | 62.1 / 11.3 KB |

- JavaScript: 1.8 KB gzipped on every page, against the 30 KB budget. The theme menu and mobile menu use the native `popover` attribute and `<dialog>`, so there is no menu, focus-trap or animation code.
- CSS: gzipped CSS dropped by about 40% even though it now holds 32 palettes, because the Fontsource `@font-face` blocks (Inter, Playfair Display, JetBrains Mono, many subsets) are gone.
- Home HTML grew by 6 KB gzipped: the two live mockups and five Why Kuber stages are inline HTML on tokens (they recolor with the theme, which images could not).

## Total page weight, Home (first visit, mobile)

| Resource | Before | After |
|---|---|---|
| HTML | 11 KB | 17.7 KB |
| CSS | 23 KB | 14.7 KB (2 files) |
| JS | inline | inline |
| Fonts | Inter + Playfair + JetBrains Mono files | 64.5 KB (one Inter variable subset, latin + ₹) |
| Icons | inline SVG | 21 KB (`/icons.svg` sprite, 118 glyphs, cached) |
| Images above the fold | hero JPG screenshots | none (the hero phone is HTML); feature screenshots lazy-load as AVIF |
| **Total transferred (Lighthouse)** | **189 KiB** | **116 KiB** |

Feature pages: screenshots are AVIF (WebP fallback) at 1x and 2x of a 238 px display width, with explicit width and height; only the first is eager. Social images are 720 px JPEGs.

## Removed files

Theme, style and component code:
- `src/lib/theme.ts` (Vault palettes), `src/styles/typography.css` (Playfair, JetBrains Mono, fluid Vault type)
- `src/lib/icons.ts` (hand-traced icon paths)
- `src/components/`: `Badge.astro`, `Callout.astro`, `DocCard.astro`, `FeatureIcon.astro`, `HeroPhone.astro`, `MarkdownContent.astro`, `PhoneFrame.astro`, `PlayStoreBadge.astro`, `PromoBanner.astro`, `ShowcasePhone.astro`, `ThemeSwitcher.astro`, `WhereToFindModal.astro`
- `src/layouts/PageLayout.astro`

Dependencies: `@fontsource-variable/inter`, `@fontsource/playfair-display`, `@fontsource/jetbrains-mono`.

Images:
- All old feature screenshots in `src/assets/screenshots/features/*/` (`*-obsidian.jpg`, `01-home-alabaster.jpg`, `02-add-transaction.jpg`; 46 JPGs plus 25 `.gitkeep` placeholders), replaced by the redrawn PNGs
- `public/assets/screens/{home,more,add,settings}.jpg` (old press screens)
- `public/assets/banks/*.svg` (8 bank logos; names now ship as text)
- `public/screenshots/**` (empty placeholder folders)

Replaced in place (same URL): `public/assets/app-icon.png` (new M3 icon) and `public/favicon.svg` (new mark, follows the system light or dark preference).

Added: `public/fonts/inter-var.woff2` and its licence, `public/press/kuber-wordmark-{light,dark}.{svg,png}`, `src/lib/symbols.json`, 68 screenshot PNGs (masters; the build serves AVIF/WebP).
