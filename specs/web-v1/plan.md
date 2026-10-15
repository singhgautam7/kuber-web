# Kuber Web v1: plan

Branch `web-v1`, cut from `origin/main` at `c618fe2`. Sources, in order: the app code (facts), the design bundle at `specs/design/kuber-m3-round-1-design-system/project/web-v1/` (look and wording), the current site (everything else).

Note on paths: the brief says `specs/design/web-v1/`. The bundle actually lives one level deeper, at `specs/design/kuber-m3-round-1-design-system/project/web-v1/`. All references below use the real path, shortened to `design/web-v1/`.

## 0. Decisions that override the brief

These are the places where the brief, the design and the app disagree. Each follows the brief's own rule (app code wins on facts, design wins on look and wording) unless noted.

| # | Brief says | Design says | App code says | Resolution |
|---|---|---|---|---|
| D1 | 7 themes: Signature, FlewTube, Woofsapp, Purrhub, Honkpe, Squeakdin, Oinkzon | `tokens.md` (updated 15 Oct 2026): Signature + 15 Mull families = 16. `palettes.json` and parts of `copy.md` still list the old 7. | `lib/core/theme/theme_families.dart`: `ThemeVariant` = signature + 16 Mull families, Azure retired, so 16 selectable. The old 7 names survive only as unused l10n strings (`themeFamilyDesc*`). | **16 themes**, generated from the app's OKLCh engine. This is a fact about the app, so the app wins. Kuber Pro page, Themes page, Home, theme menu and press boilerplate all say 16. Flagged for review. |
| D2 | Free / Pro / Free + Pro / Beta badges on every feature | `open-decisions.md` §18 (later round): Free/Pro badges removed site-wide, Beta and Signature only | Gating confirmed per feature (fact table) | **Badges shown**, as the brief asks, using the design's badge model and colours from `copy.md` (Badges table) and `gen_web.js` `BADGE`. |
| D3 | Feature pages use the screenshots in `web-v1/screenshots/` | Features index and Home Signature cards use the framed PNGs in `web-v1/mockups/` | | **Screenshots only.** `mockups/` is not imported. Index cards and Signature cards show the first screenshot, cropped by CSS. Saves 60 more images. |
| D4 | Dark screenshots only for SMS Import | Folder has `-dark` files for most features | | The non-SMS dark files predate the redraws (for example `kuber-notes/01-*-dark.png` shows a different note), so they are **not copied**. Only SMS Import ships dark. |
| D5 | Where to find it: not specified | Feature board (`Web v1 Feature Pages`) keeps the modal button; F2 and `page-inventory.md` move it inline | | **Inline list** (F2). Removes the 295-line modal and its focus-trap JS. |
| D6 | Why Kuber animated per `motion.md` | `motion.md` §2 element timings, plus an addendum asking for scroll-scrubbed sticky stages | | Each stage plays once when 35% visible (IntersectionObserver), element-level CSS keyframes (clip reveal, rise, stroke draw, bar grow, bell). No JS counters, FLIP or scroll scrubbing. Reduced motion shows the rest frame. |
| D7 | Compact list for coming-soon docs, wordmark SVG/PNG downloads, copied state, About rename "per design" | None of these exist in the design files | | Built in the design's visual language; names and copy chosen here and logged in the implementation notes. |

## 1. Tokens and themes

### Generator

`scripts/gen-tokens.mjs` (run by `dev` and `build`, as today) imports `src/lib/themes.ts` and writes `src/styles/tokens.css`. `themes.ts` is the single theme source:

