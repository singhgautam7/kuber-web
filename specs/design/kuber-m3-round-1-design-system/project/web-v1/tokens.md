# Web v1 · Tokens

The site uses the app's M3 tokens (`../tokens.md`, `../tokens/palettes.json`) as CSS custom properties. `src/lib/theme.ts` (Vault palettes, `--k-bg`, `--k-card`, `--k-accent` and friends) is replaced. `scripts/gen-tokens.mjs` reads `palettes.json` instead and emits `tokens.css`.

## 1. Colour roles → custom properties

One property per M3 role, kebab-cased, prefixed `--k-`. No colour is ever typed in a component.

| App role (`ColorScheme` / `KuberMoneyColors`) | CSS property | Typical web use |
|---|---|---|
| primary / onPrimary | `--k-primary` / `--k-on-primary` | Eyebrows, links, filled buttons, focus ring, stats |
| primaryContainer / onPrimaryContainer | `--k-primary-container` / `--k-on-primary-container` | Get the app FAB, brand mark, Pro badge, final CTA panel |
| inversePrimary | `--k-inverse-primary` | Not used yet |
| secondary | `--k-secondary` | Not used yet |
| secondaryContainer / onSecondaryContainer | `--k-secondary-container` / `--k-on-secondary-container` | Active nav item, selected chips and theme tiles, Free badge, icon tiles, sidebar current page |
| tertiary / tertiaryContainer / onTertiaryContainer | `--k-tertiary`, `--k-tertiary-container`, `--k-on-tertiary-container` | Why Kuber notebook margin line |
| surface | `--k-surface` | Page background, nav pill at rest |
| surfaceContainerLowest … Highest | `--k-surface-container-lowest`, `-low`, (none), `-high`, `-highest` | Low: cards, hero and theme panels. Container: scrolled nav, menus, image wells. High: step chips, icon buttons. |
| onSurface / onSurfaceVariant | `--k-on-surface` / `--k-on-surface-variant` | Text / secondary text, inactive nav |
| outline / outlineVariant | `--k-outline` / `--k-outline-variant` | Outlined buttons, dashed cards / every 1px border and divider |
| inverseSurface / inverseOnSurface | `--k-inverse-surface` / `--k-inverse-on-surface` | Tooltips |
| error family | `--k-error`, `--k-on-error`, `--k-error-container`, `--k-on-error-container` | Form errors only |
| money.income / container / onContainer | `--k-income`, `--k-income-container`, `--k-on-income-container` | Hero status dot, Published doc chip, success callout |
| money.expense / … | `--k-expense`, `--k-expense-container`, `--k-on-expense-container` | 404 status dot |
| money.warning / … | `--k-warning`, `--k-warning-container`, `--k-on-warning-container` | Beta badge, warning callout |
| viz ramp (5) | `--k-viz-1` … `--k-viz-5` | Live mockup charts |

Constants (not themed): device frame `#1B1B1F`, Google Play badge black `#000000` with `#A6A6A6` border, scrim `rgba(0,0,0,.32)`.

Derived values use `color-mix()` on the tokens, never new hex:
- State layers: hover `color-mix(in srgb, <content colour> 8%, transparent)`, pressed 12%, dragged 16%, drawn as `box-shadow: inset 0 0 0 999px …` or a `::before` overlay.
- Focus ring: `outline: 3px solid var(--k-primary); outline-offset: 2px` (3 on cards), `:focus-visible` only.

## 2. How the 16 themes swap

```html
<html data-theme="signature" data-mode="light">
```

`tokens.css` holds 14 blocks generated from `palettes.json`:

```css
:root, [data-theme="signature"][data-mode="light"] { --k-primary:#0058BE; --k-surface:#F9F9FF; … }
[data-theme="signature"][data-mode="dark"]  { --k-primary:#ADC6FF; --k-surface:#000000; … }
[data-theme="fern"][data-mode="light"]  { … }   /* 16 families × 2 modes */
```

- The existing inline FOUC script in `BaseLayout.astro` stays: it reads `localStorage['kuber-theme']` (`{fam, mode}`), falls back to `prefers-color-scheme`, and sets both attributes before first paint.
- The theme menu (C1) and the Themes section (H1) write the same key. `System` stores `mode: "system"` and follows `prefers-color-scheme` live.
- Swatches in the menu use each family's seed (`palettes.json → seed`), the one fixed colour per family.
- Image mockups exist in Signature only. Switching mode swaps `-light.png` / `-dark.png` through `<picture>` with `media="(prefers-color-scheme…)"` plus a `[data-mode]` attribute swap in JS; switching accent does not change images (open-decisions 3).
- Live mockups (hero Home, Themes History) are HTML on these tokens, so they follow both accent and mode. Category tile colours in them come from `--k-cat-<n>-bg/-fg`, generated per mode with the app's category harmoniser (HCT tone 90/30 container, 40/80 glyph).

## 3. Breakpoints, width and grid

| Name | Design width | Applies | Margin | Columns | Gutter | Max content |
|---|---|---|---|---|---|---|
| Mobile | 390 | < 600 | 20 (hero / themes / CTA panels 12) | 4 | 16 | fluid |
| Tablet | 834 | 600 to 1023 | 40 | 8 | 24 | fluid |
| Desktop | 1440 | ≥ 1024 | auto, min 40 | 12 | 24 | 1200 |

Long-form reading width: 720 (docs article), 680 (feature article), 760 (About, section headers).

## 4. Type (Inter only, self-hosted)

Self-host Inter as WOFF2 (variable `InterVariable.woff2`, Latin + Latin Extended + ₹ subset, about 110 KB; `font-display: swap`; `<link rel="preload">` for the upright file only). Remove Instrument Serif. Tabular figures (`font-variant-numeric: tabular-nums`) on every amount and stat.

| Web role | Desktop | Tablet | Mobile | From app role |
|---|---|---|---|---|
| hero | 800 88/92 −2.6 | 800 68/72 −2 | 800 48/52 −1.4 | new display size |
| display (page h1) | 800 64/72 −1.8 | 800 52/60 −1.4 | 800 40/46 −1 | displaySmall, scaled |
| headline (section h2) | 700 48/56 −1.2 | 700 40/48 −1 | 700 32/40 −0.6 | headlineLarge, scaled |
| title-l (h3) | 700 28/36 −0.4 | 700 26/32 −0.3 | 700 22/28 −0.2 | headlineMedium / titleLarge |
| title-m | 600 20/28 −0.1 | same | same | titleLarge, web |
| title-s | 600 16/24 0.1 | same | same | titleMedium |
| lead | 400 20/32 | 400 19/30 | 400 17/28 | bodyLarge, web |
| body | 400 16/26 (prose 17/28) | same | same | bodyLarge |
| body-s | 400 14/20 | same | same | bodyMedium |
| label | 600 14/20 0.1 | same | same | labelLarge |
| eyebrow | 600 12/16 0.8 caps | same | same | labelMedium caps |
| caption | 500 12/16 0.2 | same | same | bodySmall / labelSmall |
| stat | 700 48/56 | 700 40/48 | 700 36/44 | headlineLarge |

Use `clamp()` between the tablet and desktop values in code, for example `--k-type-hero: clamp(48px, 4.2vw + 28px, 88px)`.

## 5. Shape, elevation, spacing

- Shape: 8 chips and step pills · 12 icon tiles, menu rows · 16 theme tiles, callouts · 20 small cards, menus, route lists · 24 feature and stats cards · 32 signature cards, press cards · 40 to 48 large panels (hero, themes, CTA, stage panels) · full for buttons, FAB, nav pill, badges.
- Elevation: tonal only, as in the app. Page `surface`; cards and panels `surface-container-low` + 1px `outline-variant`; nav when scrolled, menus `surface-container`. No shadows anywhere.
- Spacing: 4/8 scale. Section padding 112 desktop / 64 mobile. Card padding 24 (32 on signature cards, 56 on large panels).

## 6. Icons

Material Symbols Rounded, the same set as the app. The site ships a build-time SVG sprite of only the glyphs it uses (about 50), inlined, so no icon font or CDN request.

## 7. Motion tokens

Same as the app (`../tokens.md` §8): instant 90, fast 150, navIndicator 220, containerTransform 240, sheet 260, reflow 230. Easing: system-caused `cubic-bezier(0.2, 0, 0, 1)` (M3 emphasized decelerate, our easeOutCubic stand-in); user-caused `cubic-bezier(0.34, 1.56, 0.64, 1)` (easeOutBack) only for the theme tile press. See motion.md.


## Theme families (updated 15 Oct 2026)
Source: `lib/core/theme/theme_families.dart`. Kuber Signature (M3 fidelity, seed #3B82F6) plus 15 Mull OKLCh families in display order: Mull, Vellum, Foxglove, Slate, Clay, Perch, Ember, Fern, Tide, Meadow, Blush, Iris, Coral, Citron, Neon. Azure is retired (resolves to Perch). The site generator ports `MullFamily.palette()` to JS (web-v1/src/load_web.js), so values match the app exactly. Dark uses the non-true-black surfaces; Signature dark stays true black.

App icon (nav and footer mark) uses fixed brand colours from icon/icon.md, not theme roles: light #D8E2FF / #003D88 / leg #2573E6, dark #001A42 / #ADC6FF / leg #4D8EFF. Vars: --k-icon-bg, --k-icon-ink, --k-icon-leg.