- `SIGNATURE.light` / `SIGNATURE.dark`: the M3 fidelity values from `design/tokens/palettes.json` (`signature_light`, `signature_dark`), which the app also reads (`theme_families.dart` comments point at the same file).
- `MULL`: the 15 selectable Mull families with the exact parameters from `theme_families.dart` (neutral hue and chroma, primary hue, lightness, chroma, container chroma, light surface sink, dark neutral chroma).
- `mullPalette(family, dark)`: a line-by-line port of `MullFamily.palette()` and `_money()`, with the OKLCh to sRGB conversion from `oklch.dart` (same as the design's `load_web.js`). Dark uses the non-AMOLED surfaces; Signature dark stays true black, as in the app.

### Output (`tokens.css`)

```css
:root { /* static: type, shape, motion, spacing, constants, swatches */ }
:root, [data-theme="signature"][data-mode="light"] { --k-primary: #0058BE; … }
[data-theme="signature"][data-mode="dark"] { … }
[data-theme="mull"][data-mode="light"] { … }      /* 16 families × 2 modes = 32 blocks */
[data-mode="light"] { --k-cat-red-bg: …; … }      /* category tiles, per mode */
[data-mode="dark"]  { … }
```

- One property per M3 role, `--k-` + kebab case (`tokens.md` §1): primary family, secondary/tertiary families, surface and the five containers, on-surface(-variant), outline(-variant), inverse, error family, money (income, expense, warning: colour, container, on-container), `--k-viz-1…5`.
- App icon colours `--k-icon-bg/ink/leg` per mode (fixed brand colours from `icon/icon.md`).
- `--k-swatch-<family>`: each family's seed, so the theme menu needs no hex.
- Category tile pairs (`--k-cat-<hue>-bg/-fg`, 8 hues) taken from the design's light and dark frames. The app harmonises these per family; the site keeps them per mode only.
- Constants from `tokens.md` (device bezel, Play badge black and border, scrim) are tokens too, so no component holds a hex value.
- Derived values (state layers, hover) use `color-mix()` on tokens.

### No-flash script

Inline `<script is:inline>` first thing in `<head>`:

1. Read `localStorage['kuber-theme']` (`{fam, mode}`, `mode` is `light | dark | system`) inside `try/catch`.
2. Unknown family → `signature`. Missing or `system` mode → `matchMedia('(prefers-color-scheme: dark)')`.
3. Set `data-theme`, `data-mode` and `style.colorScheme` on `<html>` before any CSS paints.

`site.ts` writes the same key, follows the system preference live while mode is `system`, and uses `document.startViewTransition()` for the theme cross-fade where available (skipped under reduced motion). Without JS, `:root` is Signature light, with a `prefers-color-scheme: dark` fallback block.

### Removed

`src/lib/theme.ts` (Vault palettes and `--k-bg`, `--k-card`, `--k-accent*`, `--k-text*`, `--k-border*`, `--k-brand-*`), every component style that uses them, the old `kuber-theme-variant` and `kuber-theme-mode` keys.

## 2. Type, icons, fonts

- Inter only (`tokens.md` §4). Two self-hosted variable WOFF2 files copied from `@fontsource-variable/inter` into `public/fonts/` (latin and latin-ext, which carries ₹), `font-display: swap`, latin preloaded. Remove `@fontsource-variable/inter`, `@fontsource/playfair-display`, `@fontsource/jetbrains-mono` from `package.json`. Code and paths use the system monospace stack.
- Type roles as CSS custom properties with `clamp()` between the tablet and desktop sizes (`--k-type-hero`, `-display`, `-headline`, `-title-l`, `-lead`, `-stat`).
- Icons: Material Symbols Rounded, as in the app, as an SVG sprite. `scripts/fetch-symbols.mjs` is a one-off maintenance script (not part of the build) that downloads only the listed glyphs from the `@material-symbols/svg-400` package on unpkg into `src/lib/symbols.json`, which is committed. `src/pages/icons.svg.ts` emits `/icons.svg` at build time; `<Icon name>` renders `<svg><use href="/icons.svg#name"></svg>`. One cached, same-origin request; unknown names fail the build. No icon font, no runtime CDN.

## 3. Routes

Every route the current build emits stays, with the same URL. `public/_redirects` is unchanged.

| Route | Page type | Source |
|---|---|---|
| `/` | Home | `src/pages/index.astro` |
| `/features/` | Features index | `src/pages/features/index.astro` |
| `/features/<slug>/` × 29 | Feature detail | `src/pages/features/[slug].astro` + `content/features/*.md` |
| `/docs/` | Docs hub | `src/pages/docs/index.astro` + `src/lib/docs.ts` |
| `/docs/privacy-policy/`, `/docs/data-deletion/`, `/docs/faq/` | Doc page | `src/pages/docs/[slug].astro` + `DocLayout.astro` + `content/docs/*.md` |
| `/changelog/` | Changelog | `src/pages/changelog.astro` |
| `/about/` | About | `src/pages/about.astro` |
| `/press/` | Press kit | `src/pages/press.astro` |
| `/404.html` | 404 | `src/pages/404.astro` |
| `/icons.svg` (new) | Icon sprite | `src/pages/icons.svg.ts` |

### Shared components

| Component | Role |
|---|---|
| `BaseLayout.astro` | head (no-flash script, font preload, SEO), skip link, nav, `<main>`, the one footer, FAB, site script |
| `NavBar.astro` | floating pill (default, scrolled, tablet icon-only FAB, mobile), theme button and menu, mobile menu sheet, Get the app FAB |
| `ThemeMenu.astro` | Mode (Light, Dark, System) and the 16 accent tiles; also used by the Home Themes section |
| `Footer.astro` | the design footer on every page (the compact variant is removed) |
| `Icon.astro`, `BrandMark.astro`, `PlayBadge.astro`, `Badges.astro`, `FeatureCard.astro`, `Screenshot.astro`, `CopyButton.astro` | primitives |
| `mockups/Phone.astro`, `mockups/HomeScreen.astro`, `mockups/HistoryScreen.astro` | live mockups, HTML on tokens, so they recolor |
| `home/WhyKuber.astro` + `home/Stage1..5.astro` | Why Kuber stages (Home v3.3 rest frames) and their keyframes |
| `Reviews.astro` | renders only when `src/data/reviews.ts` has entries; ships empty |

### Content schema

`content.config.ts`: `pro: boolean` becomes `plan: 'free' | 'pro' | 'both'` plus `limit?: string` (`page-inventory.md`). `beta` and `signature` stay. Docs hub data moves to `src/lib/docs.ts`; a hub entry is Published when its slug exists in the docs collection (or it is the external support link), so the counters are computed.

## 4. Screenshots

- Copy `design/web-v1/screenshots/<slug>/*-light.png` into `src/assets/screenshots/features/<slug>/`, plus `sms-import/*-dark.png`. Press files go to `src/assets/screenshots/press/`.
- `src/lib/screenshots.ts` groups files by base name and a `-light` / `-dark` suffix. A shot with both variants renders two `<picture>` elements; CSS on `[data-mode]` shows one. Same intrinsic size, so no layout shift; the attribute is set before paint, so no flash. A shot with only `-light` renders once in both modes. Adding `NN-name-dark.png` later is the whole job.
- Astro `<Picture>`: AVIF and WebP, explicit width and height, `densities` 1x and 2x, `loading="lazy"` except the first shot on a page.
- Open Graph and Twitter image for each feature page: its first screenshot, light, re-encoded by `getImage()` as a 720 px wide JPEG.
- Press kit: the 4 press screens (Home, Spaces, Add transaction, Settings) light and dark, each a direct PNG download.

## 5. Facts (verified in the app, read-only)

App path: `kuber/lib/`.

| Claim | Site today | App code | Verified in | Fix |
|---|---|---|---|---|
| Languages | Home and press: 5. Multi-lingual: "9 regional Indian languages and English" | 9: English, Hindi, Marathi, Punjabi, Bengali, Telugu, Tamil, Malayalam, Kannada | `core/utils/supported_locales.dart`, `l10n/app_*.arb` (9 files) | "9 languages: English and 8 Indian languages" everywhere |
| Calculators | Home: 13. Calculators page: "over 25" | 18 (Finance 8, Tax & Salary 3, Planning 2, Quick 5) | `features/tools/tool_catalog.dart` | 18 everywhere; groups named as in the app |
| Banks for SMS import | 20+ | 15 banks plus Paytm, PhonePe and Google Pay | `features/sms_import/engine/sender_ids.dart` | "15 banks and UPI apps" |
| Home widgets | 12+ | 12 | `features/widget_editor/data/widget_catalog.dart` | 12 |
| Themes | 7 | 16 selectable (Signature + 15) | `core/theme/theme_families.dart` | 16 (D1) |
| Themes gating | Pro | Signature free; other families and wallpaper colour Pro | `features/settings/screens/theme_screen.dart` | Free + Pro |
| SMS Import gating | Pro | Free: 5 imports per rolling 7 days; scanning and paste free | `features/sms_import/data/sms_import_usage.dart` | Free + Pro, "5 imports a week" |
| Ask Kuber gating | Free, Beta | Free: 5 questions per week | `features/ask_kuber/data/ask_kuber_usage.dart` | Free + Pro, Beta kept |
| Kuber Notes gating | Pro | Free: 2 notes | `features/notes/screens/notes_landing_screen.dart` | Free + Pro |
| Kuber Cards gating | Pro | Free: 2 cards (`kFreeCardLimit`) | `features/kuber_cards/screens/cards_home_screen.dart` | Free + Pro |
| Detailed Analytics | Free | Analytics tab free; Advanced Analytics screens and analytics filters gated | `features/more/more_content.dart`, `features/advanced_analytics/screens/*`, `features/analytics/screens/analytics_filter_screen.dart` | Free + Pro |
| Reminders | Pro | Creating a reminder is gated | `features/reminders/screens/reminders_landing_screen.dart` | Pro |
| Automatic Backups | Pro | Turning automatic backups on is gated; manual export free | `features/backups/screens/automatic_backups_screen.dart`, `features/pro/paywall/pro_page_extras.dart` | Pro, "Manual backups are free" |
| Currency Support | Free | `gate_sheet_multi_currency.dart` exists but is never called | `features/pro/feature_gates/` | Free |
| Google Drive backups | Kuber Pro page: "Automated Google Drive Backups" | No Drive code or dependency. Backups are written through the Android folder picker (SAF) to a folder you choose | `features/backups/services/saf_backup_store.dart`, `pubspec.yaml` | "Automatic backups to a folder on your phone". Flagged |
| What Kuber Cards stores | Pro page: "loyalty or membership cards" | Payment cards: debit, credit, prepaid, forex, gift, travel, fuel, meal, corporate. Number, holder, expiry encrypted (AES-GCM-256, key derived from your PIN with Argon2id); biometric unlock optional via Android Keystore | `features/kuber_cards/data/stored_card.dart`, `card_crypto.dart`, `card_keystore.dart` | "store as many payment cards as you need" |
| Investments valuation | "real-time P&L insights" | Current value is entered by hand (`updateCurrentValue`); gain and loss computed from it | `features/investments/providers/investment_provider.dart` | "gain and loss based on the values you enter" |
| Currency converter | "instant conversions", "works entirely on-device" | Fetches rates from `api.frankfurter.app` when online, caches them on the phone, uses the cache offline (stale after 24 h), fails with no cache | `features/tools/currency_converter/providers/exchange_rates_provider.dart` | Say rates download when online and are kept for offline use. Flagged |
| Clear all data in app | Data Deletion: "Settings, the data or reset option" | More → Data → Danger zone → Clear All Data, confirm, type "reset all". Clears the database and the Kuber Cards key. App preferences, attachment files and backup files are not removed by it | `features/settings/screens/data_management_screen.dart`, `features/settings/providers/data_provider.dart`, `core/services/data_service.dart` | Rewrite Data Deletion. Flagged |
| Pro trial | not stated | 14-day free trial on the yearly plan; monthly, yearly, lifetime | `features/pro/paywall/pro_page_extras.dart`, `paywall_manage_state.dart` | Changelog copy per `copy.md` |
| Developer Mode unlock | "tap version 7 times" | 7 taps | `features/dev/widgets/version_tap_detector.dart` | keep |
| Beta labels | Ask Kuber, Voice Quick Add, Multi-lingual | App shows no Beta label (`betaBadge` string unused) | `l10n/app_en.arb` | Not settled by the code; kept. Flagged |

## 6. What gets removed

- Styles and theme code: `src/lib/theme.ts`, the old `tokens.css` contents, `typography.css` serif and mono, `.serif-italic`, the global `body *` colour transition.
- Components: `HeroPhone`, `ShowcasePhone`, `PhoneFrame`, `WhereToFindModal`, `FeatureIcon` and `src/lib/icons.ts`, `Badge`, `DocCard`, `ThemeSwitcher`, `Callout` (unused; markdown callouts stay), `MarkdownContent`, `PageLayout` (unused wrapper).
- Fonts: Playfair Display, JetBrains Mono, the Fontsource packages.
- Images: all `src/assets/screenshots/features/**/*-obsidian.jpg`, `*-alabaster.jpg`, `expense-tracking/02-add-transaction.jpg`; `public/assets/screens/*.jpg`; `public/assets/banks/*.svg` (bank names ship as text, open-decisions §1); the empty `public/screenshots/**` placeholder folders.

## 7. Budget and checks

- JavaScript: one module (`site.ts`, theme, nav, menus, filters, copy, email reveal, reveal-on-scroll) plus the inline head script. Target under 8 KB gzipped, against the 30 KB limit.
- No new runtime dependencies. Dev only: none added to `package.json`; the QA tools (puppeteer-core, Lighthouse) run from a scratch folder.
- Tests listed in the brief run against `astro preview`; results go to `implementation-notes.md` and `performance-review.md`.
